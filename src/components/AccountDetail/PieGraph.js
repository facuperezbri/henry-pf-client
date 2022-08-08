import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux'

ChartJS.register(ArcElement, Tooltip, Legend);



export function PieGraph({ movements }) {
//   const usData = useSelector(state => state.userData)
const [dataPoints, setDataPoints] = useState([])

    useEffect(() => {
    
            const totalCategories = data.labels.map(categoryName => ({ name: categoryName, total: 0 }))
            totalCategories.forEach(totalCal => {
                movements.forEach(movement => {
                    if (movement.categories.name === totalCal.name) {
                        totalCal.total += movement.amount
                    }
                })
            })
            console.log({totalCategories})
            const dataTotal = totalCategories.map(({ total }) => (total))
            setDataPoints(dataTotal)
    }, [])
    
    const mapMovements = (movement) => (movement.categories.name)

    let data = {
      labels: [...new Set(movements.map(mapMovements))],
      datasets: [
        {
          label: '# of Votes',
          data: dataPoints,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        },
      ],
    }
    // console.log(movements)

    // console.log(movements)
  return <Doughnut data={data} style={{ maxWidth: 450, maxHeight: 450 }}/>;
}