import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const Root = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="flex items-center justify-between lg:hidden px-4">
            <img src="" alt="logo" />
            <label
              htmlFor="my-drawer-2"
              className=" border p-2 m-2 inline-block cursor-pointer"
            >
              <RxHamburgerMenu />
            </label>
          </div>
          {/* Page content here */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-base-content border">
            {/* Sidebar content here */}
            <Navbar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Root;
