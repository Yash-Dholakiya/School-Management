import React, {useEffect, useState} from 'react';
// import assets from "../assets/images/assets.js";
import axios from "axios";

const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    useEffect(() => {
        axios.get('https://schoolproject.hirenow.co.in/api/all-gallery-show')
            .then((res) => setGalleryData(res.data[0]))
            .catch((err) => {
                console.log(err);
            })
    }, []);
    // const galleryImages = [
    //     {imgLink: assets.gs1gph1},
    //     {imgLink: assets.gs1gph2},
    //     {imgLink: assets.gs1gph3},
    //     {imgLink: assets.gs1gph4},
    //     {imgLink: assets.gs1gph5},
    //     {imgLink: assets.gs1gph6},
    //     {imgLink: assets.gs1gph7},
    //     {imgLink: assets.gs1gph8},
    //     {imgLink: assets.gs1gph9},
    // ]
    return (
        <section className="pt-[100px]">
            <div className="md:py-20 py-10 px-[7%]">
                <h1 className="text-[28px] font-bold text-center">Gallery</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 row-auto gap-5 md:my-20 my-10">
                    {galleryData.map((item, index) => (
                        <img key={index} src={`https://schoolproject.hirenow.co.in/images/${item.profile}`}
                             alt="schoolimg"
                             className="h-[300px] w-full hover:scale-[102%] rounded-md shadow-lg shadow-black/50"/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;