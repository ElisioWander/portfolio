import { ReactNode } from 'react'

interface AuthorProps {
  title: string
  children: ReactNode
}

export function Author({ children, title }: AuthorProps) {
  return (
    <details className="cursor-pointer text-sm md:text-lg">
      <summary>{title}</summary>

      {children}
    </details>
  )
}
