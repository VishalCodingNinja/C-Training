//typescript introduce two new features :
//one of the more important feature is Decorator:
//Decorators:are functions that can be attached to classes ,functions (methods),property and then work with these classes,functions,property or transform them.
//so it is kind of meta programming 
//it gives an chance to extands a class to adding an extra functionality simply adding a little thing



//what we have to do is to log a decorator which logs the imformation about the class
//or as a class decorator does about the constructor of this class
//a decorator is just a function we create so :
//now then it depends where we want to append this decorator the arguments depends on that
//now this is decorator attached to a class
//the decorator attached to a class will get one argument by typescript
//decorator are typescript feature ,typescript manages which arguments passes to a decorator depending to what this decorator attached to 


//function logged(constructorFn: Function)//thats all typescript passes to the decorator ..we can not change it ,if we attach the decorator to a class it will get one argument ,that one argument is constructor function of this class
//{
//    console.log(constructorFn);//it will log constructor function of Person class 
//    //here in this funciton type script gives a reference to the constructor function 
//}

//@logged //we do attach decorator by adding an add sign and then the name of the function 
//class Person {//to remove this warning we have to go to the tsconfig.ts then add one more parameter in compilerOptions ---"exprimentalDecorators":true
//    constructor() {
//        console.log("hi");//if we will give explicitly constructor then it will print this constructor
//    }
//}

////not only we can create a decorator like this but we can create a factory 
//function logging(value: boolean) {//this function can use to return a decorator function depending to values true or false
//    return value ? logged : null;
//}
//@logging(true)//in decorator means if true it will log something that is present in logged ..now here we are calling like a function with parantheses 
//class Car { }//if are giving here false there will be nothing
////@logging means attach the result of this function for execution which is null if we set it to false


//Advanced:
//function printtable(constructorFn: Function) {//here prototype is of the constructor function 
//    //adding new method to the prototype
//    constructorFn.prototype.print = function () {
//        console.log(this);//each object created based in the class which has the printable decorator will automatically recieved print method because we are adding it to the prototype here 
//    }//this print method allows it to print itself to the console
//}
//@printtable
//class Plant {
//    name = "Yello plant";//its an yellow plant because all plants are green hw wants to be unique

//}
//const plant = new Plant();
//<any>plant.print();//so we have to cast it explicitly other wise TS will not recognise the print method..its a little bug it seams now

////so the prototype of the constructor function(printable) we add the print method




//2.1 we can add multiple decorator 
//@logging(true)
//@printable
//class Plant { }
//const plant = new Plant();
//(<any>plant).print();

//it is simple funciton ..but what type of decorator it is it depends where we want to attach this funciton as a decorator and waht does depend on that 
//which arguments can be used by this function  



////Method decorators:
//function editable(value: boolean) {//descriptor=:make a property configurable,enumerable,writable,get etc
//    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
//        descriptor.writable = value;
//    }
//}
////Property Decorator:
//function overwritable(value: boolean) {
//    return function (target: any, propName: string): any{
//        const newDescriptor: PropertyDescriptor = {
//            writable: value
//        }
//        return newDescriptor;
//    }

//}
//class Project {
//    @overwritable(false)
//    projectName: string;
//    constructor(name: string) {
//        this.projectName = name;
//    }
//    @editable(false)//it will block editating of this method 
//    calcBudget() {//now we will try to make it non overdidable 
//        console.log(1000);
//    }

//}

//const project = new Project("Super Project");
//project.calcBudget();
//project.calcBudget = function () {//function overriding //after adding the @editable this overiding does not work
//    console.log(2000);
//}
//project.calcBudget();




////parameter decorator:
//function printInfo(target: any, methodName: string, paramIndex: number) {
//    console.log("target", target);
//    console.log("methodName", methodName);
//    console.log("paramIndex", paramIndex);
//}
//class Course {
//    name: string;
//    constructor(name: string) {
//        this.name = name;
//    }
//    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
//        if (printAll) {
//            console.log(100000);
//        }
//        else {
//            console.log(20000);
//        }
//    }
//}


//const course = new Course();
//course.printStudentNumbers("anything", true);
//course.printStudentNumbers("anythong", false);

