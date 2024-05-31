function ClientSection() {
  return (
    <div className="container">
      <section className="mx-auto">
        <div className="relative mt-[8rem] w-full rounded-[.6rem] bg-[url('/assets/ClientSection2.jpg')] bg-cover bg-center bg-no-repeat py-[5rem] pl-5 laptop:mx-auto laptop:w-[95%]">
          <div className="absolute inset-0 rounded-[.6rem] bg-black bg-opacity-30"></div>
          <div className="relative">
            <h2 className="max-w-[45rem] text-[2.8rem] leading-[3rem] text-white miniTablet:text-[1.7rem]">
              Find Technicians Your Way
            </h2>
            <p className="max-w-[30rem] text-[1.2rem] leading-relaxed tracking-widest text-white pl-5 miniMobile:pt-4">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <section className="flex content-center items-center justify-center gap-[2rem] self-center pr-[.5rem] pt-12 miniMobile:mx-auto miniTablet:flex-col desktop:gap-[.8rem]">
              <div className="h-[9rem] w-[24rem] rounded-md bg-[#32CD32] miniTablet:w-[20rem] laptop:h-[9rem]">
                <h3 className="pl-3 pt-1 text-[2rem] text-white laptop:text-[1.3rem]">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="pl-3 text-[1rem] text-white">Lorem ipsum</p>
              </div>
              <div className="h-[9rem] w-[24rem] rounded-md bg-[#32CD32] miniTablet:w-[20rem] laptop:h-[9rem]">
                <h3 className="pl-3 pt-1 text-[2rem] text-white laptop:text-[1.3rem]">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="pl-3 text-[1rem] text-white">Lorem ipsum</p>
              </div>
              <div className="h-[9rem] w-[24rem] rounded-md bg-[#32CD32] miniTablet:w-[20rem] laptop:h-[9rem]">
                <h3 className="pl-3 pt-1 text-[2rem] text-white laptop:text-[1.3rem]">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="pl-3 text-[1rem] text-white">Lorem ipsum</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSection;