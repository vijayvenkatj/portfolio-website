import Image from 'next/image';
import dockerLogo from '../../Assets/skills/docker.svg';
import nextJsLogo from '../../Assets/skills/nextjs.svg';
import kubernetesLogo from '../../Assets/skills/kubernetes.svg';
import pythonLogo from '../../Assets/skills/python.svg';
import prismaLogo from '../../Assets/skills/prisma.svg';
import gitLogo  from '../../Assets/skills/git.svg';
import reactLogo from '../../Assets/skills/react.svg';
import nodeJsLogo from '../../Assets/skills/nodejs.svg';
import bashLogo from '../../Assets/skills/bash.svg';
import mongodbLogo from '../../Assets/skills/mongo.svg';
import linuxLogo from '../../Assets/skills/linux.svg';
import kopsLogo from '../../Assets/skills/kops.svg';
import jenkinsLogo from '../../Assets/skills/jenkins.svg';
import awsLogo from '../../Assets/skills/aws.svg';
import gcpLogo from '../../Assets/skills/gcp.svg';

import BgImage from '../../Assets/desktop-wallpaper-portfolio.jpg';

function Skills() {
  const skills = [
    { name: 'Docker', logo: dockerLogo },
    { name: 'Next.js', logo: nextJsLogo },
    { name: 'Kubernetes', logo: kubernetesLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Prisma', logo: prismaLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Node.js', logo: nodeJsLogo },
    { name: 'Bash', logo: bashLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'Linux', logo: linuxLogo },
    { name: 'Kops', logo: kopsLogo },
    { name: 'Jenkins', logo: jenkinsLogo },
    { name: 'AWS', logo: awsLogo },
    { name: 'GCP', logo: gcpLogo }

  ];

  return (
    <section className="relative bg-stone-950 text-gray-100 min-h-screen flex items-center justify-center overflow-hidden" id="skills">
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Image
          src={BgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter blur-md opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-black/80 to-black z-10"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center max-w-screen-xl">
        <h2 className="text-4xl lg:text-6xl font-bold mb-14">
          My <span className="text-orange-600">Skills</span>
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 lg:gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center ">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={100}
                height={100}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <p className="mt-4 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
