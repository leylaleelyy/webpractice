# ECMAScript新功能
## 用let代替var声明变量
var声明变量可以反复声明，用后声明的覆盖
let声明变量在同一作用域只能声明一次，否则会报错
const用于声明只读
但是针对对象类型，允许修改或者重新赋值对象的属性，但是变量本身的引用（内存中的引用地址）不可以修改。不能对这个对象重新赋值
```js
const jsFramework={
    name:'Angular'
};
jsFramework.name='React';
```
这是可行的，但是以下

```js
jsFramework={
    name:'vue'
};
```
这是会异常报错的

## 箭头函数
极大的简化了函数的语法

```js
var circleAreaES5=function circleArea(r){
    var PI=3.14;
    var area=PI*r*r;
    return area;
};
```
简化可以去掉function，去掉return

```js
const circleArea= r =>3.14*r*r;
```
不接收参数的时候用()

## 函数的参数是默认值
可以给函数的参数定义默认值
但是传入参数之后，会覆盖默认值

## 声明展开和剩余参数
ES5可以用apply()函数把数组转化为参数
ES6

```js
let params=[3,4,5];
console.log(sum(...params));
//等价于
console.log(sum.apply(undefined,params));
```
也可以替代arguments，当作剩余参数使用

```js
function restParamaterFunction(x,y,...a){
    return (x+y)*a.length
};
//等价于
function restParamaterFunction(x,y){
    var a=Array.prototype.slice.call(argument,2);
    return (x+y)*a.length;
};
```

## 增强的对象属性，数组解构
一次初始化多个变量

```js
let [x,y]=['a','b'];
[x,y]=[y,x];//排序算法
```
属性简写功能，对象解构

```js
let [x,y]=['a','b'];
let obj={x,y};
//等价于
var x = 'a';
var y = 'b';
var obj2 = { x: x, y: y };
console.log(obj2); // { x: "a", y: "b" }
```

## 使用类面向对象编程

```js
class Book{
    constructor(title,pages,isbn){
        this.title=title;
        this.page=page;
        this.isbn=isbn;
    }
    printIsbn(){
        console.log(this.isbn);
    }
}
```

### 继承

```js
class ITBook extends Book{//使用extends关键字扩展一个类并继承它的行为
    constructor (title,pages,isbn,technology){
        super(title,pages,isbn);//在构造函数中，使用super关键字引用父类的构造函数
        this.technology=technology;
    }
    printTechnology(){
        console.log(this.technology);
    }
}
let jsBook=new ITBook('learn js','200','1234','JavaScript');

```

## 模块
Node.js使用require语句（CommonJS模块）ES5也可

```js
    const circleArea = r => 3.14 * (r ** 2);
    const squareArea = s => s * s;
    export { circleArea, squareArea }; // {1}
```

```js
    import { circleArea, squareArea } from './17-CalcArea'; // {2}
    console.log(circleArea(2));
    console.log(squareArea(2));

```
export表导出示暴露了两个函数，以便其他文件使用，import导入

在导入成员后对其重命名。
   `import { circleArea as circle } from './17-CalcArea';`
也可以在导出函数时就对其重命名。
    `export { circleArea as circle, squareArea as square };`
这种情况下，在导入被导出的成员时，需要使用导出时重新命名的名字，而不是原来内部使 用的名字。
    `import { circle, square } from './17-CalcArea';`
  同样，我们也可以使用其他方式在另一个模块中导入函数。
  
```js
import * as area from './17-CalcArea';
console.log(area.circle(2));
console.log(area.square(2));
```
把整个模块当作一个变量导入
如同使用类的属性和方法调用被导出成员

模块中只有一个成员，使用`export default`导出

# 数组
## 二维
```js

    let averageTemp = [];
    averageTemp[0] = [72, 75, 79, 79, 81, 81];
    averageTemp[1] = [81, 79, 75, 75, 73, 73];
```

# 栈
## 创建一个JavaScript数据结构和算法库