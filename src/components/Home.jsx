import Hero from "./Hero";
import assets from "../assets/images/assets.js";
import React from "react";
import Btn from "./Btn";

const Home = () => {
    const homePageBlogs = [
        {imgLink: assets.bi1, name: "Facilities"},
        {imgLink: assets.bi2, name: "Location"},
        {imgLink: assets.bi3, name: "History"}
    ]
    const homePageTeacherImages = [
        {imgLink: assets.obf1, name: "Aula Sekolah"},
        {imgLink: assets.obf2, name: "Kantin"},
        {imgLink: assets.obf3, name: "SMPN 1 Cibadak"},
        {imgLink: assets.obf4, name: "Halaman"},
        {imgLink: assets.obf5, name: "Perpustakaan"},
        {imgLink: assets.obf6, name: "Ruang Kelas"},
        {imgLink: assets.obf7, name: "Lapangan"},
    ]
    const homePageGalleryImages = [
        {imgLink: assets.hs3gph1},
        {imgLink: assets.hs3gph2},
        {imgLink: assets.hs3gph3},
        {imgLink: assets.hs3gph4},
        {imgLink: assets.hs3gph5},
        {imgLink: assets.hs3gph6}
    ]
    return (
        <>
            <Hero heading="Motto"
                  content="SMP N 1 Cibadak (Ethical Smart) Cheerful, Empathetic, Rational, Peaceful, Active, Patient, Clean, Beautiful, Sincere, Faithful, Consistent, Trustworthy."
                  navpath="/contact" btntext="Contact Us"/>
            <section className="md:my-20 my-10 flex lg:flex-row flex-col px-[7%]">
                <div className="lg:w-[51%] w-full shadow-lg shadow-black/30 rounded-md">
                    <img className="h-full w-full rounded-md" src={assets.imageVideo} alt="principleimage"/>
                </div>
                <div
                    className="lg:w-[49%] w-full flex flex-col items-start justify-center lg:ps-[5%] gap-5 lg:mt-[0px] mt-5">
                    <h1 className="sm:text-4xl text-[20px] font-bold">Greetings from the Principal of SMP Negeri 1
                        Cibadak</h1>
                    <p className="text-lg">Let us offer praise and gratitude to the presence of Allah SWT. Who always
                        with His loving and affectionate nature gives many blessings...</p>
                    <Btn navpath="/about" text="More"/>
                </div>
            </section>
            <section className="md:py-20 py-10 px-[7%] md:flex md:flex-col md:items-center bg-[#EAEAEA]">
                <h1 className="text-[28px] font-bold">Blogs</h1>
                <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-3 my-8">
                    {homePageBlogs.map(item => (
                        <div key={item.name}
                             className="flex flex-col md:w-[30%] w-[100%] py-8 px-10 bg-[#E9F2FF] rounded-xl hover:shadow-lg shadow-black/50 hover:scale-[102%]">
                            <div className="h-[90px] w-[90px]">
                                <img src={item.imgLink} alt="blogImage" className="h-full w-full rounded-full"/>
                            </div>
                            <h2 className="text-2xl my-4 font-bold">{item.name}</h2>
                            <p className="text-[16px]">Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.</p>
                        </div>
                    ))}
                </div>
                <Btn navpath="/blogs" text="More"/>
            </section>
            <section className="md:py-20 py-10 px-[7%] bg-[#2B2A2A]">
                <h1 className="text-[28px] font-bold text-white md:text-center mb-5">Our Best Faculties</h1>
                <div className="flex gap-2 overflow-y-hidden overflow-x-scroll scrollbar-hide">
                    {homePageTeacherImages.map(item => (
                        <div key={item.name} className="flex flex-col items-center">
                            <div className="w-[250px] h-[250px]">
                                <img src={item.imgLink} alt="teacher"
                                     className="w-full h-full rounded-sm hover:shadow-lg shadow-white/10"/>
                            </div>
                            <h2 className="text-[22px] text-white">{item.name}</h2>
                        </div>
                    ))}
                </div>
            </section>
            <section className="md:my-20 my-10 px-[7%] md:text-center">
                <h1 className="text-[28px] font-bold">Gallery</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 row-auto gap-5 my-8">
                    {homePageGalleryImages.map((item, index) => (
                        <img key={index} src={item.imgLink} alt="schoolimg"
                             className="h-full w-full hover:scale-[102%] rounded-md shadow-lg shadow-black/50"/>

                    ))}
                </div>
                <Btn navpath="/gallery" text="More"/>
            </section>
        </>
    );
};

export default Home;