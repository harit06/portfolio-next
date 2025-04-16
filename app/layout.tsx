import type { Metadata } from "next"
import "./globals.css"
import HomeNav from "./navbar"

export const metadata: Metadata = {
  title: "Hariharasudhan Portfolio",
  description: "Hi! Welcome to my Portfolio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="iaE94cKDeyLqGufTBN_gIW7Nqzlqbe_xAHLiue-NIEY"
        />
        <meta name="msvalidate.01" content="34DFCAF8B125A96EEC2D462234DD6207" />
      </head>
      <body
        className={`antialiased theme-primary transition-colors duration-1800 overflow-x-hidden`}
      >
        <HomeNav />
        {children}
      </body>
    </html>
  )
}
