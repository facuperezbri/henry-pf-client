import style from './Faq.module.css'
import { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)
//eje y
const scores = [5,3,2,4,5,5,1,]
//eje x
const labels = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto"]
const options = {
  responsive: false
}
export default function Landing () {
  const data = useMemo(function(){
    return {
      datasets:[
        {
          label: "Mis datos",
          data: scores,
          tension:0.6,
        },
      ],
      labels,
    }
  },[])
  return (
      <div style={{marginLeft:"20rem"}}>
        <Line data={data} options={options}/>

      </div>

    
  )
}
