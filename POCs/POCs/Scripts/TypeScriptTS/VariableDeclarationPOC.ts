////var a = 10;
//function f12() {

//    var message = "Hello,world";
//    return message;

//}


//alert(f12());



//2.

//function f12() {
//    var a = 10;
//    return function g() {
//        var b = a + 1;
//        return b;
//    }
//}

//var g = f12();
//alert(g()); // returns '11'

//in above example g captured the variable a declared in f .At any point that g is called  once f is done running .it will be able to access and modiffy a.



//3.
//function f123() {
//    var a = 1;

//    a = 2;
//    var b = g();
//    a = 3;

//    return b;

//    function g() {
//        return a;
//    }
//}

//alert(f123()); // returns '2'



//4.
//Scoping rules


//function f123(shouldInitialize: boolean) {
//    if (shouldInitialize) {
//        var x = 10;
//        var x = 1000;
//    }

//    return x;
//}

//alert(f123(true));  // returns '10'
//f123(false); // returns 'undefined'


//5.overriding the var declaration two time with same name
//function sumMatrix(matrix: number[][]) {
//    var sum = 0;
//    for (var i = 0; i < matrix.length; i++) {
//        var currentRow = matrix[i];
//        for (var i = 0; i < currentRow.length; i++) {
//            sum += currentRow[i];
//        }
//    }

//    return sum;
//}




//6. Variable capturing quirks


//for (var i = 0; i < 10; i++) {
//    debugger;
//    setTimeout(function () { console.log(i); }, 100 * i);
//    alert("hi")
//}



//7. IIFE:imidiate invoke 
// by now you have figured out that var has likage/some problems ,which is precisely why let statemenets were introduced .Apart from the keyword used ,let statements are written the same way var statement are.
//let hello="Hello";

//When a variable is declared using let, it uses what some call lexical-scoping or block-scoping. Unlike variables declared with var whose scopes leak out to their containing function, block-scoped variables are not visible outside of their nearest containing block or for-loop.

//8. Block Scoping 
//function f(input: boolean) {
//    let a = 100;

//    if (input) {
//        // Still okay to reference 'a'
//        let b = a + 1;
//        return b;
//    }

//    // Error: 'b' doesn't exist here
//    return b;
//}
//Here, we have two local variables a and b. a’s scope is limited to the body of f while b’s scope is limited to the containing if statement’s block.





//9.Varibale declare in catch block also have same block
//try {
//    throw "oh no!";
//}
//catch (e) {
//    console.log("Oh well.");
//}

//// Error: 'e' doesn't exist here
//console.log(e);


//Something to note is that you can still capture a block - scoped variable before it’s declared.The only catch is that it’s illegal to call that function before the declaration.If targeting ES2015, a modern runtime will throw an error; however, right now TypeScript is permissive and won’t report this as an error.

//function foo() {
//    // okay to capture 'a'
//    return a;
//}

//// illegal call 'foo' before 'a' is declared
//// runtimes should throw an error here
//foo();

//let a;


//10.Something to note is that you can still capture a block-scoped variable before it’s declared. The only catch is that it’s illegal to call that function before the declaration. If targeting ES2015, a modern runtime will throw an error; however, right now TypeScript is permissive and won’t report this as an error.
//function foo() {
//    // okay to capture 'a'
//    return a;
//}

//// illegal call 'foo' before 'a' is declared
//// runtimes should throw an error here
//foo();

//let a;


//11.redeclaring and shawing
//function f(x) {
//    var x;
//    var x;

//    if (true) {
//        var x;
//    }
//}


//in the above example, all declarations of x actually refer to the same x, and this is perfectly valid. This often ends up being a source of bugs. Thankfully, let declarations are not as forgiving.
//let x = 10;
//let x = 20; // error: can't re-declare 'x' in the same scope

//The variables don’t necessarily need to both be block-scoped for TypeScript to tell us that there’s a problem.
//function f123(x) {
//    let xy = 100; // error: interferes with parameter declaration
//}

//function g123() {
//    let x_s = 100;
//    var x = 100; // error: can't have both declarations of 'x'
//}


//12.
//The act of introducing a new name in a more nested scope is called shadowing. It is a bit of a double-edged sword in that it can introduce certain bugs on its own in the event of accidental shadowing, while also preventing certain bugs. For instance, imagine we had written our earlier sumMatrix function using let variables.

//function sumMatrix(matrix: number[][]) {
//    let sum = 0;
//    for (let i = 0; i < matrix.length; i++) {
//        var currentRow = matrix[i];
//        for (let i = 0; i < currentRow.length; i++) {
//            sum += currentRow[i];
//        }
//    }

