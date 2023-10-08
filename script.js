 const canvas = document.getElementById('canvas1');
 const ctx = canvas.getContext('2d'); 
 canvas.width = window.innerHeight;
 canvas.height = window.innerHeight;
 const particlesArray = [];
 window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 });

const mouse = {
    x: undefined,
    y: undefined,
} 
  
canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle{
    constructor(){
        //this.x=mouse.x;
        //this.y=mouse.y;
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height; 
        this.size=Math.random() * 5 + 1;
        this.speedX = Math.random()*3-1.5; 
        this.speedY = Math.random()*3-1.5;  
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle  ='white';
        ctx.beginPath();
        ctx.arc(this.x, this.y,2,0,Math.PI *2);// change radius
        ctx.fill();
    }
}

function init(){
    for (let i=0; i<5000; i++){ //change count
        particlesArray.push(new Particle());
    }
}
init();

function handleParticles(){
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
    handleParticles();
    requestAnimationFrame(animate); 
}
animate();