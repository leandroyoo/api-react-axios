import React from 'react'
import blogFetche from '../axios/config';

import{useState} from 'react'

import{useNavigate} from 'react-router-dom';


import "../routes/NewPost.css";

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

const createPost = async (e) => {
  e.preventDefault();

 const post = {title, body, userId:1 };

 await blogFetche.post("/posts",{
  body:post,
  
 });
}




  return (
    <div className='new-post'>
      <h2>inserir novo post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
        <label htmlFor="title">Título</label>
        <input 
        type="text" 
        name="title" 
        placeholder='Digite o título' 
        onChange={(e) => setTitle(e.target.value)}
        />
      
        </div>
        <div className="form-control">
        <label htmlFor="body">Conteúdo:</label>
        <textarea 
        name="body" 
        id="body" 
        placeholder='Digite conteúdo'
        onChange={(e) => setBody(e.target.value)}

        ></textarea>
      
        </div>
        <input type="submit" value="criar post" className='btn' />
      </form>
    </div>
  )
}

export default NewPost