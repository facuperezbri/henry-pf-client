import React from 'react'

const ProfileEpig = ({ src, alt, onClick }) => {
  return (
    <div className="rounded-full items-center w-40 h-40 md:w-72 md:h-72 overflow-hidden mb-4 mx-auto grid place-content-center" >
        <img src={src} alt={alt} onClick={onClick} />
    </div>
  )
}

export default ProfileEpig