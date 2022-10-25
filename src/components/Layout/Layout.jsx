import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="addbook">Add Book</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}