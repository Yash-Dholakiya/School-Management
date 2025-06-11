import React from 'react';
import {NavLink} from "react-router-dom";
import assets from "../assets/images/assets.js";
import {RiTwitterXFill, RiFacebookFill, RiInstagramLine} from "react-icons/ri";

const Footer = () => {
    const explore = [
        {name: "Reception", path: "/reception"},
        {name: "School Profile", path: "/schoolProfile"},
        {name: "News", path: "/blogs"},
        {name: "Gallery", path: "/gallery"},
    ]
    const generalPage = [
        {name: "Teachers Data", path: "/teacher"},
        {name: "PPDB SMPN 1 Cibadak", path: "/PPDB_SMPN_1_Cibadak"},
        {name: "PPDB Guide", path: "/PPDB_Guide"},
        {name: "Location", path: "/contact"},
        {name: "Contact", path: "/contact"},
    ]
    return (
        <footer className="bg-[#F9F9F9] px-[7%] pt-10 pb-5">
            <div className="flex md:flex-row flex-col md:justify-between gap-6">
                <div className="flex flex-col gap-2 md:w-[30%]">
                    <NavLink to="/">
                        <img src={assets.logo} alt="logo"/>
                    </NavLink>
                    <p>Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia, (0266)531333</p>
                    <p className="font-bold">info@smpn1cibadak.sch.id</p>
                    <p className="font-bold">smpn1cbd_kabsi@yahoo.co.id</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold md:mb-3">Explore</h1>
                    {explore.map(item => (
                        <NavLink to={item.path} className="text-[#3A4E50]" key={item.name}>{item.name}</NavLink>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold md:mb-3">General Page</h1>
                    {generalPage.map(item => (
                        <NavLink to={item.path} className="text-[#3A4E50]" key={item.name}>{item.name}</NavLink>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold md:mb-3">Social Media</h1>
                    <div className="flex md:justify-between text-xl gap-5">
                        <a href="#" target="_blank">
                            <div
                                className="flex justify-center items-center w-[36px] h-[36px] border-[1px] border-[#E6E6E7] rounded-xl">
                                <RiTwitterXFill/>
                            </div>
                        </a>
                        <a href="#" target="_blank">
                            <div
                                className="flex justify-center items-center w-[36px] h-[36px] border-[1px] border-[#E6E6E7] rounded-xl">
                                <RiFacebookFill/>
                            </div>
                        </a>
                        <a href="#" target="_blank">
                            <div
                                className="flex justify-center items-center w-[36px] h-[36px] border-[1px] border-[#E6E6E7] rounded-xl">
                                <RiInstagramLine/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="md:my-8 my-5 text-[#E6E6E7]"/>
            <p className="md:text-[16px] text-[12px] text-center">Copyright © SMP Negeri 1 Cibadak. All right Reserved.
                Hosting By IDCloudHost</p>
        </footer>
    );
};

export default Footer;