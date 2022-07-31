import React, { useEffect, useState } from 'react'
import style from './Favourites.module.css'
// import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite, removeFavorite, addFavorite, getUser } from '../../redux/actions/index'
import Modal from 'react-modal'
// Modal.setAppElement('#root') 

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

export default function Favorites ({ setState, state }) {
    const favourites = useSelector((state) => state.favourites)
    const userId = useSelector((state) => state.userData.id)
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
    }

    const handleCvuChange = e => {
        setCvu(e.target.value)
    }

    function handleCvu () {
        // const fav = favourites.find(e=>{
        //     return e.id === selected
        // })
        setState({
            ...state, cvuD: cvu
        })
    }
    // console.log(favAccs)
    useEffect(() => {
        dispatch(getUser(window.localStorage.getItem('token'))).then(r => dispatch(getFavorite(r.payload.id)))
    }, [dispatch])

    // function handleSelect(e){
    //     e.preventDefault()
    //     setInput({...input, favourites:[...input.favourites, e.target.value]})
    // }

    // let favourites = [{id:'998he9dh238947dbh38', friendID:'98e743hfdndkfsdj39787', userID:'sdfadfk394234234435'}]
    return (
        <div className={style.main}>
            <h1 className={style.title}>My Friends</h1>
            <select className={style.select} onChange={e => handleSelected(e)}>

                <option selected disabled value="">Favourites</option>
                {favourites.map(fav =>
                    <option value={fav.id} key={fav.id}>
                        Name: {fav.username} CVU: {fav.accounts[0].cvu}
                    </option>
                )
                }
            </select>
            <select className={style.select} onChange={handleCvuChange}>
                <option selected disabled>Fav Account</option>
                {favAccs.map(acc => {
                    return <option value={acc.cvu}>{acc.currencies.name} Acc</option>
                })}
            </select>
            <button onClick={deleteFav} >Delete</button>
            <button onClick={handleModel}>Add fav</button>
            <button onClick={handleCvu}>Add cvu</button>
            <Modal
                isOpen={isOpen}
                style={modalStyles}
                onRequestClose={closeModel}
            >
                <button onClick={handleClose}>x</button>
                <form onSubmit={handleSubmit}>
                    <input value={fav} onChange={handleInput} placeholder='CVU/username' />
                    <button onSubmit={handleClose} type="submit" >Add</button>
                </form>
            </Modal>

        </div>
    )
}