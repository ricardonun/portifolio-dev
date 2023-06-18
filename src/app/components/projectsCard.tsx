import Image from "next/image";
import Link from "next/link";

interface IProjectCard {
  name: string;
  urlImage?: string;
  url: string;
}
export function ProjectCard({ name, urlImage, url }: IProjectCard) {
  return (
      <Link className="border rounded-md relative flex flex-col w-44 h-44" target="_blank" href={url ?? "#"}>
        <Image src={urlImage ?? "noPicture.svg"} alt="teste" fill />
        <strong className="bg-black/60 relative pl-2 mt-auto">{name ?? "Teste Projects"}</strong>
      </Link>
  );
}
