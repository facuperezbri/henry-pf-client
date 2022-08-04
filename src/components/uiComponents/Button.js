import React from 'react'

const ButtonComponent = ({ children, onClick, className, type }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
        {children}
    </button>
  )
}

export default ButtonComponent