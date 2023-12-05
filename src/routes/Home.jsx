import React from 'react';

import axios from 'axios'; 

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Home.css';
import blogFetche from '../axios/config';

const Home = () => {
  
  
 const [posts, setPosts] = useState([])

 const getPosts = async() => {

try {
  const response = await blogFetche.get('/posts');
  const data = response.data;
  
  console.log(data)
  
  setPosts(data);

}catch(error){
console.log('erro')
}
};

useEffect(() =>{
  
  getPosts()

},[])

return( 
      <div className='home'>
        <h1> Ultimos Posts</h1>
         
        {posts.length === 0 ? <p> Carregando...</p> : (
          posts.map((post) => (
            <div className="post" key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <Link to={`/post/${post.id}`} className='btn'>Ler mais</Link>
            </div>
          ))
          )}
        
       </div>
    );
}

export default Home