import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'styled-components'

import { LanguageProvider, ResumeProvider } from 'hooks'

import { DefaultSeo } from 'next-seo'

import { AppLayout } from 'components/layouts'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <ResumeProvider>
          <GlobalStyles />

          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ResumeProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
