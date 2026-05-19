export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6 py-12 md:py-24 max-w-full mx-auto select-none h-screen">
      {/* Title */}
      <div className="flex justify-center gap-4 max-w-7xl">
        <div className="w-[50%] h-auto flex flex-col justify-start items-start">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-stone-900 drop-shadow-sm mb-6">
            Welcome to Coffee R Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-stone-900 font-medium max-w-2xl leading-relaxed animate-[fade-in-up_0.8s_ease-out_both]">
            The go to store for your coffee needs
          </p>
          <div className="mt-8 w-24 h-[3px] bg-stone-900 rounded-full opacity-60 animate-[scale-in_0.5s_ease-out_both]" />
        </div>
        <div className="w-[50%] h-auto">
          <img src="https://cpimg.tistatic.com/08312477/b/4/Natural-Coffee-Beans.jpg" alt="" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  );
}
