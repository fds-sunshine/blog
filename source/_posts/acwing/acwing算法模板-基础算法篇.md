---
title: acwing算法模板-基础算法篇
categories: ["acwing"]
date: 2022-06-21 14:51:04
tags: acwing
description: 学习acwing算法基础课背诵与灵活应用的模板。
---

## 算法模板
### 1. 快速排序
快速排序这里使用的是分治的算法思想，分治算法其核心思想是“分而治之”，其是将一个大问题分解成多个相同模式的小问题，然后递归的求解各个小问题，再将小问题的解合并成大问题的解。
```c++
void quick_sort(int q[], int l, int r)
{

    if (l >= r) return;

    int i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j)
    {
        do i ++ ; while (q[i] < x);
        do j -- ; while (q[j] > x);
        if (i < j) swap(q[i], q[j]);
    }

    quick_sort(q, l, j);
    quick_sort(q, j + 1, r);
}
```

### 2. 归并排序
归并排序也是采用分治的思想。
```c++
void merge_sort(int q[], int l, int r)
{
    if (l >= r) return;

    int mid = l + r >> 1;

    merge_sort(q, l, mid), merge_sort(q, mid + 1, r);

    int k = 0, i = l, j = mid + 1;
    while (i <= mid && j <= r)
        if (q[i] <= q[j]) tmp[k ++ ] = q[i ++ ];
        else tmp[k ++ ] = q[j ++ ];
    while (i <= mid) tmp[k ++ ] = q[i ++ ];
    while (j <= r) tmp[k ++ ] = q[j ++ ];

    for (i = l, j = 0; i <= r; i ++, j ++ ) q[i] = tmp[j];
}
```
### 3. 二分
```c++
    // 找左边第一个匹配的元素
    int l = 0, r = n - 1;
    while (l < r)
    {
        int mid = l + r >> 1;
        if (q[mid] >= x) r = mid;
        else l = mid + 1;
    }

    // 找右边第一个匹配的元素
    int l = 0, r = n - 1;
    while (l < r)
    {
        int mid = l + r + 1>> 1;
        if (q[mid] <= x) l = mid;
        else r = mid - 1;
    }
```
### 4. 前缀和、差分（只看二维情况，以为过于简单）
```c++
// (i, j)的前缀和
for (int i = 1; i <= n; i ++ )
    for (int j = 1; j <= m; j ++ )
        s[i][j] += s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1];

// 某个子矩阵的前缀和（x2 > x1, y2 > y1)
s[x2][y2] - s[x1 - 1][y2] - s[x2][y1 - 1] + s[x1 - 1][y1 - 1]


// 差分主要的思想
void insert(int x1, int y1, int x2, int y2, int c)
{
    b[x1][y1] += c;
    b[x2 + 1][y1] -= c;
    b[x1][y2 + 1] -= c;
    b[x2 + 1][y2 + 1] += c;
}
```

### 5. 双指针
```c++
for (int i = 0, j = 0; i < n; i ++ )
{
    s[q[i]] ++ ;
    while (j < i && check(j, i)) j++;
    res = max(res, i - j + 1);
}
```

### 6. 位运算(待更新)
x & -x = x & (~x + 1);

### 7. 离散化(待更新)


### 8. 区间合并
```c++
void merge(vector<PII> &segs)
{
    vector<PII> res;

    sort(segs.begin(), segs.end());

    int st = -2e9, ed = -2e9;
    for (auto seg : segs)
        if (ed < seg.first)
        {
            if (st != -2e9) res.push_back({st, ed});
            st = seg.first, ed = seg.second;
        }
        else ed = max(ed, seg.second);

    if (st != -2e9) res.push_back({st, ed});

    segs = res;
}
```

