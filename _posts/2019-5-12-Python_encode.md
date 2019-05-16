---
title: Python字符编码
layout: post
categories: Python
description: <center>乱码本质上是系统编码与所提供字符的编码不一致导致的</center>
---
# 什么是字符编码

要彻底解决字符编码的问题就不能不去了解到底什么是字符编码。计算机从本质上来说只认识二进制中的0和1，可以说任何数据在计算机中实际的物理表现形式也就是0和1，如果你将硬盘拆开，你是看不到所谓的数字0和1的，你能看到的只是一块光滑闪亮的磁盘，如果你用足够大的放大镜你就能看到磁盘的表面有着无数的凹凸不平的元件，凹下去的代表0，突出的代表1，这就是计算机用来表现二进制的方式。

转载参考：[彻底搞懂Python的字符编码](https://blog.csdn.net/apache0554/article/details/53889253 "nice")

# 编码类型

1.ASCII：英文字符

2.GB2312：中文字符

3.Unicode：各国字符

4.UTF-8：提高Unicode存储和传输性能，是Unicode的一种实现形式

# 转换编码

decode()：其他编码字符         --------->    Unicode编码字符

encode()：Unicode编码字符  --------->    其他编码字符

# Python2和3区别

Python2中默认的字符编码是ASCII，Python3则是Unicode

