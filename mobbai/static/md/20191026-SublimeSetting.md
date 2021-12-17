## 配置Python编辑环境

在 **%Sublime Text** 安装目录 **%/package/** 中创建 **Python** 文件夹，里面新建 **Python.sublime-commands** 文件后打开，里面添加：

```
{

"cmd":["python.exe", "-u", "$file"],

"path":"D:\Program Files (x86)\python3.7.0",

"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",

"selector": "source.python"

}
```

## 配置Java编辑环境

在 **%Sublime Text** 安装目录 **%/package/** 中创建 **Java** 文件夹，里面新建 **Java.sublime-build** 文件后打开，里面添加：

```
{
   "shell_cmd": "runJava.bat \"$file\"",
   
   "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
   
   "selector": "source.java",
   
   //添加下面一段可支持编译中文，亲测Java可用
   "encoding": "GBK"
}
```

在 **Java** 的 **JDK/bin** 路径下，新建一个文件，命名为 **runJava.bat** ，里面内容为：

```
@ECHO OFF
cd %~dp1
IF EXIST %~n1.class (
DEL %~n1.class
)
javac -encoding UTF-8 %~nx1
IF EXIST %~n1.class (
java %~n1
)
```

