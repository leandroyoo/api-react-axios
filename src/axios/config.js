import axios from "axios";


const blogFetche = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts/1"
})

export default blogFetche;