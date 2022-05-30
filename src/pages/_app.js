import '@styles/index.scss';
import MainLayout from 'Layout/MainLayout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<MainLayout>
				<Component {...pageProps} />;
			</MainLayout>
		</>
	);
}
export default MyApp;
