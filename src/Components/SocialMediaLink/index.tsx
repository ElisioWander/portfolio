import { ReactNode } from 'react'

interface SocialMediaLinkProps {
  url: string
  name?: string
  icon?: ReactNode
  style?: string
}

export function SocialMediaLink({
  url,
  name,
  icon,
  style,
}: SocialMediaLinkProps) {
  const defaultStyle = `w-12 h-12 bg-purple-100 flex items-center justify-center rounded-md hover:brightness-90 hover:scale-95 transition-all`

  return (
    <a
      className={!style ? defaultStyle : style}
      target="_blank"
      href={url}
      rel="noreferrer"
    >
      <span>{name}</span>
      {icon}
    </a>
  )
}
