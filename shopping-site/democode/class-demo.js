class Parent {
  // parent's constructor function
  constructor(){
    // yaha "this" represents the context in which this constructor got called    
    this.father='vinod';
  
  }

}

class Child extends Parent{
  
  // child's constructor function
  constructor(name){
    
    // yaha super will call the constructor function
    // of the parent class. Now the context will be shared with the parent
    super();
    
    this.name = name;
  
  }

}

const child1 = new Child('Ruchika');
const child2 = new Child('Aditya');
const child3 = new Child('Saarthi');

console.log('child1 = ', child1);
console.log('child2 = ', child2);
console.log('child3 = ', child3);