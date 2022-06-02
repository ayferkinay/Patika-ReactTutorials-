import axios from "axios"

export default  async function getData(id){
    const  {data:users} = await axios("https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/"+id)

    const  {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id)

return {users, posts};
}


