import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faPenFancy, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ icon, title, description, color, extraClass }) => (
  <div className={`bg-gradient-to-r from-blue-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-4 ${color.border} ${extraClass}`}>
    <div className="flex justify-between items-start mb-4">
      <FontAwesomeIcon icon={icon} className={`${color.icon} w-12 h-12`} />
      <div className={`${color.text} text-xs font-semibold px-2 py-1 rounded-full bg-opacity-20 ${color.bgOpacity}`}>
        Expert
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <button className={`${color.text} flex items-center hover:underline group`}>
      Learn More 
      <FontAwesomeIcon icon={faChevronRight} className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>
);

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    {
      icon: faCode,
      title: "Front-end Web Developer",
      description: "Building responsive and dynamic websites with modern frameworks.",
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
      description: "Crafting and optimizing prompts for cutting-edge AI models.",
      color: {
        border: "border-green-500",
        icon: "text-green-500",
        text: "text-green-600 dark:text-green-400",
        bgOpacity: "bg-green-500"
      },
      extraClass: "md:mt-8" // Adds margin-top to this card in medium screens and above
    },
    {
      icon: faPenFancy,
      title: "Copywriter",
      description: "Creating compelling and persuasive content that converts.",
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
   <section className="skills-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 className="h2-text  mb-12 pb-2 text-center">Skills</h2> 
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`transform transition-all duration-300 ${
              hoveredIndex === index ? 'scale-105 z-20' : hoveredIndex !== null ? 'scale-95 opacity-75' : ''
            }`}
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