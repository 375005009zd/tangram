window.onload = function(){
    var canvas = document.getElementById('tangram');
    canvas.width = 600;
    canvas.height = 600;
    var ctx = canvas.getContext('2d');

    //第一个绿色倒三角型
    // ctx.lineTo(300,300);//
    // ctx.moveTo(600,600);
    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.lineTo(600,0)
    ctx.lineTo(300,300)
    ctx.fillStyle = '#c8f263';
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.lineTo(0,600)
    ctx.lineTo(300,300)
    ctx.fillStyle = '#61b7d2';
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(600,600)
    ctx.lineTo(300,600)
    ctx.lineTo(600,300)
    ctx.fillStyle = '#fdc521';
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(0,600)
    ctx.lineTo(300,600)
    ctx.lineTo(150,450)
    ctx.fillStyle = '#ff9ccf';
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(150,450);
    ctx.lineTo(300,600);
    ctx.lineTo(450,450);
 
    ctx.fillStyle = '#a599c1';
    ctx.fill();
    ctx.closePath()

    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(450,150);
    ctx.lineTo(450,450);
  
 
    ctx.fillStyle = '#feea13';
    ctx.fill();
    ctx.closePath()

    
    ctx.beginPath();
    ctx.moveTo(600,0);
    ctx.lineTo(450,150);
    ctx.lineTo(450,450);
    ctx.lineTo(600,300);
  
 
    ctx.fillStyle = '#ff5063';
    ctx.fill();
    ctx.closePath()
}