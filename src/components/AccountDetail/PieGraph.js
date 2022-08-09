import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieGraph ({ movements }) {
  //   const usData = useSelector(state => state.userData)
  const [dataPoints, setDataPoints] = useState([])

  console.log(movements)

  useEffect(() => {

    const totalCategories = data.labels.map(categoryName => ({ name: categoryName, total: 0 }))
    totalCategories.forEach(totalCal => {
      movements.forEach(movement => {
        if (movement.categories.name === totalCal.name && movement.operations.name === "Debit") {
          totalCal.total += movement.amount
        }
      })
    })
    const dataTotal = totalCategories.map(({ total }) => (total))
    setDataPoints(dataTotal)
  }, [])

  const movesDebit = movements.filter((xxx) => xxx.operations.name === "Debit")
  const mapMovements = (movement) => (movement.categories.name)

  let data = {
    labels: [...new Set(movesDebit.map(mapMovements))],
    datasets: [
      {
        // label: '# of Votes',
        data: dataPoints,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 206, 255, 1)',
          'rgba(54, 102, 86, 1)',
          'rgba(153, 99, 192, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 206, 255, 1)',
          'rgba(54, 102, 86, 1)',
          'rgba(153, 99, 192, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  return <Doughnut data={data} style={{ maxWidth: 450, maxHeight: 450 }} />;
}