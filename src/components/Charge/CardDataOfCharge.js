import React from 'react'

const CardDataOfCharge = ({ cvu, amount, method, userToCharge }) => {
  return (
    <div>
    <div>
        <div><span>DNI:</span> {userToCharge?.dni}</div>
        <div><span>Name:</span>{userToCharge?.name}</div>
        <div><span>Lastname:</span>{userToCharge?.lastname}</div>
        <div><span>Username:</span>{userToCharge?.username}</div>
        <div><img src={userToCharge?.profilepic} alt={userToCharge?.username} /></div>

        <div>
            <span>{cvu}</span>
        </div>
        <div>
            <span>{amount}</span>
        </div>
        <div>
            <span>{method}</span>
        </div>

    </div>
</div>
  )
}

export default CardDataOfCharge