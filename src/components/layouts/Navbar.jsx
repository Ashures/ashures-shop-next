const Navbar = () => {
  return (
    <nav className="flex justify-center w-full absolute">
      <div id="nav-icon" className="w-full flex justify-start items-center">
        <span className="px-4 py-1">
          <button><i className="fa-solid fa-bars text-3xl"></i></button>
        </span>
      </div>
      <div id="nav-name" className="w-full flex justify-center items-center">
        <h1 className="text-5xl py-1 font-semibold">
          <a href="/">ashures</a>
        </h1>
      </div>
      <div id="nav-settings" className="w-full flex justify-end items-center">
        <span className="px-4 py-1">
          <button><i className="fa-solid fa-gear text-3xl"></i></button>
        </span>
      </div>
    </nav> 
  );
};

export default Navbar;