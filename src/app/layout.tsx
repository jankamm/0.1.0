import { Inter as FontSans} from 'next/font/google'
import localFont from "next/font/local"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import {cn} from "@/lib/utils"

// Import optimized fonts (fontSans, fontHeading) -> create CSS vars
const fontSans = FontSans({
  subsets: ['latin'],
  variable: "--font-sans",
  display: "swap"
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
  display: "swap"
})

interface RootLayoutProps {
  children: React.ReactNode
}

//Metadata
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "proptech",
    "platform",
    "hub",
    "PaaS",
    "BMS",
    "integration",
    "building"
  ],
  authors: [
    {
      name: "Jan",
      url: "https://lsdflksjdlf.com",
    },
    {
      name: "Eric",
      url: "https://lsdflksjdfdlf.com", 
    },
    {
      name: "Adi",
      url: "https://lsdsdfflksjdlf.com",
    }
  ],
  creator: "jan",
  /*
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  /*
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@jankamm",
  },
  icons: {
    icon: "/favicon.ico"
    shortcut: "/favicon-16x16.png"
    apple: "/apple-touch-icon.png"
  },*/
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}>
        <nav>
          <p>Navbar</p>
        </nav>
        {children}
      </body>
    </html>
  )
}