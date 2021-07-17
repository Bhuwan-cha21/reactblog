import React,{useState,useEffect} from 'react'

import './BlogDetails.css'
function BlogDetails(){
const[blogDetail,setBlogDetail] = useState([])
console.log(window.location.href)
    const getData = async () =>{
        const Ares = await fetch(`http://localhost:3000/Blogs`)
       const  Ablog =  await Ares.json();
       const id = Ablog[0].id
      const res = await fetch(`http://localhost:3000/Blogs/${id}`)
       const  blog =  await res.json();
       setBlogDetail(blog)
     
    }
    useEffect(() =>{
        getData();
       console.log(blogDetail)
     },[])
    return(
        <div className='BlogDetails'>
            <h1 className='BlogDetails-Headline'>{blogDetail.title}</h1>
            <p className='BlogDetails-Main'>{blogDetail.body}</p>
            
        </div>
    )
}
export default BlogDetails