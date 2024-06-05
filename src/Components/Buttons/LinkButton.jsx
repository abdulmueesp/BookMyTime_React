import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({to,children,background = 'linear-gradient(to right, #ff0066 66%, #ff9933 100%)'}) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <button className='w-[270px] h-[45px] rounded-3xl text-white cursor-pointer font-loctxt uppercase font-semibold flex justify-center items-center'
      style={{
        background:background
      }}>
       {children}
      </button>
    </Link>
  )
}

export default LinkButton
