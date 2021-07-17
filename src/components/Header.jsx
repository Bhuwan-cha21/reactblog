import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className='Header'>
            <div></div>
            <h1>BHUWAN BLOG</h1>
            <Link className='Link' to='/addblog'>Add Blog</Link>
        </div>
    )
}
export default Header