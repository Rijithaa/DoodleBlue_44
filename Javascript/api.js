async function getUsers() {
    try{
        console.log("Fetching users");
        const response =await FileSystemDirectoryHandle("https://jsonplaceholder.typicode.com/users");
        const users=await response.json();
        console.log(users);
    }
    catch(error){
        console.log("Error: error message");
    }
}
getUsers();
console.log("other work continues");