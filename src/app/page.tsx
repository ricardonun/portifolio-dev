import { GithubIcon,LinkedinIcon, Send } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="w-full flex items-center justify-between gap-2 px-8 py-3 ">
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
      <div className="flex mt-44 items-center justify-between px-48">
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl">Hello, I am</h2>
          </div>
          <div>
            <h1 className="flex text-6xl text-orange-500 mt-2">
              &lt; Ricardo
            </h1>
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
        <div>
          <Image
            src="/1598390897429.jpg"
            width={400}
            height={400}
            alt="Ricardo Nunes Image"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center pt-10">
        <div className="w-[60%] px-48 ">
          <h1 className="text-2xl text-orange-500">
            aboutMe<span className="text-white">&#40; &#41;</span>
          </h1>
          <p className="text-sm mt-4 text-[#F2F2F2]">
            I begins to develop on 2014 with a server game with name Lineage II,
            the game used the linguage JAVA, after this a iniciate some projects
            in JAVA but never finish, so i beggin to study HTML, CSS, and
            Javascript, a make some sites with HTML and JS, now I develop site
            in Next.js, Node.js, Typescript and MySql.
          </p>
        </div>
        <div className="flex w-[50%] flex-col items-center px-48">
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
      <div className="flex flex-col mt-40 px-48">
        <h1 className="text-2xl text-orange-500">skills<span className="text-white">&#40; &#41;</span></h1>
        <div className="flex gap-5 pt-5">
          <Image src="/css3.svg" width={60} height={60} alt="css3"/>
          <Image src="/html5.svg" width={60} height={60} alt="html5"/>
          <Image src="/javascript.svg" width={60} height={60} alt="javascript"/>
          <Image src="/nodejs.svg" width={60} height={60} alt="nodejs"/>
          <Image src="/react.svg" width={60} height={60} alt="react"/>
          <Image src="/typescript.svg" width={60} height={60} alt="css3"/>
        </div>
      </div>
    </main>
  );
}
