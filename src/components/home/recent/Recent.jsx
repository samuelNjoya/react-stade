import React from 'react'
import Heading from '../../common/Heading'
import RecentCart from './RecentCart'
import "./recent.css"

const Recent = () => {
  return (
    <>
    <section className='recent padding'>
      <div className='container'>
        <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
        <RecentCart />
      </div>
    </section>
  </>
  )
}

export default Recent
