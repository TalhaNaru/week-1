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
  

                                        // --DAY 3--

                                        // Map
                
const nums = [1,2,3,4,5,6];
const doubled = nums.map((n) => n * 2);
console.log(doubled);

                                        // Filter


const evens  = nums.filter((n) => n % 2 == 0);
console.log(evens);

                                        // Reduce

const total = nums.reduce ((sum,n) => sum + n);
console.log(total);

                                        // Find,Some,Every

const people = [
    {name : "Ali", age : 17 },
    {name : "Talha", age : 24 },
    {name : "Ahmad", age : 24 },
    {name : "Muzammil", age : 30 },
];
console.log(people.find((p) => p.name == "Talha"));
console.log(people.some((p) => p.age < 18));
console.log(people.every((p) => p.age >= 18));

                                        // Sort

console.log([1,4,9,5,10].sort());
console.log ([1,4,9,5,10].sort((a,b) => a-b));  

const SortedPeople = [...people] .sort(
     (a,b) => a.age-b.age || a.name.localeCompare(b.name)
);

console.log(SortedPeople.map((p) => p.name));
console.log(people.map((p) => p.name));

                                         // Object Helpers

const profile = {name : "Talha", age : 23, city : "Gujranwala"};  
console.log(Object.keys(profile));
console.log(Object.values(profile));
console.log(Object.entries(profile));

                                        // Optional chaining and Nullish handling

const guest = {name : "Talha", };
console.log(guest.address?.city);
console.log(guest.address?.city??"Unknown");

const zero = 0;
console.log(zero || 10);
console.log(zero ?? 10);

                                        // Immutability

const fruits = ["apple","strawberry"];
const newfruits = [...fruits,"banana","mango"];
console.log(fruits);
console.log(newfruits);                                        

                                        // --DAY 4--

                                        // The Event Loop
                                        
console.log("START");
   setTimeout(() =>
     {console.log("Timer Done");
     } , 0);
console.log("END");                                        

                                        // Promises, then and catch

 const myPromise = new Promise((resolve,reject)=> {
    const ok = true;
    if (ok){
        resolve("It worked");
    }else {
        resolve("It rejected");
    }
 });
    myPromise
        .then((value)=>console.log(value))
        .catch((error)=>console.log(error))   
        
                                        // Promise.all
    
Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()),
])  .then(([users,posts,todos]) =>{
    console.log(users.length,posts.length,todos.length);
});                                   

                                        // Async and Await

const getFirstUser = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log(user.name,user.email);
};
     getFirstUser();

                                         // Error Handling With Try and Catch

const getBadURL = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/wrong");
        if(!response.ok){
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        }catch (error){
            console.log("Caught:", error.message);
        }
            };
         getBadURL();         
         
                                        // Fetching data from an API

const getAllData = async () => {
    try{
        const  [users,posts,todos] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
            fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
            fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()),
        ]);
        console.log(users.length,posts.length,todos.length);
    } catch(error){
        console.log("Caught",error.message);
    }
    };     
        getAllData();                                   
