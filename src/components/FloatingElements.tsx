export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float-delayed" />
      <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-primary-glow/10 rounded-full blur-xl animate-float" />
      
      {/* Gradient orbs */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-36 h-36 bg-gradient-hero opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};