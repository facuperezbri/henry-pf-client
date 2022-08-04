import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-primary-red text-white w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer z-10 overflow-hidden">
      {children}
    </button>
  )
}

export default Button