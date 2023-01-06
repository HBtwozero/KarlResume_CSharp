import {FC} from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageProvider, {} from '../src/theme/PageProvider'
import { EmotionCache } from "@emotion/react";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <Component {...pageProps} />
  </PageProvider>
);

export default App;