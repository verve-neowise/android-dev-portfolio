import MenuItem from "./MenuItem";
import { Menu } from "lucide-react";
import classNames from "classnames";
import { useState } from "react";
function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <header className="fixed top-0 inset-x-0 bg-black/50 backdrop-blur-sm  border-green-400/20">
      <div className="container mx-auto px-4 md:px-0 py-5 flex justify-between items-center">
        <h2 className="text-2xl text-center md:text-left">
          <span className="font-bold text-green-400">Android&nbsp;</span>
          Developer
        </h2>
        <button
          onClick={() => setMenu(!menu)}
          className="text-white text-2xl inline-block md:hidden z-50"
        >
          <Menu />
        </button>
        <div
          className={classNames(
            "fixed md:relative h-screen md:h-auto p-4 md:p-0 text-lg md:text-base top-0 right-0 w-full max-w-xs md:w-auto md:max-w-none bg-black/50 backdrop-blur-sm md:bg-transparent transition-all",
            {
              " translate-x-full md:translate-x-0 backdrop-blur-sm": menu
            }
          )}
        >
          <ul className="md:flex">
            <MenuItem title="About" link="#about" />
            <MenuItem title="Skills" link="#skills" />
            <MenuItem title="Experience" link="#experience" />
            <MenuItem title="Projects" link="#projects" />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
