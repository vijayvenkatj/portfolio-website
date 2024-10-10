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
    <div className="relative bg-stone-950 border border-orange-600 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 mx-4 my-4">
      <div className="relative h-80 w-full">
        <Link href={link}><Image src={image} alt={title} layout="fill" className="object-cover" /></Link>
      </div>
      <div className="p-4">
        <h2 className="text-orange-500 text-lg font-semibold">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
