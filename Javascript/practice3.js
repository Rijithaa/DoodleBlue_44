/*console.log("one");
setTimeout(() => console.log("two"),0);
console.log("Three");

//change 0 to 500
console.log("one");
setTimeout(() => console.log("two"),500);

console.log("Three");

//create registration received msg
setTimeout(()=>console.log("Registration Received"))*/


console.log("start"); //synchronous
setTimeout(() => console.log("Timer"),0); //microtask
Promise.resolve().then(() => console.log("promise")); //microtask
console.log("finish"); //synchronous




