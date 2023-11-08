const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full h-14 absolute">
      <div id="nav-icon" className="w-full flex justify-start items-center">
        <span className="px-4">
          <button><i className="fa-solid fa-bars text-3xl"></i></button>
        </span>
      </div>
      <div id="nav-name" className="w-full flex justify-center items-center">
        <h1 className="text-5xl font-semibold">
          <a href="/">ashures</a>
        </h1>
      </div>
      <div id="nav-settings" className="w-full flex justify-end items-center">
        <span className="px-4">
          <button><i className="fa-solid fa-gear text-3xl hover:rotate-90 transition-all duration-200"></i></button>
        </span>
      </div>
    </nav> 
  );
};

export default Navbar;