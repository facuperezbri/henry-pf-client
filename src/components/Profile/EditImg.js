import { useToken } from '../../hooks/useToken'
import React,{useState} from 'react'
import axios from 'axios';
import style from './EditImg.module.css'
export default function EditImg({setVisibleImg}) {
  // console.log(setVisibleImg)
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const { setToken, token } = useToken();

  const uploadImage = async (e)=>{
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset","images");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/da76mkk4h/image/upload",{
        method:"POST",
        body:data,
      }
    )
    const file = await res.json()
    setImage({
      profilepic: file.secure_url
    })
    setLoading(false)
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const sendPutUser = async()=>{
  const user = await axios.put("http://localhost:4000/api/user/useredit",image,config)
  setVisibleImg(false)
  alert("data uploaded successfully")
}
  return (
    <div className={style.container}>
      <div className={style.containerBtn}>
          <div onClick={()=>setVisibleImg(false)} className={style.btn}>X</div>
      </div>
     
        <h2>subiendo imagenes</h2>
        <form>
          <input 
            type="file"
            name="file"
            palceholder="sube tu imagen aqui"
            onChange={uploadImage}
          />
        </form>
        <button onClick={sendPutUser}>send</button>
    </div>
  )
}

