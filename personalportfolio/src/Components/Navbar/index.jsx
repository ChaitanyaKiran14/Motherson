import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const menuItems = [
  {
    name: 'About',
    target: 'home',
  },
  {
    name: 'Projects',
    target: 'projects',
  },
  {
    name: 'Contacts',
    target: 'footer',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full border-b bg-white pb-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="inline-flex items-center space-x-2">
          <Link to="home" smooth={true} duration={500}>
            <span className="font-bold">Madelyn Troff</span>
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            {/* ... (unchanged) */}
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span></span>
                    <span className="font-bold h-5">Madelyn Troff</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        to={item.target}
                        smooth={true}
                        duration={500}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="hidden lg:block absolute top-0 right-0">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  onClick={toggleMenu} // Close the menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;