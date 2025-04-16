import equicomLogo from "../../../assets/Equicom Logo.png";
import { MENU_ITEMS } from "../utils/constants";
import { NavLink } from "react-router";

export const Navbar = () => {
    return (
        <nav className="flex gap-x-8 items-center">
            <img src={equicomLogo} className="h-10 w-auto hidden lg:block" />
            {MENU_ITEMS.map(e => (
                <NavLink
                    key={e}
                    to={e.replace(" ", "-")}
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                    {e}
                </NavLink>
            ))}
        </nav>
    )
}