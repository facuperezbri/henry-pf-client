import React from 'react'

const CardText = ({ children, onClick, labeltext }) => {
  return (
    <div>
      {labeltext && <label className="hidden uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 md:block">{labeltext}</label>}
      <div onClick={onClick} className="text-slate-700 py-3 px-4 bg-slate-300 w-full rounded-md hover:bg-slate-400 transition-all text-center "><span>{children}</span></div>
    </div>
  )
}

export default CardText