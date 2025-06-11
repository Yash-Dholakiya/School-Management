import React, {useEffect, useState} from 'react';
import {RiDeleteBin6Fill,RiAddFill} from "react-icons/ri";
// import assets from "../../assets/images/assets.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AdminGallery = () => {
    const navigate = useNavigate();
    const [galleryData, setGalleryData] = useState([]);
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
    const fetch_gallery = () => {
        axios.get('https://schoolproject.hirenow.co.in/api/all-gallery-show')
            .then((res)=>setGalleryData(res.data[0]))
            .catch((err)=>{
                console.log(err);
            })
    }
    useEffect(() => {
        fetch_gallery();
    }, []);
    const deleteImage = async (id) => {
        if (!window.confirm("Are you sure you want to delete this image?")) return;

        try {
            await axios.delete(`https://schoolproject.hirenow.co.in/api/gallery-delete/${id}`);
            alert("Image deleted successfully!");
            fetch_gallery(); // Refresh the gallery after deletion
        } catch (error) {
            console.error("Failed to delete image:", error);
            alert("Failed to delete image.");
        }
    };
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="flex flex-col mt-5 mb-10 items-center gap-5">
                <h1 className="text-[28px] font-bold text-center">Gallery Images</h1>
                <div className="flex justify-end w-full">
                    <button className="px-4 py-2 text-white bg-blue-600 cursor-pointer flex justify-center items-center gap-2 rounded-md font-bold"
                            onClick={() => {
                                navigate("/admin/gallery/uploadImage")
                            }}
                    >
                        <span>Add Image</span><span><RiAddFill/></span>
                    </button>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 row-auto gap-5">
                    {
                        galleryData.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <img src={`https://schoolproject.hirenow.co.in/images/${item.profile}`} alt="schoolimg" className="h-[300px] w-full hover:scale-[102%] rounded-md shadow-lg shadow-black/50"/>
                                <div className="w-full flex justify-center">
                                    <button className="bg-gray-500 text-white cursor-pointer px-4 py-2 flex items-center justify-center gap-2 rounded-md" onClick={()=>deleteImage(item.id)}><span>Delete Image</span><span><RiDeleteBin6Fill/></span></button>
                                </div>
                            </div>
                        ))
                    }
                    {/*{galleryImages.map((item, index) => (*/}
                    {/*    <div key={index} className="flex flex-col gap-2">*/}
                    {/*        <img src={item.imgLink} alt="schoolimg" className="h-full w-full hover:scale-[102%] rounded-md shadow-lg shadow-black/50"/>*/}
                    {/*        <div className="w-full flex justify-center">*/}
                    {/*            <button className="bg-gray-500 text-white cursor-pointer px-4 py-2 flex items-center justify-center gap-2 rounded-md"><span>Delete Image</span><span><RiDeleteBin6Fill/></span></button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                </div>
            </div>
        </section>
    );
};

export default AdminGallery;