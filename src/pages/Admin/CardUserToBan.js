import React from 'react'
import Button from '../../components/uiComponents/Button'
import Card from '../../components/uiComponents/Card'
import CardText from '../../components/uiComponents/CardText'
import { BAN_USER } from '../../services/BAN_USER'

const CardUserToBan = ({ user, setUsers, users }) => {
    const HandlerBlock = (user) => {
        if (window.confirm(`${ user.isBan ? 'Unlock' : 'Block'} user ${user.username}?`)) {
            BAN_USER(user.id, !user.isBan).then((res) => {
                const newList = users.map(user => {
                    if (user.id === res.id) {
                        return res
                    }
                    return user
                })
                setUsers(newList)
            }).catch(console.error)
        }
    }
    return (
        <Card className='inline-block'>
            <div className='flex flex-col gap-4 justify-center'>
                <div className='rounded-full w-72 h-72 overflow-hidden mx-auto'>
                    <img src={user?.profilepic} className='hover:scale-110 transition-all' alt={user.username} />
                </div>
                <div className='flex flex-wrap gap-3'>
                    <CardText>E-mail: {user.email}</CardText>
                    <CardText>Name: {user.name}</CardText>

                    <CardText>Lastname: {user.lastname}</CardText>

                    <CardText>DNI: {user.dni}</CardText>
                </div>
                <div className='grid place-content-center'>
                    <Button onClick={() => HandlerBlock(user)}>
                        {
                            user.isBan ? 'Unlock user' : 'block user'
                        }
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default CardUserToBan