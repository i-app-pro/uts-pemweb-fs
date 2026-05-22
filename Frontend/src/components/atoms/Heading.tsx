interface HeadingProps {
  title: string;
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
  color?: string;
}

export const Heading = ({ 
  title, 
  level = 'h2', 
  className = "", 
  color = "text-gray-800" 
}: HeadingProps) => {
  
  // Base style untuk semua heading
  const baseStyle = `font-black tracking-tight ${color}`;
  
  // Ukuran berdasarkan level
  const styles = {
    h1: "text-5xl md:text-6xl leading-tight",
    h2: "text-3xl md:text-4xl leading-snug",
    h3: "text-xl md:text-2xl"
  };

  const Tag = level;

  return (
    <Tag className={`${baseStyle} ${styles[level]} ${className}`}>
      {title}
    </Tag>
  );
};