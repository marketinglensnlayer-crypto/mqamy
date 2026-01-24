import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata = {
  title: 'MQAMY Real Estate LLC – Your Gateway to Dubai\'s Luxury Living',
  description: 'MQAMY Real Estate LLC - Your Gateway to Dubai\'s Luxury Living. Premium property investments with licensed real estate professionals. Price or Quality? With Us You Give Up Nothing!',
  keywords: 'Dubai real estate, luxury apartments Dubai, property investment UAE, MQAMY, Dubai properties',
  openGraph: {
    title: 'MQAMY Real Estate - Dubai Luxury Properties',
    description: 'Price or Quality? With Us You Give Up Nothing! Explore premium Dubai properties.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
