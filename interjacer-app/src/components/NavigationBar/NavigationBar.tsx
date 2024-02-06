import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavItem = (props: any) => {
  const { to, icon, label, setCurrentElement } = props;
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === to) {
      setIsActive(true);
      setCurrentElement(location.pathname);
    } else {
      setIsActive(false);
    }
  }, [location.pathname, to, setCurrentElement]);

  return (
    <NavLink
      to={to}
      className={`mt-3 lg:mt-2 cursor-pointer h-10 sm:h-full flex items-center text-lg lg:text-sm hover:text-indigo-300 mx-2 lg:mx-10 tracking-normal transition duration-150 ease-in-out ${
        isActive ? "text-indigo-400" : "text-white"
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </NavLink>
  );
};

const NavigationBar = () => {
  const [currentElement, setCurrentElement] = useState("");

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        <nav className="w-full bg-gray-800 lg:block shadow">
          <div className="container px-6 h-16 flex-column lg:flex lg:justify-between items-center lg:items-stretch mx-auto">
            <div className="flex-column lg:flex items-center justify-center">
              <div className="mr-10 mt-5 lg:mt-2 flex items-center justify-center lg:justify-start">
                <svg
                  aria-label="Home"
                  id="logo"
                  enableBackground="new 0 0 300 300"
                  height={44}
                  viewBox="0 0 300 300"
                  width={43}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      fill="#4c51bf"
                      d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                    />
                  </g>
                </svg>
                <h3 className="text-lg lg:text-base text-white font-bold tracking-normal leading-tight ml-3 lg:block">
                  Monitoring System
                </h3>
              </div>
              <div className="lg:hidden block px-4 py-2 mt-3">
                <select
                  value={currentElement}
                  className="w-full bg-gray-800 text-white text-lg text-center  border-b-2 border-indigo-400 focus:border-b-2 focus:border-indigo-400 focus:outline-none focus:ring-0 rounded-none p-2"
                  onChange={(e) => {
                    setCurrentElement(e.target.value);
                    window.location.href = e.target.value;
                  }}
                >
                  <option value="/monitoring">Monitoring</option>
                  <option value="/my-measurements">My Measurements</option>
                  <option value="/chart-page">Chart</option>
                  <option value="/files">Files</option>
                  <option value="/settings">Settings</option>
                  <option value="/my-profile">My profile</option>
                </select>
              </div>

              <ul className="hidden lg:flex flex-column items-center lg:items-center h-full">
                <NavItem
                  to="/monitoring"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={6} height={6} rx={1} />
                      <rect x={14} y={4} width={6} height={6} rx={1} />
                      <rect x={4} y={14} width={6} height={6} rx={1} />
                      <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                  }
                  label="Monitoring"
                  setCurrentElement={setCurrentElement}
                />

                <NavItem
                  to="/my-measurements"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                  }
                  label="My Measurements"
                  setCurrentElement={setCurrentElement}
                />

                <NavItem
                  to="/chart-page"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                  }
                  label="Chart"
                  setCurrentElement={setCurrentElement}
                />

                <NavItem
                  to="/files"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                  }
                  label="Files"
                  setCurrentElement={setCurrentElement}
                />

                <NavItem
                  to="/settings"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                  }
                  label="Settings"
                  setCurrentElement={setCurrentElement}
                />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
