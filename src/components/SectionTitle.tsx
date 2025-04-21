
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  highlight, 
  className,
  centered = true 
}: SectionTitleProps) => {
  return (
    <h2 className={cn(
      "text-3xl font-bold mb-12 text-portfolio-darkblue",
      centered && "text-center",
      className
    )}>
      {title}{" "}
      {highlight && <span className="text-portfolio-purple">{highlight}</span>}
    </h2>
  );
};

export default SectionTitle;
