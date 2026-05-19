export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12 md:py-24 max-w-4xl mx-auto select-none">
      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-stone-900 drop-shadow-sm mb-6 animate-[fade-in-up_0.6s_ease-out]">
        Coffee R Us
      </h1>
      
      {/* Subheading */}
      <p className="text-xl md:text-2xl lg:text-3xl text-amber-50/90 font-medium max-w-2xl leading-relaxed animate-[fade-in-up_0.8s_ease-out_both]">
        The go to store for your coffee needs
      </p>

      {/* Decorative Line Accent */}
      <div className="mt-8 w-24 h-[3px] bg-stone-900 rounded-full opacity-60 animate-[scale-in_0.5s_ease-out_both]" />
    </div>
  );
}
