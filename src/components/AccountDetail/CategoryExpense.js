import React from 'react'
import style from './CategoryExpense.module.css'
import {TbBatteryCharging} from 'react-icons/tb'
import {TbMusic} from 'react-icons/tb'
import {TbShoppingCart} from 'react-icons/tb'
import {TbPlant2} from 'react-icons/tb'
import {TbTool} from 'react-icons/tb'
import {BiShoppingBag} from 'react-icons/bi'
import {TbTicket} from 'react-icons/tb'
import {TbCar} from 'react-icons/tb'
import {TbPlane} from 'react-icons/tb'
import {TbCheck} from 'react-icons/tb'


export default function CategoryExpense ({ activities }) { // los movimientos, con su categoria y monto

    const charge = <TbBatteryCharging/>
    const entertainment = <TbMusic/>
    const groceries = <TbShoppingCart/>
    const selfcare = <TbPlant2/>
    const services = <TbTool/>
    const shopping = <BiShoppingBag/>
    const subscriptions = <TbTicket/>
    const transport = <TbCar/>
    const travels = <TbPlane/>
    const other = <TbCheck/>

    let categoriesSum = [
        { name: "Charge", sum: 0, icon: charge },
        { name: "Entertainment", sum: 0, icon: entertainment },
        { name: "Groceries", sum: 0, icon: groceries },
        { name: "Selfcare", sum: 0, icon: selfcare },
        { name: "Services", sum: 0, icon: services },
        { name: "Shopping", sum: 0, icon: shopping },
        { name: "Subscriptions", sum: 0, icon: subscriptions },
        { name: "Transport", sum: 0, icon: transport },
        { name: "Travels", sum: 0, icon: travels },
        { name: "Other", sum: 0, icon: other }
    ]

    let provSum = 0

    for (let i = 0; i < categoriesSum.length; i++) {
        for (let j = 0; j < activities?.length; j++) {
            if (activities?.[j].categories?.name === categoriesSum[i].name && activities?.[j].operations.name === "Debit") {
                provSum += activities?.[j].amount
            }
        }
        categoriesSum[i].sum = provSum
        provSum = 0
    }

    let catWithExpenses = categoriesSum.filter((abc) => abc.sum !== 0)

    catWithExpenses = catWithExpenses.sort((a, b) => {
        if (a.sum < b.sum) {
            return 1;
        }
        if (a.sum > b.sum) {
            return -1;
        }
        return 0
    })

    return (
        <div>
            <div className={style.categoriesContainer}>
                <ul className={style.listContainer}>
                    {   catWithExpenses.length <= 4 ?
                        catWithExpenses.map((xxx, i) => (
                            <li key={i}>
                                {xxx.icon}
                                <div>{xxx.sum}</div>
                                <div>{xxx.name}</div>
                            </li>
                        )) :
                        catWithExpenses.slice(0,4).map((xxx, i) => (
                            <li key={i}>
                                {xxx.icon}
                                <div>{xxx.sum}</div>
                                <div>{xxx.name}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
