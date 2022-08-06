import React from 'react'
import ButtonComponent from './Button'
import Card from './Card'

const Modal = ({ children, onClose, modal }) => {
  return modal && (
    <>
      <div className="fixed w-screen h-screen bg-gray-200 opacity-50 backdrop-blur-lg z-10 inset-0" onClick={onClose} />

      <div className="z-20 fixed">
        <Card>
          <>
            <ButtonComponent onClick={onClose}>
              Close
            </ButtonComponent>
            {children}
          </>
        </Card>
      </div>
    </>
  )
}

export default Modal