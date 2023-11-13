import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { HomeView } from 'views'
import LandingPage from './LandingPage'

const Home: NextPage = () => {
  return <LandingPage />
}

export default Home

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'inputs']))
    }
  }
}
