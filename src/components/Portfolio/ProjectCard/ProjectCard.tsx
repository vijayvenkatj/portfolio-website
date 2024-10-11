import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  link: string
};

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  return (
    <div className="relative bg-stone-950 rounded-lg border-[1px] border-stone-950 overflow-hidden transition-transform transform hover:scale-105 mx-4 my-4 shadow-[0_0_1px_silver,inset_0_0_2px_silver,0_0_5px_silver,0_0_2px_silver,0_0_5px_silver]">
      <div className="relative h-80 w-full">
      <Link href={link}><Image src={image} alt={title} layout="fill" className="object-cover" /></Link>
      </div>
      <div className="p-4">
      <h2 className="text-white text-lg font-semibold">{title}</h2>
      <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
