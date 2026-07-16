function SocialButton({
  href,
  icon: Icon,
  children,
  external = false,
  download = false,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download || undefined}
      className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12] hover:text-white"
    >
      <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />

      <span>{children}</span>
    </a>
  );
}

export default SocialButton;