import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

function Bar() {
  return (
    <div className="py-2 flex items-center justify-between">
      <NavLink to={"/"}>
        <img src={logo} alt="book store" width={75} />
      </NavLink>
      <div className="flex-1 flex justify-end">
        <NavLink
          to="/cart"
          className="px-2 text-gray-900 hover:text-gray-600 transition-colors"
        >
          <CiShoppingCart size={28} />
        </NavLink>
      </div>
    </div>
  );
}

export default Bar;
