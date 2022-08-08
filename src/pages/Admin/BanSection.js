import React, { useState } from 'react'


import CardUserToBan from './CardUserToBan'
import FormBan from './FormBan'
    

const BanSection = () => {
    const [users, setUsers] = useState([])

  return (
    <div>
        <FormBan setUsers={setUsers} />
        <div className='my-8 columns-1 lg:columns-3 md:columns-2'>
            {
                users?.map(user => (
                    <div key={user.id}>
                        <CardUserToBan user={user} setUsers={setUsers} users={users} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BanSection