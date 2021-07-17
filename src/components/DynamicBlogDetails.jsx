import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import './BlogDetails.css'
function DynamicBlogDetails(){
const[blogDetail,setBlogDetail] = useState([])
const {id} = useParams()
console.log(id)
     const getData = async () =>{
      const res = await fetch(`http://localhost:3000/Blogs/${id}`)
       const  blog =  await res.json();
       setBlogDetail(blog)
     
    }
    const delItem = async () =>{
        const res = await fetch(`http://localhost:3000/Blogs/${id}`,{
            method:'DELETE'
        })
        window.location.replace('/');
    }
    useEffect(() =>{
        getData();
       console.log(blogDetail)
     },[id])
    return(
        <div className='BlogDetails'>
            <h1 className='BlogDetails-Headline'>{blogDetail.title}</h1>
            <p className='BlogDetails-Main'>{blogDetail.body}</p>
            <button className='btn' onClick={() =>{delItem(blogDetail.id)} }>Delete Blog</button>
        </div>
    )
}
export default DynamicBlogDetails