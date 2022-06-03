import React from 'react';
import Image from 'next/image';
import styles from '@styles/Products.module.scss';

function Products() {
	return (
		<>
			<div className={styles.Products}>
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
		</>
	);
}

export default Products;
