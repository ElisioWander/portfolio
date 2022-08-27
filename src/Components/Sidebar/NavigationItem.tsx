import { useSidebar } from '../../context/SidebarContext'

interface NavigationProps {
  name: string
  url: string
}

export function NavigationItem({ name, url }: NavigationProps) {
  const { handleCloseSidebar } = useSidebar()

  const genericNavigationStyle = `w-full p-3 text-lg text-zinc-200 hover:text-zinc-50 font-poppins cursor-pointer transition-all hover:text-xl`
  return (
    <li className={genericNavigationStyle}>
      <a href={url} onClick={handleCloseSidebar}>
        {name}
      </a>
    </li>
  )
}
