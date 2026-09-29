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