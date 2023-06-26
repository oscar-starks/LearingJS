class MyClass{
    constructor(first_name, second_name, last_name, age){
        this.first_name = first_name;
        this.second_name = second_name;
        this.last_name = last_name;
        this.age = age;

    }

    ageMethod(){
        const statement = this.first_name +"'s age is " + this.age;
        console.log(statement)
        return statement;
    }
}

const my_object = new MyClass("Jefferson", "John","Jason", 50);
var statement = my_object.ageMethod();
// console.log(statement);

/*
this section is for inheritance classes
*/
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    test_function() {
      return 'I have a ' + this.carname;
    }
  }

//   getters and setters

class NewCar {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
const car_object = new Car("Ford");
console.log(car_object.cnam);


// inheritance
 
var car_instance = new Car("benz");
console.log(car_instance.test_function());
  
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show_this() {
        return this.test_function() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show_this());


 