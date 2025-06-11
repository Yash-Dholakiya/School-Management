import React, {useEffect, useState} from 'react';
import {RiAddFill, RiDeleteBin6Line, RiEditBoxLine} from "react-icons/ri";
// import assets from "../../assets/images/assets.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AdminBlogs = () => {
    const navigate = useNavigate();
    // const blogs = [
    //     {imgLink: assets.b1, title: "Kegiatan Belajar Mengajar di Rumah 2020",description:"Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem"},
    //     {imgLink: assets.b2, title: "Kegiatan Belajar Mengajar di Rumah",description:"Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem"},
    //     {imgLink: assets.b3, title: "Belajar dirumah",description:"Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem"},
    //     {imgLink: assets.b4, title: "Kegiatan Belajar Mengajar dirumah",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lobortis lorem. Quisque mattis felis augue. Quisque sed elit eget ante faucibus blandit facilisis ac nibh."},
    //     {imgLink: assets.b5, title: "Kegiatan Pembelajaran daring",description:"Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem"},
    // ]
    const [blog, setBlog] = useState([]);
    const fetch_blog = () => {
        axios.get("https://schoolproject.hirenow.co.in/api/all-blog-show")
            .then((res)=>setBlog(res.data[0]))
            .catch((err)=>console.log(err))
    }
    useEffect(() => {
        fetch_blog();
    }, []);
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog data?")) return;

        try {
            await axios.delete(`https://schoolproject.hirenow.co.in/api/blog-delete/${id}`);
            alert("Blog data deleted successfully!");
            fetch_blog(); // Refresh the gallery after deletion
        } catch (error) {
            console.error("Failed to delete blog data:", error);
            alert("Failed to delete blog data.");
        }
    }
    const handleUpdate = (item) => {
        navigate("/admin/blog/updateBlogData", {
            state: item,
        });
    }
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="mt-5 mb-10 flex flex-col items-center gap-5">
                <h1 className="text-[28px] font-bold text-center">Blogs Data</h1>
                <div className="flex justify-end w-full">
                    <button className="px-4 py-2 text-white bg-blue-600 cursor-pointer flex justify-center items-center gap-2 rounded-md"
                            onClick={() => {
                                navigate("/admin/blogs/uploadBlogData")
                            }}
                    >
                        <span>Add Blog</span><span><RiAddFill/></span>
                    </button>
                </div>
                <div className="w-full overflow-x-scroll">
                    <table className="w-full table-auto border">
                        <thead>
                        <tr className="bg-gray-500 font-bold text-white">
                            <th className="p-2">Index</th>
                            <th className="p-2">Image</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blog.map((item,index)=>(
                            <tr key={index} className={index%2!==0?"bg-gray-100":"bg-white"}>
                                <th className="p-2 md:text-base text-xs">{index+1}</th>
                                <th className="p-2">
                                    <div className="flex justify-center">
                                        <div className="md:w-40 md:h-40 w-20 h-20">
                                            <img src={`https://schoolproject.hirenow.co.in/images/${item.profile}`} alt="teacherimg" className="h-full w-full"/>
                                        </div>
                                    </div>
                                </th>
                                <th className="p-2 md:text-base text-[10px]">{item.title}</th>
                                <th className="p-2 md:text-base text-[10px] md:w-[30%]">{item.description}</th>
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

export default AdminBlogs;