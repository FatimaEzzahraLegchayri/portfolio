import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freelance Software Developer | Web Applications & MVPs",
  description:
    "Experienced freelance developer building fast, reliable web applications for growing businesses. Specializing in React, Next.js, and full-stack development.",
  generator: "v0.app",
  keywords: [
    "freelance developer",
    "web development",
    "React developer",
    "Next.js",
    "MVP development",
    "SaaS development",
  ],
  authors: [{ name: "Freelance Developer" }],
  openGraph: {
    title: "Freelance Software Developer | Web Applications & MVPs",
    description: "Building fast, reliable web applications for growing businesses",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
