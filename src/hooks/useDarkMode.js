import { useState, useEffect } from 'react'

const UseDarkMode = () => {
    const [darkMode, setDarkMode] = useState(window.localStorage.getItem('darkmode') === 'true')

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            window.localStorage.setItem('darkmode', darkMode)
        }
        if (!darkMode) {
            document.documentElement.classList.remove('dark')
            window.localStorage.setItem('darkmode', darkMode)
        }
    }, [darkMode])

    const handlerChangeDarkmode = () => {
        setDarkMode(!darkMode)
    }


    return { darkMode, changeDarkMode: handlerChangeDarkmode, setDarkMode }
}

export default UseDarkMode