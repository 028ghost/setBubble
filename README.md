## 预览效果
#### [预览地址](http://codepen.io/ghost028/pen/EPVvqo)

##1.调用JS
> 在\</body>里加入\<script src="js/creatBubble.js"></script>

##2.HTML/CSS结构

```html
<a href="#" class="set-link">ENTER</a>
```

```css
.set-link {
  position: relative;
  overflow: hidden;
  -webkit-transform: translateZ(0);
}
.set-link em {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
  -webkit-transform: scale(0);
  opacity: 0;
  -webkit-animation: radiusRun 0.6s cubic-bezier(0, 0, 1, 1) forwards;
}

@-webkit-keyframes radiusRun {
  0% {
    -webkit-transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(2);
    opacity: 0;
  }
}
```

##3.接口
* *号为必填项
```javascript
    setResponse({
    className: 'set-link',   //  调用的class样式名
    tagName:'a', //作用在a标签名上
    bgColor:'#fff'  //涟漪背景色，默认为白色
});
```
##4.作者
* Ghost
* QQ：200581882
