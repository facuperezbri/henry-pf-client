import React, { useEffect } from 'react'
import transport from '../../assets/icons/transport.svg'
import shopping from '../../assets/icons/shopping.svg'
import subscriptions from '../../assets/icons/subscriptions.svg'
import groceries from '../../assets/icons/groceries.svg'
import style from './CategoryExpense.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/actions'


export default function CategoryExpense({activities}) { // los movimientos, con su categoria y monto

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    const categories = useSelector(state => state.categories)
    console.log(categories)

    let sumPorCat = 0
    let totalByCat = []

    for (let i=0; i<categories?.length; i++) {
        for (let j=0; j<activities?.length; j++) {
            if (categories[i] === activities[j].categories?.name) {
                sumPorCat = activities[j].amount
            }
        }
        // console.log(sumPorCat)
        if (sumPorCat === 0) {
            totalByCat.push(0)
        }
        totalByCat.push(sumPorCat)
        sumPorCat = 0
    }

  return (
    <div>

        <div className={style.categoriesContainer}>
          <ul className={style.listContainer}>

            {/* {
            <li>
                {
                    categories?.map((xxx) => (
                        <div>
                            <img src={xxx.name} alt={`${xxx.name}`}/>
                        </div>
                    ))
                }
                {
                    totalByCat?.map((yyy) => (
                        <div>
                            <p>{yyy}</p>
                        </div>
                    ))  
                }
            </li>
            } */}




            <li><img src={transport} alt="Transport icon" />
              <div>
                <h4>Transport</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><img src={shopping} alt="Shopping icon" />
              <div>
                <h4>Shopping</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><img src={subscriptions} alt="Subscriptions icon" />
              <div>
                <h4>Subscriptions</h4>
                <p>$182,95</p>
              </div>
            </li>
            <li><img src={groceries} alt="Groceries icon" />
              <div>
                <h4>Groceries</h4>
                <p>$182,95</p>
              </div>
            </li>
          </ul>
        </div>

    </div>
  )
}
