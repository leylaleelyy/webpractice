# 前端小白的练习
## 立flag，每天点亮Github

## 2019.10.8
### js实现轮播图

###轮播效果的原理
css设置样式的时候

#### 图片部分的布局实现

首先创建一个列表

然后给列表的ul设置position为relative，而列表中的每一个li设置为absolute，从而使得每一个item叠加在一起

接着，主要切换的思想是根据类名来改变样式，即当切换到当前图片的时候，给item增加一个.active的类名。通过设置z-index来使得它显示再最上层。**:nth-child()**用于class名之后,表示拥有这个class元素的第几个，在本例中，用来给item设置不同的样式

同时设置button按钮显示在最上层

#### 点击跳转至确定页码的按钮布局实现
依然是创建一个列表point-list，然后设置position:absolute，根据最外层容器wrap来定位，设置一个很大的z-index，使得它表现在最上层。对于point设置float使得它排成一排，通过设置.active来使得它表示不同的样式

### JavaScript的函数实现功能
#### 获取元素
获取到items数组，points数组，两个btn元素，然后来思考给它们添加函数以及监听事件。

####逻辑思想
`var index=0；`
初始设置index值为0，表示第0张图片和第0个point，通过使得第index张元素拥有active类名，来改变样式呈现，即改变z-index的值（或者可以来设置display）

##### 设置函数

`clearActive()`用于清空active类，即通过遍历的操作，来清除所有数组原始的active类，首先执行清空，再执行添加

`goIndex()`即给第index个元素添加active类名，所以在这个函数伊始，嵌套上一个清除函数

`goNext()`跳转到下一张函数，点击按钮，然后index++，然后执行goIndex()函数。但在此有if判断，如果index超过了数组长度-1，那么，index置为0，即跳转到第0张，从而实现一个轮回的功能

`goPre()`原理同上，不过是index--逻辑判断是index==0的时候设置为length-1

#### 给获取的元素绑定监听事件
`goNextBtn.addEventListener('click',function(){goNext();})`
绑定一个点击的事件，执行匿名函数，即执行goNext()函数

`goPreBtn`同理

直到这里初步实现了点击pre，next来跳转切换

###实现点击point跳转
首先遍历points，给每一个函数绑定点击事件，

_事件中的执行函数_

`var pointIndex=this.getAttribute('data-index');`获取当前标签的属性值，HTML5标签的设置给跳转的这个标签设置`data-index=n`n为排列值

然后把pointIndex的值传给Index，设置了index的值，执行goIndex(),从而完成定向的跳转

### 实现自动轮播
通过设置时间函数`setInterval(function(),setTime)`来实现

#### 时间函数里的执行函数的逻辑
程序伊始，初始化`var time=0;`
```js
setInterval(function(){
  time++;
  if(time==20){
    goNext();
    time=0; 
  }
},100)
```
初始化time=0之后，setInterval函数每个100ms，对time实现一次累加，若没有达到20，继续累加，否则执行goNext()函数，也就是说，每过两秒，执行一次goNext();

设置time变化的目的，是为了点击切换的舒适

于是在for遍历points最后，在执行了goIndex过后，重置time=0；

## 2019.10.9
### 2048实现（模块化开发）