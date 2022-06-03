import React from 'react';
import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import { ChartJS } from '@components/Chart';

const PRODUCT_LIMIT = 5;
const PRODUCT_OFFSET = 5;

function Dashboard() {
	const products = useFetch(
		`${endPoints.products.getProducts}?limit=${PRODUCT_LIMIT}&offset=${PRODUCT_OFFSET}`
	);
	// const products = useFetch(
	// 	endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
	// );

	const categoryName = products?.map((el) => el.category);
	const categoryCount = categoryName?.map((el) => el.name);

	const countOccurrences = (array) =>
		array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

	const data = {
		dataset: [
			{
				label: 'category',
				data: countOccurrences(categoryCount),
				borderWidth: 2,
				backgroundColor: [
					'#ffbb11',
					'#c0c0c0',
					'#50AF95',
					'#f3ba2f',
					'#2a71d0',
				],
			},
		],
	};

	console.log(products);
	return (
		<>
			<ChartJS charData={data} />
		</>
	);
}

export default Dashboard;
