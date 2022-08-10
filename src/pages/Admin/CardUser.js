import React from 'react'
import Card from '../../components/uiComponents/Card'
import CardText from '../../components/uiComponents/CardText'
import { ACEPT_USER } from '../../services/ACEPT_USER'
import { REJECT_USER } from '../../services/REJECT_USER'
import styles from './CardUser.module.css'
import Button from '../../components/uiComponents/Button'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CardUser = ({ id, name, lastname, username, dni, imgURL, imgURLRev, users, setUsers, showImage }) => {
    const info = (a) => toast.info(a);

    const handlerAcept = (username, id) => {
        if (window.confirm(`Seguro que quieres aceptar al usuario ${username}?`)) {
            ACEPT_USER(id).then(res => {
                const newList = users.filter((user) => user.id !== id)
                setUsers(newList)
                info(res?.message)
            }).catch(console.error)
        }
    }
    const handlerReject = (username, id) => {
        if (window.confirm(`Seguro que quieres rechazar al usuario ${username}?`)) {
            REJECT_USER(id).then(res => {
                const newList = users.filter((user) => user.id !== id)
                setUsers(newList)
                info(res?.message)
            }).catch(console.error)
        }
    }
    return (
        <Card className='inline-block'>
            <div className='flex flex-col justify-center gap-4'>
                <div className={styles.images_container}>
                    <img src={imgURL} alt={username} onClick={() => showImage(imgURL)} />
                    <img src={imgURLRev} alt={username} onClick={() => showImage(imgURLRev)} />
                </div>
            <div className='flex flex-wrap gap-2'>
                <CardText>Name: {name}</CardText>
                <CardText>Lastname: {lastname}</CardText>
                <CardText>Username: {username}</CardText>
                <CardText>DNI: {dni}</CardText>
            </div>
            <div className='flex justify-center gap-12'>
                <Button onClick={() => handlerAcept(username, id)} >Acept</Button>
                <Button onClick={() => handlerReject(username, id)}>Reject</Button>
            </div>
            </div>
        </Card>
    )
}

export default CardUser