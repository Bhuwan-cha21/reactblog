import React,{useState,useEffect} from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import BlogDetails from './BlogDetails'

import './SideBar.css'
function Sidebar(){
    const[allBlogs,setAllBlogs] = useState([])
    const getData = async () =>{
      const res = await fetch(`http://localhost:3000/Blogs`)
       const  blogs =  await res.json();
       setAllBlogs(blogs)
     
    }
    useEffect(() =>{
        getData();
       
     },[])
   
    return(
        <div className='Sidebar'>
            <input className='input' type='text'></input>
            {allBlogs.map((blog) =>{
                return(
                    <div className='Blog'>
                        <h1 className='title'>{blog.title}</h1>
                        <p class='main-blog'>{blog.body.slice(0,200)}</p>
                        <Link to={`/${blog.id}`}  ><button className='btn'>Read More</button></Link>
                        
                    </div>
                    
                )
            })}
        </div>
    )
}
export default Sidebar