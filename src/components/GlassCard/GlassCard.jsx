function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] shadow-2xl shadow-black/10 backdrop-blur-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden="true"
      />

      {children}
    </div>
  );
}

export default GlassCard;