//    return sum;
//}
//let matrix = [[1, 2, 3, 4], [23, 34, 5, 45], [34, 5, 6, 7]];
//alert(sumMatrix(matrix))


///This version of the loop will actually perform the summation correctly because the inner loop’s i shadows i from the outer loop.

//Shadowing should usually be avoided in the interest of writing clearer code.While there are some scenarios where it may be fitting to take advantage of it, you should use your best judgement


//13.Block-scoped variable capturing
//When we first touched on the idea of variable capturing with var declaration, we briefly went into how variables act once captured. To give a better intuition of this, each time a scope is run, it creates an “environment” of variables. That environment and its captured variables can exist even after everything within its scope has finished executing.

//function theCityThataAlwaysSleeps() {

//    let getCity;
//    if (true) {
//        let city = "seattler";
//        getCity = function () {

//            return city;
//        }
//    }
//    return getCity();
//}

//alert(theCityThataAlwaysSleeps());



//14.capturing let variable scope
//Because we’ve captured city from within its environment, we’re still able to access it despite the fact that the if block finished executing.

//Recall that with our earlier setTimeout example, we ended up needing to use an IIFE to capture the state of a variable for every iteration of the for loop.In effect, what we were doing was creating a new variable environment for our captured variables.That was a bit of a pain, but luckily, you’ll never have to do that again in TypeScript.

//let declarations have drastically different behavior when declared as part of a loop.Rather than just introducing a new environment to the loop itself, these declarations sort of create a new scope per iteration.Since this is what we were doing anyway with our IIFE, we can change our old setTimeout example to just use a let declaration.

//for (let i = 0; i < 10; i++) {
//    setTimeout(function () { console.log(i); }, 100 * i);
//}


//15...They are like let declarations but, as their name implies, their value cannot be changed once they are bound. In other words, they have the same scoping rules as let, but you can’t re-assign to them.

//This should not be confused with the idea that the values they refer to are immutable.


//const numLivesForCat = 9;
//const kitty = {
//    name: "Aurora",
//    numLives: numLivesForCat,
//}

////// Error
////kitty = {
////    name: "Danielle",
////    numLives: numLivesForCat
////};

//// all "okay"
//kitty.name = "Rory";
//kitty.name = "Kitty";
//kitty.name = "Cat";
//kitty.numLives--;
//console.log(kitty.name);

//16.Let vs Const
//let vs. const
//    Given that we have two types of declarations with similar scoping semantics, it’s natural to find ourselves asking which one to use.Like most broad questions, the answer is: it depends.

//Applying the principle of least privilege, all declarations other than those you plan to modify should use const.The rationale is that if a variable didn’t need to get written to, others working on the same codebase shouldn’t automatically be able to write to the object, and will need to consider whether they really need to reassign to the variable.Using const also makes code more predictable when reasoning about flow of data.

//Use your best judgement, and if applicable, consult the matter with the rest of your team.

//The majority of this handbook uses let declarations.

//Destructuring
//Another ECMAScript 2015 feature that TypeScript has is destructuring.For a complete reference, see the article on the Mozilla Developer Network.In this section, we’ll give a short overview.

//Array destructuring
//The simplest form of destructuring is array destructuring assignment:

//let input = [1, 2];
//let [first, second] = input;
//console.log(first); // outputs 1
//console.log(second); // outputs 2


//similar to thei code
//This creates two new variables named first and second.This is equivalent to using indexing, but is much more convenient:

//first = input[0];
//second = input[1];

//17.swapping
//let input = [1, 2, 3];
//let [first, second, third] = input;
//[second, first] = [first, second];//swapping
//alert(first + "...................." + second)




//18 and with parameter to a function
//function f([first, second]: [number, number]) {
//    debugger;
//    console.log(first);
//    console.log(second);
//}
//f([1, 2]);


//Rest
//let [first, ...rest] = [1, 2, 3, 4];
//console.log(first); // outputs 1
//console.log(rest); // outputs [ 2, 3, 4 ]

//Of course, since this is JavaScript, you can just ignore trailing elements you don’t care about:

//let [first] = [1, 2, 3, 4];
//console.log(first); // outputs 1
//Or other elements:

//let [, second, , fourth] = [1, 2, 3, 4];

//Object destructuring
//let o = {
//    a: "foo",
//    b: 12,
//    c: "bar"
//};
//let { a, b } = o;
//alert(a + "   " + b);

