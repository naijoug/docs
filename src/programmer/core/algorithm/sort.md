---
title: Sort - “排序”
icon: hashtag

index: true

---

> 排序 : 对一组数据按照一定地条件进行有顺序的排列。

<!-- more -->

## concept

### 衡量指标

三个衡量指标

- 时间复杂度
- 空间复杂度(原地排序 - 在原数组进行数据调整，不需要借助额外数组空间)
- 排序的稳定性(稳定排序 - 相同的元素排序前后相对位置不发生变化)

### 有序度

有序度 : 数组中的数据已经有序的元素的个数
满有序度 : 完全有序的数组的有序度
逆序度 : 数组中的数据与排序方向相反顺序排序的元素的个数

逆序度 = 满有序度 - 逆序度

## 排序算法一览

| 排序算法 | 时间复杂度 | 空间复杂度 | 稳定性
| --- | --- | --- | ---
| 冒泡排序 | O(n²)    | O(1) | ✅
| 选择排序 | O(n²)    | O(1) | ✅
| 插入排序 | O(n²)    | O(1) | ✅
| 快速排序 | O(nlogn) | O(1) | ✅
| 归并排序 | O(nlogn) | O(1) | ✅
| 希尔排序 | O(n²)    | O(1) | ✅
| 堆排序  | O(n²)     | O(1) | ✅
| 计数排序 | O(n)     | O(n) | ✅ 

## 比较排序

  需要对数组中的两个元素按照某种条件进行比较

### 交换排序
    
  比较之后，将两个元素进行交换操作。
    
#### `Bubble Sort` - “冒泡排序”
  
  核心操作 : 比较 + 交换
  
  比较 : 每次比较相邻的两个元素
  
  交换 : 按照排序要求看看是否需要进行两个元素交换。每一轮遍历完，会有一个已排序的元素浮上来。所以叫形象的将这种排序叫做“冒泡排序”，根据排序顺序不同，又可以分为“大冒泡”和“小冒泡”。
  
```swift
func bubbleSort(nums: [Int]) -> [Int] {
    var nums = nums
    let count = nums.count
    for i in 0..<count {
      for j in 0..<(count - i - 1) {
        // 每次比较交换两个元素
        guard (nums[j] > nums[j + 1]) else { continue }
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
      }
    }
    return nums;
}
```
  
#### `Quick Sort` - “快速排序”
  

```swift
func quickSort(nums: [Int]) -> [Int] {
    
}
```
 
### 插入排序

  比较之后，将数据插入到指定的有序位置，其它未排序的数据往后移。

#### `Insertion Sort` - “简单插入排序”

  核心操作 : 比较 + 插入

  比较 : 每次选择无序部分的的第一个元素，然后与有序部分进行比较查找到需要插入的有序位置
  插入 : 将需要插入位置后面的元素往后移动，将需要插入的元素插入到有序的位置

```swift
func insertionSort(nums: [Int]) -> [Int] {
    var nums = nums
    let count = nums.count
    for i in 0..<count {
        for j in 0..<i {
            
        }
    }
    return nums
}
```

#### `Shell Sort` - “希尔排序”

```swift
func shellSort(nums: [Int]) -> [Int] {
    
}
```

### 选择排序

  每次遍历选择

#### `Selection Sort` - “简单选择排序”

```swift
func selectionSort(nums: [Int]) -> [Int] {
    
}
```

#### `Heap Sort` - “堆排序”

```swift
func heapSort(nums: [Int]) -> [Int] {
    
}
```

### 归并排序

  将数组进行递归分割成子数组，将子数组进行合并排序，最终形成有序数组。

#### `Binary Merge Sort` - “二路归并排序”

```swift
func mergeSort(nums: [Int]) -> [Int] {
       
}
```

#### `Multi Merge Sort` - “多路归并排序”

```swift
func multiMergeSort(nums: [Int]) -> [Int] {
    
}
```

## 非比较排序

  排序的过程中，不涉及元素之间的比较，而是利用的数据特性进行巧妙排序。

### 桶排序

```swift
func bucketSort(nums: [Int]) -> [Int] {
    
}
```

### `Counting Sort` - “计数排序”

```swift
func countingSort(nums: [Int]) -> [Int] {
    
}
```

### `Radix Sort` - “基数排序”

```swift
func radixSort(nums: [Int]) -> [Int] {
    
}
```

## 还有什么排序算法吗？

### `Monkey Sort` - “猴子排序”

```swift
func monkeySort(nums: [Int]) -> [Int] {
    
}
```

### `Sleep Sort` - “睡眠排序”

```swift
func sleepSort(nums: [Int]) -> [Int] {
    
}
```

### `Noodle Sort` - “面条排序”

```swift
func noodleSort(nums: [Int]) -> [Int] {
    
}
```

