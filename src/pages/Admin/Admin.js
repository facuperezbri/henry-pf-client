import UsersToApprove from './UsersToAprove'
import { Link } from 'react-router-dom'
import BanSection from './BanSection'
import Button from '../../components/uiComponents/Button'

const Admin = () => {
  return (
    <div className='min-h-screen flex justify-center py-8'>
      <div className='flex flex-col max-w-screen-2xl'>
     
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