---
title: 快速排序
date: 2022-03-24 10:58:50
tags: 快速排序
category: acwing算法基础
description: 学习快排思想以及代码实现。
---
# 快速排序(如有不足之处, 请各方大佬在底下批评指正!!!)
快速排序是从冒泡排序演变而来的算法，但是它比快排要高效得多，所以我们把它叫做快速排序😂
快速排序之所以快，是因为它用到了一个思想😮 ---------> 分治(不懂的可以百度哟😁)

那么快排是怎么实现的呢?让我们来看一下下面的图文解释:
#### 1. 我们需要确定一个分界点, 例如图中以标蓝的方格作为分界点7:
 ![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/1.png)
#### 2. 然后我们把**小于分界点**的元素放在分界点的左边,例如上图的(1, 3, 4, 5), 并且把**大于分界点**的元素放在分界点的右边, 例如上图的(8, 10, 12), 放置好后大概是这样的(不一定是这样,有可能是其它的情况), 此时, 在**分界点**左边的元素**小于或等于**分界点, 在**分界点**右边的元素**大于或等于**分界点: 
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/2.png)
#### 3. 利用**分界点**分好两边的元素后,得到下面的三个部分, 我们分别对**左边的部分**与**右边的部分**分别进行1与2的操作, 最后便可以排好序了(下图演示):
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/3.png)
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/4.png)
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/5.png)
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/6.png)
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/7.png)
![](https://gitee.com/violet-bug/imageurl/raw/master/acwing/quicksort/8.png)
> 到这里, 这个数组便已经排好序了
#### 4. 这时候就进入我们紧张刺激的代码环节:
##### 4.1 Java代码
```java
    public void quick_sort(int[] arr, int l, int r){
        if(l >= r) return;
        //1.确定分界点
        int i = l - 1, j = r + 1, x = arr[l + r >> 1];
        //2.确定分界点左边的元素
        do i++; while(i < x);
        //3.确定分界点右边的元素
        do j--; while(j > x);
        //4.交换元素以便把小于分界点的元素放到左边, 大于分界点的元素放到右边
        //有代码整洁洁癖的童鞋可以把if里面的代码写成一个方法,然后在进行调用
        if(i < j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        //5.递归处理分界点左边的元素
        quick_sort(arr, l, j);
        //6.递归处理分界点右边的元素
        quick_sort(arr, j + 1, r);
    }
```

##### 4.2 C代码
```c
void quick_sort(int arr[], int l, int r)
    {
        if(l >= r) return;
        //1.确定分界点
        int i = l - 1, j = r + 1, x = arr[l + r >> 1];
        //2.确定分界点左边的元素
        do i++; while(arr[i] < x);
        //3.确定分界点右边的元素
        do j--; while(arr[j] > x);
        //4.交换元素以便把小于分界点的元素放到左边, 大于分界点的元素放到右边
        if(i < j) 
        {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        };
        //5.递归处理分界点左边的元素
        quick_sort(arr, l, j);
        //6.递归处理分界点右边的元素
        quick_sort(arr, j + 1, r);
    }
```

##### 4.3 C++代码
```c++
void quick_sort(int arr[], int l, int r)
    {
        if(l >= r) return;
        //1.确定分界点
        int i = l - 1, j = r + 1, x = arr[l + r >> 1];
        //2.确定分界点左边的元素
        do i++; while(arr[i] < x);
        //3.确定分界点右边的元素
        do j--; while(arr[j] > x);
        //4.交换元素以便把小于分界点的元素放到左边, 大于分界点的元素放到右边
        if(i < j) swap(arr[i], arr[j]);
        //5.递归处理分界点左边的元素
        quick_sort(arr, l, j);
        //6.递归处理分界点右边的元素
        quick_sort(arr, j + 1, r);
    }
```
##### 4.4 Python代码(语法忘记, 后续更新)
```python
    def quick_sort(arr, l, r):
        i = l - 1, j = r + 1, x = arr[l + r >> 1];
```
##### 4.5 Go代码(后续更新)
```go

```
