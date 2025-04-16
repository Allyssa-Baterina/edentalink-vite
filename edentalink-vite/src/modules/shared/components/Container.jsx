import { Outlet } from "react-router"
import { Header } from "./Header";

export const Container = () => {
    return (
        <div className="h-dvh  min-w-[320px] pt-22 pb-5 px-1 xs:px-4 bg-white">
            <Header />
            <Outlet />
        </div>
    )
}