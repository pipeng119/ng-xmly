## 一、准备工作 2021 年 3 月 10 日 10:12:52

<br/>

1. 关于样式

   - reset.css
   - layout.css
   - npm i normal.css
   - index.css import 上面所有的 css，删除原本在项目根目录下的`style.scss`文件,并在`angualr.json`中引入
   - 在根目录下的`index.html`中引入在线(正式上线前，可不用下载到本地，使用在线地址即可) iconfont 的 css 样式

## 二、 进入开发阶段

<br>

1. 书写 header 组件
2. 书写面包屑 breadcrumb 组件

   - 模仿 ng-zorro 中的面包屑导航，采用两个单独的组件组合成当前组件的方式。分别为 breadcrumd 和 breadcrumd-item
   - 实现调用本组件时，可以配置箭头内容及样式——可以传递html模板进来用于渲染
