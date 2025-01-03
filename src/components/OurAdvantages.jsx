import React from 'react'
import servicesData from '../components/Assets/data/servicesData'
const OurAdvantages = () => {
  return (
    <div className='container'>
      <center className='fs-1 fw-bold mt-5'>Our Advantages</center>
      <div className="d-flex my-5 justify-content-between row">
        {servicesData.map((item,i)=><div key={i} className='d-flex gap-4 col-sm-12 col-md-6 col-lg-3'>
          <div className='fs-1 text-danger'>{item.icon}</div>
          <div>
            <h6 className='text-white'>{item.title}</h6>
            <p>{item.info}</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default OurAdvantages