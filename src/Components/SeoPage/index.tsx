import { NextSeo } from 'next-seo'

interface SeoPageProps {
  title: string
  description: string
  url?: string
}

export function SeoPage({ description, title, url }: SeoPageProps) {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
    </div>
  )
}
