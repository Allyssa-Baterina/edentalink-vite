import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import equicomLogo from "../../../assets/Equicom Logo.png";
import { MENU_ITEMS } from "../utils/constants";
import { NavLink } from "react-router";
import { useState } from "react";
import { Navbar } from "./Navbar";

export const SideBar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    return <>
        <button
            className="cursor-pointer text-2xl text-black/80 hover:bg-gray-200 rounded focus:outline-primary p-1 lg:hidden"
            onClick={() => setShowSidebar(true)}>
            <Bars3Icon className="size-6" />
        </button>
        {showSidebar ?
            <div className={`sidebar ${showSidebar ? "open" : ""}`}>
                <div className="flex items-start mb-8">
                    <img src={equicomLogo} className="h-14 w-auto" />
                    <button
                        className="cursor-pointer text-2xl text-black/80 hover:bg-gray-100 rounded ml-auto py-1 focus:outline-primary px-1"
                        onClick={() => setShowSidebar(false)}>
                        <XMarkIcon className="size-6" />
                    </button>
                </div>
                <nav className="flex flex-col gap-y-1 h-[85%]">
                    {MENU_ITEMS.map(e => (
                        <NavLink
                            key={e}
                            to={e.replace(" ", "-")}
                            className={({ isActive }) => isActive ? "sidenav-item active" : "sidenav-item"}
                            onClick={() => setShowSidebar(false)}
                        >
                            {e}
                        </NavLink>
                    ))}
                    <div className="mt-auto flex border-t border-gray-300">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "sidenav-item active" : "sidenav-item"}
                            onClick={() => setShowSidebar(false)}
                        >
                            Logout
                        </NavLink>
                    </div>
                </nav>
            </div>
            : null
        }
        <div className="w-full hidden lg:block">
            <Navbar />
        </div>
    </>
}