import '@styles/tailwind.css';

import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default App;
