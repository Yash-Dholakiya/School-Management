import React, {useEffect, useState} from 'react';
import Hero from "./Hero.jsx";
import Blog from "./Blog";
import axios from "axios";
// import assets from "../assets/images/assets.js";
// import Btn from "./Btn";

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get("https://schoolproject.hirenow.co.in/api/all-blog-show")
            .then((res)=>setBlog(res.data[0]))
            .catch((err)=>console.log(err))
    }, []);
    const recent_blog = blog.sort((a,b)=>(b.id - a.id)).slice(0,5)
    // const blogSection1 = [
    //     {imgLink: assets.b1, heading: "Kegiatan Belajar Mengajar di Rumah 2020"},
    //     {imgLink: assets.b2, heading: "Kegiatan Belajar Mengajar di Rumah"},
    //     {imgLink: assets.b3, heading: "Belajar dirumah"},
    // ]
    // const blogSection2 = [
    //     {imgLink: assets.b1, heading: "Kegiatan Belajar Mengajar di Rumah 2020"},
    //     {imgLink: assets.b2, heading: "Kegiatan Belajar Mengajar di Rumah"},
    //     {imgLink: assets.b3, heading: "Belajar dirumah"},
    //     {imgLink: assets.b5, heading: "Kegiatan Pembelajaran daring"},
    // ]
    // const recentPosts = [
    //     "Belajar di rumah",
    //     "Belajar Sehari di Luar di Kelas SMPN 1 Cibadak",
    //     "Kegiatan Belajar mengajar di rumah",
    //     "Kegiatan Belajar Mengajar di Rumah 2020",
    // ]
    return (
        <>
            <Hero content="Some Learning News of SMP Negeri 1 Cibadak" heading="Blogs"/>
            <section className="md:py-20 py-10 px-[7%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blog.map((item,index) => (
                        <Blog key={index} img={`https://schoolproject.hirenow.co.in/images/${item.profile}`} heading={item.title} desc={item.description}/>
                    ))}
                </div>
                {/*<div*/}
                {/*    className="flex lg:flex-row flex-col md:my-10 my-6 p-4 rounded-md shadow-lg shadow-black/30 lg:gap-0 gap-2 w-full">*/}
                {/*    <div className="w-full h-full rounded-md lg:w-[50%]">*/}
                {/*        <img src={assets.b4} alt="blogimage" className="w-full h-full rounded-md"/>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-col lg:gap-5 gap-2 items-start justify-center lg:px-10 lg:w-[50%]">*/}
                {/*        <h2 className="lg:text-3xl text-xl font-bold">Kegiatan Belajar Mengajar dirumah</h2>*/}
                {/*        <p className="text-[#919FAE] lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing*/}
                {/*            elit. Morbi quis lobortis lorem. Quisque mattis felis augue. Quisque sed elit eget ante*/}
                {/*            faucibus blandit facilisis ac nibh.</p>*/}
                {/*        <Btn navpath="/blogs" text="Read More"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">*/}
                {/*    {blogSection2.map((item) => (*/}
                {/*        <Blog key={item.heading} img={item.imgLink} heading={item.heading}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <div className="md:mt-10 mt-8">
                    <h1 className="text-[28px] font-bold md:mb-8 mb-6">Recent Posts</h1>
                    <div className="flex flex-wrap gap-3 md:w-[60%] md:text-[16px] text-xs">
                        {recent_blog.map((item,index) => (
                            <button
                                key={index}
                                className="md:px-4 px-2 py-1 flex items-center justify-center border-[1px] border-[#2BA7E2] md:rounded-[20px] rounded-lg text-[#919FAE]">{item.title}</button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;