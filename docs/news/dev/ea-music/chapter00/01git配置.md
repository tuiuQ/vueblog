---
title: "第一节 Git配置"
date: 2020-10-31 2:11:31
sidebar: "auto"
categories:
  - "Git"
tags:
  - "Github"
  - "Git"
---

## 构建一个Angular应用
```shell
ng new ea-music
cd ea-music
```


## git初始配置
```git
git init
git config user.name tuiu
git config user.email 13719283454@163.com
git remote add ea git@github.com:tuiuQ/ea-music.git
```


## 第一次推送
```git
git checkout -b main
git add .
git commit -m "first commit"
git pull ea main -allow-unrelated-histories
git push ea main
```

## 新建配置环境分支

```git
git checkout -b config-env
```
