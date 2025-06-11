import React, {useEffect, useState} from 'react';
import Hero from "./Hero";
import axios from "axios";

const About = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        axios.get("https://schoolproject.hirenow.co.in/api/all-about-show")
            .then((res) => setAbout(res.data[0]))
            .catch((err) => console.log(err))
    }, []);
    return (
        <>
            <Hero heading="Welcome new prospective students of SMPN 1 CIBADAK for the 2024-2025 academic year"/>
            <section className="md:py-20 py-10 lg:px-[10%] px-[7%]">
                <h1 className="text-[28px] font-bold text-center mb-10">About</h1>
                <div className="flex flex-col gap-5">
                    {about.map((item, index) => (
                        <div key={index} className="flex flex-col rounded-xl border-[1px] border-[#DFDFDF] shadow-lg shadow-black/30 px-10 py-5">
                                <h1 className="sm:text-[28px] text-[24px]">Title : {item.title}</h1>
                                <p className="sm:text-[20px] text-[16px]">Information : {item.information}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;