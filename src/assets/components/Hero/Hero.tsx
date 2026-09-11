

const Hero = () => {
    const banner = '/banner-stack.png'
  return (
    <section className="py-10 lg:py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8 px-6 lg:flex-row lg:justify-between">

        
        <div className="w-full lg:w-[52%]">

          <h1 className="text-4xl font-bold  text-[#101828] lg:text-[46px]">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-sm leading-6 text-slate-600 lg:text-[15px]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

         
          <div className="mt-9 flex gap-3">
            <button className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-8 py-2 text-xs text-gray-600">
              Learn More
            </button>
          </div>

        </div>

        <div className="w-full lg:w-[42%]">
          <img src={banner} alt="Hero" className="mx-auto w-[280px] lg:w-[350px]" />
        </div>

      </div>
    </section>
  );
};

export default Hero;