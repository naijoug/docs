# `Notification` - “通知”

  `Notification` 是观察者模式的一种实现，程序中一种一对多的通信方式。`androind` 类似的机制叫做 `Broadcast` 广播。

## `NotificationCenter` - “通知中心”

> 首先思考一个问题: 如果让你来设计一个精简版通知中心你会怎么设计？

  * `NotificationCenter` : 设计成为一个单例。
  * `addObserver` : 注册通知，常规的参数主要有两个通知的唯一标识名和通知执行的`Selector`。那么可以很自然地想到使用哈希表来存储注册通知。由于同一个通知可以有多个观察者，就是说可以注册多次。所以哈希表的键可以使用通知名，执行回调应该放在一个数值中。
  * `post` : 发送通知时，通过发送的通知名，可以取出回调闭包的数组，然后遍历执行每个通知的 `Selector`。

> 通知中心的定义

```swift
// 通知中心定义
open class NotificationCenter : NSObject {
    // 通知中心单例
    open class var `default`: NotificationCenter { get }
    // 注册通知
    open func addObserver(_ observer: Any, selector aSelector: Selector, name aName: NSNotification.Name?, object anObject: Any?)
    @available(iOS 4.0, *)
    open func addObserver(forName name: NSNotification.Name?, object obj: Any?, queue: OperationQueue?, using block: @escaping (Notification) -> Void) -> NSObjectProtocol
    // 发送通知
    open func post(_ notification: Notification)
    open func post(name aName: NSNotification.Name, object anObject: Any?)
    open func post(name aName: NSNotification.Name, object anObject: Any?, userInfo aUserInfo: [AnyHashable : Any]? = nil)
    // 移除注册通知
    open func removeObserver(_ observer: Any)
    open func removeObserver(_ observer: Any, name aName: NSNotification.Name?, object anObject: Any?)
}

// 通知体定义
public struct Notification : ReferenceConvertible, Equatable, Hashable {
    /// A tag identifying the notification.
    public var name: Notification.Name // 通知的唯一标识
    /// An object that the poster wishes to send to observers.
    ///
    /// Typically this is the object that posted the notification.
    public var object: Any? // 通知携带对象，发送者希望发送给观察者，一般来说这个对象就是发送者
    /// Storage for values or objects related to this notification.
    public var userInfo: [AnyHashable : Any]? // 存储与通知相关的值或者对象
}
```

> [Swift - Notification](https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/Notification.swift)

