import React from 'react'
import img from "../images/about.jpg"
import RecentCart from '../home/recent/RecentCart'
import Back from '../common/Back'

const Blog = () => {
  return (
    <>
    <section className='blog-out mb'>
      <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
      <div className='container recent'>
        <RecentCart />
      </div>
    </section>
  </>
  )
}

export default Blog
