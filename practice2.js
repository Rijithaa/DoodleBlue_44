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