import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];
  const logo = "/logo-text.png"

  return (
    <nav className="border-b border-gray-100 bg-white shadow-md">
      <div className="mx-auto flex h-[52px] max-w-[1180px] items-center justify-between px-4 ">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-600"
          
        >
        <GiHamburgerMenu />
        </button>

       
        <a href="#">
          <img src={logo} alt="DevStack" className="h-7 w-auto"/>
        </a>

        
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-[12px] ${
                item === "Home"
                  ? "text-pink-600 font-medium"
                  : "text-gray-600"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        
        <div className="flex items-center gap-4">
          <a href="#" className="text-[12px] text-gray-700">
            Sign In
          </a>

          <a
            href="#"
            className="rounded bg-pink-600 px-4 py-2 text-[11px] text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;