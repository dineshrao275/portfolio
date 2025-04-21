
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileNav = ({ activeSection, scrollToSection }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  // Helper function for navigation item classes
  const getNavItemClasses = (sectionId: string) => {
    return `block w-full text-left px-4 py-3 text-lg font-medium rounded-md transition-colors ${
      activeSection === sectionId
        ? "bg-portfolio-lightpurple text-portfolio-purple"
        : "text-gray-700 hover:text-portfolio-purple hover:bg-portfolio-lightpurple/50"
    }`;
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25 md:hidden" onClick={toggleMenu}>
          <div 
            className="absolute right-0 top-0 h-screen w-3/4 max-w-sm bg-white shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-portfolio-purple">Dinesh<span className="text-portfolio-blue">.dev</span></span>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick("home")}
                className={getNavItemClasses("home")}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={getNavItemClasses("about")}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("experience")}
                className={getNavItemClasses("experience")}
              >
                Experience
              </button>
              <button
                onClick={() => handleNavClick("education")}
                className={getNavItemClasses("education")}
              >
                Education
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className={getNavItemClasses("projects")}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("skills")}
                className={getNavItemClasses("skills")}
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className={getNavItemClasses("contact")}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
