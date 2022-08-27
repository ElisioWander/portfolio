import { SocialMediaLink } from '../SocialMediaLink'
import { Author } from './Author'

export function Footer() {
  const SocialMediaStyle = `ml-4 text-sm text-zinc-200 hover:underline underline-offset-2 hover:text-purple-100`

  return (
    <footer className="w-full h-28 bg-zinc-800 p-5 flex justify-center pt-9 gap-8 text-zinc-400 ">
      <Author title="Autor do Projeto">
        <SocialMediaLink
          url="https://www.linkedin.com/in/elisio-wander-b88b69136/"
          name="Elisio Wander"
          style={SocialMediaStyle}
        />
      </Author>
      <Author title="Autor do Layout">
        <SocialMediaLink
          url="https://www.linkedin.com/in/matheusfelipetp/"
          name="Matheus Felipe"
          style={SocialMediaStyle}
        />
      </Author>
    </footer>
  )
}
