import fetch from "node-fetch"
import axios from "axios"


// setTimeout( () => {
//     console.log("hi");
// },1000)

// setInterval(() => {
//     console.log("her saniye hi yazıyorum");
// }, 1000);


// //CALLBACK YAPILDI 
// const sayHi = (cb) => {
//     cb();
// }

// sayHi(()=>{
//     console.log("callBack yapıyorum");
// })



//  users datasından gelen veriyi parse ederek json fırmatına dmnüştürdük. users içine attık ve users yazdırdk


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>data.json())
// .then((users) => console.log(users))   


//ASYNC VE AWAİT KAVRAMLARI

async function getData(){

    const users = await axios("https://jsonplaceholder.typicode.com/users");

        
    const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1");
 

    const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2");
     
    console.log("users Calisti",users);
    console.log("post1 Calisti",post1);
    console.log("post2 Calisti",post2);

}
getData();



