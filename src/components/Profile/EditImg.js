import React, { useState } from 'react'
import { UPDATE_PROFILE_IMG } from '../../services/UPDATE_PROFILE_IMG'

export default function EditImg() {
    const [img,setImg] = useState()
    const handleClick = ()=>{
        UPDATE_PROFILE_IMG(img).then(console.log)
    }
  return (
    <div>
        <input type="file" name="img" onChange={(e)=>setImg(e.target.files[0])}/>
        <button onClick={handleClick}>send</button>
    </div>
  )
}