> [GNUstep 中的实现](https://github.com/gnustep/libs-base/blob/master/Source/NSNotificationCenter.m)

```objc
// line:139 通知体结构
typedef	 struct Obs {
  id            observer;   /* Object to receive message. */
  SEL           selector;   /* Method selector. */
  struct Obs    *next;      /* Next item in linked list. */
  int           retained;   /* Retain count for structure. */
  struct NCTbl  *link;      /* Pointer back to chunk table */
} Observation;
// line:232 通知中心表结构
typedef struct NCTbl {
  Observation       *wildcard;  /* Get ALL messages. */             // 所有通配符通知
  GSIMapTable       nameless;   /* Get messages for any name. */    // 存放无名的通知
  GSIMapTable       named;      /* Getting named messages only. */  // 存放有名的通知
  unsigned          lockCount;  /* Count recursive operations. */
  NSRecursiveLock   *_lock;     /* Lock out other threads. */
  Observation       *freeList;
  Observation       **chunks;
  unsigned	         numChunks;
  GSIMapTable       cache[CACHESIZE];
  unsigned short    chunkIndex;
  unsigned short    cacheIndex;
} NCTable;

// line:750 添加通知
- (void) addObserver: (id)observer 
            selector: (SEL)selector
                name: (NSString*)name
              object: (id)object
{
    Observation     *list;
    Observation     *o; // 通知节点
    GSIMapTable     m;  // 通知所在的哈希表
    GSIMapNode      n;  // 通知所在的节点
    
    // 校验数据
    if (observer == nil)
        [NSException raise: NSInvalidArgumentException format: @"Nil observer passed to addObserver ..."];
    if (selector == 0)
        [NSException raise: NSInvalidArgumentException format: @"Null selector passed to addObserver ..."];
    if ([observer respondsToSelector: selector] == NO) {
        [NSException raise: NSInvalidArgumentException format: @"[%@-%@] Observer '%@' does not respond to selector '%@'", NSStringFromClass([self class]), NSStringFromSelector(_cmd), observer, NSStringFromSelector(selector)];
    }

    // 加锁处理
    lockNCTable(TABLE);
    // 创建通知节点
    o = obsNew(TABLE, selector, observer);
    
    /*
     * Record the Observation in one of the linked lists.
     *
     * NB. It is possible to register an observer for a notification more than
     * once - in which case, the observer will receive multiple messages when
     * the notification is posted... odd, but the MacOS-X docs specify this.
     */
     // 遍历查找应该加入的链表
    if (name) { // 1> 名字存在，首先通过名字查询
        /*
         * Locate the map table for this name - create it if not present.
         */
        // 通过名字查询所在哈希表，如果不存在创建
        n = GSIMapNodeForKey(NAMED, (GSIMapKey)(id)name);
        if (n == 0) {
            m = mapNew(TABLE);
            /*
        	  * As this is the first observation for the given name, we take a
        	  * copy of the name so it cannot be mutated while in the map.
        	  */
        	  name = [name copyWithZone: NSDefaultMallocZone()];
        	  GSIMapAddPair(NAMED, (GSIMapKey)(id)name, (GSIMapVal)(void*)m);
        	  GS_CONSUMED(name)
        } else {
            m = (GSIMapTable)n->value.ptr;
        }
        
        /*
         * Add the observation to the list for the correct object.
         */
         // 如果通知对象存在，查询对象所在的链表
         n = GSIMapNodeForSimpleKey(m, (GSIMapKey)object);
         if (n == 0) {
            o->next = ENDOBS;
            GSIMapAddPair(m, (GSIMapKey)object, (GSIMapVal)o);
         } else {
            list = (Observation*)n->value.ptr;
            o->next = list->next;
            list->next = o;
         }
    } else if (object) { // 2> 通过通知对象 object 查询
        n = GSIMapNodeForSimpleKey(NAMELESS, (GSIMapKey)object);
        if (n == 0) {
            o->next = ENDOBS;
            GSIMapAddPair(NAMELESS, (GSIMapKey)object, (GSIMapVal)o);
        } else {
            list = (Observation*)n->value.ptr;
            o->next = list->next;
            list->next = o;
        }
    } else { // 3> 均不存在，加入通配符链表
        o->next = WILDCARD;
        WILDCARD = o;
    }
    unlockNCTable(TABLE);
}
```

  `GUNStep` 源码实现中，通知体 `Obs` 是一个链表节点，存放通知方法 `Selector` 是通过链表来存储，不是通过数组。
  通知中心表 `NCTbl` 中存放的通知主要分为三类
 
  * named : 注册时有名字
  * nameless : 注册时无名字，有对象
  * wildcard : 通配符，注册时无名字，无对象

## `NotificationQueue` - “通知队列”

> 通知队列定义

```swift
// 通知队列
open class NotificationQueue : NSObject {
    // 默认队列
    open class var `default`: NotificationQueue { get }
    // 初始化队列时与一个通知中心关联
    public init(notificationCenter: NotificationCenter)
    
    // 入队列
    open func enqueue(_ notification: Notification, postingStyle: NotificationQueue.PostingStyle)
    open func enqueue(_ notification: Notification, postingStyle: NotificationQueue.PostingStyle, coalesceMask: NotificationQueue.NotificationCoalescing, forModes modes: [RunLoop.Mode]?)
    // 出队列
    open func dequeueNotifications(matching notification: Notification, coalesceMask: Int)

    // 通知的发送时机
    public enum PostingStyle : UInt {
        case whenIdle = 1   // runloop 空闲时发送
        case asap = 2       // (As Soon As Possible)尽快发送，穿插在 runloop 每次事件完成期间来发送
        case now = 3        // 立刻发送
    }
    // 通知合并策略
    public struct NotificationCoalescing : OptionSet {
        public static var none: NotificationQueue.NotificationCoalescing { get }        // 不合并
        public static var onName: NotificationQueue.NotificationCoalescing { get }      // 名字相同时合并
        public static var onSender: NotificationQueue.NotificationCoalescing { get }    // 发送者(object)相同时合并
    }
}
```

- [Swift - NotifcationQueue](https://github.com/apple/swift-corelibs-foundation/blob/main/Sources/Foundation/NotificationQueue.swift)

- [GUNStep 中的实现](https://github.com/gnustep/libs-base/blob/master/Source/NSNotificationQueue.m)

```objc
// line:51 全局通知队列链表(单链表)
@interface	NotificationQueueList : NSObject
{
@public
    NotificationQueueList	 *next;
    NSNotificationQueue   *queue;
}
+ (void) registerQueue: (NSNotificationQueue*)q;
+ (void) unregisterQueue: (NSNotificationQueue*)q;
@end

// line:163 通知节点
typedef struct _NSNotificationQueueRegistration
{
    // 双向链表前后指针
    struct _NSNotificationQueueRegistration     *next;
    struct _NSNotificationQueueRegistration     *prev;
    // 通知
    NSNotification                              *notification;
    id                                          name;
    id                                          object;
    NSArray                                     *modes;
} NSNotificationQueueRegistration;
// line:175 通知链表(双向链表)
struct _NSNotificationQueueList;
typedef struct _NSNotificationQueueList
{
    struct _NSNotificationQueueRegistration     *head;
    struct _NSNotificationQueueRegistration     *tail;
} NSNotificationQueueList;
// line:226 添加到队列链表
static void add_to_queue(NSNotificationQueueList *queue, NSNotification *notification, NSArray *modes, NSZone *_zone)
{
    // 创建队列节点
    NSNotificationQueueRegistration *item;
    item = NSZoneCalloc(_zone, 1, sizeof(NSNotificationQueueRegistration));
    if (item == 0) {
        [NSException raise: NSMallocException format: @"Unable to add to notification queue"];
    }
    // 设置节点信息
    item->notification = RETAIN(notification);
    item->name = [notification name];
    item->object = [notification object];
    item->modes = [modes copyWithZone: [modes zone]];
    // 添加进入链表尾部
    item->next = NULL;
    item->prev = queue->tail;
    queue->tail = item;
    if (item->prev) {
        item->prev->next = item;
    }
    // 链表为空时，设置该节点为头结点
    if (!queue->head) { 
        queue->head = item;
    }
}

@implementation NSNotificationQueue
// line:328 初始化队列
- (id) initWithNotificationCenter: (NSNotificationCenter*)notificationCenter
{
    _zone = [self zone];
    // init queue 初始化通知队列，持有通知中心，创建 asap、idle 两个通知链表队列
    _center = RETAIN(notificationCenter);
    _asapQueue = NSZoneCalloc(_zone, 1, sizeof(NSNotificationQueueList));
    _idleQueue = NSZoneCalloc(_zone, 1, sizeof(NSNotificationQueueList));
    
    if (_asapQueue == 0 || _idleQueue == 0) {
        DESTROY(self);
    } else {
        /*
        * insert in global queue list
        */
        // 内存分配成功，加入全局的通知队列链表辽中
        [NotificationQueueList registerQueue: self];
    }
    return self;
}
// line:506 入队列
- (void) enqueueNotification: (NSNotification*)notification
                postingStyle: (NSPostingStyle)postingStyle
                coalesceMask: (NSUInteger)coalesceMask
                    forModes: (NSArray*)modes
{
    if (modes == nil) { // 没有指定 runloop 模式，以默认模式进行发送
        modes = defaultMode;
    }
    if (coalesceMask != NSNotificationNoCoalescing) { // 需要合并的通知，先从队列中移除
        [self dequeueNotificationsMatching: notification coalesceMask: coalesceMask];
    }
    switch (postingStyle) {
    case NSPostNow: // 立刻发送 
        {
            NSString *mode;
            mode = [[NSRunLoop currentRunLoop] currentMode];
            // 当前 runloop 模式，包含在通知需要发送的模式中，直接调用通知中进行发送
            if (mode == nil || [modes indexOfObject: mode] != NSNotFound) {
                [_center postNotification: notification];
            }
        }
        break;
    case NSPostASAP: // 尽快发送，添加进队列
        add_to_queue(_asapQueue, notification, modes, _zone);
        break;
    case NSPostWhenIdle: // 闲置发送，添加进队列
        add_to_queue(_idleQueue, notification, modes, _zone);
        break;
    }
}
@end

// runloop 进行通知队列中的通知发送
/*
 *	The following code handles sending of queued notifications by NSRunLoop.
 */
// line:641 asap 队列通知发送
void GSPrivateNotifyASAP(NSString *mode);
// line:660 idle 队列通知发送
void GSPrivateNotifyIdle(NSString *mode);
```

  通知队列创建时需要关联一个通知中心对象，用于进行通知发送；创建 asap、idle 两个通知队列存储加入的通知。 
  创建的两个通知队列使用双向链表进行通知信息的存储。
  根据发送时机不同通知的发送分为三类
  
  * now : 立即发送，只要 runloop 模式匹配，则直接调用通知中心进行通知发送。
  * asap : 尽快发送，runloop 会在时间循环间隙，调用该队列进行通知发送。
  * idle : 空闲时发送，runloop 闲置期间，调用该队列进行通知发送。

## reference

- [2020-03-05 一文全解iOS通知机制](https://juejin.cn/post/6844904082516213768)
