export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6 py-12 md:py-24 max-w-full mx-auto select-none min-h-screen">
      {/* Title */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 max-w-7xl w-full">
        <div className="w-full lg:w-1/2 h-auto flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-stone-900 drop-shadow-sm mb-6">
            Welcome to Coffee R Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-stone-900 font-medium max-w-2xl leading-relaxed animate-[fade-in-up_0.8s_ease-out_both]">
            The go to store for your coffee needs
          </p>
          <div className="mt-8 w-24 h-[3px] bg-stone-900 rounded-full opacity-60 animate-[scale-in_0.5s_ease-out_both]" />
        </div>
        <div className="w-full lg:w-1/2 h-auto flex justify-center">
          <img 
            src="https://cpimg.tistatic.com/08312477/b/4/Natural-Coffee-Beans.jpg" 
            alt="Coffee Beans" 
            className="w-full max-w-md lg:max-w-full h-auto rounded-3xl shadow-2xl" 
          />
        </div>
      </div>
    </div>
  );
}
