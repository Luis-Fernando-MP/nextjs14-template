import { MontserratFont, PlayFairFont, RobotoFont } from '@/shared/fonts'
import '@sass/config/global.scss'
import type { Metadata } from 'next'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import Nav from './components/Nav'
import Providers from './providers'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

export const metadata: Metadata = {
  title: 'Juli dev',
  description: 'Some...',
  icons: {
    icon: [
      { url: '/favicon.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' }
    ]
  }
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body
        className={`${MontserratFont.variable} ${RobotoFont.variable} ${PlayFairFont.variable}`}
      >
        <Providers>
          <Nav />
          <main>{children}</main>
        </Providers>
        <Toaster position='top-center' reverseOrder />
      </body>
    </html>
  )
}

export default RootLayout
