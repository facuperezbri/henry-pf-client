import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="bg-primary-red w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer z-10 overflow-hidden">
      {children}
    </button>
  )
}

export default Button