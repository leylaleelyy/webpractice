# 命名规则
## 项目命名
全部小写，_下划线分隔，有意义的单词

## 目录命名
同项目命名
有复数结构 +s

## JS文件命名
同项目命名
？？？组件还是首字母大写好

## CSS，SCSS，HTML
同项目命名


# HTML
## 语法
* 缩进
* 嵌套的节点需要缩进
* 属性上，使用双引号
* 属性名全部小写，用中划线-分隔
* / 闭合，在组件里不写会报错

## HTML5的一些固定
### DOCTYPE
最好大写
### lang属性
帮助语音翻译，可以查

## 引入CSS，JS
不需要指明type

```html
<link rel=“stylesheet” href=“code_guide.css”>
<style>...</style>
<script src=“code_guide.css”></script>
<script>...</script>
```

## 属性顺序
1. class
2. id
3. name
4. data-*
5. src、for、type、href、valve、max-length、max、min、pattern
6. placehorder、title、alt
7. aria-*、rola
8. required、readonly、disabled

class是为高可复用组件设计的，放在第一个
id是具体的，少用，第二位

## JS生成标签
JS生成标签会使得内容更难查找，编辑

## 减少标签的嵌套
避免多余的父节点
比如不要在span里嵌套img；直接img
不要用span设定文字的高度什么的，直接用属性完成


# CSS、SCSS
## 空格
#### 不需要空格
* 属性名后
* 多个规则的“,”前
* !important的！后
* 属性值中（）前后
* 行末不要多余空格

#### 需要空格
* 属性值前面
* 选择器’>,+,~’前后
* {前
* ！前
* @else前后
* 属性值中”,”后
* 注释前后

## 空行
* 文件最后保留一个空行
* }后跟一个空行
* 属性之间的空行

## 换行
不需要
* “{”前

需要
* 属性
* 多个规则分隔

```css
.element,
.dialog {
    ...
}
```

## 引号
* 最外层统一双引号
* url的内容
* 属性选择器中的属性值

## 命名
* 类名小写，中划线分隔
* id驼峰式命名
* SCSS中变量、函数、混合、placeholder采用驼峰式命名

## 属性声明顺序

```css
.order {
    display:block;
    float:right;
    
    position:absolute;
    top:0;
    right:0;
    .
    .
    .
    z-index:100;
    
    margin
    box-sizing
    border: ;
    border-radius:3px;
    width:
    height:
    
    font:
    line-height:
    text-align:
    
    color:
    background-color:
    
    opacity
    
    transition
    
    animation
}
```

## 媒体查询
需要查询的附近

## 杂
* 不允许有空规则
* 元素选择器用小写字母
* 小数点不用0
* 0后不加单位
* 尽量少用*选择

# JavaScript
缩进，空格，分号
最外层统一单引号

## null
#### 适用
* 初始化一个将来可能被复制为对象的变量
* 与已经初始化的变量做比较
* 作为一个参数为对象的函数的调用传参
* 作为一个返回对象的函数的返回值

#### 不适用
* 不要用null来判断函数调用时是否传参
* 不要与未初始化的变量做比较
