import React from 'react'
import { ACEPT_USER } from '../../services/ACEPT_USER'
import { REJECT_USER } from '../../services/REJECT_USER'
import styles from './CardUser.module.css'

const CardUser = ({ id, name, lastname, username, dni, imgURL, imgURLRev, users, setUsers }) => {
    const handlerAcept = (username, id) => {
        if (window.confirm(`Seguro que quieres aceptar al usuario ${username}?`)) {
            ACEPT_USER(id).then(res => {
                const newList = users.filter((user) => user.id !== id)
                setUsers(newList)
                alert(res?.message)
            }).catch(console.error)
        }
    }
    const handlerReject = (username, id) => {
        if (window.confirm(`Seguro que quieres rechazar al usuario ${username}?`)) {
            console.log(id)
            REJECT_USER(id).then(res => {
                const newList = users.filter((user) => user.id !== id)
                setUsers(newList)
                alert(res?.message)
            }).catch(console.error)
        }
    }
    return (
        <div className={styles.card_container}>
            <div className={styles.item_container}>
                <span className={styles.item}>{name}</span>
                <span className={styles.item}>{lastname}</span>
                <span className={styles.item}>{username}</span>
                <span className={styles.item}>{dni}</span>
            </div>
            <div className={styles.images_container}>
                <img src={imgURL} alt={username} />
                <img src={imgURLRev} alt={username} />
            </div>
            <div>
                <button className={styles.button} onClick={() => handlerAcept(username, id)} >Acept</button>
                <button className={styles.button} onClick={() => handlerReject(username, id)}>Reject</button>
            </div>
        </div>
    )
}

export default CardUser