interface NavigationItemProps {
  url: string;
  name: string;
  contactButton?: string;
}

export function NavigationItem({
  name,
  url,
  contactButton,
}: NavigationItemProps) {
  const navigationStyle = `text-base ml-10 hover:brightness-75 transition-all `;

  return (
    <a className={`${navigationStyle} ${contactButton}`} href={url}>
      {name}
    </a>
  );
}
