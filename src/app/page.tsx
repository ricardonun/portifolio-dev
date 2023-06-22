import { GithubIcon, LinkedinIcon, Send, Menu } from "lucide-react";
import { ProjectCard } from "./components/projectsCard";
import Image from "next/image";
import { useState } from "react";
import { NavBar } from "./components/navBar";

interface ProjectProps {
  id: number;
  html_url: string;
  name: string;
  description: string;
  forks_count: number;
  language: string;
  stargazers_count: number;
}

export default async function Home() {
  const res = await fetch(
    `http://api.github.com/users/ricardonun/repos?per_page=5`
  );
  const projects = await res.json();

  return (
    <main>
      <div className="flex px-5 justify-between items-center">
        <h1 className="text-gray-500 flex flex-col lg:flex-row lg:text-2xl ">
          RICARDO <span className="text-white">NUNES</span>
        </h1>
        <NavBar />

        <nav className="w-full lg:flex items-center justify-between gap-2 px-8 py-3 hidden">
          <div className="flex gap-10 text-xl">
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
            <a href="#skills" className="hover:text-orange-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-orange-400">
              Projects
            </a>
          </div>
          <div className="flex gap-6 text-xl items-center justify-center">
            <div className="flex items-center gap-1 hover:text-orange-400">
              <LinkedinIcon size={20} />
              <a
                href="https://www.linkedin.com/in/ricardonpaz/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
            <div className="flex items-center gap-1 hover:text-orange-400">
              <GithubIcon size={20} />
              <a href="http://www.github.com/ricardonun" target="_blank">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-1 hover:text-orange-400 border-4 rounded-lg hover:border-orange-400 px-2 py-1 text-lg">
              <Send size={16} />
              <a>Contact me</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex mt-24 lg:mt-44 items-center justify-between p-2 lg:px-48 ">
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl">Hello, I am</h2>
          </div>
          <div>
            <h1 className="flex text-6xl text-orange-500 mt-2">&lt; Ricardo</h1>
            <h1 className="flex text-6xl text-orange-500">Nunes &#47;&gt; </h1>
          </div>
          <div className="flex text-5xl text-[#E0E0E0] my-5">
            Fullstack Developer
          </div>
          <div className="flex mt-3 text-[#4F4F4F] ">
            <span className="text-6xl">2</span>
            <span className="flex items-center w-5 px-2">
              YEARS OF EXPERIENCE
            </span>
          </div>
        </div>
        <div className="hidden lg:flex ">
          <Image
            src="/1598390897429.jpg"
            width={400}
            height={400}
            alt="Ricardo Nunes Image"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center pt-10 flex-col lg:flex-row" id="about">
        <div className="lg:w-[60%] w-[100%] px-4 lg:px-48 ">
          <h1 className="text-2xl text-orange-500">
            aboutMe<span className="text-white">&#40; &#41;</span>
          </h1>
          <p className="text-sm mt-4 text-[#F2F2F2]">
            I started to develop on 2014 in a server game named Lineage II, the
            game language was JAVA, after this I iniciated some projects in JAVA
            but never finished, so I begin to study HTML, CSS, and Javascript
            and make some sites, now I develop site in Next.js, Node.js,
            Typescript and MySql.
          </p>
        </div>
        <div className="flex w-[50%] flex-col items-center lg:px-48 mt-10 lg:mt-0">
          <div>
            <div className="flex items-center justify-between bg-[#4F4F4F] rounded-sm p-3 w-64">
              <div>
                <h4>Fullstack Developer</h4>
                <a href="" className="text-sm text-orange-500">
                  Projects
                </a>
              </div>
              <div className="text-2xl flex items-center text-orange-500">
                &#60;&#47;&#62;
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#4F4F4F] rounded-sm p-3 w-64 mt-1">
              <div>
                <h4>Freelancer</h4>
                <a href="" className="text-sm text-orange-500">
                  Hire me
                </a>
              </div>
              <div className="text-2xl flex items-center text-orange-500">
                &#123; &#125;{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col mt-40 p-4 lg:px-48 h-80 pt-4 bg-[#161616]"
        id="skills"
      >
        <h1 className="text-2xl text-orange-500">
          skills<span className="text-white">&#40; &#41;</span>
        </h1>
        <div className="grid grid-cols-3  md:flex gap-5 pt-5">
          <Image src="/css3.svg" width={60} height={60} alt="css3" />
          <Image src="/html5.svg" width={60} height={60} alt="html5" />
          <Image
            src="/javascript.svg"
            width={60}
            height={60}
            alt="javascript"
          />
          <Image src="/nodejs.svg" width={60} height={60} alt="nodejs" />
          <Image src="/react.svg" width={60} height={60} alt="react" />
          <Image src="/typescript.svg" width={60} height={60} alt="css3" />
        </div>
      </div>
      <div className="flex flex-col mt-4 p-4 lg:px-48 h-44" id="projects">
        <h1 className="text-2xl text-orange-500">
          projects<span className="text-white">&#40; &#41;</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-2 mt-5 lg:p-5">
          {projects?.map((project: ProjectProps) => {
            return (
              <ProjectCard
                name={project.name}
                url={project.html_url}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
