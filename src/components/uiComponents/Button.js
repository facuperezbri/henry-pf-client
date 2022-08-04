import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="bg-primary-red">
        {children}
    </button>
  )
}

export default Button