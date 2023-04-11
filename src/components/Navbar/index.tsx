import { Link } from "react-router-dom";

const MAP_NAVBAR = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Pages",
    path: "#",
  },
  {
    label: "Blog",
    path: "#",
  },
  {
    label: "Categories",
    path: "#",
  },
  {
    label: "Shop",
    path: "#",
  },
  {
    label: "Elements",
    path: "#",
  },
];

const Navbar = () => {
  const path = window.location.pathname;

  return (
    <nav className="flex items-center justify-center bg-secondary h-8 lg:h-12 pt-2 shadow-sm">
      {MAP_NAVBAR.map((data, idx) => (
        <Link
          key={idx}
          className={`transition-all duration-150 w-16 lg:w-24 ease-in-out h-full text-center text-xs lg:text-base ${
            path === data.path
              ? "text-accent border-b-4 border-accent"
              : "hover:border-b-4 border-accent hover:text-accent"
          }`}
          to={data.path}
        >
          {data.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
