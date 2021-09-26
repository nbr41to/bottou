import 'src/styles/reset.css';
import 'src/styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import { RecoilRoot } from 'recoil';
import { initializedApp } from 'src/libs/firebase';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  initializedApp();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
