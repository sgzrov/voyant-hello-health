export const Clouds = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cloud 1 - Large, slow moving */}
      <div 
        className="absolute top-16 right-8 w-32 h-20 opacity-60 animate-float-slow"
        style={{ animationDelay: '0s', animationDuration: '20s' }}
      >
        <div className="relative w-full h-full">
          {/* Main cloud body */}
          <div className="absolute top-0 left-4 w-20 h-16 bg-white/80 rounded-full blur-sm"></div>
          <div className="absolute top-2 left-8 w-16 h-14 bg-white/70 rounded-full blur-sm"></div>
          <div className="absolute top-4 left-2 w-18 h-12 bg-white/90 rounded-full blur-sm"></div>
          <div className="absolute top-6 left-6 w-14 h-10 bg-white/60 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Cloud 2 - Medium, medium speed */}
      <div 
        className="absolute top-8 right-24 w-24 h-16 opacity-50 animate-float-medium"
        style={{ animationDelay: '3s', animationDuration: '15s' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-2 w-16 h-12 bg-white/70 rounded-full blur-sm"></div>
          <div className="absolute top-1 left-6 w-12 h-10 bg-white/80 rounded-full blur-sm"></div>
          <div className="absolute top-3 left-1 w-14 h-8 bg-white/60 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Cloud 3 - Small, fast moving */}
      <div 
        className="absolute top-20 right-40 w-20 h-12 opacity-40 animate-float-fast"
        style={{ animationDelay: '6s', animationDuration: '12s' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-1 w-12 h-8 bg-white/60 rounded-full blur-sm"></div>
          <div className="absolute top-1 left-4 w-10 h-6 bg-white/70 rounded-full blur-sm"></div>
          <div className="absolute top-2 left-2 w-8 h-5 bg-white/50 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Cloud 4 - Medium, slow moving */}
      <div 
        className="absolute top-12 right-56 w-28 h-18 opacity-45 animate-float-slow"
        style={{ animationDelay: '9s', animationDuration: '18s' }}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-3 w-18 h-14 bg-white/65 rounded-full blur-sm"></div>
          <div className="absolute top-2 left-7 w-14 h-12 bg-white/75 rounded-full blur-sm"></div>
          <div className="absolute top-4 left-1 w-16 h-10 bg-white/55 rounded-full blur-sm"></div>
        </div>
      </div>
    </div>
  );
};
