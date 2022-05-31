import MainLayout from 'Layout/MainLayout';
import { ProviderAuth } from '@hooks/useAuth';
import '@styles/index.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ProviderAuth>
				<MainLayout>
					<Component {...pageProps} />;
				</MainLayout>
			</ProviderAuth>
		</>
	);
}
export default MyApp;
