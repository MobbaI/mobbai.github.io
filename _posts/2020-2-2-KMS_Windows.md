---
title: Windows-KMS激活
layout: post
categories: PC
description: <center>不断更新中...</center>
---

# KMS激活

**Windows**

以管理员身份打开命令提示符，然后执行下列命令：

```cmd
::cd /d "%SystemRoot%\system32"
slmgr /skms kms.moeclub.org
slmgr /ato
slmgr /xpr
```

**注意：**

> KMS方式激活的有效期只有180天
>
> 每隔一段时间系统会自动KMS服务器请求续期
>
> 来源：<a title="KMS激活" href="https://moeclub.org/kms?spm=23.4" target="_blank">萌咖</a>