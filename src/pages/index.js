import Link from 'next/link';
import Image from 'next/image';
import Logo from '@icons/logo.png';
import styles from '@styles/Home.module.scss';

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
];

export default function Home() {
	return (
		<div className={styles.Home}>
			<div className={styles['wrapper-content']}>
				<div className={styles['container-content']}>
					<header className={styles['navbar']}>
						<Image src={Logo} alt='company logo' width={30} height={30} />
						<menu>
							{navigation.map((el, index) => (
								<li key={index}>
									<Link href={el.href}>{el.name}</Link>
								</li>
							))}
						</menu>
						<Link href='/login'>Log in</Link>
					</header>
					<div className={styles['wrapper-text']}>
						<div className={styles['container-text']}>
							<h1>
								Data to enrich your{' '}
								<span className={styles.title}>online business</span>
							</h1>
							<p>
								Last weekend was three days long and the weather in Seattle was
								gorgeous. Contrary to stereotype, spring here is often
								characterized by bright sunny days that aren’t too hot I .
							</p>
							<div className={styles.buttons}>
								<button className={styles['btn-primary']}>Get started</button>
								<button className={styles['btn-secondary']}>live demo</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<figure className={styles['Home-img']}>
				<img
					src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
					alt='random img'
					// width={'700%'}
					// height={'312%'}
					// layout='responsive'
					// width='100%'
					// height='100%'
				/>
			</figure>
		</div>
	);
}
