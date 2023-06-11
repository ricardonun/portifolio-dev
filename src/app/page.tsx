import { GithubIcon, Linkedin, LinkedinIcon, Send } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className=" w-full flex items-center justify-between gap-2 px-8 py-3 ">
        <h1 className="text-gray-500 text-2xl">
          RICARDO <span className="text-white">NUNES</span>
        </h1>
        <div className="flex gap-10 text-xl">
          <a href="" className="hover:text-orange-400">
            About
          </a>
          <a href="" className="hover:text-orange-400">
            Skills
          </a>
          <a href="" className="hover:text-orange-400">
            Projects
          </a>
        </div>
        <div className="flex gap-6 text-xl items-center justify-center">
          <div className="flex items-center gap-1 hover:text-orange-400">
            <LinkedinIcon size={20} />
            <a href="https://www.linkedin.com/in/ricardonpaz/" target="_blank">
              Linkedin
            </a>
          </div>
          <div className="flex items-center gap-1 hover:text-orange-400">
            <GithubIcon size={20} />
            <a href="http://www.github.com/ricardonun" target="_blank">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-1 hover:text-orange-400 border border-4 rounded-lg hover:border-orange-400 px-2 py-1 text-lg">
            <Send size={16} />
            <a>Contact me</a>
          </div>
        </div>
      </nav>
      <div className="flex mt-56 items-center justify-between px-48">
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl">Hello, I am</h2>
          </div>
          <div>
            <h1 className="flex text-6xl text-orange-500 mt-2"> &lt; Ricardo</h1>
            <h1 className="flex text-6xl text-orange-500">Nunes &#47;&gt; </h1>
          </div>
          <div className="flex text-5xl text-[#E0E0E0] my-5">Fullstack Developer</div>
          <div className="flex mt-3 text-[#4F4F4F] ">
            <span className="text-6xl">2</span>
            <span className="flex items-center w-5 px-2">YEARS OF EXPERIENCE</span>
          </div>
        </div>
        <div>
          <Image
            src="/1598390897429.jpg"
            width={300}
            height={300}
            alt="Ricardo Nunes Image"
            className="rounded-full"
          />
        </div>
      </div>
    </main>
  );
}
