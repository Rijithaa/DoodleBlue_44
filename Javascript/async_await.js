//async and wait with promise
function getData() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Data received");
        },2000);
    });
}
async function displayData(){
    console.log("Start");
    const result1 = await getData();

    console.log(result1);
    console.log("End");
    
}
displayData();