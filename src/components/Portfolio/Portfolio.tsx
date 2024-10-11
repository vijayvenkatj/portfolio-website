import ProjectCard from "./ProjectCard/ProjectCard";
import timetable from "../../Assets/timetable.png";
import campustown from "../../Assets/campustown.png";
import Image from "next/image";
import BgImage from "../../Assets/desktop-wallpaper-portfolio.jpg";

function Portfolio() {
  return (
    <div className="min-h-screen relative p-6" id="projects">

      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={BgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="filter blur-md opacity-100"
        />
      </div>


      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent z-10"></div>

      <h2 className="text-4xl lg:text-6xl text-[#FF6500] font-bold text-center mt-14 mb-16 relative z-20 shadow-lg tracking-wide">
        <span className="text-white mr-2">Featured</span>Projects
      </h2>

   
      <div className="relative z-20 flex flex-col sm:flex-row justify-center gap-12">
        <div className="w-full sm:w-[45%]">
          <ProjectCard
            title="Timetable"
            description="Timetable is an innovative web application designed to simplify timetable management for students while fostering seamless communication with teachers."
            image={timetable}
            link="https://timetable.vijayvenkatj.me/"
          />
        </div>
        <div className="w-full sm:w-[45%]">
          <ProjectCard
            title="CampusTown"
            description="CampusTown is an online platform designed to empower students by facilitating collaboration on projects and assignments."
            image={campustown}
            link="https://campustown.in/"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

