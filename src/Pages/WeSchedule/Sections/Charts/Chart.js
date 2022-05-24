// Todo
// Rename this file to the type of chart being created
import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		// This is a chart with some dummy data attached
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				datasets: [{ 
					data: [0,8,7,6,10,4,0],
					label: "Employee A",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
				}, { 
					data: [10,0,0,0,12,8,5],
					label: "Employee B",
					borderColor: "#3cba9f",
					backgroundColor: "#71d1bd",
					fill: false,
				} /*, { 
					data: [0,8,8,9,8,8,0],
					label: "Employee C",
					borderColor: "#ffa500",
					backgroundColor:"#ffc04d",
					fill: false,
				}, { 
					data: [0,3,2,2,7,0,0],
					label: "Employee D",
					borderColor: "#c45850",
					backgroundColor:"#d78f89",
					fill: false,
				} */
				]
			},
		});
	}
	// Returns HTML to render the chart
	render() {
		return (
			<div>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
	}
}