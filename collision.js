let canvas =document.querySelector("canvas");

canvas.width=window.innerWidth; 
canvas.height=window.innerHeight; 
 
let c = canvas.getContext('2d'); 


// variables
let mouse={ 
    x:10, 
    y:10
}

let colors= [
    '#E29C92',
    '#F6B3B9',
    '#FCDCC5',
    '#B0D9CD',
    '#63AAB5'
]


//Event Listeners 

addEventListener("mousemove", (event)=>{
    mouse.x=event.clientX; 
    mouse.y=event.clientY
}); 

addEventListener("resize", ()=>{
    canvas.width=innerWidth;
    canvas.height=innerHeight; 

    init(); 
});

//Utility functions 
function randomIntFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min); 
}

function randomColor(colors){ 
    return colors[Math.floor(Math.random()*colors.length)]; 
}

function getDistance(x1,y1,x2,y2){
    let xDistance = x2-x1;  
    let yDistance = y2-y1;
    
    return  Math.sqrt(Math.pow(xDistance,2)+Math.pow(yDistance,2)); 
}

//Objects 
function Circle(x,y,radius,color){ 
    this.x = x; 
    this.y = y; 
    this. radius = radius; 
    this. color = color; 

    this.update=function(){ 
        this.draw(); 
    };

    this.draw= function(){ 
        c.beginPath(); 
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false); 
        c.fillStyle = this.color; 
        c.fill(); 
        c.closePath(); 
    };
}

//implementation 
let circle1;
let Circle2; 
function init(){
    circle1= new Circle(innerWidth/2,innerHeight/2,100,'black');  
    circle2= new Circle(undefined,undefined,30,'pink');  
}


function animate(){ 

    requestAnimationFrame(animate); 
    c.clearRect(0,0,canvas.width,canvas.height); 

    circle1.update();
    circle2.x=mouse.x; 
    circle2.y=mouse.y; 
    circle2.update(); 
    if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y)<circle1.radius+circle2.radius){
        circle1.color='pink';
    }else{ 
        circle1.color='black';
    }
    console.log(getDistance(circle1.x,circle1.y,circle2.x,circle2.y));

}

init();
animate(); 