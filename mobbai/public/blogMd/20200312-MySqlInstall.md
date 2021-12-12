## 安装步骤

下载压缩包后给个位置解压

在 **MySQL** 根目录下新建 **my.ini** 配置文件，内容如下：

```
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[mysqld]
#设置3306端口
port = 3306 
#设置MySQL时区
default-time_zone = '+8:00'
# 设置mysql的安装目录
basedir=D:\MySQL
# 设置mysql数据库的数据的存放目录
datadir=D:\MySQL\data
# 允许最大连接数
max_connections=800
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```

设置环境变量

打开 **cmd** ，输入：

```
mysqld --initialize --consile
```

记住随机密码

接下来安装服务：

```
mysqld --install
```

启动 **MySQL** 服务：

```
net start mysql
```

登录并修改临时的随机密码：

```
mysql -u root -p
ALTER USER `root`@`localhost` IDENTIFIED WITH mysql_native_password BY `root`;
```

## 遇到的问题

下载慢，寻找国内镜像

启动 **MySQL** 服务发生系统错误2，系统找不到指定的文件

以管理员的身份运行 **cmd** ，进入 **bin** 目录，输入以下内容：

```
mysqld --remove
mysqld --install
net start mysql
```



