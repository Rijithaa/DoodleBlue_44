const students = ["priya","Arun","Divya","Rahul","Sneha" ]

// print the first and last names
console.log(students[0]);
console.log(students[students.length - 1]);

//Add karthik to the end of the array
students.push("Karthika");
console.log(students);

//Remove the last student from the array
students.pop();
console.log(students);

//Slice: create a new array containing "Arun","Divya","Rahul"
const newStudents = students.slice(1, 4);
console.log(newStudents);

//splice: remove Divya from the original array
students.splice(2, 1);
console.log(students);

//includes : check whether "priya"exists in the array
console.log(students.includes("Priya"));

//map
const prices = [10, 20, 30]
const increased =prices.map(price => price * 20);
console.log(increased);
console.log(prices);

const products =[
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 500},
    {name: "Keyboard", price: 1500},
    {name: "Monitor", price: 12000},
    {name: "Headphones", price: 2000}

];

//Filter products with price greater than 1000
const n = products.filter(product => product.price > 1000);
console.log(n);

//get only the product names
const m =products.map(product => product.name);
console.log(m);

//calculate the total price of all products
const total = products.reduce((total, product) => total + product.price, 0);
console.log(total);









