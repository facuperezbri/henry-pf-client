import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default function CryptoChart({date, name}){
        console.log(date[0])
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: `Movements of ${name}`
			},
			axisX: {
				title: "Year 2022",
				prefix: "Mounth ",
                interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "Mounth {x}: {y}",
				dataPoints: [
                    { x: 1, y: date[0] },
					{ x: 2, y: date[1] },
					{ x: 3, y: date[2] },
					{ x: 4, y: date[3] },
					{ x: 5, y: date[4] },
					{ x: 6, y: date[5] },
					{ x: 7, y: date[6] },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
              