import { useState} from 'react'; // Add useEffect to imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faPenFancy, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ icon, title, description, color, extraClass }) => {
  if (!icon) return null;

  return (
    <div className={`bg-gradient-to-r from-blue-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-4 ${color.border} ${extraClass} flex flex-col justify-between md:h-[320px]`}>
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-between items-start mb-3 sm:mb-4 w-full">
          <FontAwesomeIcon icon={icon} className={`${color.icon} w-8 h-8 sm:w-12 sm:h-12`} />
          <div className={`${color.text} text-xs font-semibold px-2 py-1 rounded-full bg-opacity-20 ${color.bgOpacity}`}>
            Experienced
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button className={`${color.text} flex items-center hover:underline group`}>
          Learn More 
          <FontAwesomeIcon icon={faChevronRight} className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}; 

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const skills = [
    {
      icon: faCode,
      title: "Front-end Web Developer",
      description: "Build well-structured websites using React, Astro, and modern frameworks that deliver both functionality and visual appeal.",
      color: {
        border: "border-blue-500",
        icon: "text-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        bgOpacity: "bg-blue-500"
      },
      extraClass: ""
    },
    {
      icon: faRobot,
      title: "Prompt Engineer",
      description: "Maximize AI capabilities to streamline workflows via in-depth prompts to unlock the full potential of ChatGPT, Claude, and other LLMs.",
      color: {
        border: "border-green-500",
        icon: "text-green-500",
        text: "text-green-600 dark:text-green-400",
        bgOpacity: "bg-green-500"
      },
      extraClass: "lg:mt-6" 
    },
    {
      icon: faPenFancy,
      title: "Copywriter",
      description: "Convert visitors into customers through strategic web content that combines persuasive storytelling with proven conversion principles.",
      color: {
        border: "border-purple-500",
        icon: "text-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        bgOpacity: "bg-purple-500"
      },
      extraClass: ""
    }
  ];

  return (
    <section className="skills-section py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto">
        <h2 className="h2-text mb-8 sm:mb-12 text-center">Skills</h2> 
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={`skill-${index}`}
                className={`transform transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-105 z-20' : hoveredIndex !== null ? 'scale-95 opacity-75' : ''
                } ${
                  index === 2 ? 'md:col-span-2 md:mx-auto md:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none' : ''
                } ${skill.extraClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;