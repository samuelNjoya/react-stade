import React from 'react'
import Heading from '../../common/Heading'
import FuturedCard from './FuturedCard'
import "./futrured.css"

const Futured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          <FuturedCard />
        </div>
      </section>
    </>
  )
}

export default Futured
