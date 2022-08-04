import React from 'react'

<<<<<<< HEAD
const Button = ({ children, onClick, type, className }) => {
  return (
    <button onClick={onClick} type={type || 'button'} className="bg-primary-red text-white w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer transition-all">
=======
const Button = ({ children, onClick, onSubmit, type }) => {
  return (
    <button onClick={onClick} type={type || 'button'} className="bg-primary-red text-white w-fit h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer overflow-hidden">
>>>>>>> ad1be3dcce6a532c3504897cf3510c86e1e31b37
      {children}
    </button>
  )
}

export default Button
