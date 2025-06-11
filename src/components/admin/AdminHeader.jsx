import React, {useState} from 'react';
import assets from "../../assets/images/assets.js";
import {RiCloseLine, RiMenuLine, RiSearchLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";

const AdminHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };
    const adminNavItems = [
        {name: "Dashboard", navPath: "/admin/dashboard"},
        {name: "Teachers Data", navPath: "/admin/teachers"},
        {name: "Gallery", navPath: "/admin/gallery"},
        {name: "Contact", navPath: "admin/contact"},
        {name: "Blogs", navPath: "admin/blogs"},
        {name: "About", navPath: "admin/about"},
    ]
    return (<>
        <header className="md:fixed sticky z-10 w-full h-[80px] md:px-[2%] px-[5%] flex items-center justify-between bg-[#363740]">
            <div className="flex gap-5">
                <button className="text-xl text-white cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <RiCloseLine/> : <RiMenuLine/>}
                </button>
                <NavLink to="/admin/dashboard">
                    <h1 className="md:text-4xl text-2xl text-white font-bold">Yash</h1>
                </NavLink>
            </div>
            <div className="flex gap-5">
                {/*<div*/}
                {/*    className="sm:flex items-center bg-[#F6F7F9] text-[##919FAE] px-3 h-12 rounded-lg gap-3 hidden">*/}
                {/*    <input type="search" name="search" id="adminsearch"*/}
                {/*           className="focus:outline-none px-2 py-1 text-lg w-full" placeholder="Search here"/>*/}
                {/*    <label htmlFor="adminsearch"><RiSearchLine className="text-xl"/></label>*/}
                {/*</div>*/}
                <div className="h-12 w-12 cursor-pointer">
                    <img src={assets.adminImg} alt="adminimg" className="h-full w-full rounded-full"/>
                </div>
            </div>
        </header>
        {isOpen && (<aside
            className="fixed z-10 h-[100vh] bg-[#363740] top-[81px] left-0 w-[250px] flex flex-col gap-10 pt-5">
            <h1 className="text-4xl font-bold text-center text-white">Admin</h1>
            <nav className="flex flex-col gap-5 ms-8 text-2xl">
                {adminNavItems.map((item,index) => (
                    <NavLink key={index} to={item.navPath}
                             className={({isActive}) => (isActive ? "text-white font-bold" : "text-[#CECDCD] hover:text-white")}
                             onClick={toggleMenu}
                    >
                    {item.name}
                </NavLink>))}
            </nav>
        </aside>)}
    </>);
};

export default AdminHeader;