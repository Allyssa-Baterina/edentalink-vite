import { SideBar } from "./Sidebar";
import user from "../../../assets/user.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from "react-router";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export const Header = () => {

    return (
        <div className="z-50 absolute px-2 top-0 inset-x-0 bg-primary-bg shadow-lg min-w-[320px] min-h-[70px] flex items-center">
            <SideBar />
            <Menu>
                <MenuButton className="ml-auto cursor-pointer hover:bg-gray-200/70 rounded-full py-2 sm:rounded-lg px-2 sm:py-1 focus:outline-primary/70">
                    <div className="cursor-pointer flex items-center gap-x-2" >
                        <img src={user} className="opacity-80 p-0.5 bg-white shadow-lg rounded-full h-[35px] w-[35px] 
                        ring ring-gray-200 hover:opacity-90 focus:outline-primary active:opacity-100" />
                        <p className="text-xs font-semibold text-gray-800 hidden sm:block text-nowrap">
                            Welcome, User
                        </p>
                        <ChevronDownIcon className="size-8 pt-0.5 ml-1 hidden sm:block" />
                    </div>
                </MenuButton>
                <MenuItems anchor="bottom end"
                    className="z-2 bg-white p-1 mt-2 flex flex-col gap-y-1 focus:outline-primary rounded shadow-lg"
                >
                    <div className="block py-2 pl-3 sm:hidden">
                        <label className="text-left text-sm font-semibold text-gray-600">
                            Welcome, User
                        </label>
                    </div>
                    <div className="block border border-t border-gray-200 w-full sm:hidden" />
                    <MenuItem>
                        <button
                            className="cursor-pointer text-left py-2 pr-20 pl-5 rounded w-full hover:bg-primary-bg">
                            Profile
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            className="cursor-pointer text-left py-2 pr-20 pl-5 rounded w-full hover:bg-primary-bg">
                            Settings
                        </button>
                    </MenuItem>
                    <div className="border border-t border-gray-200 w-full" />
                    <MenuItem>
                        <NavLink
                            to="/"
                            className="cursor-pointer text-left py-2 pr-20 pl-5 rounded w-full hover:bg-primary-bg"
                        >
                            Logout
                        </NavLink>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div >
    )
}