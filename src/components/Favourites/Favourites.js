import React, { useEffect, useState } from 'react'
import style from './Favourites.module.css'
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite, removeFavorite, addFavorite, getUser } from '../../redux/actions/index'
import Modal from 'react-modal'
import Button from '../uiComponents/Button'

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
    const userId = useSelector((state) => state.userData?.id)
    const dispatch = useDispatch()
    // const [input,setInput] = useState({favourites:[]})
    const [isOpen, setIsOpen] = useState(false)
    const [fav, setFav] = useState('')
    const [selected, setSelected] = useState('')
    const [favAccs, setFavAccs] = useState([])
    // const [errors, setErrors] = useState({})
    const [cvu, setCvu] = useState("")

    // function validation(input){
    //     let errors = {}
    //     if(input.cvu || typeof input.cvu !== 'string'){
    //         errors.cvu = 'Ingrese un cvu/username válido'
    //     }
    // }

    function handleModel () {
        setIsOpen(true)
    }

    function handleClose () {
        setIsOpen(false)
        setFav("")
    }

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(addFavorite({ userId, fav }))
        setIsOpen(false)
        setFav("")
        alert("You added your new favourite successfully")
    }

    function handleInput (e) {
        setFav(e.target.value)
    }

    function closeModel () {
        setFav('')
    }

    function handleSelected (e) {
        const fav = favourites.find(el => {
            return el.id === e.target.value
        })
        setFavAccs(fav.accounts)
        setSelected(e.target.value)
    }

    function deleteFav () {
        dispatch(removeFavorite(selected))
        alert("Your contact was removed successfully")
    }

    const handleCvuChange = e => {
        setCvu(e.target.value)
    }

    function handleCvu () {
        // setState({
        //     ...state, cvuD: cvu
        // })
    }

    useEffect(() => {
        dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getFavorite(r.payload.id)))
    }, [dispatch])

    return (
        <div class="bg-white w-10/12 shadow-xl rounded-b-md px-8 pt-6 pb-8 mb-4">
            <h1 className={style.title}>My Friends</h1>
            <select className={style.select} value={selected} onChange={e => handleSelected(e)}>
                <option selected disabled value="">Favourites</option>
                {favourites?.map(fav =>
                    <option value={fav.id} key={fav.id}>
                        {fav.username}
                    </option>)
                }
            </select>
            <select className={style.select} value={cvu} onChange={handleCvuChange}>
                <option selected value="">Fav Accounts</option>
                {favAccs?.map(acc => {
                    return <option value={acc?.cvu}>{acc?.currencies?.name} Acc</option>
                })}
            </select>
            <div>
                {favourites.map((f) => {
                    return (
                        <section style={{ cursor: 'pointer' }} onClick={() => setCvuFav(f.accounts[0].cvu)} className='flex'>
                            <img className='rounded-full w-12' src={f.profilepic} alt={f.username} />
                            <p>{f.username}</p>
                        </section>
                    )
                }
                )}
            </div>
            <Button onClick={handleModel}>Add</Button>
            <Button onClick={deleteFav} >Delete</Button>
            <Button onClick={handleCvu}>Add CVU</Button>
            <Modal
                isOpen={isOpen}
                style={modalStyles}
                onRequestClose={closeModel}
            >
                <Button onClick={handleClose}>x</Button>
                <form onSubmit={handleSubmit}>
                    <input value={fav} onChange={handleInput} placeholder='CVU/username' />
                    <Button onSubmit={handleClose} type="submit">Add</Button>
                </form>
            </Modal>

        </div>
    )
}