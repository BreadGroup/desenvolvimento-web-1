import { Link } from "react-router-dom";

import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

import useDarkMode from '../../hooks/useDarkMode';
import "./style.css"

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun className='w-10 h-10 p-2' />
      ) : (
        <FaMoon className='w-10 h-10 p-2' />
      )}
    </span>
  );
};

interface NavIconsProps {
  icon: IconType;
  description: string;
  link: string;
}

const NavItem: React.FC<NavIconsProps> = (props: NavIconsProps) => {
  return (
    <Link to={props.link}>
      <li
        className={`nav-icon-style`}
      >
        {<props.icon className="w-10 h-10 p-2" />}
        <span hidden className="px-2">
          {props.description}
        </span>
      </li>
    </Link>
  );
};

const Nav = () => {
  const navItems: NavIconsProps[] = [
    {
      icon: AiOutlineHome,
      description: "Home",
      link: "/",
    },
    {
      icon: MdOutlineConnectWithoutContact,
      description: "Contact us",
      link: "/contact",
    },
    {
      icon: AiOutlineInfoCircle,
      description: "About Us",
      link: "/about",
    },
  ];
  return (
    <nav className="fixed h-[calc(100vh-58px)] top-[56px] p-2 bg-gray-300 dark:bg-blue-900">
      <ul className="flex flex-col h-full">
        {navItems.map((item) => (
          <NavItem
            icon={item.icon}
            description={item.description}
            key={navItems.indexOf(item)}
            link={item.link}
          />
        ))}
        <li className="mt-auto nav-icon-style">
          <ThemeIcon/>
          <span hidden className="px-2">Toggle Theme</span>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
