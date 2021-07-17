import React from 'react'
import Header from './Header'
import './Home.css'
import Sidebar from './SideBar'
import BlogDetails from './BlogDetails'
import DynamicBlogDetails from './DynamicBlogDetails'
import {Switch,Route } from 'react-router-dom'
import AddBlog from './AddBlog'

function Home(){
   
    return(
        <div className='Home'>
            <div className='Header-Container'><Header/></div>
            <div className='Body'>
                 <div className='Sidebar-container'><Sidebar/></div>
                 <div className='Details-Conatiner'>
                <Switch>
                    <Route path='/' exact ><BlogDetails/></Route>
                </Switch>
                <Switch>
                    <Route path='/:id' exact  ><DynamicBlogDetails/></Route>
                </Switch>
                <Switch>
                    <Route path='/addblog' exact ><AddBlog/></Route>
                </Switch>
            </div>
            </div>
        </div>
    )
}
export default Home