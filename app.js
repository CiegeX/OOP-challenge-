


//  const kmToMiles = (...km) => {
//     const mi = [];

//     for (let i=0; i < km.length ; i++)
//     mi.push(km[i] * 1.60934);

//     return mi;
//  }

//  console.log(kmToMiles(20, 10, 30));



 // Define a generic Animal class
class Animal {
   constructor(name) {
     this.name = name;
   }
 
   call() {
     console.log('Generic animal sound');
   }
 }
 
 // Define a Dog class that extends Animal
 class Dog extends Animal {
   constructor(name) {
     super(name);
   }
 
   call() {
     console.log('Woof, woof!');
   }
 }
 
 // Define a Cat class that extends Animal
 class Cat extends Animal {
   constructor(name) {
     super(name);
   }
 
   call() {
     console.log('Meow!');
   }
 }
 
 // Define a Cow class that extends Animal
 class Cow extends Animal {
   constructor(name) {
     super(name);
   }
 
   call() {
     console.log('Moo!');
   }
 }
 
 // Create instances of different animals
 const myAnimal = new Animal('GenericAnimal');
 const myDog = new Dog('Fido');
 const myCat = new Cat('Whiskers');
 const myCow = new Cow('Betsy');
 
 // Create an array of animals
 const animals = [myAnimal, myDog, myCat, myCow];
 
 // Iterate through the array and call the `call` method on each animal
 animals.forEach((animal) => {
   console.log(`Animal: ${animal.name}`);
   animal.call();
 });
 
 const rectangle ={
  Name: 'Rectangle 1' ,
width: 20,
height: 10,
Area: function () {
  return this.width * this.height
}

 }

 console.log( rectangle.Area())




function Alpha (name, PPG, height ) {
this.name = name,
this.PPG = PPG,
this.height = height

}

const Man = new Alpha('Jordan', 23 , 80);

console.log(Man.PPG);