import React from 'react'
import "./ArrowUp.css"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const ArrowUp = () => {
  return (
    <div className='arrowup' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{cursor:"pointer"}}
    ><MdOutlineKeyboardArrowUp /></div>
  )
}

export default ArrowUp