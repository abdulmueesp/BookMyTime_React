import React, { Children } from 'react'

const Button = ({to,type = "button",className,children}) => {
  return (
    <div>
      <button
      to={to}
      type={type}
      className={className}
      >
      {children}
      </button>
    </div>
  )
}

export default Button
