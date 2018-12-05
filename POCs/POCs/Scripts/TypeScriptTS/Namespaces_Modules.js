//Namespace:
//1.Organise Application with JS Objects
//2.can split up over multiple files
//3.No modules Loader required 
//4.Dependencies get difficult to mnanage in bigger application 
//5. we can use just by using script tag in index.html
//Modules:
//1. Organise Application with real Modules
//2. can split up over multiple files 
//3. Module Loader required.ex: common.js always need a module loader 
//4. explicit dependencies declaration(we clearly know which file has which dependencies and dont need to worry about which files we are importing files in right order, we need to change something when we add a file ...
//    it is nicer to use in medium size or big application )
//1. namespace importing syntax:three forward slash then html like tag ///<reference path="circleMath.ts"/>
/////<reference path="circleMath.ts"/>
/////<reference path="rectangleMath.ts"/>
//var pPI = 2.99;
//console.log(rectangleMath.calculateRectangleArea(10, 20));(??????????why it is showing error Uncaught error :ReferenceError)
//console.log(circleMath.calculateCircleArea(100));(????? how to give --outfile command ?)
//console.log(rectangleMath.Circle.calculateCircumference(20));
//1.2 import keyword in namesapce 
/////<reference path="circleMath.ts"/>
//import CircleMath = circleMath.Circle;
//console.log(CircleMath.calculateCircumference(12));
//MOdules:
//we can export const ,function,class,object almost everyting (??????? how to do this why this was showing exports not define)
//import { PI } from "./MathModuleExample";
//console.log(calculateRectangle(10, 20));
//console.log(PI);
//console.log(calculateCircumference(23));
//type script checks that what we are importing ..we are importing relative path(.math)/absolute path(@angular/core..it will be look up into the node module folder by the time )
//we can have local import or global imports that all looks different 
//what is tsconfig.ts why do we use it ?
//compilerOprions target
//{
//    "compilerOptions":
//    {
//        "module": "commonjs",(here if we put amd then we can compile every thing)
//            "target": "es5",
//            "noImplicitAny": "false",
//                "sourceMap": false
//    },
//    "exclude": [
//        "node_modules"
//    ]
//}
//what is module loader?
//system.js universal dynamic module loader --loads ES6 modules ,AMD,CommonJS and global scripts in the browser and NodeJS
//it allows Browser to read the commands that by default it does not know ex:require 
//so we have to install the systemJS it will helps us to loads files/modules we need
//we need to install systemjs ..npm install systemjs --save
//now in index.html file we need not to import app.js we need to import system.js
//<script src="node_modules/systemjs/dist/systemjs"></script>
//then how to import our own code
//    <script>
//    //set our baseURL reference path
//    SystemJS.config{
//    baseUrl: '/',(only / becacuse all files are in root directory )
//    packages:{
//    '/':{
//       defaultExtension:'js'
//     }
//}
//});
////oads /js/main.js
//System.import('app.js');
//</script>
//we need module loader because the different modules we import are not understandable by native javascript so we need to use module loader 
//to import every thing from namespace we 
//import * as Circle form "./fileName"
//circle is an alias name
//defalut import :always import when ever you import particular file
//export default function calCircleArea(radius){return radius*redius*3.14}
//interfaces :its an contract that signed by an object that says gurantee you that i has certain property funcitons ..whatever 
//ex:
//function greet(person: any) {
//    console.log("hello ,"+person.name)
//}
//const person = {
//    name: "Max",//instead of name if the key of the person obejct is firstaname we will get undefined in upper consle.log(); so here we need a contract the what ever the obejct you will pass into the function greet it should have property name only so we make and interaface(contract) that has to follow by every one 
//    age:27
//}
//greet(person);
//so one solution of this problem is :
//function greet(person: { name: string })//now what ever object you pass here it should have name property it can have multiple property but name is compulsory
//{
//    console.log(person.name)//now at the start it will show error that it is not assignable to type {name:"string"} name is missing in argument type{firstName:string,age:number}
//}
//const person = {
//firstName:"Vishal",
//}
//after some days there is an requirement that you need one more function change name in that we have property name firstName so to resolve that either we have to change earlier method greet parameters or change the obejct property 
//function greet(person: { firstName: string })//now what ever object you pass here it should have name property it can have multiple property but name is compulsory
//{
//    console.log(person.firstName)//now at the start it will show error that it is not assignable to type {name:"string"} name is missing in argument type{firstName:string,age:number}
//}
//function changeName(person: { firstName: string }) {
//    person.name = "Anna";
//}
//const person = {
//    firstName: "Vishal",
//}
//so instead of changing again and again the parameters property we make an interface 
//the second solution is interface ..to define the type in the interface that should be available 
//interface NamedPerson {//contract ,requirement
//    firstName: string;
//}
//function greet(person: NamedPerson) {
//    console.log("Hello, " + person.firstName)
//}
//function changeName(person: NamedPerson) {
//    person.firstName = "Anna";
//}
//const Person = {
//    firstName: "Vishal",
//    age:27
//}
//greet(Person);
//changeName(Person);
//greet(Person);
//in this function not full filling the contract it will show the error
//interfaces and property:
//interface NamedPerson {//contract ,requirement
//    firstName: string;
//}
//function greet(person: NamedPerson) {
//    console.log("Hello, " + person.firstName)
//}
//function changeName(person: NamedPerson) {
//    person.firstName = "Anna";
//}
//const Person = {
//    firstName: "Vishal",
//    age:27
//}
//greet(Person);//like this there is no special checks
//greet({ firstName: "vishal", age: "27" });//when we are passing object literals then there is an special check whether it is fully follow contract or not  V8 ingen make an special check in this 
//so when this that each property is possible but not required so we will use ? in the property name in interfaces 
//interface NamedPerson
//{
//    firstName: string;
//    age?: number;//optional property
//}
//function greet(person: NamedPerson) {
//    console.log("Hello, " + person.firstName)
//}
//function changeName(person: NamedPerson) {
//    person.firstName = "Anna";
//}
//const Person = {
//    firstName: "Vishal",
//    age: 27
//}
//greet(Person);
//greet({ firstName: "Vishal", age: 23 });//now here it will not show any error..remember object literal strongly checked than object 
//there may be case where you dont know property name in advance in such a case type script has special notation to use. note:javascript key can be written as keys too
//interface NamedPerson {
//    firstName: string,
//    age?: number,//there it means its optional 
//    [propName: string]: any;//here we dont know the property and dont know type also and [] notation does not mean that its an array it is just flexible type notation
//    //[propName: string]: number;//here it means that we dont know the property name but we know type 
//}
//function greet(person: NamedPerson) {
//    console.log("hello" + person.firstName)
//}
//const person = {
//    firstName: "Vishal",
//    hobbies: ["Cooking", "Sports"]
//}
//greet(person);
//interface method (for objects)
//interface NamePerson {
//    firstName: string;
//    age?: number;
//    [propName: string]: any;
//    greet(lastName: string): void;
//}
//const person: NamePerson = {
//    firstName: "Vishal",
//    hobbies: ["Dancing", "sports","Coading"],
//    greet(lastName: string) {
//        console.log("hi my name is "+this.firstName+"  "+this.lastName)
//    }
//}
//person.greet("vishal");//output :vishal
//Using Interfaces with classes.
//interface NamePerson {
//    firstName: string;
//    age?: number;
//    [propName: string]: any;
//    greet(lastName: string): void;
//}
//class Person implements NamePerson {
//    firstName: string;
//    greet(lastName: string): void {
//        console.log(this.firstName+""+lastName)
//    }
//}
//const myPerson = new Person();
//myPerson.firstName = "Vishal ";
//myPerson.greet("singh");
//interfaces function types:
//function types:
//interface DoubleValueFun {
//    (number1: number, number2: number): number;
//}
//let myDoubleFunction:DoubleValueFun;//here we are using it as a type 
//myDoubleFunction = function (value1: number, value: number) {//if we make value1 or value as sting then it will show error saying incompitable types
//    return (value1 + value)*2;
//}
//console.log(myDoubleFunction(10, 20));
////Interfaces Inheritance:
//interface NamePerson {
//    firstName: string;
//    age?: number;
//    [propName: string]: any;
//    greet(lastName: string): void;
//}
//interface AgedPerson extends NamePerson {//we need all the methods and properties in this interface but we can add own property in this one
//    age: number;
//}
//const oldPerson: AgedPerson = { //here means that oldPerson is of type AgedPerson its an object literal and this person will have all the properties and methods of the NamePerson interface amd all property of AgedPerson
//    age: 22,
//    firstName: "Vishal Singh",
//    greet(lastName: string) {
//        console.log(lastName);
//        }
//}
//console.log(oldPerson);
//What happened what inheritance compiled
//how does interface NamedPerson get compiled in javascript??
//interfaces can not compiled at all it is just there to check our code during compilation ...JS does not know interfaces ..they are totally ignoted and converted to to JS code.
//it will give us error during compilation time or development time
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//1.0 Generic Function:
//the power of type script is that what type a property or variable has but also giving us flexibility writing such functions that can work many times
//why and what?
//simple generic:
//function echo(data: any) {//this function is king of generic function 
//    return data;
//}
//console.log(echo("vishal"));//here if we give length it will print the lenght of string but
//console.log(echo("22"));//in this if we will give then we will get undefined
//console.log(echo({ name: "max", age: "22" }).length);/undefined if we give length
//in this cases we are getting error because we have given amy as a data type is hard to compiler to knew that data type does not have length property  so it would be better if typescript know the property of data types
////better generics:
//function betterEcho<T>(data:T) {//t can be any letter so t make this funciton as generic ..this T is telling the typescript compiler that it function is generic type 
////now we can use T as a type 
//    return data;
//}
//console.log(betterEcho("Visahl"));
//console.log(betterEcho(22));//now if we try liek betterEcho(27). it will not show unavailabe methods in the number //here we will get compilation errpr length soes not exist
//console.log(betterEcho({ name: "Visahl", age: 27 }));//here also same story
////OR
//console.log(betterEcho<number>("27"));//error because we have told that it will be a number type and then we are give it an string  ie. data we are passing does not mathch this type 
////generics made our code more flexible and manageble by type script compiler 
//1.2 Built in generic types:
//const testResult: Array<number> = [1.94, 2.33];//by giving the type explicitly we are sure that we will not pass the wrong data type
//testResult.push(34.67);//will be inserted sucessfully
////testResult.push("string"); //it will show error
//console.log(testResult); 
//so array is generic type by default
//1.3 Arrays:
//function printAll<T>(args: T[]) {
//    args.forEach((element) => console.log(element));
//}
//printAll(["apple", "Banana"]);
//1.4 Generic Types:
//function betterEcho<T>(data: T) {
//    return data;
//}
//const echo2: <T>(data: T) => T = betterEcho;//every thing after : and before = are type declaration
////it tells the typescript that this const will hold the function where the input is one argument of type T and it will always return somthing that of T type 
////<T>(data: T) => T ..so here we can assign any funciton but here we are assigning echo function from the begining because this function exaclty match the data type
////echo2("something is here");
//console.log(echo2<string>("something"));//this is more explicit
////1.5 Generic Classes:
//class SimpleMath
//{
//    baseValue;
//    multiplyValue;
//    calculate() {
//        return this.baseValue * this.multiplyValue;
//    }
//}
//const simpleMath = new SimpleMath();
//simpleMath.baseValue = 100;
//simpleMath.multiplyValue = 200;
//console.log(simpleMath.calculate());//2000
//so the problem with this approach is that we if we give string in the baseValue in SimpleMath class then it will not show any error
//simpleMath.baseValue = "Freaky People Chew other people's brain";
//when we do console.log(simpleMath.calculate()); we will get NAN so this is a problem 
//so to avoid this problem we will use:---
//class SimpleMath<T>
//{
//    baseValue: T;
//    multiplyValue: T;
//    calculate(): number {
//        return +this.baseValue * +this.multiplyValue;//here the issue typescript has that the values we are getting may not be for multipication so we have to use + before variables
//    }
//}
////now if we do 
//new SimpleMath().baseValue = "Please TypeScript UnderStand this error";//again typescript can not understand the error but till this point we have created generic class
//so we can make more usefull by explicitly stating T should extends something 
//class SimpleMath<T extends number>//if we are using extends keyword then we can tell which types can be allowed allowed: basetypes
//{
//    baseValue: T;
//    multiplyValue: T;
//    calculate(): number {
//        return +this.baseValue * +this.multiplyValue;//here the issue typescript has that the values we are getting may not be for multipication so we have to use + before variables
//    }
//}
//new SimpleMath<number>().baseValue = "Finally typescript u understood what i want ..thanks regards Vishal";//it will now show errors ie string is not type of number
//class SimpleMath<T extends number|string>//we can give multiple parameters now it can be number or string
//{
//    basevalue: T;
//    multiplyvalue: T;
//    calculate(): number {
//        return +this.basevalue * +this.multiplyvalue;
//    }
//}
//const simpleMath = new SimpleMath<number | string>();
//simpleMath.basevalue = "10";
//simpleMath.multiplyvalue = 20;
//conclusion is we can use extends keyword to control which values can be pass we can control the thing
//for multiple Types 
//class SimpleMath<T, U extends number | string>{//here we can give class SimpleMath<T extends U,U extends number|string>{baseValue:T;multiplyValue:u;.....}
//    baseValue: T;
//    multiplyValue: U;
//    calculate(): number {
//        return +this.baseValue * +this.multiplyValue;
//    }
//}
//const simpleMath = new SimpleMath<string | number, string | number>();
//simpleMath.baseValue = "10";
//simpleMath.multiplyValue = 20;
//console.log(simpleMath.calculate());
//class SimpleMath<T extends number | string, U extends number | string>
//{
//    baseValue: T;
//    multiplyValue: U;
//    calculate(): number {
//        return +this.baseValue * +this.multiplyValue;
//    }
//}
//const simpleMath = new SimpleMath<string, number>();
//simpleMath.baseValue = "10";
//simpleMath.multiplyValue = 20;
//console.log(simpleMath.calculate());
//---------------------------------------------------------------------------------------------------------------------------
//class MyMap<T>{
//    private map: { [key: string]: T } = {};//means that map is an prpperty and its value can be an object which can have any key value is of type T
//    setItem(key: string,item:T) {
//        this.map[key] = item;
//    }
//    getItem(key: string) {
//        return this.map[key];
//    }
//    clear() {
//        this.map = {};
//    }
//    printMap() {
//        for (let key in this.map) {
//            console.log(key, this.map[key]);
//        }
//    }
//}
//const numberMap = new MyMap<number>();
//numberMap.setItem("APPLES", 10);
//numberMap.setItem("BANANA", 23);
//console.log(numberMap.getItem("apples"));//here we can not access length
//numberMap.printMap();
//numberMap.clear();
//numberMap.printMap();
//const numberMap = new MyMap<string>();
//numberMap.setItem("APPLES", "10");
//numberMap.setItem("BANANA", "20");
//console.log(numberMap.getItem("apples"));
//numberMap.printMap();
//numberMap.clear();
//numberMap.printMap();
//-----------------------------------------------------------------------------------------------------------------------------
//Documentation namespaces:
//Modules
//A note about terminology: It’s important to note that in TypeScript 1.5, the nomenclature has changed.“Internal modules” are now “namespaces”.“External modules” are now simply “modules”, as to align with ECMAScript 2015’s terminology, (namely that module X { is equivalent to the now - preferred namespace X {)
//Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.
//Modules import one another using a module loader. At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it. Well-known modules loaders used in JavaScript are the CommonJS module loader for Node.js and require.js for Web applications.
//In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well)
//Export
//Exporting a declaration
//Any declaration(such as a variable, function, class, type alias, or interface) can be exported by adding the export keyword.
////Validation.ts
//export interface StringValidator {
//    isAcceptable(s: string): boolean;
//}
////ZipCodeValidator.ts
//export const numberRegexp = /^[0-9]+$/;
//export class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//Export statements
//Export statements are handy when exports need to be renamed for consumers, so the above example can be written as:
//class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//export { ZipCodeValidator };
//export { ZipCodeValidator as mainValidator };
//Re-exports
//Often modules extend other modules, and partially expose some of their features. A re-export does not import it locally, or introduce a local variable.
//ParseIntBasedZipCodeValidator.ts
//export class ParseIntBasedZipCodeValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && parseInt(s).toString() === s;
//    }
//}
//// Export original validator but rename it
//export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
//Optionally, a module can wrap one or more modules and combine all their exports using export * from "module" syntax.
//  AllValidators.ts
//export * from "./StringValidator"; // exports interface 'StringValidator'
//export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
//export * from "./ZipCodeValidator";  // exports class 'ZipCodeValidator'
//Import
//Importing is just about as easy as exporting from a module.Importing an exported declaration is done through using one of the import forms below:
//Import a single export from a module
//import { ZipCodeValidator } from "./ZipCodeValidator";
//let myValidator = new ZipCodeValidator();
//imports can also be renamed
//import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
//let myValidator = new ZCV();
//Import the entire module into a single variable, and use it to access the module exports
//import * as validator from "./ZipCodeValidator";
//let myValidator = new validator.ZipCodeValidator();
//Import a module for side-effects only
//Though not recommended practice, some modules set up some global state that can be used by other modules.These modules may not have any exports, or the consumer is not interested in any of their exports.To import these modules, use:
//import "./my-module.js";
//Default exports
//Each module can optionally export a default export.Default exports are marked with the keyword default ; and there can only be one default export per module.default exports are imported using a different import form.
//default exports are really handy.For instance, a library like JQuery might have a default export of jQuery or $, which we’d probably also import under the name $ or jQuery.
//  JQuery.d.ts
//declare let $: JQuery;
//export default $;
//App.ts
//import $ from "JQuery";
//$("button.continue").html("Next Step...");
//Classes and function declarations can be authored directly as default exports. Default export class and function declaration names are optional.
//ZipCodeValidator.ts
//export default class ZipCodeValidator {
//    static numberRegexp = /^[0-9]+$/;
//    isAcceptable(s: string) {
//        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
//    }
//}
//import validator from "./ZipCodeValidator";
//let myValidator = new validator();
//StaticZipCodeValidator.ts
//const numberRegexp = /^[0-9]+$/;
//export default function (s: string) {
//    return s.length === 5 && numberRegexp.test(s);
//}
//Test.ts
//import validate from "./StaticZipCodeValidator";
//let strings = ["Hello", "98052", "101"];
//// Use function validate
//strings.forEach(s => {
//    console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
//});
//OneTwoThree.ts
//export default "123";
//Log.ts
//import num from "./OneTwoThree";
//console.log(num); // "123"
//export = and import = require()
//The export = syntax specifies a single object that is exported from the module. This can be a class, interface, namespace, function, or enum.
//When exporting a module using export =, TypeScript - specific import module = require("module") must be used to import the module.
//ZipCodeValidator.ts
//let numberRegexp = /^[0-9]+$/;
//class ZipCodeValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//export = ZipCodeValidator;
//Test.ts
//import zip = require("./ZipCodeValidator");
//// Some samples to try
//let strings = ["Hello", "98052", "101"];
//// Validators to use
//let validator = new zip();
//// Show whether each string passed each validator
//strings.forEach(s => {
//    console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
//});
//Code Generation for Modules:::::
//Depending on the module target specified during compilation, the compiler will generate appropriate code for Node.js(CommonJS), require.js(AMD), UMD, SystemJS, or ECMAScript 2015 native modules(ES6) module - loading systems.For more information on what the define, require and register calls in the generated code do, consult the documentation for each module loader.
//This simple example shows how the names used during importing and exporting get translated into the module loading code.
//SimpleModule.ts
//import m = require("mod");
//export let t = m.something + 1;
//AMD / RequireJS SimpleModule.js
//define(["require", "exports", "./mod"], function (require, exports, mod_1) {
//    exports.t = mod_1.something + 1;
//});
//CommonJS / Node SimpleModule.js
//var mod_1 = require("./mod");
//exports.t = mod_1.something + 1;
//(???????)
//UMD SimpleModule.js
//    (function (factory) {
//        if (typeof module === "object" && typeof module.exports === "object") {
//            var v = factory(require, exports); if (v !== undefined) module.exports = v;
//        }
//        else if (typeof define === "function" && define.amd) {
//            define(["require", "exports", "./mod"], factory);
//        }
//    })(function (require, exports) {
//        var mod_1 = require("./mod");
//        exports.t = mod_1.something + 1;
//    });
//System SimpleModule.js
//System.register(["./mod"], function (exports_1) {
//    var mod_1;
//    var t;
//    return {
//        setters: [
//            function (mod_1_1) {
//                mod_1 = mod_1_1;
//            }],
//        execute: function () {
//            exports_1("t", t = mod_1.something + 1);
//        }
//    }
//});
//Native ECMAScript 2015 modules SimpleModule.js
//import { something } from "./mod";
//export var t = something + 1;
//Simple Example
//Below, we’ve consolidated the Validator implementations used in previous examples to only export a single named export from each module.
//To compile, we must specify a module target on the command line.For Node.js, use--module commonjs; for require.js, use--module amd.For example:
// tsc--module commonjs Test.ts
//When compiled, each module will become a separate.js file.As with reference tags, the compiler will follow import statements to compile dependent files.
//Validation.ts
//export interface StringValidator {
//    isAcceptable(s: string): boolean;
//}
//LettersOnlyValidator.ts
//import { StringValidator } from "./Validation";
//const lettersRegexp = /^[A-Za-z]+$/;
//export class LettersOnlyValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return lettersRegexp.test(s);
//    }
//}
//ZipCodeValidator.ts
//import { StringValidator } from "./Validation";
//const numberRegexp = /^[0-9]+$/;
//export class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//Test.ts
//import { StringValidator } from "./Validation";
//import { ZipCodeValidator } from "./ZipCodeValidator";
//import { LettersOnlyValidator } from "./LettersOnlyValidator";
//// Some samples to try
//let strings = ["Hello", "98052", "101"];
//// Validators to use
//let validators: { [s: string]: StringValidator; } = {};
//validators["ZIP code"] = new ZipCodeValidator();
//validators["Letters only"] = new LettersOnlyValidator();
//// Show whether each string passed each validator
//strings.forEach(s => {
//    for (let name in validators) {
//        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//    }
//});
//Dynamic Module Loading in Node.js
//declare function require(moduleName: string): any;
//import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
//if (needZipValidation) {
//    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
//    let validator = new ZipCodeValidator();
//    if (validator.isAcceptable("...")) { /* ... */ }
//}
//Sample: Dynamic Module Loading in require.js
//declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
//import * as Zip from "./ZipCodeValidator";
//if (needZipValidation) {
//    require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
//        let validator = new ZipCodeValidator.ZipCodeValidator();
//        if (validator.isAcceptable("...")) { /* ... */ }
//    });
//}
//Sample: Dynamic Module Loading in System.js
//declare const System: any;
//import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
//if (needZipValidation) {
//    System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
//        var x = new ZipCodeValidator();
//        if (x.isAcceptable("...")) { /* ... */ }
//    });
//}
//Working with Other JavaScript Libraries
//To describe the shape of libraries not written in TypeScript, we need to declare the API that the library exposes.
//We call declarations that don’t define an implementation “ambient”.Typically, these are defined in .d.ts files.If you’re familiar with C / C++ , you can think of these as .h files.Let’s look at a few examples.
//Ambient Modules
//In Node.js, most tasks are accomplished by loading one or more modules.We could define each module in its own.d.ts file with top - level export declarations, but it’s more convenient to write them as one larger.d.ts file.To do so, we use a construct similar to ambient namespaces, but we use the module keyword and the quoted name of the module which will be available to a later import.For example
//node.d.ts(simplified excerpt)
//declare module "url" {
//    export interface Url {
//        protocol?: string;
//        hostname?: string;
//        pathname?: string;
//    }
//    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
//}
//declare module "path" {
//    export function normalize(p: string): string;
//    export function join(...paths: any[]): string;
//    export var sep: string;
//}
//Now we can /// <reference> node.d.ts and then load the modules using import url = require("url"); or import * as URL from "url".
///// <reference path="node.d.ts"/>
//import * as URL from "url";
//let myUrl = URL.parse("http://www.typescriptlang.org");
//Shorthand ambient modules
//If you don’t want to take the time to write out declarations before using a new module, you can use a shorthand declaration to get started quickly.
//    declarations.d.ts
//declare module "hot-new-module";
//All imports from a shorthand module will have the any type.
//import x, { y } from "hot-new-module";
//x(y);
//declare module "*!text" {
//    const content: string;
//    export default content;
//}
//// Some do it the other way around.
//declare module "json!*" {
//    const value: any;
//    export default value;
//}
//Now you can import things that match "*!text" or "json!*".
//import fileContent from "./xyz.txt!text";
//import data from "json!http://example.com/data.json";
//console.log(data, fileContent);
//# sourceMappingURL=Namespaces_Modules.js.map