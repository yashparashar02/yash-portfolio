function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950"
      aria-hidden="true"
    >
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-purple-700/40 blur-[140px]" />

      <div className="absolute -right-48 top-[15%] h-[42rem] w-[42rem] rounded-full bg-pink-600/30 blur-[160px]" />

      <div className="absolute -left-48 top-[55%] h-[40rem] w-[40rem] rounded-full bg-cyan-600/25 blur-[160px]" />

      <div className="absolute -right-40 bottom-[-10rem] h-[45rem] w-[45rem] rounded-full bg-blue-700/35 blur-[170px]" />
    </div>
  );
}

export default Background;