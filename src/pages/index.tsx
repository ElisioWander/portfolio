import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { Introduction } from "../Components/Introduction";
import { MyProjects } from "../Components/MyProjects";
import { Technologies } from "../Components/Technologies";

export default function Home() {
  return (
    <div className="w-full text-zinc-200 ">
      <Introduction />
      <About />
      <MyProjects />
      <Technologies />
      <Contact />
    </div>
  );
}
