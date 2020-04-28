create database travel;

use travel;

create table user(
  id int(10) not null auto_increment,
  img text default null comment '头像',
  userName varchar(20) default null comment '用户名',
  summary varchar(50) default null comment '个人简介',
  createTime timestamp default null comment '注册时间',
  primary key(id)
)engine=InnoDB auto_increment=1 comment '用户表';

insert into user(img, userName, summary, createTime)
values('https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG','icy','我是我','2020-02-29 00:56:00');