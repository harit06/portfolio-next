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
      <body
        className={`antialiased theme-primary transition-colors duration-1800`}
      >
        <HomeNav />
        {children}
      </body>
    </html>
  )
}
