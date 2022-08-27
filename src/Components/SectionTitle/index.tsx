interface SectionTitleProps {
  title: string
  style?: string
}

export function SectionTitle({ title, style }: SectionTitleProps) {
  const defaultStyle = `lg:px-12 lg:text-start transition-all`

  return (
    <h2 className={!style ? defaultStyle : style}>
      <span className="text-purple-100">&lt;</span>
      {title}
      <span className="text-purple-100"> /&gt;</span>
    </h2>
  )
}
