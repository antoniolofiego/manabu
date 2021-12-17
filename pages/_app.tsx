import { useState } from 'react';

import '@styles/tailwind.css';

import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default MyApp;