//This creates new variables a and b from o.a and o.b. Notice that you can skip c if you don’t need it.

//Like array destructuring, you can have assignment without declaration:

//({ a, b } = { a: "baz", b: 101 });

//Notice that we had to surround this statement with parentheses.JavaScript normally parses a {
  //  as the start of block.

    //You can create a variable for the remaining items in an object using the syntax ...:

//let { a, ...passthrough } = o;
//let total = passthrough.b + passthrough.c.length;


//18.  Property renaming 
//You can also give different names to properties:

//let { a: newName1, b: newName2 } = o;//new name 

//Here the syntax starts to get confusing. You can read a: newName1 as “a as newName1”. The direction is left-to-right, as if you had written:

//onfusingly, the colon here does not indicate the type. The type, if you specify it, still needs to be written after the entire destructuring:
//let o = {
//    a: "vishal",
//    b: "freaky",
//    c: "random0",
//    d: "muskil"

//}
//let { a, b }: { a: string, b: string } = o;
//alert("freak")

//19.Default values:
//Default values let you specify a default value in case a property is undefined:

//function keepWholeObject(wholeObject: { a: string, b?: number }) {
//    let { a, b = 1001 } = wholeObject;
//}
//keepWholeObject now has a variable for wholeObject as well as the properties a and b, even if b is undefined


//Function declarations:
//type C = { a: string, b?: number }
//function f({ a, b }: C): void {
//    // ...
//}

//But specifying defaults is more common for parameters, and getting defaults right with destructuring can be tricky. First of all, you need to remember to put the pattern before the default value.



//function f({ a = "", b = 0 } = {}): void {
//    // ...
//}
//f();



//20.Default function values passing:
//function f({ a, b = 0 } = { a: "" }): void {
//    // ...
//}
//f({ a: "yes" }); // ok, default b = 0
//f(); // ok, default to { a: "" }, which then defaults b = 0
//f({}); // error, 'a' is required if you supply an argument
//Use destructuring with care. As the previous example demonstrates, anything but the simplest destructuring expression is confusing. This is especially true with deeply nested destructuring, which gets really hard to understand even without piling on renaming, default values, and type annotations. Try to keep destructuring expressions small and simple. You can always write the assignments that destructuring would generate yourself.




//21.Spread

//The spread operator is the opposite of destructuring.It allows you to spread an array into another array, or an object into another object.For example:

//let first = [1, 2];
//let second = [3, 4];
//let bothPlus = [0, ...first, ...second, 5];//it will spread all the values here 
//his gives bothPlus the value [0, 1, 2, 3, 4, 5]. Spreading creates a shallow copy of first and second. They are not changed by the spread.
//let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
//let search = { ...defaults, food: "rich" };

//Now search is { food: "rich", price: "$$", ambiance: "noisy" }. Object spreading is more complex than array spreading. Like array spreading, it proceeds from left-to-right, but the result is still an object. This means that properties that come later in the spread object overwrite properties that come earlier. So if we modify the previous example to spread at the end:
//let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
//let search = { food: "rich", ...defaults }; alert(defaults.food);//spicy

//22.Object spreading loose methods
//Then the food property in defaults overwrites food: "rich", which is not what we want in this case.

//Object spread also has a couple of other surprising limits.First, it only includes an objects’ own, enumerable properties.Basically, that means you lose methods when you spread instances of an object:

//class C {
//    p = 12;
//    m() {
//    }
//}
//let c = new C();
//let clone = { ...c };
//clone.p; // ok
//clone.m(); // error!

//Second, the Typescript compiler doesn’t allow spreads of type parameters from generic functions. That feature is expected in future versions of the language.


///////23.0 INTERFACE:
//One of TypeScript’s core principles is that type - checking focuses on the shape that values have.This is sometimes called “duck typing” or “structural subtyping”.In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project

//Our First Interface
//The easiest way to see how interfaces work is to start with a simple example:

//function printLabel(labelledObj: { label: string }) {
//    console.log(labelledObj.label);
//}

//let myObj = { size: 10, label: "Size 10 Object" };
//printLabel(myObj);
//The type - checker checks the call to printLabel.The printLabel function has a single parameter that requires that the object passed in has a property called label of type string.Notice that our object actually has more properties than this, but the compiler only checks that at least the ones required are present and match the types required.There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit.

//We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string:


//interface LabelledValue {
//    label: string;
//}

//function printLabel(labelledObj: LabelledValue) {
//    console.log(labelledObj.label);
//}

