interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group relative p-6 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 mb-4 animate-float">
          <img 
            src={icon} 
            alt={`${title} icon`} 
            className="w-full h-full object-contain"
          />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};