var dom=document.getElementById('clock');
var ctx=dom.getContext('2d');
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;
var rem=width/200;

function drawBackground() {
  ctx.save();
  ctx.translate(r,r);//画一个圆
  ctx.beginPath();//起始路径
  ctx.lineWidth=10*rem;
  ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);//圆心坐标
  ctx.stroke();//显示路径

  var hourNumber=[3,4,5,6,7,8,9,10,11,12,1,2];
  ctx.font=18*rem+'px Arial';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  hourNumber.forEach(function (number,index) {
    var rad=2*Math.PI/12*index;//计算弧度
    var x=Math.cos(rad)*(r-30*rem);
    var y=Math.sin(rad)*(r-30*rem);
    ctx.fillText(number,x,y);
  });
  for (var i=0;i<60;i++){
    var rad=2*Math.PI/60*i;//计算弧度
    var x=Math.cos(rad)*(r-18*rem);
    var y=Math.sin(rad)*(r-18*rem);
    ctx.beginPath();
    if(i%5===0){
      ctx.fillStyle='#000';
      ctx.arc(x,y,2*rem,0,2*Math.PI,false);
    }else {
      ctx.fillStyle='#ccc';
      ctx.arc(x,y,2*rem,0,2*Math.PI,false);
    }
    ctx.fill();
  }
}

function drawHour(hour,minute) {
  ctx.save();//保存环境
  var rad=2*Math.PI/12*hour;
  var mrad=2*Math.PI/12/60*minute;
  ctx.rotate(rad+mrad);//旋转角度
  ctx.lineWidth=6*rem;
  ctx.lineCap='round';
  ctx.beginPath();
  ctx.moveTo(0,10*rem);//下移动一点，形成尾巴
  ctx.lineTo(0,-r/2);
  ctx.stroke();//画出这条线
  ctx.restore();//还原环境
}

function drawMinute(minute) {
  ctx.save();
  var rad=2*Math.PI/60*minute;
  ctx.rotate(rad);
  ctx.lineWidth=3*rem;
  ctx.lineCap='round';
  ctx.beginPath();
  ctx.moveTo(0,10*rem);//下移动一点，形成尾巴
  ctx.lineTo(0,-r+30*rem);
  ctx.stroke();//画出这条线
  ctx.restore();
}
function drawSound(sound) {
  ctx.save();
  ctx.fillStyle='red';
  var rad=2*Math.PI/60*sound;
  ctx.rotate(rad);
  ctx.moveTo(-2*rem,20*rem);
  ctx.lineTo(2*rem,20*rem);
  ctx.lineTo(1,-r+18*rem);
  ctx.lineTo(-1,-r+18*rem);
  ctx.fill();
  ctx.restore();
}

function drawDot() {
  ctx.beginPath();
  ctx.fillStyle="write";
  ctx.arc(0,0,3*rem,0,2*Math.PI,false);
  ctx.fill();
}


function draw() {
  ctx.clearRect(0,0,width,height);
  var now=new Date();
  var hour=now.getHours();
  var minute=now.getMinutes();
  var sound=now.getSeconds();
  drawBackground();
  drawHour(hour,minute);
  drawMinute(minute);
  drawSound(sound);
  drawDot();
  ctx.restore();
}
draw();
setInterval(draw,1000);
