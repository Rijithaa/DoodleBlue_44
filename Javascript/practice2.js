//(a-b ascending order) (b-a descending order)
let strong = [40,10,5,20,30]
let res = strong.sort((a,b) => a-b)
console.log(res);

let strong1 =[40,10,5,20,30]
let res1 =strong1.sort((a,b) => b-a)
console.log(res1);


let number = [10,20,30,40]
let res3=number.reduce((total,num) => { //total - accumlator, num-current element
    return total+num;
},0); //with initial value
console.log(res3);

let number1 = [10,20,30,40]
let res4=number.reduce((total,num) => { 
    return total+num;
}); //without initial value
console.log(res3);

//Slice and Splice
let num = [10,20,30,40,50]
let a = number.slice(1,3);
let b = number.splice(2,1); //2 index value to remove, 1 number of element to remove 
console.log(a);
console.log(b);

//some - atleast one item matches the condition
let number4 = [10,20,15,5]
let result =number4.some((n)=>{
    return n>20
});
console.log(result);

//every - all items should matches the condition
let number5 = [10,20,15,5]
let result1 = number5.every((n)=>{
    return n<30
});
console.log(result1);

//Object operation

const employee ={
    name : "Arun",
    salary : 30000

};
//accessing
console.log(employee.name);
console.log(employee["salary"]);
//updating
employee.salary = 35000;
console.log(employee.salary);
//adding
employee.city = "Chennai";
delete employee.city;
console.log(employee);


//Nested objects
const student = {
    name : "priya",
    address : {
        city: "Chennai",
        state : "Tamil nadu"
}
};
console.log(student.name);
console.log(student.address.city);
console.log(student.address.city);

//object Destructuring
const student1 = {
    name1: "priya",
    age1 : 21,
    course1 : "react"
};

const{ name1, age1,course1} = student1;

console.log(name1);
console.log(age1);
console.log(course1);


//Destructing: rename and default 
const user ={
    name: "Priya"
};
const {
    name: StudentName, //property name only gets renamed
    city = "chennai"
}=user;

console.log(StudentName);
console.log(city);

//spread with objects
const original = {
    name: "priya",
    age : 21
};
const updated = {
    ...original,
    age : 22,
    city : "chennai"
};

console.log(original);
console.log(updated);

//optional chaining
const user1 = {
    name3 : "priya",
    address : {city: "Chennai"}
};
console.log(user1.address?.city);
console.log(user1.contact?.phone); //results undefined without showing any error

//replace the value with the given value when the initialization is undefined or null 
const username = null;
const age = undefined;
const city1 = undefined;

console.log(username ?? "Guest");
console.log(age ?? 18); 
console.log(city ?? "chennai");

const username1 = null;
const age2 = undefined;
const city2 = undefined;

console.log(username1 ?? "Guest");
console.log(age2 || 18); 
console.log(city2 || "chennai");

// || and  ??
console.log(0 || 100)
console.log(0 ?? 100)

console.log(false || true);
console.log(false ?? true);

console.log("" || "Guest");
console.log("" || "Guest");


//Hoisting
console.log(h);
var h =10;

let h1;
console.log(h1);
h1=10;

//const h2;
//console.log(h2);
//h2=20; this is temporal dead zone

//Hoisting with function
greet();
function greet() {
    console.log("print");
}

//console.log(r1);
//const r1 =greet1() => {
//    console.log("Print");
//};

//Closure
function Account(){ //Outer function
    let balance=1000;
    function deposit(amount){ //inner function
        balance=balance+amount;
        console.log("BalanceAmount:" +balance);
    }
    return deposit;
}
    const MyAccount = Account();
    MyAccount(500);
    MyAccount(700);

//synchronous 
console.log("a");
console.log();
console.log("c");

//Asynchronous
console.log("Start");
setTimeout(function(){
    console.log("Set Ready");
}, 2000);
console.log("end");


