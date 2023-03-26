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

      <section className="min-h-screen flex">
        <div className="w-full flex items-center">
          <div className="overflow-hidden">
            <div className="overflow-x-scroll flex gap-7 px-8 scrollbar-hide">
              <div className="card group cursor-pointer border h-fit bg-gradient-to-b from-[#5c3c24] via-black to-[#080404] border-[#5c3c24] pt-24 pb-12 px-10 rounded-lg w-fit">
                <figure className="mx-auto mb-14 h-80 w-[330px] group-hover:scale-105 ease-out duration-500">
                  <img
                    src="/img/yoda.webp"
                    alt="yoda image"
                    className="h-full mx-auto"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="text-6xl mb-3 tracking-tight hover:text-[#df945d] ease-in-out duration-200">
                    Figurines
                  </h3>
                  <p className="uppercase text-[#df945d] text-md tracking-wider font-bold">
                    View Gallery
                  </p>
                </div>
              </div>
              <div className="card group cursor-pointer border h-fit bg-gradient-to-b from-[#5c3c24] via-black to-[#080404] border-[#5c3c24] pt-24 pb-12 px-10 rounded-lg w-fit">
                <figure className="mx-auto mb-14 h-80 w-[330px] group-hover:scale-105 ease-out duration-500">
                  <img
                    src="/img/decor.webp"
                    alt="yoda image"
                    className="h-full mx-auto"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="text-6xl mb-3 tracking-tight hover:text-[#df945d] ease-in-out duration-200">
                    Decorations
                  </h3>
                  <p className="uppercase text-[#df945d] text-md tracking-wider font-bold">
                    View Gallery
                  </p>
                </div>
              </div>
              <div className="card group cursor-pointer border h-fit bg-gradient-to-b from-[#5c3c24] via-black to-[#080404] border-[#5c3c24] pt-24 pb-12 px-10 rounded-lg w-fit">
                <div className=" h-[375px] flex items-center">
                  <figure className="mx-auto mb-14 h-50 w-[330px] group-hover:scale-105 ease-out duration-500">
                    <img
                      src="/img/relief.webp"
                      alt="yoda image"
                      className="h-full mx-auto"
                    />
                  </figure>
                </div>
                <div className="text-center">
                  <h3 className="text-6xl mb-3 tracking-tight hover:text-[#df945d] ease-in-out duration-200">
                    Relief
                  </h3>
                  <p className="uppercase text-[#df945d] text-md tracking-wider font-bold">
                    View Gallery
                  </p>
                </div>
              </div>
              <div className="card group cursor-pointer border h-fit bg-gradient-to-b from-[#5c3c24] via-black to-[#080404] border-[#5c3c24] pt-24 pb-12 px-10 rounded-lg w-fit">
                <figure className="mx-auto mb-14 h-80 w-[330px] group-hover:scale-105 ease-out duration-500">
                  <img
                    src="/img/archi.webp"
                    alt="yoda image"
                    className="h-full mx-auto"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="text-6xl mb-3 tracking-tight hover:text-[#df945d] ease-in-out duration-200">
                    Architectual
                  </h3>
                  <p className="uppercase text-[#df945d] text-md tracking-wider font-bold">
                    View Gallery
                  </p>
                </div>
              </div>
              <div className="card group cursor-pointer border h-fit bg-gradient-to-b from-[#5c3c24] via-black to-[#080404] border-[#5c3c24] pt-24 pb-12 px-10 rounded-lg w-fit">
                <figure className="mx-auto mb-14 h-80 w-[330px] group-hover:scale-105 ease-out duration-500">
                  <img
                    src="/img/table.webp"
                    alt="yoda image"
                    className="h-full mx-auto"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="text-6xl mb-3 tracking-tight hover:text-[#df945d] ease-in-out duration-200">
                    Forniture
                  </h3>
                  <p className="uppercase text-[#df945d] text-md tracking-wider font-bold">
                    View Gallery
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10 text-4xl text-[#ffa86a]">
              <i className="lni lni-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="px-11 min-h-screen flex items-center absolute">
        <div>
          <h2 className="text-4xl mb-8">Happy Customers</h2>
          <div className="flex flex-col gap-3 mb-12">
            <div className="container text-sm border border-[#7e5233] rounded-lg p-3 pb-4">
              <p className="leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                non congue lectus, ut aliquam eros. Ut at dolor leo. Vestibulum
                a ipsum vel dui suscipit laoreet eget vel neque.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <figure className="h-8">
                  <img
                    src="/img/mars.png"
                    alt="profile photo"
                    className="rounded-full h-full"
                  />
                </figure>
                <p className="text-[#df945d]">Jack O'Lantern</p>
              </div>
            </div>
            <div className="container text-sm border border-[#7e5233] rounded-lg p-3 pb-4">
              <p className="leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                non congue lectus, ut aliquam eros. Ut at dolor leo. Vestibulum
                a ipsum vel dui suscipit laoreet eget vel neque.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <figure className="h-8">
                  <img
                    src="/img/mars.png"
                    alt="profile photo"
                    className="rounded-full h-full"
                  />
                </figure>
                <p className="text-[#df945d]">Jack O'Lantern</p>
              </div>
            </div>
            <div className="container text-sm border border-[#7e5233] rounded-lg p-3 pb-4">
              <p className="leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                non congue lectus, ut aliquam eros. Ut at dolor leo. Vestibulum
                a ipsum vel dui suscipit laoreet eget vel neque.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <figure className="h-8">
                  <img
                    src="/img/mars.png"
                    alt="profile photo"
                    className="rounded-full h-full"
                  />
                </figure>
                <p className="text-[#df945d]">Jack O'Lantern</p>
              </div>
            </div>
            <div className="container text-sm border border-[#7e5233] rounded-lg p-3 pb-4">
              <p className="leading-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                non congue lectus, ut aliquam eros. Ut at dolor leo. Vestibulum
                a ipsum vel dui suscipit laoreet eget vel neque.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <figure className="h-8">
                  <img
                    src="/img/mars.png"
                    alt="profile photo"
                    className="rounded-full h-full"
                  />
                </figure>
                <p className="text-[#df945d]">Jack O'Lantern</p>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="uppercase text-[#9f9283] group mt-2 font-bold tracking-wide flex absolute items-center w-fit hover:text-[#ffa86a] ease-in-out duration-150"
          >
            <p>Start an order</p>
            <div className="border border-[#9f9283] text-[#ffa86a] px-6 py-5 relative rounded-full right-3">
              <i className="lni lni-arrow-right text-4xl group-hover:rotate-90 ease-in-out duration-300 delay-150"></i>
            </div>
          </a>
        </div>
        <div className="relative">
          <figure>
            <img src="/img/lion.webp" alt="lion image" />
          </figure>
        </div>
      </section>
    </main>
  );
}
