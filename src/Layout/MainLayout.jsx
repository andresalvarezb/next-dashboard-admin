import Header from '@components/Header';
import Nav from '@components/Nav';
import React from 'react';

function MainLayout({ children }) {
	return (
		<>
			<div className={''}>
				<main>
					<Header />
					{/* <Nav /> */}
					<div className={''}>{children}</div>
				</main>
			</div>
		</>
	);
}

export default MainLayout;