//let myObj = { size: 10, label: "Size 10 Object" };
//printLabel(myObj);

//23.1 real example of interface:

//interface LabelledValue {
//    label: string;
//}

//function printLabel(labelledObj: LabelledValue) {
//    console.log(labelledObj.label);
//}

//let myObj = { size: 10, label: "Size 10 Object" };
//printLabel(myObj);

//The interface LabelledValue is a name we can now use to describe the requirement in the previous example.It still represents having a single property called label that is of type string.Notice we didn’t have to explicitly say that the object we pass to printLabel implements this interface like we might have to in other languages.Here, it’s only the shape that matters.If the object we pass to the function meets the requirements listed, then it’s allowed.

//    It’s worth pointing out that the type - checker does not require that these properties come in any sort of order, only that the properties the interface requires are present and have the required type.





//24.2  Optional Properties
//Not all properties of an interface may be required.Some exist under certain conditions or may not be there at all.These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.
//interface SquareConfig {
//    color?: string;
//    width?: number;
//}

//function createSquare(config: SquareConfig): { color: string; area: number } {
//    let newSquare = { color: "white", area: 100 };
//    if (config.color) {
//        newSquare.color = config.color;
//    }
//    if (config.width) {
//        newSquare.area = config.width * config.width;
//    }
//    return newSquare;
//}
//let mySquare = createSquare({ color: "black" });
//Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a ? at the end of the property name in the declaration.
//The advantage of optional properties is that you can describe these possibly available properties while still also preventing use of properties that are not part of the interface.For example, had we mistyped the name of the color property in createSquare, we would get an error message letting us know:

//24.3 OPtional properties
//interface SquareConfig {
//    color?: string;
//    width?: number;
//}

//function createSquare(config: SquareConfig): { color: string; area: number } {
//    let newSquare = { color: "white", area: 100 };
//    if (config.clor) {
//        // Error: Property 'clor' does not exist on type 'SquareConfig'
//        newSquare.color = config.clor;
//    }
//    if (config.width) {
//        newSquare.area = config.width * config.width;
//    }
//    return newSquare;
//}
//let mySquare = createSquare({ color: "black" })

//24.4 Readonly properties:
//Some properties should only be modifiable when an object is first created.You can specify this by putting readonly before the name of the property:
//interface Point {
//    readonly x: number;
//    readonly y: number;
//}
//You can construct a Point by assigning an object literal.After the assignment, x and y can’t be changed.
//let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

//24.4.1 ReadonlyArray<T> 
//TypeScript comes with a ReadonlyArray < T > type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:
//let a: number[] = [1, 2, 3, 4];
//let ro: ReadonlyArray<number> = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100; // error!
//a = ro; // error!
//On the last line of the snippet you can see that even assigning the entire ReadonlyArray back to a normal array is illegal.You can still override it with a type assertion(????????), though:
//a = ro as number[];



//24.5 readonly vs const
//The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.Variables use const whereas properties use readonly

//24.5.1 Excess Property Checks
//n our first example using interfaces, TypeScript lets us pass { size: number; label: string; } to something that only expected a { label: string; }. We also just learned about optional properties, and how they’re useful when describing so-called “option bags”.
//However, combining the two naively would let you to shoot yourself in the foot the same way you might in JavaScript.For example, taking our last example using createSquare
//interface SquareConfig {
//    color?: string;
//    width?: number;
//}
//function createSquare(config: SquareConfig): { color: string; area: number } {
//    // ...
//}
//let mySquare = createSquare({ colour: "red", width: 100 });
//Notice the given argument to createSquare is spelled colour instead of color. In plain JavaScript, this sort of thing fails silently.
//You could argue that this program is correctly typed, since the width properties are compatible, there’s no color property present, and the extra colour property is insignificant.
//However, TypeScript takes the stance that there’s probably a bug in this code.Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments.If an object literal has any properties that the “target type” doesn’t have, you’ll get an error.

//Getting around these checks is actually really simple. The easiest method is to just use a type assertion:

//let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

//even better way is:
//However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.If SquareConfig can have color and width properties with the above types, but could also have any number of other properties, then we could define it like so:
//interface SquareConfig {
//    color?: string;
//    width?: number;
//    [propName: string]: any;
//}

