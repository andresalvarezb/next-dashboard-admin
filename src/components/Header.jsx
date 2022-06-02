import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@icons/logo.png';
import User from '@icons/icon-user.png';
import { BsBell } from 'react-icons/bs';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Header.module.scss';

const navigation = [
	{ name: 'Dashboard', href: '/dashboard' },
	{ name: 'Products', href: '#' },
	{ name: 'Sells', href: '#' },
];

function Header() {
	const auth = useAuth();
	const userData = {
		name: auth?.user?.name,
		email: auth?.user?.email,
		imageUrl: auth?.user?.avatar,
	};
	return (
		<div className={styles.Header}>
			<header>
				<nav>
					<Link href={'#'}>
						<Image src={Logo} alt='Logo company' width={30} height={30} />
					</Link>
					<menu className={styles['Header-menu']}>
						{navigation.map((el, index) => (
							<li key={index}>
								<Link href={el.href}>{el.name}</Link>
							</li>
						))}
					</menu>
				</nav>
				<div className={styles['Header-user']}>
					<BsBell />
					<Image
						src={userData?.imageUrl || User}
						alt={userData?.name || 'user'}
						width={30}
						height={30}
					/>
				</div>
			</header>
		</div>
	);
}

export default Header;
