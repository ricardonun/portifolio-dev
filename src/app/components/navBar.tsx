"use client";

import {
  GithubIcon,
  LinkedinIcon,
  Menu,
  PanelRightCloseIcon,
  Send,
} from "lucide-react";
import { useState } from "react";

export function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      {navbar ? (
        <div className="block flex-col bg-black/20 h-full w-48  p-4 z-[999] fixed right-0 top-0 lg:hidden ">
          <div className="right-0 fixed" onClick={() => setNavbar(!navbar)}>
            <PanelRightCloseIcon size={20} />
          </div>

          <div className="flex flex-col items-start gap-4 ">
            <div className="flex flex-col gap-2 items-start">
              <a onClick={() => setNavbar(!navbar)} href="#about">
                About
              </a>
              <a onClick={() => setNavbar(!navbar)} href="#skills">
                Skills
              </a>
              <a onClick={() => setNavbar(!navbar)} href="#projects">
                Projects
              </a>
            </div>
            <div className="flex flex-col gap-6 text-xl ">
              <div className="flex items-center gap-1 hover:text-orange-400">
                <LinkedinIcon size={20} />
                <a
                  href="https://www.linkedin.com/in/ricardonpaz/"
                  onClick={() => setNavbar(!navbar)}
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
              <div className="flex items-cente gap-1 hover:text-orange-400">
                <GithubIcon size={20} />
                <a
                  href="http://www.github.com/ricardonun"
                  onClick={() => setNavbar(!navbar)}
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-1 hover:text-orange-400 border-4 rounded-lg hover:border-orange-400 px-2 py-1 text-lg">
                <Send size={16} />
                <a>Contact me</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button className=" right-0 lg:hidden" onClick={() => setNavbar(!navbar)}>
          <span>menu</span>
          <Menu size={40} />
        </button>
      )}
    </>
  );
}
