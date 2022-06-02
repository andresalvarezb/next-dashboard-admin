const {
	Chart,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} = require('chart.js');
const { Bar } = require('react-chartjs-2');

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartJS = ({ charData }) => {
	return (
		<>
			<Bar
				data={charData}
				options={{
					title: {
						display: true,
						text: 'Category',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'right',
					},
				}}
			/>
		</>
	);
};

export { ChartJS };
