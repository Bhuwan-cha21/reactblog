import React, { useState,useHistroy } from 'react'
import './AddBlog.css'

const AddBlog = ( ) =>{
    const[blog,setBlog] = useState({
        "title":"",
        "body":"",
        "writer":""
    });
    const changeHandler = (e) =>{
        setBlog({
            ...blog,
            [e.target.name]:e.target.value
        })
        
    }
    const clickHandler = async (e) =>{
        e.preventDefault();
         await  fetch('http://localhost:3000/Blogs',{
          method:'POST',
          body:JSON.stringify(blog),
          headers: {
            'Content-Type': 'application/json',
          }
         
      })
      window.location.reload('/')
       
    }
    return(
       <div className='Add-Form'>
           <form>
               <input type='text' placeholder='Enter Blog Title' className='input-field' name='title' onChange={changeHandler} value={blog.title}></input>
               <textarea name='body' placeholder='Enter Blog'   className='input-field' onChange={changeHandler} value={blog.body}></textarea>
               <input type='text' placeholder='Enter your Name' className='input-field'name='writer'  onChange={changeHandler} value={blog.writer}></input>
               <button type='submit' className='addbtn'  onClick={clickHandler}  onChange={changeHandler} >Add Blog</button>
           </form>
        </div>
    )
}
export default AddBlog