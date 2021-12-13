## Python导入依赖超时

在 **Python** 中安装包出现 **Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None))**

尝试使用国内的其他 **pip** 源

>阿里云：http://mirrors.aliyun.com/pypi/simple/
>
>中国科技大学：https://pypi.mirrors.ustc.edu.cn/simple/
>
>豆瓣：http://pypi.douban.com/simple/
>
>清华大学：https://pypi.tuna.tsinghua.edu.cn/simple/
>
>中国科学技术大学：http://pypi.mirrors.ustc.edu.cn/simple/

```
pip install keras -i http://pypi.douban.com/simple
```

若是仍出现错误，可能是安全警告，可以允许此警告

```
pip install keras -i http://pypi.douban.com/simple --trusted-host pypi.douban.com
```

其中 **keras** 是你需要下载的库