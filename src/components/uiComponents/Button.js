import React from 'react'

const Button = ({ children, onClick, type, id, className}) => {
  const classButton = "bg-primary-red text-white w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer"

  return (
    <button id={id} onClick={onClick} type={type || 'button'} className={className ? `${classButton} ${className}` : classButton}>
      {children}
    </button>
  )
}

export default Button
