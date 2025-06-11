import React, {useState, useEffect} from 'react';
import assets from "../../assets/images/assets.js";
import axios from "axios";
import {Link} from "react-router-dom";

const Dashboard = () => {
    const [counts, setCounts] = useState({
        Teachers: 0,
        Gallery: 0,
        Queries: 0,
        Blogs: 0,
        About: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teacherRes, galleryRes, queriesRes, blogRes, aboutRes] = await Promise.all([
                    axios.get("https://schoolproject.hirenow.co.in/api/all-teacher-show"),
                    axios.get("https://schoolproject.hirenow.co.in/api/all-gallery-show"),
                    axios.get("https://schoolproject.hirenow.co.in/api/all-contecttt-show"),
                    axios.get("https://schoolproject.hirenow.co.in/api/all-blog-show"),
                    axios.get("https://schoolproject.hirenow.co.in/api/all-about-show"),
                ]);

                setCounts({
                    Teachers: Array.isArray(teacherRes.data[0]) ? teacherRes.data[0].length : 0,
                    Gallery: Array.isArray(galleryRes.data[0]) ? galleryRes.data[0].length : 0,
                    Queries: Array.isArray(queriesRes.data[0]) ? queriesRes.data[0].length : 0,
                    Blogs: Array.isArray(blogRes.data[0]) ? blogRes.data[0].length : 0,
                    About: Array.isArray(aboutRes.data[0]) ? aboutRes.data[0].length : 0,
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };

        fetchData();
    }, []);
    console.log(counts);
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="flex flex-col my-3 items-center gap-3">
                <h1 className="md:text-4xl sm:text-2xl text-md font-bold">School Management Dashboard</h1>
                <h2 className="md:text-2xl sm:text-lg text-sm">Welcome to your Dashboard, Yash</h2>
            </div>
            <div className="w-full flex flex-wrap sm:flex-row justify-baseline flex-col mb-10 text-center sm:gap-y-8 gap-5">
                <Link to="/admin/teachers"
                      className="flex flex-col rounded-2xl shadow-lg shadow-black/30 items-center gap-3 justify-center sm:h-60 h-30 sm:w-[31%] bg-gray-200 hover:scale-105">
                    <span className="sm:text-5xl">{counts.Teachers}</span>
                    <span className="sm:text-3xl">Teachers</span>
                </Link>
                <Link to="/admin/gallery"
                      className="flex flex-col rounded-2xl shadow-lg shadow-black/30 items-center gap-3 justify-center sm:h-60 h-30 sm:w-[31%] bg-gray-200 hover:scale-105">
                    <span className="sm:text-5xl">{counts.Gallery}</span>
                    <span className="sm:text-3xl">Images</span>
                </Link>
                <Link to="/admin/contact"
                      className="flex flex-col rounded-2xl shadow-lg shadow-black/30 items-center gap-3 justify-center sm:h-60 h-30 sm:w-[31%] bg-gray-200 hover:scale-105">
                    <span className="sm:text-5xl">{counts.Queries}</span>
                    <span className="sm:text-3xl">Queries</span>
                </Link>
                <Link to="/admin/blogs"
                      className="flex flex-col rounded-2xl shadow-lg shadow-black/30 items-center gap-3 justify-center sm:h-60 h-30 sm:w-[31%] bg-gray-200 hover:scale-105">
                    <span className="sm:text-5xl">{counts.Blogs}</span>
                    <span className="sm:text-3xl">Blogs</span>
                </Link>
                <Link to="/admin/about"
                      className="flex flex-col rounded-2xl shadow-lg shadow-black/30 items-center gap-3 justify-center sm:h-60 h-30 sm:w-[31%] bg-gray-200 hover:scale-105">
                    <span className="sm:text-5xl">{counts.About}</span>
                    <span className="sm:text-3xl">About</span>
                </Link>
            </div>
        </section>
    );
};

export default Dashboard;