//(???????)here we’re saying a SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.
//One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable: Since squareOptions won’t undergo excess property checks, the compiler won’t give you an error.
//let squareOptions = { colour: "red", width: 100 };
//let mySquare = createSquare(squareOptions);
//(???????)Keep in mind that for simple code like above, you probably shouldn’t be trying to “get around” these checks. For more complex object literals that have methods and hold state, you might need to keep these techniques in mind, but a majority of excess property errors are actually bugs. That means if you’re running into excess property checking problems for something like option bags, you might need to revise some of your type declarations. In this instance, if it’s okay to pass an object with both a color or colour property to createSquare, you should fix up the definition of SquareConfig to reflect that.






//25.0  Function Types 
//Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. In addition to describing an object with properties, interfaces are also capable of describing function types.
//To describe a function type with an interface, we give the interface a call signature.This is like a function declaration with only the parameter list and return type given.Each parameter in the parameter list requires both name and type.

//interface SearchFunc {
//    (source: string, subString: string): boolean;
//}

//Once defined, we can use this function type interface like we would other interfaces. Here, we show how you can create a variable of a function type and assign it a function value of the same type.
//interface freaky {
//    (name: string, rollno: number): string;
//}
//let freak: freaky;
//freak = function (name: string, rollno: number): string {
//    return name + "   " + rollno;
//}
//alert(freak("vishal", 45));

//For function types to correctly type-check, the names of the parameters do not to match.We could have, for example, written the above example like this:
//interface freaky {
//    (name: string, rollno: number): string;
//}
//let freak: freaky;
//freak = function (freakname: string, freakrollno: number): string {
//    return freakname + "   " + freakname;
//}
//alert(freak("vishal", 45));

//Function parameters are checked one at a time, with the type in each corresponding parameter position checked against each other. If you do not want to specify types at all, TypeScript’s contextual typing can infer the argument types since the function value is assigned directly to a variable of type SearchFunc. Here, also, the return type of our function expression is implied by the values it returns (here false and true). Had the function expression returned numbers or strings, the type-checker would have warned us that return type doesn’t match the return type described in the SearchFunc interface.
//interface freaky {
//    (name: string, rollno: number): string;
//}
//let freak: freaky;
//freak = function (freakname: string, freakrollno: number): { //compilation error
//    return freakname + "   " + freakname;
//}
//alert(freak("vishal", 45));



//26.Indexable Types
//Similarly to how we can use interfaces to describe function types, we can also describe types that we can “index into” like a[10], or ageMap["daniel"]. Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing. Let’s take an example:
//interface StringArray {
//    [index: number]: string;
//}
//let myArray: StringArray;
//myArray = ["Bob", "Fred"];
//let myStr: string = myArray[0];
//Above, we have a StringArray interface that has an index signature. This index signature states that when a StringArray is indexed with a number, it will return a string.

//There are two types of supported index signatures: string and number. It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.
//???????????
//class Animal {
//    name: string;
//}
//class Dog extends Animal {
//    breed: string;
//}

//// Error: indexing with a numeric string might get you a completely separate type of Animal!
//interface NotOkay {
//    [x: number]: Animal;
//    [x: string]: Dog;
//}
//While string index signatures are a powerful way to describe the “dictionary” pattern, they also enforce that all properties match their return type. This is because a string index declares that obj.property is also available as obj["property"]. In the following example, name’s type does not match the string index’s type, and the type-checker gives an error:
//???if type checker is giving the error here then why when i was doing the [x:string]:Animal;[x:number]:Dog is not giving the error???

//Finally, you can make index signatures readonly in order to prevent assignment to their indices:
//interface ReadonlyStringArray {
//    readonly [index: number]: string;
//}
//let myArray: ReadonlyStringArray = ["Alice", "Bob"];
//myArray[2] = "Mallory"; // error! because it is ready only 




//27.0 Class Types:
//One of the most common uses of interfaces in languages like C# and Java, that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.
//interface ClockInterface {
//    currentTime: Date;
//}

//class Clock implements ClockInterface {
//    currentTime: Date;
//    constructor(h: number, m: number) { }
//}

//we can also describe methods in an interface that are implemented in the class ,as we do with setTime in teh below example
//interface Device {
//    IPPort: String;
//    setcompanyDetails(d: string);


//}
//class Nokia implements Device {
//    IPPort = "12234234";
//    compName: string;
//    setcompanyDetails(compName: string) {
//        this.compName = compName;
//    }
//}
//let obj = new Nokia();
//obj.setcompanyDetails("Nokia private ltd");
//alert(obj.IPPort + "    " + obj.compName);
//?????????????????Interfaces describe the public side of the class, rather than both the public and private side. This prohibits you from using them to check that a class also has particular types for the private side of the class instance.




//28.Difference between the static and instance sides of the classes;

