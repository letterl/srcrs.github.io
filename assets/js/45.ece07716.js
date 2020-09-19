(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{570:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[s._v("#")]),s._v(" jdk")]),s._v(" "),t("ol",[t("li",[s._v("将jdk压缩包上传到服务器")])]),s._v(" "),t("p",[s._v("可以从官网下载，或者自己备份有。上传后文件名为")]),s._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("jdk-8u231-linux-x64.tar.gz\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("解压")])]),s._v(" "),t("p",[s._v("如果什么都不加，默认解压在当前目录下。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk-8u231-linux-x64.tar.gz\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("环境变量配置")])]),s._v(" "),t("p",[s._v("在命令行输入此命令，打开环境变量配置文件。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n")])])]),t("p",[s._v("下面的只需要改一下JAVA_HOME，推荐使用xftp查看路径，快捷高效。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ubuntu/jdk1.8.0_231\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" JAVA_HOME CLASSPATH\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("使配置生效")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])])]),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),t("p",[s._v("以前那个方法不行了，这次又换了一个。")]),s._v(" "),t("p",[s._v("先运行"),t("code",[s._v("dpkg -l | grep mysql")]),s._v("查看有没有安装mysql，如果有输出就说明安装了，请参考，我的"),t("a",{attrs:{href:""}},[s._v("ubuntu18.04彻底删除MySQL数据库")]),s._v("这篇文章就能解决你的问题。")]),s._v(" "),t("h3",{attrs:{id:"安装mysql-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-server"}},[s._v("#")]),s._v(" 安装mysql-server")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装MySQL"),t("code",[s._v("apt install mysql-server")])])]),s._v(" "),t("li",[t("p",[s._v("查看是否安装成功"),t("code",[s._v("netstat -tap | grep mysql")]),s._v(",如果看到有mysql就说明安装成功。")])]),s._v(" "),t("li",[t("p",[s._v("输入"),t("code",[s._v("mysql")]),s._v("进入数据库，此时数据库是没有密码的。")])])]),s._v(" "),t("h3",{attrs:{id:"配置mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql"}},[s._v("#")]),s._v(" 配置MySQL")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("输入"),t("code",[s._v("mysql_secure_installation")])])]),s._v(" "),t("li",[t("p",[s._v("secure enough. Would you like to setup VALIDATE PASSWORD plugin?    # 要安装验证密码插件吗?")])]),s._v(" "),t("li",[t("p",[s._v("Press y|Y for Yes, any other key for No: "),t("code",[s._v("N")]),s._v("    # 这里我选择N")])]),s._v(" "),t("li",[t("p",[s._v("New password:   # 输入要为root管理员设置的数据库密码")])]),s._v(" "),t("li",[t("p",[s._v("Re-enter new password:   # 再次输入密码")])]),s._v(" "),t("li",[t("p",[s._v("Remove anonymous users? (Press y|Y for Yes, any other key for No) : "),t("code",[s._v("y")]),s._v("     # 删除匿名账户\nSuccess.")])]),s._v(" "),t("li",[t("p",[s._v("Disallow root login remotely? (Press y|Y for Yes, any other key for No) : "),t("code",[s._v("N")]),s._v("    # 是否禁止root管理员从远程登录？")])]),s._v(" "),t("li",[t("p",[s._v("Remove test database and access to it? (Press y|Y for Yes, any other key for No) : "),t("code",[s._v("y")]),s._v("   # 删除test数据库并取消对它的访问权限")])]),s._v(" "),t("li",[t("p",[s._v("Reload privilege tables now? (Press y|Y for Yes, any other key for No) : "),t("code",[s._v("y")]),s._v("   # 刷新授权表，让初始化后的设定立即生效")])])]),s._v(" "),t("p",[s._v("此时mysql就是初步配置好了，但是仍然不够。")]),s._v(" "),t("h3",{attrs:{id:"配置mysql允许远程访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置mysql允许远程访问"}},[s._v("#")]),s._v(" 配置MySQL允许远程访问")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("编辑配置文件"),t("code",[s._v("vim /etc/mysql/mysql.conf.d/mysqld.cnf")])])]),s._v(" "),t("li",[t("p",[s._v("注释"),t("code",[s._v("bind-address = 127.0.0.1")])])]),s._v(" "),t("li",[t("p",[s._v("按Esc键，输入冒号，再输入wq，即可保存退出。")])]),s._v(" "),t("li",[t("p",[s._v("输入"),t("code",[s._v("mysql -uroot -p")]),s._v("加上你设置的密码，就能进入到数据库。")])]),s._v(" "),t("li",[t("p",[s._v("进行授权"),t("code",[s._v("grant all on *.* to root@'%' identified by '你的密码' with grant option;")])])]),s._v(" "),t("li",[t("p",[s._v("刷新权限"),t("code",[s._v("flush privileges;")])])]),s._v(" "),t("li",[t("p",[s._v("退出"),t("code",[s._v("exit")])])]),s._v(" "),t("li",[t("p",[s._v("重启MySQL"),t("code",[s._v("systemctl restart mysql")])])])]),s._v(" "),t("p",[s._v("接下来就可以远程访问了。")]),s._v(" "),t("h3",{attrs:{id:"解决不用密码就能登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决不用密码就能登录"}},[s._v("#")]),s._v(" 解决不用密码就能登录")]),s._v(" "),t("p",[s._v("到现在发现不用密码也是能登录的，相当与以前设置的密码还没有生效。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进入数据库"),t("code",[s._v("mysql -uroot -p")])])]),s._v(" "),t("li",[t("p",[s._v("进入mysql"),t("code",[s._v("use mysql;")])])]),s._v(" "),t("li",[t("p",[s._v("无password版本，即5.7以下包括5.7"),t("code",[s._v("update user set authentication_string=password(\"你的密码\") where user='root';")])])]),s._v(" "),t("li",[t("p",[s._v("大于5.7"),t("code",[s._v("update user set password=password('你的密码') where user='root';")])])])]),s._v(" "),t("p",[s._v("不清楚这两条运行了，也没关系。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v('update user set plugin="mysql_native_password";')])]),s._v(" "),t("li",[t("p",[s._v("刷新"),t("code",[s._v("flush privileges;")])])]),s._v(" "),t("li",[t("p",[s._v("退出"),t("code",[s._v("exit")])])]),s._v(" "),t("li",[t("p",[s._v("重启MySQL"),t("code",[s._v("systemctl restart mysql")])])])]),s._v(" "),t("h3",{attrs:{id:"解决数据库大小写敏感问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决数据库大小写敏感问题"}},[s._v("#")]),s._v(" 解决数据库大小写敏感问题")]),s._v(" "),t("p",[s._v("在windows中，数据库的大小写是不敏感的，而在Linux是区分大小写的。")]),s._v(" "),t("p",[s._v("mysql是通过lower_case_table_names变量来处理大小写问题的。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进入mysql"),t("code",[s._v("mysql -uroot -p")]),s._v("，回车输入你的密码")])]),s._v(" "),t("li",[t("p",[s._v("查询大小写变量"),t("code",[s._v("show variables like '%case%';")])])])]),s._v(" "),t("p",[s._v("输入如下内容，该变量值是0，说明对大小写是敏感的。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("+------------------------+-------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------------+-------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lower_case_file_system "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" OFF   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lower_case_table_names "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------------+-------+\n")])])]),t("ul",[t("li",[t("p",[s._v("退出数据库，进入终端"),t("code",[s._v("vim /etc/mysql/mysql.conf.d/mysqld.cnf")])])]),s._v(" "),t("li",[t("p",[s._v("在[mysqld]下面添加"),t("code",[s._v("lower_case_table_names=1")])])]),s._v(" "),t("li",[t("p",[s._v("保存并退出")])]),s._v(" "),t("li",[t("p",[s._v("重启MySQL"),t("code",[s._v("systemctl restart mysql")])])])]),s._v(" "),t("p",[s._v("至此，mysql算是差不多配置完了。如果再出问题，应该就是驱动和数据版本不匹配了。")]),s._v(" "),t("h2",{attrs:{id:"tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[s._v("#")]),s._v(" tomcat")]),s._v(" "),t("ol",[t("li",[s._v("下载tomcat")])]),s._v(" "),t("p",[s._v("地址："),t("a",{attrs:{href:"https://tomcat.apache.org/download-90.cgi",target:"_blank",rel:"noopener noreferrer"}},[s._v("tomcat 9.0.34"),t("OutboundLink")],1)]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("上传到服务器")])]),s._v(" "),t("p",[s._v("上传后名字为")]),s._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[s._v("apache-tomcat-9.0.34.tar.gz\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("解压")])]),s._v(" "),t("p",[s._v("解压到当前目录")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf apache-tomcat-9.0.34.tar.gz\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("赋权限")])]),s._v(" "),t("p",[s._v("我不知有何用。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" -R apache-tomcat-9.0.34\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("修改startup.sh启动脚本")])]),s._v(" "),t("p",[s._v("在apache-tomcat-9.0.34/bin目录中输入")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" startup.sh\n")])])]),t("p",[s._v("在最后一行的前面添加如下内容，路径要符合自己的实际情况。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ubuntu/jdk1.8.0_231\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("JAVA_HOME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/lib:%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("JRE_HOME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tomcat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TOMCAT_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ubuntu/apache-tomcat-9.0.34\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("修改shutdown.sh关闭脚本")])]),s._v(" "),t("p",[s._v("在apache-tomcat-9.0.34/bin目录中输入")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" shutdown.sh\n")])])]),t("p",[s._v("和上面哪个一样，在最后一行的前面添加如下内容，路径要符合自己的实际情况。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ubuntu/jdk1.8.0_231\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/jre\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("JAVA_HOME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/lib:%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("JRE_HOME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_HOME}")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tomcat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TOMCAT_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/ubuntu/apache-tomcat-9.0.34\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("启动tomcat")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./startup.sh\n")])])]),t("p",[s._v("提示如下内容则说明启动成功")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Using CATALINA_BASE:   /home/ubuntu/apache-tomcat-9.0.34\nUsing CATALINA_HOME:   /home/ubuntu/apache-tomcat-9.0.34\nUsing CATALINA_TMPDIR: /home/ubuntu/apache-tomcat-9.0.34/temp\nUsing JRE_HOME:        /home/ubuntu/jdk1.8.0_231/jre\nUsing CLASSPATH:       /home/ubuntu/apache-tomcat-9.0.34/bin/bootstrap.jar:/home/ubuntu/apache-tomcat-9.0.34/bin/tomcat-juli.jar\nTomcat started.\n")])])]),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/dfce73d80ffb",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu18.04安装jdk"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/mier9042/article/details/106408075/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu 18.04安装mysql"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixx3/article/details/80808484",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu18.04 安装tomcat"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/zhaopeng_yu/article/details/80785813",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux下MySQL大小写敏感问题"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);