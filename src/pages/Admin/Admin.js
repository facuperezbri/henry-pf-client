import UsersToApprove from './UsersToAprove'

import BanSection from './BanSection'

import Nav from '../../components/Nav/Nav'

const Admin = () => {
  return (
    <div className='min-h-screen flex'>
      <Nav />

      <div className='flex flex-col w-full max-w-screen-2xl py-8 px-8'>
    

      <BanSection />
      <UsersToApprove />
      </div>
    </div>
  )
}

export default Admin