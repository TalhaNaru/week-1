                                         //--DAY 1--

                                         //let vs const

let age = 23;
age = 24;
console.log(age);

const name = "Talha Naru";
console.log(name);

                                         //Scope
function sayHello(){
    let mymessage = "Hi TALHA";
    console.log(mymessage);
}
sayHello();

                                        //Value types vs Referrence types
let x = 20;
let y = 30;
console.log(x,y);

const person1 = {name :"Talha"};
const person2 = person1;
person2.name = "ALI";
console.log(person2.name);

                                         //Strict Equality
console.log(5 == "5");  
console.log(5 === "5");  

                                        //Truthy and Falsy
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("Talha"));
console.log(Boolean(1));

                                        //--DAY 2--

                                         // Arrow functions

const add = (a, b) => a + b;
console.log(add(12,13));

const square = (n) => n*n;
console.log(square(5));

                                         // Default Parameters

const greet = (person = "friend") => `hello, ${person}`;
console.log(greet());
console.log(greet("Talha"));    

                                        // Rest and Spread

 const sum = (... numbers)  => numbers.reduce((total,n) => total + n ,0);  
 console.log(sum(1,2,3,4,5));
 
 const list = [1,2,];
 const completedlist = [...list,3,4];
 console.log(completedlist);

 const user = {name : "Talha", city : "Lahore"};
 const updateduser = {...user, city:"Gujranwala"};
 console.log(user);
 console.log(updateduser);

                                        //  Destructuring of Objects and Arrays

const person = { fullname : "TalhaNaru" , email :"talha626@gmail.com" }  
const {  fullname,email} = person;  
console.log(fullname,email); 

const [first,second] = ["apple","banana","strwaberry"];
console.log(first,second);

const show =({fullname,email}) => `${fullname}<${email}`;
console.log(show(person));

                                        // Template literal with a calculation

const posts = 5;
console.log(`${fullname}has ${posts} posts,double is ${posts*2}`);                                        
