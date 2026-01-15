"use client"

import { NextIntlClientProvider } from "next-intl"

export default function Providers({
  children,
  messages
}: {
  children: React.ReactNode
  messages: Record<string, any>
}) {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
