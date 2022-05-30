import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@icons/logo.png';
import styles from '@styles/Login.module.scss';

function Login() {
	return (
		<>
			<div className={styles.Login}>
				<div className={styles.wrapper}>
					<header>
						<Image src={Logo} alt='logo' width={40} height={40} />
						<h1>Sign in to your account</h1>
						<p>
							Or <span>start your 14-day free trial</span>
						</p>
					</header>
					<form className={styles.form}>
						<input type='email' name='email' placeholder='Email address' />
						<input type='password' name='password' placeholder='Password' />
						<div className={styles['container-checkbox']}>
							<label>
								<input type='checkbox' name='checkbox' />
								<span>Remember me</span>
							</label>
							<Link href='#'>Forgot your password?</Link>
						</div>
						<button type='submit'> Sign in</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
