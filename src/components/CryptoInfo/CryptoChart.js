import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import {useSelector} from 'react-redux'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default function CryptoChart({amount, dates}){
	const darkMode = useSelector(state => state.darkMod)
        // console.log(date)
		let aux = [
			{label:"enero", y: 0},
			{label:"febrero", y: 0},
			{label:"marzo", y: 0},
			{label:"abril", y: 0},
			{label:"mayo", y: 0},
			{label:"junio", y: 0},
			{label:"julio", y: 0},
			{label:"agosto", y: 0},
			{label:"septiembre", y: 0},
			{label:"octubre", y: 0},
			{label:"noviembre", y: 0},
			{label:"diciembre", y: 0}
		]
		const aut = aux.slice(0,amount.length)

		for (let i=0; i<=amount?.length; i++) {
			aux[i].y = amount[i]
		}

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: darkMode ? "light1" : "dark2", // "light1", "dark1", "dark2"
			title:{
				text: `Movements of ${dates.name} by month`
			},
			axisX: {
				title: "Year 2022",
				// prefix: ,
                interval: 1
			},
			data: [{
				type: "column",
				
				toolTipContent: "{x}: {y}",
				dataPoints: aut
			}]
		}
		return (
		// <div style={{display: "flex", width:"50rem",marginLeft:"15rem"}}>
		// <div style={{width:"60%" , display:"inline-block",zIndex:"1"}}>
		<div className='w-1/2 inline-block z-10'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}