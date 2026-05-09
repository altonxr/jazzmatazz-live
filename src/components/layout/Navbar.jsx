import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shows", path: "/shows" },
  { name: "Gallery", path: "/gallery" },
  { name: "Members", path: "/members" },
  { name: "Media", path: "/media" },
  { name: "Booking", path: "/booking" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <nav className="max-w-container mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between shadow-glow">

        {/* Logo */}
        <div className="text-2xl font-heading font-bold tracking-wide">
          JAZZMATAZZ
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 text-sm tracking-wide ${
                  isActive
                    ? "text-white"
                    : "text-textSecondary hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden lg:block px-5 py-2 rounded-xl bg-primary hover:bg-violetGlow transition duration-300 shadow-glow">
          Book Jazzmatazz
        </button>
      </nav>
    </header>
  );
};

export default Navbar;