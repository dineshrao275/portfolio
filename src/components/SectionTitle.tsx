import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  className?: string;
  centered?: boolean;
  darkMode?: boolean;
}

const SectionTitle = ({ 
  title, 
  highlight, 
  className,
  centered = true,
  darkMode = false
}: SectionTitleProps) => {
  return (
    <h2 className={cn(
      "text-4xl md:text-5xl font-playfair font-bold mb-12 relative",
      centered && "text-center",
      darkMode ? "text-white" : "text-portfolio-darkblue",
      className
    )}>
      {title}{" "}
      {highlight && (
        <span
          className="text-transparent bg-gradient-to-br from-portfolio-purple via-portfolio-blue to-portfolio-darkblue bg-clip-text relative z-10"
        >
          {highlight}
        </span>
      )}
      <span className="block mx-auto mt-3 w-16 md:w-24 h-1 rounded-full bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-darkblue opacity-60" />
    </h2>
  );
};

export default SectionTitle;
