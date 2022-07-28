// import React from 'react'
// import { Bar } from 'react-chartjs-2'

// const BalanceChart = () => {

//     return (
//         <div>
//             <Bar 
//                 data={{
//                     labels: ['a', 'b', 'c'],
//                 }}
//                 height={100}
//                 width={150}
//             />
//         </div>
//     )
// }

// export default BalanceChart

import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";

const GraficoDona = () => {
  const [datos, setDatos] = useState({
    fechIni: "",
    fechFin: ""
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };
  const enviarDatos = (e) => {
    e.preventDefault(e);
    console.log(datos.fechIni);
    console.log(datos.fechFin);
    //cambiar estado  de redux para despachar una acción que traiga datos
    //filtrados por la búsqueda
  };

  const data = {
    labels: ["Primaria", "Secundaria", "Terciaria"],
    datasets: [
      {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: ["#FFFF00", "#f72a5d", "#6cebe8"],
        //data: datos que deberían venir de Redux
        //previa consulta a la bd
        data: [100, 50, 30]
      }
    ]
  };
  const options = {
    maintAspectRatio: false,
    responsive: true
  };

  let fecha = new Date();
  var opciones = { month: "long" };
  let mes = fecha.toLocaleDateString("es-ES", opciones);
  return (
    <div style={{ width: `40%`, height: `10%` }}>
      <h3>Apoyo escolar mes de {mes}</h3>
      <form onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            onChange={handleInputChange}
            name="fechIni"
          ></input>

          <input
            type="date"
            className="form-control"
            onChange={handleInputChange}
            name="fechFin"
          ></input>

          <button type="submit">Buscar</button>
        </div>
      </form>

      <Doughnut data={data} options={options} />
    </div>
  );
};
export default GraficoDona;
