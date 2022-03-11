import '@styles/tailwind.css';

import type { AppProps } from 'next/app';
import UserProvider from '@context/user';

import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider attribute='class' defaultTheme='system'>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
export default App;
