import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

import "./style.css";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 col-span-2 flex justify-between items-center bg-blue-900 dark:bg-gray-400 text-gray-300 dark:text-blue-900 p-2">
      <AiOutlineMenu className="header-icon" />
      <h1 className="text-4xl">Agrotóxicos</h1>
      <BiSearchAlt2 className="header-icon" />
    </header>
  );
};

export { Header };
