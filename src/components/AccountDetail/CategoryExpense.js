import React from 'react'
import style from './CategoryExpense.module.css'
import { TbBatteryCharging } from 'react-icons/tb'
import { TbMusic } from 'react-icons/tb'
import { TbShoppingCart } from 'react-icons/tb'
import { TbPlant2 } from 'react-icons/tb'
import { TbTool } from 'react-icons/tb'
import { BiShoppingBag } from 'react-icons/bi'
import { TbTicket } from 'react-icons/tb'
import { TbCar } from 'react-icons/tb'
import { TbPlane } from 'react-icons/tb'
import { TbCheck } from 'react-icons/tb'


export default function CategoryExpense ({ activities }) { // los movimientos, con su categoria y monto

    const charge = <TbBatteryCharging size={60} />
    const entertainment = <TbMusic size={60} />
    const groceries = <TbShoppingCart size={60} />
    const selfcare = <TbPlant2 size={60} />
    const services = <TbTool size={60} />
    const shopping = <BiShoppingBag size={60} />
    const subscriptions = <TbTicket size={60} />
    const transport = <TbCar size={60} />
    const travels = <TbPlane size={60} />
    const other = <TbCheck size={60} />

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
        <section >
            <ul className='flex flex-wrap gap-8 w-full justify-center items-center md:gap-20'>
                {
                    catWithExpenses.map((xxx, i) => (
                        <li className='grid place-items-center' key={i}>
                            {xxx.icon}
                            <p className='font-bold rounded-lg bg-red-400 my-1 px-1.5'> $ {xxx.sum.toString().slice(0, xxx.sum.toString().length - 3)},{xxx.sum.toString().slice(xxx.sum.toString().length - 3)}</p>
                            <p>{xxx.name}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
