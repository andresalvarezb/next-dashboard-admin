import React from 'react';
import Image from 'next/image';
import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import styles from '@styles/Dashboard.module.scss';

const PRODUCT_LIMIT = 5;
const PRODUCT_OFFSET = 5;

function Dashboard() {
	let products = useFetch(
		endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET)
	);

	console.log(products);
	return (
		<div className={styles.Dashboard}>
			<table className={styles.table}>
				<thead className={styles.titles}>
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
						<th>ID</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((el) => (
						<tr
							key={`product-item-${el.id}`}
							className={styles['container-product']}
						>
							<td>
								<div className={styles.product}>
									<Image
										src={el.images[1]}
										width={50}
										height={50}
										alt='logo product'
									/>
									<span>{el.title}</span>
								</div>
							</td>
							<td>
								<div className={styles['product-category']}>
									<span>{el.category.name}</span>
								</div>
							</td>
							<td className={styles['product-price']}>
								<div>${el.price}</div>
							</td>
							<td className={styles['product-id']}>{el.id}</td>
							<td className={styles['edit-product']}>Edit</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Dashboard;
