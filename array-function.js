const users = ["ayşe","kübra", "fatma","şeyma"];

const usersObject=[
    {name : "ayşe", age: 19},
    {name:"fatma", age : 30},
    {name:"ali"}
];


const usersObject2=[
    {name : "ayşe", age: 19},
    {name:"ayşe", age : 30},
    {name:"ayşe"}
];

/*
push
map
find
filter
some
every
includes*/


//PUSH ***************************************************
// users.push("zeynep");
// console.log(users);


//MAP   **************************************************
// users.map((item)=>{
// console.log(item);
// })



// usersObject.map((item)=>{
//     console.log(item.name) //name olmasa  {name:"ali"} şeklinde verir ama biz sadece name bilgisini aldığımız zmaan sadece name bilgisini verir.
// })




//FİND  *********************************************************

// const result = usersObject.find((item)=> item.name === "ayşe" && item.age > 10)
// console.log(result);


//filter ve find arasındaki fark, find bulduğu ilk sonucu getirir yani birden fazla sonuç getimez. filter birden fazla sonuç getirebilir



//FİLTER ********************************************************

// const result = usersObject.filter((item)=> item.age >19)
// console.log(result);


//SOME *********************************************************** 
//array içindeki elemanlardan herhangi biri verdiğimiz kurala uyuyorsa true döner uymuyorsa false döner

// const result = usersObject.some((item)=>item.name==="ayşe")
// console.log(result);


//EVERY *****************************************************
//arraydaki bütün elemanların kurala uymasını bekler

// const result=usersObject2.every((item)=> item.name==="ayşe")
// console.log(result);


//INCLUDES **************************************************

// const fruits = ['elma','armut','muz']
// const isIncluded = fruits.includes("armut")
// console.log(isIncluded);