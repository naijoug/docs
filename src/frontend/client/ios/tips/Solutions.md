# Solutions

## UICollectionView layout

- [2023-07-23 UICollectionView自定义layout实现按需算高](https://mp.weixin.qq.com/s/I6vKOTorr0tYeETzDB0yZQ)

## ScrollView Nested

- [2019.02.13 多层 UIScrollView 嵌套滚动解决方案](https://juejin.im/post/5c63ee7d51882562654aaf37)
- [2018.09.09 NestedScrollView](https://github.com/ApterKing/NestedScrollView)
- [2018.05.05 iOS 多级 UIScrollView 嵌套的实现方案](http://www.lymanli.com/2018/05/05/nest-tableview/)
- [2017.05.08 iOS 嵌套UIScrollview的滑动冲突另一种解决方案](https://www.jianshu.com/p/df01610b4e73)
- [2017.05.02 嵌套UIScrollview的滑动冲突解决方案](https://www.jianshu.com/p/040772693872)

## Insert a custom view to UITextView

- [Hakawai](https://github.com/linkedin/Hakawai)
    > A powerful, extensible UITextView.
- [SubviewAttachingTextView](https://github.com/vlas-voloshin/SubviewAttachingTextView) : 允许 UITextView 嵌入 UIView 视图
    > UITextView behavior and subclass that allow embedding subviews as text attachments.

## UICollectionView inside UITableViewCell

- [UICollectionView inside a UITableViewCell — dynamic height?](https://stackoverflow.com/questions/24126708)
- [Dynamic-height UICollectionView inside a dynamic-height UITableViewCell](https://stackoverflow.com/questions/56318626)
- [Self-Sizing Hell — UITableView and UICollectionView Cells](https://medium.com/better-programming/self-sizing-hell-uitableview-and-uicollectionview-cells-509f0fdc7ff1)

## Automating Version & Build Number

- [Automating Version and Build Numbers Using agvtool](https://developer.apple.com/library/archive/qa/qa1827/_index.html)
- [Better way of incrementing build number?](https://stackoverflow.com/questions/9258344/better-way-of-incrementing-build-number)
- [Automatic build versions from git in Xcode](https://gist.github.com/acrookston/55d69a16cd5363426dbf7a3d6a9ee6ce)

```shell
if [ "Release" != "${CONFIGURATION}" ]; then
exit 0
fi

plist="Info.plist"
shortVersion=$(/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "${PROJECT_DIR}/$plist")
echo "versionNumber: $shortVersion"
buildNumber=$(/usr/libexec/PlistBuddy -c "Print CFBundleVersion" "${PROJECT_DIR}/$plist")
echo "pre buildNumber: $buildNumber"
buildNumber=`date +"%y%m%d.%H%M%S"`
echo "current buildNumber: $buildNumber"

/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" "${PROJECT_DIR}/$plist"
```

## UserDefaults data loss

- [The Mystery of the Disappearing NSUserDefaults Keys](https://damir.me/the-mystery-of-the-disappearing-nsuserdefaults-keys/)
- [NSUserDefaults values lost on background launch](https://forums.developer.apple.com/thread/15685)