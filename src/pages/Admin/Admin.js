import { useEffect, useState, lazy, Suspense } from 'react'
import { GET_USERS } from '../../services/GET_USERS'
import { useNavigate, Link } from 'react-router-dom'
import { useToken } from '../../hooks/useToken'
import styles from './Admin.module.css'
import BanSection from './BanSection'
const CardUser = lazy(() => import('./CardUser'))
const Admin = () => {
    const [newUsers, setNewUsers] = useState([])
    const { setToken } = useToken()
    const navigate = useNavigate()
    useEffect(() => {
        GET_USERS().then((res) => {
            if (res?.error) {
                navigate('/account/login')
                setToken('')
                return
            }
            setNewUsers(res)
        }).catch(console.error)
    }, [])

  return (
    <div>
      <BanSection />
      <div className={styles.columns_3}>
        {
          newUsers?.map(({ id, lastname, dni, username, name, imgURL, imgURLRev }) => (
            <Suspense fallback={<div>Loading</div>} key={id}>
                  <CardUser id={id} dni={dni} imgURL={imgURL} imgURLRev={imgURLRev} lastname={lastname} name={name} username={username} users={newUsers} setUsers={setNewUsers} />
              </Suspense>
          ))
        }
      </div>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default Admin