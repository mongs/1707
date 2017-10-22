### 全局安装vue-cli

```
$ npm i vue-cli -g
```

装完后在cmd界面中输入`vue`，如果出现下图界面说明安装成功![vue.png](http://owrx35qte.bkt.clouddn.com/vue.png)

### 初始化项目

```
$ vue init webpack <项目名>
```

如下图:![router.png](http://owrx35qte.bkt.clouddn.com/router.png)

如果需要vue-router路由插件,当前项写`y`,否则写`n`

如果需要eslint代码规范检测工具,下图选择`y`,否则`n`
![eslint.png](http://owrx35qte.bkt.clouddn.com/eslint.png)

之后的测试工具选项均写`n`不安装
最终结果如下:
![vue-init.png](http://owrx35qte.bkt.clouddn.com/vue-init.png)

### 安装依赖的包

```
$ cd <项目名>
$ npm install
```

### 运行项目

```
$ npm run dev
```

使用`npm run dev` 启动项目, 浏览器会自动打开项目页面, 并有热更新