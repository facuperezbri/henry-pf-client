import UsersToApprove from './UsersToAprove'
import { Link } from 'react-router-dom'
import BanSection from './BanSection'
import Button from '../../components/uiComponents/Button'
import Nav from '../../components/Nav/Nav'

const Admin = () => {
  return (
    <div className='min-h-screen flex'>
      <Nav />

      <div className='flex flex-col w-full max-w-screen-2xl py-8 px-8'>
     
      <Link to="/home">
        <Button>Go home</Button>
      </Link>

      <BanSection />
      <UsersToApprove />
      </div>
    </div>
  )
}

export default Admin