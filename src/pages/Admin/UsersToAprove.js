import { useEffect, useState, lazy, Suspense } from 'react'
import { GET_USERS } from '../../services/GET_USERS'
import { useNavigate } from 'react-router-dom'
import { useToken } from '../../hooks/useToken'
import styles from './Admin.module.css'
import Modal from '../../components/uiComponents/Modal'

const CardUser = lazy(() => import('./CardUser'))

const UsersToApprove = () => {
    const [newUsers, setNewUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [URLImageToShow, setURLImageToShow] = useState('')


    const { setToken } = useToken()
    const navigate = useNavigate()
  
    useEffect(() => {
      GET_USERS().then((res) => {
          if (res?.error) {
              navigate('/account')
              setToken('')
              return
          }
          setNewUsers(res)
      }).catch(console.error)
  }, [])
  const handlerImageShow = (imgURL) => {
    setURLImageToShow(imgURL)
    setShowModal(true)
  }
    return (
      <div>
      <div className='mx-auto my-0 border-b-2 border-t-teal-500 mb-4 text-center p-4 mt-8 w-auto'>
        <span className='my-2'>Users to approve</span>
      </div>
      <div className={styles.columns_3}>
        {
          newUsers?.map(({ id, lastname, dni, username, name, imgURL, imgURLRev }) => (
            <Suspense fallback={<div>Loading</div>} key={id}>
                  <CardUser id={id} dni={dni} imgURL={imgURL} imgURLRev={imgURLRev} lastname={lastname} name={name} username={username} users={newUsers} setUsers={setNewUsers} showImage={handlerImageShow} />
              </Suspense>
          ))
        }
      </div>
      <Modal modal={showModal} onClose={() => setShowModal(false)}>
        <img src={URLImageToShow} alt="imgDNI" />
      </Modal>
    </div>
    )
  }

  export default UsersToApprove