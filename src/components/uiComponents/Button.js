import React from 'react'

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type || 'button'} className="bg-primary-red text-white w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer z-10 overflow-hidden">
      {children}
    </button>
  )
}

export default Button