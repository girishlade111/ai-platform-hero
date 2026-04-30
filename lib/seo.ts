import { Metadata } from 'next'

export const siteConfig = {
  name: 'AI Platform Hero',
  description: 'A powerful AI-powered platform built with Next.js, React, and TypeScript. Features modern UI components, data visualization, and real-time analytics.',
  url: 'https://ai-platform-hero.vercel.app',
  ogImage: 'https://ai-platform-hero.vercel.app/og-image.png',
  keywords: [
    'AI platform',
    'artificial intelligence',
    'Next.js',
    'React',
    'TypeScript',
    'data visualization',
    'analytics dashboard',
    'modern UI',
    'web application',
    'AI tools',
    'machine learning dashboard',
    'analytics platform'
  ],
  author: {
    name: 'AI Platform Hero',
    email: 'girishlade111@gmail.com'
  },
  social: {
    twitter: '@aiplatformhero',
    github: 'girishlade111/ai-platform-hero'
  }
}

export const seoMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, email: siteConfig.author.email }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: [siteConfig.ogImage]
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Verification
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  }
}

export function generatePageMetadata(page: string, description?: string): Metadata {
  return {
    title: page,
    description: description || siteConfig.description,
    openGraph: {
      title: `${page} | ${siteConfig.name}`,
      description: description || siteConfig.description
    }
  }
}