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
console.log(statement);