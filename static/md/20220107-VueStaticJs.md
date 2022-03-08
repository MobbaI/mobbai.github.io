## 引入方式

需要将js放到public目录下，在public目录下的文件不会被编译

同时不要使用import xxx from '相对路径/xxx.js' 去引入js，因为import使用相对路径会默认对该文件进行编译

在public目录下的index.html中，按照原生的js文件引入

```html
<script src="./xxx.js"></script>
```

**注意**

js文件内数据需要挂在window上

```js
winodw.dataName = []
```

vue项目中，main.js里直接使用

```js
Vue.prototype.$dataName = window.dataName
```

