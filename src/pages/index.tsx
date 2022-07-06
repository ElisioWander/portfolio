import { GetServerSideProps } from "next";
import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { Introduction } from "../Components/Introduction";
import { MyProjects } from "../Components/MyProjects";
import { Technologies } from "../Components/Technologies";
import { client } from "../services/prismic";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers"
import { SeoPage } from "../Components/SeoPage";

type ProjectData = Array<{
  slug: string;
  image: string;
  content: string;
  technologies: string;
  websitelink: string;
  githublink: string;
}>

type SummaryData = {
  content: string;
  curiosity: string;
}

type TechnologyData = Array<{
  image: string;
  title: string;
}>

interface HomeProps {
  project: ProjectData;
  summary: SummaryData;
  technology: TechnologyData;
}

export default function Home({ project, summary, technology }: HomeProps) {
  return (
    <>
      <SeoPage 
        title="Home | Elisio Wander - Portfolio"
        description="Desenvolvedor Web - Front-end HTML5, CSS3, SASS, TailwindCSS, Javascript, React, Next, Typescript" 
        url="https://elisiowander.vercel.app" 
      />

      <div className="w-full text-zinc-200 ">
        <Introduction />
        <About summary={summary} />
        <MyProjects project={project} />
        <Technologies technology={technology} />
        <Contact />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const summaryResponse = await client.getSingle("summary")
  const projects = await client.getAllByType("project")
  const technologies = await client.getAllByType("technology")

  const summary = {
    content: prismicH.asText(summaryResponse.data.content),
    curiosity: prismicH.asText(summaryResponse.data.curiosity)
  }

  const project = projects.map(item => {
    return {
      slug: item.uid,
      image: item.data.image.url,
      content: prismicH.asText(item.data.content),
      technologies: prismicH.asText(item.data.technologies),
      websitelink: prismicH.asLink(item.data.websitelink),
      githublink: prismicH.asLink(item.data.githublink)
    }
  })

  const technology = technologies.map(item => {
    return {
      image: item.data.image.url,
      title: prismicH.asText(item.data.title)
    }
  })

  return {
    props: {
      summary,
      project,
      technology
    }
  }
}
