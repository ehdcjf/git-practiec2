// let foo ={ name : 'foo'}; 
// foo.pototype.a = 'hello proto!'; 
// console.log(foo.a); 

// function foo2(){ 
//   this.name = 'foo'; 
// }

// foo3 = function(){ 
//   this.name = 'foo',
// }

// foo4 = ()=>{ 
//   this.name = 'foo'
// }

// function foo(){}
// foo.prototype.txt = 'hello proto~'
// let bar = new foo(); 
// foo.prototype.run=()=>{
//   console.log("호다닥")
// }; 

// bar.txt = " good bye proto"; 


// let eownd = new foo(); 
// let angus = new foo(); 

// eownd.run=()=>{ 
//   console.log("후다닥")
// }

// angus.run(); 
// eownd.run(); 




// console.dir(bar.txt);
// console.dir(bar.constructor);
// console.dir(foo);
// console.dir(foo.prototype);
// console.log(bar.__proto__);

/*
prototype 안에 객체에는 마음대로 속성 값을 add delete 가능하다. 
그냥 객체처럼 맘대로 가능 
//에로우함수는 프로토타입이 없음! 
//funcion을 만들면 프로토타입이 생김! 
//객체를 만들꺼면 팡션으로 만들어주자^^ 
*/


// let a ={ number1:1,}
// let b ={ number2:2,}
// let c ={ number3:3,}


// c.__proto__=a; 
// a.__proto__=b; 


// console.log(c.number1);
// console.log(c.number2);

/*
const 자동차 = { 
  휠:4, 
  drvie(){ 
    console.log("붕붕붕")
  }
};

const 아반떼 ={ 
  색상: '실버',
  네비: false,
  __proto__:자동차
}

const 소나타 ={ 
  색상: '화이트',
  네비: false,
  __proto__:자동차
}

const 그랜져 ={ 
  색상: '블랙',
  네비: true,
  __proto__:자동차
}



const  Car = function(color,navi){
  this.color =color; 
  this.navi =navi; 
}

Car.prototype.wheel = 4; 
Car.prototype.drive = function(){ 
  console.log("skrrrrrt"); 
}

let truck = new Car('blue',true);
let bus = new Car('green',true);
let texi = new Car('white',true);

function 자동차(){ 
  색:"파랑";
  네비: false; 
  
}

console.log( trucek.toString); 


function car(color,navi){ 
  this.color = color; 
  this.navi = navi;
}

car.prototype.wheel = 4; 
car.prototype.drive = function(){ 
  console.log("부릉부릉");
}

let avante = new car('blue', true);
let sonata = new car('pink', false);
let grandeur = new car('black', true);

*/

/*
function User(name,age){
  this.name = name; 
  this.age = age; 
}
User.prototype.showName = function(){
  console.log(this.name);
}

const lee = new User('lee', 80); 

class User2{ 
  constructor(name,age){ 
    this.name = name; 
    this.age = age; 
  }

  showName(){ 
    console.log(this.name); 
  }
}

const kim = new User2("kim",50);
*/

/////상속 
//////////////////////////////////////////////////////과제 아래 클래스 코드를  prototype, __proto__  써서 똑같이 만들기. //////////////////////

///부모 클래스 ///
class Car{ 
  constructor(color){
    this.color = color;
    this.wheels = 4; 
  }

  drive(){ 
    console.log('부릉부릉')
  }

  stop(){ 
    console.log("끽~~~");
  }
}

//자식  클래스//
class Avante extends Car{ 
  showName(){ 
    console.log('아반떼'); 
  }
}

//자식으로 만든 객체 
const myCar = new Avante('pink'); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function 차(color){ 
  this.color = color; 
}

차.prototype.wheels = 4; 

차.prototype.drive = function(){ 
  console.log('붕붕붕'); 
}

차.prototype.stop = function(){ 
  console.log('부웅'); 
}


function 소나타(color){
  this.color = color; 
  // 차.apply(this,arguments);
} 

소나타.prototype.showName=function(){ 
  console.log("세계제일자동차(노조) 현기차")
};



소나타.__proto__ =차; 




const yourCar = new 소나타('red'); 


