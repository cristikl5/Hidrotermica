const DecorativeShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient blob - top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#C4E538]/20 to-[#004B87]/10 rounded-full blur-3xl animate-pulse" />

      {/* Medium blob - bottom left */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-[#004B87]/15 to-[#C4E538]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Small accent circle - top left */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-[#C4E538]/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />

      {/* Small accent circle - bottom right */}
      <div className="absolute bottom-32 right-16 w-16 h-16 border-4 border-[#004B87]/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />

      {/* Dotted pattern */}
      <div className="absolute top-1/2 left-1/4 grid grid-cols-3 gap-3 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#C4E538] rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default DecorativeShapes;
