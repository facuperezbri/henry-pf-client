import React, { useEffect, useState } from 'react'
import style from './Favourites.module.css'
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite, removeFavorite, getUser } from '../../redux/actions/index'
import Modal from 'react-modal'
import Button from '../uiComponents/Button'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Card from '../uiComponents/Card'
import useNotification from '../../hooks/useNotification'
import { ADD_FAVORITE } from '../../services/ADD_FAVORITE'

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

export default function Favorites ({ setCvuFav }) {
    const favourites = useSelector((state) => state.favourites)
    const { error, success } = useNotification()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [fav, setFav] = useState('')
    // const favAdd = () => toast.success("You added your new favourite successfully")

    function handleModel () {
        setIsOpen(true)
    }

    function handleClose () {
        setIsOpen(false)
        setFav("")
    }

    function handleSubmit (e) {
        e.preventDefault()
        ADD_FAVORITE(fav).then((res) => {
            if (res?.message) {
                return error(res?.message)
            }
            if (res?.success) {
                dispatch(getFavorite())
                success(res?.success)
            }
        }).catch((error) => {
            error()
            console.error(error)
        })
        setIsOpen(false)
        setFav("")
    }

    function handleInput (e) {
        setFav(e.target.value)
    }

    function closeModel () {
        setFav('')
    }

    function deleteFav (e) {
        dispatch(removeFavorite(e.target.id))
    }

    useEffect(() => {
        dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getFavorite()))
    }, [dispatch])


    return (
        <Card className='basis-1/2'>
            <h1 className={style.title}>My Friends</h1>
            <div>
                {/* {favourites.length === 0 && <p></p>} */}
                {favourites.map((f) =>
                    <div key={f.username} className='flex gap-4'>
                        <section className='flex cursor-pointer mb-8 items-center' onClick={() => setCvuFav(f.accounts[0].cvu)}>
                            <img className='rounded-full w-16 h-16 mr-6' src={f.profilepic} alt={f.username} />
                            <p>{f.username}</p>
                        </section>
                        <Button onClick={deleteFav} id={f.id} >Delete</Button>
                    </div>
                )}
            </div>
            <Button onClick={handleModel}>Add</Button>

            <Modal
                isOpen={isOpen}
                style={modalStyles}
                onRequestClose={closeModel}
            >
                <Button onClick={handleClose}>x</Button>
                <form onSubmit={handleSubmit}>
                    <input value={fav} onChange={handleInput} placeholder='username' />
                    <Button onSubmit={handleClose} type="submit">Add</Button>
                </form>
            </Modal>
            <ToastContainer />


        </Card>
    )
}