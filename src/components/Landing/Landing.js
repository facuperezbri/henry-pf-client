import style from './Landing.module.css'

export default function Landing () {
  return (
    <div className={style.container}>
        <h2 className={style.description}>Wallet.</h2>
        <div className={style.containerTwoElement}>
            <div>
                <img className={style.img} alt="nope" src="https://res.cloudinary.com/da76mkk4h/image/upload/v1658264046/landing_bi2wmp.png"/>
            </div>
            <div className={style.containerWelcome}>
                <h3 className={style.h3}>tu billetera virtual</h3>
                <button className={style.btn}>sign in</button>
            </div>
        </div>
    </div>
  )
}
