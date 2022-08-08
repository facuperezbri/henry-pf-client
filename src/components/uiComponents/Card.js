import React from 'react'

const Card = ({ children, className }) => {
  const classCard = "shadow-xl bg-primary-white dark:bg-slate-900 rounded-lg p-6"
  return (
    <div className={className ? `${classCard} ${className}` : classCard}>
        {children}
    </div>
  )
}

export default Card