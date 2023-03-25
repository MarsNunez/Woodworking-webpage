const Navbar = () => {
  return (
    <nav className="flex justify-between py-6 px-8 uppercase items-center font-bold text-[#5c4c40] bg-[#341c0e]">
      <div>
        <figure className="cursor-pointer">
          <img src="/img/logo1.webp" alt="logo" />
        </figure>
      </div>

      <div>
        <ul className="flex gap-5">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Exhibitions</li>
        </ul>
      </div>

      <div className="text-[#9f9283] cursor-pointer">
        <p>Say Hello</p>
      </div>
    </nav>
  );
};

export default Navbar;
