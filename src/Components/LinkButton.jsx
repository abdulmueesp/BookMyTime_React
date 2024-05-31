import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({to,children}) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <button className='w-[100px] h-[30px] border-2 rounded-lg bg-pink-400'>
       {children}
      </button>
    </Link>
  )
}

export default LinkButton
