import React from 'react'
import transport from '../../assets/icons/transport.svg'
import shopping from '../../assets/icons/shopping.svg'
import subscriptions from '../../assets/icons/subscriptions.svg'
import groceries from '../../assets/icons/groceries.svg'
import charge from '../../assets/icons/groceries.svg'
import entertainment from '../../assets/icons/groceries.svg'
import selfcare from '../../assets/icons/groceries.svg'
import services from '../../assets/icons/groceries.svg'
import travels from '../../assets/icons/groceries.svg'
import style from './CategoryExpense.module.css'


export default function CategoryExpense({activities}) { // los movimientos, con su categoria y monto

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCategory())
    // }, [])
    // const categories = useSelector(state => state.categories)
    // console.log(categories)
    let categoriesSum = [
        {name: "Charge", sum: 0, icon: charge},       
        {name: "Entertainment", sum: 0, icon: entertainment},              
        {name: "Groceries", sum: 0, icon: groceries},
        {name: "Selfcare", sum: 0, icon: selfcare},            
        {name: "Services", sum: 0, icon: services},           
        {name: "Shopping", sum: 0, icon: shopping},          
        {name: "Subscriptions", sum: 0, icon: subscriptions},                
        {name: "Transport", sum: 0, icon: transport},
        {name: "Travels", sum: 0, icon: travels}
    ]

    let provSum = 0

    for (let i=0; i<categoriesSum.length; i++) {
        for (let j=0; j<activities?.length; j++) {
            if (activities?.[j].categories?.name === categoriesSum[i].name) {
                provSum += activities?.[j].amount
            }
        }
        categoriesSum[i].sum = provSum
        provSum = 0
    }

    // console.log(categoriesSum.filter((abc) => abc.sum !== 0))

  return (
    <div>
        <div className={style.categoriesContainer}>
          <ul className={style.listContainer}>
            {
            <li>
                {/* ESTA PRIMERA OPCION ES PARA QUE APAREZCAN SOLO LAS CATEGORIAS UTILIZADAS*/}
                {
                    categoriesSum.filter((abc) => abc.sum !== 0).map((xxx, i) => (
                        <div key={i}>
                            <img src={xxx.icon} alt={`${xxx.name} NF`}/>
                            <div>{xxx.sum}</div>
                            <div>{xxx.name}</div>
                        </div>
                    ))
                }

                {/* ESTA SEGUNDA OPCION ES PARA QUE APAREZCAN TODAS LAS CATEGORIAS AUN SI TIENEN CERO*/}
                {/* {
                    categoriesSum.map((xxx) => (
                        <div>
                            <img src={xxx.icon} alt={`${xxx.name} NF`}/>
                            <div>{xxx.sum}</div>
                            <div>{xxx.name}</div>
                        </div>
                    ))
                } */}
            </li>
            }
          </ul>
        </div>
    </div>
  )
}
