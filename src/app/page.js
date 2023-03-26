import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />

      <section className="bg-gradient-to-b from-[#341c0e] to-[#080404] min-h-screen">
        <div className=" margin-hero-auto h-fit absolute pl-11 w-full pr-4 hero-section">
          <figure className="w-fit relative ml-auto">
            <img
              src="/img/2vader.webp"
              alt="hero-image"
              className="h-[420px]"
            />
          </figure>
          <div className="relative -top-48">
            <span className="text-[#df945d] text-sm">Carving Art</span>
            <h1 className="text-6xl tracking-tight max-w-xs my-3">
              Bringing Wood to Life
            </h1>
            <p className="text-sm text-[#a9a9a9] max-w-[230px] leading-4">
              Experty carved wooden sculptures and figurines that showcase the
              natura; beauty and versatility of wood.
            </p>
          </div>
          <div className="relative -top-28 ml-auto w-fit mr-7 animate-bounce">
            <a
              href="#"
              className="bg-[#ffa86a] text-black text-3xl rounded-full py-2 px-3"
            >
              <i className="lni lni-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen px-11 flex items-center">
        <div>
          <figure className="w-fit mx-auto">
            <img src="/img/man.webp" alt="man-image" className="h-[330px]" />
          </figure>
          <div>
            <h2 className="text-5xl tracking-tight">Wood is my Passion</h2>
            <p className="text-sm leading-4 text-[#a9a9a9] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
              congue lectus, ut aliquam eros. Ut at dolor leo. Vestibulum a
              ipsum vel dui suscipit laoreet eget vel neque. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra dolor.
            </p>
            <a
              href="#"
              className="uppercase text-[#9f9283] group mt-2 font-bold tracking-wide flex absolute items-center w-fit hover:text-[#ffa86a] ease-in-out duration-150"
            >
              <p>View my Work</p>
              <div className="border border-[#9f9283] text-[#ffa86a] px-6 py-5 relative rounded-full right-3">
                <i className="lni lni-arrow-right text-4xl group-hover:rotate-90 ease-in-out duration-300 delay-150"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
