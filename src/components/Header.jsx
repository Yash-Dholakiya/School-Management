import React, {useState} from 'react';
import assets from "../assets/images/assets.js";
import {NavLink} from "react-router-dom";
import {RiMenuLine, RiCloseLine} from "react-icons/ri";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };
    const navList = [
        {name:"Home",path:"/"},
        {name:"Gallery",path:"/gallery"},
        {name:"Teachers",path:"/teacher"},
        {name:"About",path:"/about"},
        {name:"Contact Us",path:"/contact"},
        {name:"Blogs",path:"/blogs"}
    ]
    return (
        <>
            <header className="bg-[#0b0b0b]/90 w-full h-[100px] px-[7%] flex items-center text-[18px] md:fixed sticky z-10">
                <div className="flex justify-between w-full items-center">
                    <NavLink to="/">
                        <img src={assets.logo} alt="logo"/>
                    </NavLink>
                    <nav className="gap-10 md:flex hidden">
                        {navList.map(navItem=>(
                            <NavLink
                                key={navItem.name}
                                className={({isActive}) => (isActive ? "text-white font-bold" : "text-[#CECDCD] hover:text-white")}
                                to={navItem.path}
                            >
                                {navItem.name}
                            </NavLink>
                        ))}
                    </nav>
                    <button className="text-xl text-white md:hidden block" onClick={toggleMenu}>
                        {isOpen ? <RiCloseLine/> : <RiMenuLine/>}
                    </button>
                </div>
            </header>
            {
                isOpen && (
                    <div className="mt-[1px] bg-[#0b0b0b]/90">
                        <nav className="flex flex-col gap-10 py-10 items-center">
                            {navList.map(navItem=>(
                                <NavLink
                                    key={navItem.name}
                                    className={({isActive}) => (isActive ? "text-white font-bold" : "text-[#CECDCD] hover:text-white")}
                                    to={navItem.path}
                                    onClick={toggleMenu}
                                >
                                    {navItem.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                )
            }
        </>
    );
};


export default Header;