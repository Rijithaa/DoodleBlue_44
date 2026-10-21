//Promise
const myPromise = new Promise((resolve, reject)=>{
    let payment = true;
    if(payment){
        resolve("Payment Successful");
    }
    else {
        reject("Payment Unsucessful");
    }

});
myPromise.then((result)=> console.log(result));
myPromise.catch((error)=> console.log(error));
myPromise.finally(()=> console.log("Application completed"));












