import React from 'react'
import ButtonComponent from './Button'
import Card from './Card'

const Modal = ({ children, onClose, modal }) => {
  const idToclose = 'close-modal'
  return modal && (
    <>
      <div className="fixed grid place-content-center w-screen h-screen inset-0 z-20 backdrop-blur-sm bg-slate-100/30" id={idToclose} onClick={(e) => e.target.id === idToclose && onClose()}>
        <div className='' onClick={() => console.log('mo')}>
          <Card>
            <>
              <div className='flex justify-end mb-4'>
                <ButtonComponent onClick={onClose}>
                  Close
                </ButtonComponent>
              </div>
              {children}
            </>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Modal