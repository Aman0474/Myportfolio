import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Shadcn-ui", level: 80, category: "frontend" },

  // Backend
  { name: "Python", level: 80, category: "backend" },
  { name: "java", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SpringBoot", level: 65, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Certifications with links
  {
    name: "Data Science and Machine Learning Bootcamp with R",
    level: 100,
    category: "Certifications",
    link: "/certificates/Data Science by Microsoft.jpg",
  },
  {
    name: "CreaTech Hackathon",
    level: 100,
    category: "Certifications",
    link: "/certificates/CreaTech 2024.jpg",
  },
  {
    name: "HackOn With Amazon",
    level: 100,
    category: "Certifications",
    link: "/certificates/HackOn With Amazon - Season 4.jpg",
  },
  {
    name: "JavaScript By Simplilearn",
    level: 100,
    category: "Certifications",
    link: "/certificates/Javascrpt.jpg",
  },
  {
    name: "Problem Solving by IIT",
    level: 100,
    category: "Certifications",
    link: "/certificates/hackathon by dsai.jpg",
  },

];

const categories = ["all", "frontend", "backend", "tools", "Certifications"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const openModal = (link) => {

    setSelectedCertificate(link);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover transition-transform hover:scale-[1.02]"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {/* View Certificate Button */}
              {skill.category === "Certifications" && skill.link && (
                <div className="pt-4">
                  <button
                    onClick={() => openModal(skill.link)}
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full"
                  >
                    View Certificate
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-card p-6 rounded-2xl max-w-3xl w-full relative shadow-2xl border border-primary animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-primary hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="w-full h-[75vh] object-contain rounded-lg border border-primary/30 shadow-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};
