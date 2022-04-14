---
title: docker配置mysql(挂载配置文件)
categories: ["docker"   ]
date: 2022-04-14 10:44:07
tags: mysql
description: 使用docker配置mysql。
---
# 1. 安装docker
[安装docker](https://www.runoob.com/docker/centos-docker-install.html)
# 2. Docker配置Mysql
## 2.1 拉取镜像
```
docker pull [mysql镜像名称]
即：docker pull mysql
```
> 如果不带版本号则默认获取最新的版本latest

## 2.2 挂载数据卷以及配置文件


### 2.2.1 先创建一个mysql容器
运行mysql命名容器名称为mysql-service并且设置root账号初始密码为root
```
docker run -d -p 3306:3306 --name mysql-service -e MYSQL_ROOT_PASSWORD=root  mysql
```

### 2.2.2 进入Docker容器内并查看配置文件地址
```
[root@violet ~]# docker exec -it mysql-service bash 

[root@violet ~]# mysql --help | grep my.cnf

root@27b63c80ecfa:/# mysql --help | grep my.cnf
                      order of preference, my.cnf, $MYSQL_TCP_PORT,
/etc/my.cnf /etc/mysql/my.cnf ~/.my.cnf  #配置文件地址
```

### 2.2.3 创建本地路径并挂载Docker内数据
```
mkdir -p /rundev/mysql/conf && mkdir -p /rundev/mysql/data
```
>将测试容器里 MySQL 的配置文件复制到该路径。日后需改配置，直接在挂载路径的配置文件上修改即可
```
docker cp mysql-service:/etc/mysql/my.cnf /rundev/mysql/conf
```

拷贝完配置文件后，停掉容器并删除，重新创建带配置文件挂载的服务

## 3. 创建 MySQL 容器并启动
```
docker run --name mysql-server \
-p 3306:3306 -e MYSQL_ROOT_PASSWORD=root \
--mount type=bind,src=/rundev/mysql/conf/my.cnf,dst=/etc/mysql/my.cnf \
--mount type=bind,src=/rundev/mysql/data,dst=/var/lib/mysql \
--restart=always \
-d mysql
```
>--name：为容器指定一个名字
-p：指定端口映射，格式为：主机(宿主)端口:容器端口
-e：MYSQL_ROOT_PASSWORD="xxx"，设置环境变量，密码
--restart=on-failure:3：是指容器在未来出现异常退出（退出码非0）的情况下循环重启3次
-mount：绑定挂载
-d：后台运行容器，并返回容器 id


## 4. 更改字符集
如果想Mysql在后续的操作中中文不出现乱码,则需要修改配置文件内容

### 4.1 添加以下内容到my.cnf
```
[mysqld]
character-set-server=utf8
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```

### 4.2 重启docker mysql-server容器
docker restart mysql-server

## 5. 其它方式
```
docker run --name mysql01 -p 3306:3306  \
-v /rundev/mysql/data:/var/lib/mysql \
-v /rundev/mysql/conf:/etc/mysql/ \
-e MYSQL_ROOT_PASSWORD=root -d mysql:version
```