import type { Metadata } from "next"
import { Cormorant_Garamond, Karla } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/ClientLayout"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mohd Haarish — Software Developer",
  description: "Software Developer (SDE 2) at Saxo Group. Specializing in distributed systems, microservices, Apache Kafka, and .NET Core backend engineering.",
}

// Runs synchronously before first paint to restore saved theme vars,
// preventing any flash of default colors on page load.
const themeScript = `(function(){try{var v=localStorage.getItem('portfolio-theme-vars'),m=localStorage.getItem('portfolio-theme-mode')||'dark',r=document.documentElement;r.setAttribute('data-mode',m);if(v){var p=JSON.parse(v);Object.keys(p).forEach(function(k){r.style.setProperty(k,p[k]);})}}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${karla.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
