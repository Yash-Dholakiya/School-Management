import React, {useEffect, useState} from 'react';
import {RiAddFill, RiEditBoxLine,RiDeleteBin6Line} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AdminAbout = () => {
        const [about, setAbout] = useState([]);
        const navigate = useNavigate();
        const fetch_about = () => {
            axios.get("https://schoolproject.hirenow.co.in/api/all-about-show")
                .then((res)=>setAbout(res.data[0]))
                .catch((err)=>console.log(err))
        }
        useEffect(() => {
            fetch_about()
        }, []);
        const handleDelete = async (id) => {
            if (!window.confirm("Are you sure you want to delete this About data?")) return;

            try {
                await axios.delete(`https://schoolproject.hirenow.co.in/api/about-delete/${id}`);
                alert("About data deleted successfully!");
                fetch_about();
            } catch (error) {
                console.error("Failed to delete about data:", error);
                alert("Failed to delete about data.");
            }
        }
    const handleUpdate = (item) => {
        navigate("/admin/about/updateAboutData", {
            state: item,
        });
    }
        return (
            <section className="px-[4.5%] md:pt-[80px]">
                <div className="mt-5 mb-10 flex flex-col items-center gap-5">
                    <h1 className="text-[28px] font-bold text-center">About Data</h1>
                    <div className="flex justify-end w-full">
                        <button className="px-4 py-2 text-white bg-blue-600 cursor-pointer flex justify-center items-center gap-2 rounded-md"
                                onClick={() => {
                                    navigate("/admin/about/uploadAboutData")
                                }}
                        >
                            <span>Add About</span><span><RiAddFill/></span>
                        </button>
                    </div>
                    <div className="w-full overflow-x-scroll">
                        <table className="w-full table-auto border">
                            <thead>
                            <tr className="bg-gray-500 font-bold text-white">
                                <th className="p-2">Index</th>
                                <th className="p-2">Title</th>
                                <th className="p-2">Information</th>
                                <th className="p-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {about.map((item,index)=>(
                                <tr key={index} className={index%2!==0?"bg-gray-100":"bg-white"}>
                                    <th className="p-2">{index+1}</th>
                                    <th className="p-2">{item.title}</th>
                                    <th className="p-2">{item.information}</th>
                                    <th className="p-2">
                                        <div className="flex gap-4 text-md justify-center">
                                            <button className="text-blue-600 cursor-pointer" onClick={()=>handleUpdate(item)}><RiEditBoxLine/></button>
                                            <button className="text-red-600 cursor-pointer" onClick={()=>handleDelete(item.id)}><RiDeleteBin6Line/></button>
                                        </div>
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
};

export default AdminAbout;