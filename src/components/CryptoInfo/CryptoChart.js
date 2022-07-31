import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default function CryptoChart({date, name}){
        // console.log(date)
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
                    { x: 1, y: date?.data },
					{ x: 2, y: date?.data1 },
					{ x: 3, y: date?.data2 },
					{ x: 4, y: date?.data3 },
					{ x: 5, y: date?.data4 },
					{ x: 6, y: date?.data5 },
					{ x: 7, y: date?.data6 },
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
              