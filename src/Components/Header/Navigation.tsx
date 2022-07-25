import { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode;
}

export function Navigation({ children }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center ">
      {children}
    </nav>
  )
}