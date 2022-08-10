import React from 'react'
import Loader from './Loader'


const ButtonWithLoader = ({ children, onClick, type, id, className, isLoading }) => {
    const classButton = "bg-primary-red text-white h-12 border-none px-3 rounded-md font-semibold text-lg cursor-pointer grid place-content-center"

    return (
        <button disabled={isLoading} id={id} onClick={onClick} type={type || 'button'} className={className ? `${classButton} ${className} btn` : classButton}>
            {
                isLoading ? <Loader /> : children
            }
        </button>
    )
}

export default ButtonWithLoader