import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/futured/futrured.css"
import FuturedCard from "../home/futured/FuturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FuturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
