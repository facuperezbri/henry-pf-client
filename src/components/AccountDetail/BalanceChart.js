import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import CanvasJSReact from '../../assets/canvasjs.react';

import style from './BalanceChart.module.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LineChart () {

  const [month, setMonth] = useState(7)
  const [year, setYear] = useState(2022)

  const movements = useSelector(state => state.movements)

  const procData = movements?.map((data) => {
    return {
      date: data.date.slice(0, 10),
      balance: data.balance
    }
  })

  // console.log(movements)

  var aux = []
  const startBalance = 0
  let monthDays = 0
  let singleDigitMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  if (month === 2 && year % 4 !== 0) {
    monthDays = 28
  }
  if (month === 2 && year % 4 === 0) {
    monthDays = 29
  }
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    monthDays = 31
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    monthDays = 30
  }

    // console.log(procData[0].date.slice(5,7) === "08")

    console.log(
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && (abc.date.slice(5,7) === "07" || abc.date.slice(6,7) === "7")).length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && (abc.date.slice(5,7) === "07" || abc.date.slice(6,7) === "7"))[0].balance :
      0
      )

  let finalBalancePerMonth = [ 
    {index: 0, balance: 
      procData.filter((abc) => abc.date.slice(0,4) === `${year-1}`).length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year-1}`)[0].balance : 
      0}, 
    {index: 1, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "01").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "01")[0].balance :
      0}, 
    {index: 2, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "02").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "02")[0].balance :
      0},       
    {index: 3, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "03").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "03")[0].balance :        
      0}, 
    {index: 4, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "04").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "04")[0].balance :
      0},       
    {index: 5, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "05").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "05")[0].balance :
      0}, 
    {index: 6, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "06").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "06")[0].balance :
      0},       
    {index: 7, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "07").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "07")[0].balance :
      0}, 
    {index: 8, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "08").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "08")[0].balance :
      0},       
    {index: 9, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "09").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "09")[0].balance :        
      0}, 
    {index: 10, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "10").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "10")[0].balance :
      0},       
    {index: 11, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "11").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "11")[0].balance :
      0}, 
    {index: 12, balance:
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "12").length ? 
      procData.filter((abc) => abc.date.slice(0,4) === `${year}` && abc.date.slice(5,7) === "12")[0].balance :
      0},       
        
  ]

  // console.log(finalBalancePerMonth)

  let auxData = function () {
    if (movements.movements?.length === 0) {
      for (let i = 1; i <= monthDays; i++) {
        aux.push({ x: `${i}`, y: startBalance })
      }
      return aux
    }
    if (singleDigitMonth.includes(month)) {
      for (let i = 1; i <= monthDays; i++) {
        if (i === 1) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `0${month}` && elem.date?.slice(8) === `01`)
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: finalBalancePerMonth[month-1].balance })
          }
        }
        if (i > 1 && i <= 9) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `0${month}` && elem.date?.slice(8) === `0${i}`)
          let previousBalance = aux[aux.length - 1].y
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: previousBalance })
          }
        }
        if (i >= 10) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `0${month}` && elem.date?.slice(8) === `${i}`)
          let previousBalance = aux[aux.length - 1].y
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: previousBalance })
          }
        } 
      }
      return aux
    }
    else {
      for (let i = 1; i <= monthDays; i++) {
        if (i === 1) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `${month}` && elem.date?.slice(8) === `0${i}`)
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: finalBalancePerMonth[month-1].balance })
          }
        }
        if (i > 1 && i <= 9) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `${month}` && elem.date?.slice(8) === `0${i}`)
          let previousBalance = aux[aux.length - 1].y
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: previousBalance })
          }
        }
        if (i >= 10) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `${month}` && elem.date?.slice(8) === `${i}`)
          let previousBalance = aux[aux.length - 1].y
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: previousBalance })
          }
        }
      }
      return aux
    }
  }
  auxData()
  // console.log(aux)

  const onSelectMonth = function (e) {
    setMonth(Number(e.target.value))
  }

  const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Daily Balance"
    },
    axisY: {
      title: "Balance",
      includeZero: true,
      // suffix: "%"
    },
    axisX: {
      title: "Date",
      // prefix: "W",
      interval: 7
    },
    data: [{
      type: "line",
      toolTipContent: "Date {x}: $ {y}",
      dataPoints: aux
    }]
  }

  return (
    <div className={style.container}>

      <select name="filterMonth" onChange={onSelectMonth} id="filterMonth">
        <option selected={true} disabled="disabled">Month...</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
      </select>

      {/* <h1>React Line Chart</h1> */}
      <CanvasJSChart options={options}
      /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );

}

