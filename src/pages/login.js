import Link from 'next/link';
import Image from 'next/image';
import Logo from '@icons/logo.png';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Login.module.scss';

function Login() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const auth = useAuth();
	const router = useRouter();

	const submitHandle = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		auth.signIn(email, password).then(() => {
			console.log('[LOGIN SUCCESS]');
			router.push('/dashboard');
		});
	};

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
					<form className={styles.form} onSubmit={submitHandle}>
						<input
							type='email'
							name='email'
							placeholder='Email address'
							ref={emailRef}
						/>
						<input
							type='password'
							name='password'
							placeholder='Password'
							ref={passwordRef}
						/>
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
