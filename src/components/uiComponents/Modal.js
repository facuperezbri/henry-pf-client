import React from 'react'
import ButtonComponent from './Button'

const Modal = ({ children, onClose, modal }) => {
  return modal && (
    <>
        <div className="fixed w-screen h-screen bg-gray-200 opacity-50 backdrop-blur-lg z-10 inset-0" onClick={onClose} />
            <ButtonComponent onClick={onClose} className="fixed right-1 top-1 z-20">
                Close
            </ButtonComponent>
 
        <div className="z-20 shadow-xl bg-primary-white rounded-lg p-6 fixed">
          {children}
        </div>
    </>
  )
}

export default Modal