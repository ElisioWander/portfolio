import { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode;
}

export function Navigation({ children }: NavigationProps) {
  return (
    <nav className="w-full h-full py-20">
      <ul className="w-full mt-5 flex flex-col items-center">{children}</ul>
    </nav>
  );
}
