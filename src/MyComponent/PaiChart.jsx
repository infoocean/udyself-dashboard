import React from 'react';
import { Chart } from "react-google-charts";

export default function PieChart() {
	return (
		<div id="piechart-continer">
			<Chart
				width={'100%'}
				height={'400px'}
				chartType="PieChart"
				loader={<div>Loading Chart</div>}
				data={[
					['Task', 'Hours per Day'],
					['Work', 11],
					['Eat', 2],
					['Commute', 2],
					['Watch TV', 2],
					['Sleep', 7],
				]}
				options={{
					title: 'My Daily Activities',
					// Just add this option
					is3D: true,
				}}
				rootProps={{ 'data-testid': '2' }}
				/>
		</div>
	)
}
