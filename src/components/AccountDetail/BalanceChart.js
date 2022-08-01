import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import CanvasJSReact from '../../assets/canvasjs.react';

import style from './BalanceChart.module.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function LineChart () {

  const [month, setMonth] = useState(7)
  const [year, setYear] = useState(2022)

  const movements = useSelector(state => state.movements)

  const procData = movements.movements?.map((data) => {
    return {
      date: data.date.slice(0, 10),
      balance: data.balance
    }
  })

  // useEffect(() => {
  //   auxData()
  // },[aux])

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

  let auxData = function () {
    if (movements.movements?.length === 0) {
      for (let i = 1; i <= monthDays; i++) {
        aux.push({ x: `${i}`, y: startBalance })
      }
      return aux
    }
    if (singleDigitMonth.includes(month)) {
      // console.log(month)
      // console.log("entré al 2do")
      for (let i = 1; i <= monthDays; i++) {
        // console.log("entre al for")
        if (i === 1) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `0${month}` && elem.date?.slice(8) === `01`)
          // let previousBalance = procData[procData?.indexOf(movesOfTheDay[movesOfTheDay?.length-1])+1].balance
          // while (!previousBalance) {
          //   let searching = 2
          //   previousBalance = procData[procData?.indexOf(movesOfTheDay[movesOfTheDay?.length-1])+searching].balance
          //   searching++
          // }
          if (movesOfTheDay?.length > 0) {
            // console.log("entré a la vaina")
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            // console.log("entre al false")
            aux.push({ x: i, y: 0 })
          }
          // console.log(aux)
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
      // console.log(aux)
      return aux
    }
    else {
      for (let i = 1; i <= monthDays; i++) {
        if (i === 1) {
          let movesOfTheDay = procData?.filter((elem) => elem.date?.slice(5, 7) === `${month}` && elem.date?.slice(8) === `0${i}`)
          // let previousBalance = procData[procData?.indexOf(movesOfTheDay[movesOfTheDay?.length-1])+1].balance
          // while (!previousBalance) {
          //   let searching = 2
          //   previousBalance = procData[procData?.indexOf(movesOfTheDay[movesOfTheDay?.length-1])+searching].balance
          //   searching++
          // }
          if (movesOfTheDay?.length > 0) {
            aux.push({ x: i, y: movesOfTheDay[0].balance })
          } else {
            aux.push({ x: i, y: 0 })
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

  const onSelectMonth = function (e) {
    // console.log(e.target.value)
    setMonth(Number(e.target.value))
    // return auxData(Number(e.target.value))
  }

  const options = {
    animationEnabled: true,
    exportEnabled: true,
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
      interval: 1
    },
    data: [{
      type: "line",
      toolTipContent: "Date {x}: $ {y}",
      dataPoints: aux
    }]
  }

  return (
    <div className={style.container}>

      <select name="filterMonth" onChange={onSelectMonth}>
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

