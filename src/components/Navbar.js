import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  function logic() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  }
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    // <div className="bg-green-200 fixed top-0  w-full">
    <div className="bg-green-200  w-full">
      <header className="container mx-auto ">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-primary mr-auto">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-primary text-3xl tracking-tight">
              R-NOTEBOOK
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={logic}
              id="boton"
              className="flex items-center px-3 py-2 border rounded text-primary border-teal-400 hover:text-delta hover:border-delta"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className="w-full block lg:flex lg:w-auto font-medium mr-16"
          >
            <div className=" lg:flex ">
              <Link
                to="/"
                className={` ${
                  location.pathname === "/" ? `text-red-600` : `text-purple-600`
                } mt-4 lg:inline-block lg:mt-0 font-bold  hover:text-delta mr-4`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? `text-red-600`
                    : `text-purple-600`
                } block mt-4 lg:inline-block lg:mt-0 font-bold  hover:text-delta mr-4`}
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
