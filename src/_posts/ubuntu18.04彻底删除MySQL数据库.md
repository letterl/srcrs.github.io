---
title: ubuntu18.04彻底删除MySQL数据库
date: 2020-06-19
category: Other
tags:
    - mysql
permalink: /posts/202006191.html
---

从接触MySQL数据库开始，不可避免的一个问题就是数据库彻底删除，windows上，卸载了之后，可能要到ProgramData里面有没有看看是否有mysql文件夹，找到删除，Program Files，Program Files(x86)也是如此，然后再到注册表搜索一下mysql，找到也要删除，如果这些文件存在的话，很有可能会影响下一次的安装。

如果服务器是在阿里云买的，可能会预安装MySQL，我也不会使用，所以就删除了，要不然安装的MySQL会出问题。

只要按照以下的顺序，一步步运行，应该是是可以完全删除的。

+ 查看MySQL依赖项`dpkg --list|grep mysql`

+ `sudo apt-get remove mysql-common`

+ `sudo apt-get autoremove --purge mysql-server-5.7`

+ 清除残留数据`dpkg -l|grep ^rc|awk '{print$2}'|sudo xargs dpkg -P`

+ 再次查看MySQL剩余依赖项`dpkg --list|grep mysql`

+ 继续删除依赖项`sudo apt-get autoremove --purge mysql-apt-config`

到此可以在运行第一条命令，如果没有输出应该就是删除成功了。

关于服务器的配置，可以参考，我的这篇文章[web服务环境配置](https://srcrs.top/posts/2020/05/06/web%E6%9C%8D%E5%8A%A1%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html)，我今天试的也是也没有问题的。

## 参考连接

[Ubuntu18.04彻底删除MySQL数据库](https://www.cnblogs.com/xiaojf/p/11107513.html)