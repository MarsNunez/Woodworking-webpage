import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <header className="bg-gradient-to-b from-[#341c0e] to-black min-h-screen flex">
        <section className=" margin-hero-auto h-fit absolute pl-11 w-full pr-4 hero-section">
          <figure className=" w-fit relative ml-auto">
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
        </section>
      </header>
      <section>Another Section here</section>
    </main>
  );
}
