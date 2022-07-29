import {useToken} from '../../hooks/useToken'
import { useNavigate } from 'react-router-dom'
import { GET_USER_DATA } from "../../services/GET_USER_DATA";

const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const { setToken, token } = useToken();
  GET_USER_DATA(token).then(res => {
      console.log(res.error)
            if(res.error === 401) {
              setToken('');
              navigate('/')
            }
       })

  return children;
}

export default AuthProvider