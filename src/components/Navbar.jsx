import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  // When search icon clicked, open search bar and navigate to /collection if not already there
  const handleSearchClick = () => {
    setShowSearch(true);
    if (!window.location.pathname.includes("/collection")) {
      navigate("/collection");
    }
  };

  // Common classes for nav links
  const baseLinkClasses = "flex flex-col items-center gap-1 px-2 py-1 rounded transition-colors";
  const activeLinkClasses = "text-mint font-semibold border-b-2 border-mint";
  const inactiveLinkClasses = "text-charcoal hover:text-mint";

  return (
    <div className="flex items-center justify-between py-5 font-outfit bg-beige px-4 sm:px-8 ">
      <Link to="/">
        <img src={logo} className="w-36" alt="logo" />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden sm:flex gap-8 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          <p>HOME</p>
        </NavLink>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          <p>COLLECTION</p>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          <p>ABOUT</p>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
          }
        >
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Icons and mobile menu */}
      <div className="flex items-center gap-6">
        <img
          onClick={handleSearchClick}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search_icon"
        />

        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="profile_icon"
            />
          </Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 border bg-white shadow-md rounded">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 text-charcoal rounded">
              <p className="cursor-pointer hover:text-forest">My Profile</p>
              <p className="cursor-pointer hover:text-forest">Order</p>
              <p className="cursor-pointer hover:text-forest">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart icon */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt="cart_icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-forest text-softwhite aspect-square rounded-full text-[8px] font-semibold">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile menu icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu_icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-softwhite shadow-lg transition-all overflow-hidden z-50 ${
          visible ? "w-64" : "w-0"
        }`}
      >
        <div className="flex flex-col text-charcoal h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer border-b border-gray-200"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="close_icon"
            />
            <p className="font-semibold">Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className={({ isActive }) =>
              `py-3 px-6 border-b border-gray-200 ${
                isActive ? "bg-mint text-forest font-semibold" : "hover:bg-beige"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className={({ isActive }) =>
              `py-3 px-6 border-b border-gray-200 ${
                isActive ? "bg-mint text-forest font-semibold" : "hover:bg-beige"
              }`
            }
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className={({ isActive }) =>
              `py-3 px-6 border-b border-gray-200 ${
                isActive ? "bg-mint text-forest font-semibold" : "hover:bg-beige"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className={({ isActive }) =>
              `py-3 px-6 border-b border-gray-200 ${
                isActive ? "bg-mint text-forest font-semibold" : "hover:bg-beige"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
