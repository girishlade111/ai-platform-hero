import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { seoMetadata } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  ...seoMetadata,
  title: 'AI Platform Hero - Modern AI-Powered Platform',
  description: 'A powerful AI-powered platform built with Next.js 15, React 19, and TypeScript. Features data visualization, analytics, and modern UI components.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Short-form meta tags for search engines */}
        <meta name="description" content="AI Platform Hero - Build powerful AI applications with Next.js, React, and TypeScript. Features data visualization, analytics, and modern UI components." />
        <meta name="keywords" content="AI platform, artificial intelligence, Next.js, React, TypeScript, data visualization, analytics dashboard, machine learning, web app" />
        <meta name="author" content="AI Platform Hero" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ai-platform-hero.vercel.app/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-platform-hero.vercel.app/" />
        <meta property="og:title" content="AI Platform Hero - Modern AI-Powered Platform" />
        <meta property="og:description" content="Build powerful AI applications with Next.js, React, and TypeScript. Features data visualization, analytics, and modern UI components." />
        <meta property="og:site_name" content="AI Platform Hero" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ai-platform-hero.vercel.app/" />
        <meta name="twitter:title" content="AI Platform Hero - Modern AI-Powered Platform" />
        <meta name="twitter:description" content="Build powerful AI applications with Next.js, React, and TypeScript. Features data visualization, analytics, and modern UI components." />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AI Platform Hero",
              "description": "A powerful AI-powered platform built with Next.js, React, and TypeScript",
              "url": "https://ai-platform-hero.vercel.app/",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "AI Platform Hero",
                "email": "girishlade111@gmail.com"
              }
            })
          }}
        />
        
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}