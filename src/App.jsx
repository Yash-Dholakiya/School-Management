import React from 'react'
import {Routes,Route} from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Teacher from "./components/Teacher"
import About from "./components/About"
import Contact from "./components/Contact"
import Blogs from "./components/Blogs"
import PageNotFound from "./components/PageNotFound"
import Layout from "./components/admin/Layout"
import Dashboard from "./components/admin/Dashboard"
import AdminGallery from "./components/admin/AdminGallery"
import AdminTeachers from "./components/admin/AdminTeachers"
import AdminBlogs from "./components/admin/AdminBlogs"
import AdminContact from "./components/admin/AdminContact";
import AdminAbout from "./components/admin/AdminAbout";
import UploadImage from "./components/admin/UploadImage"
import UploadTeacherData from "./components/admin/UploadTeacherData"
import UploadBlogData from "./components/admin/UploadBlogData";
import UploadAboutData from "./components/admin/UploadAboutData";
import UpdateTeacherData from "./components/admin/UpdateTeacherData";
import UpdateBlogData from "./components/admin/UpdateBlogDate";
import UpdateAboutData from "./components/admin/UpdateAboutData";


const App = () => {
    return(
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/teacher" element={<Teacher/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                </Route>
                <Route element={<Layout/>}>
                    <Route path="/admin/dashboard" element={<Dashboard/>}/>
                    <Route path="/admin/gallery" element={<AdminGallery/>}/>
                    <Route path="/admin/teachers" element={<AdminTeachers/>}/>
                    <Route path="/admin/blogs" element={<AdminBlogs/>}/>
                    <Route path="/admin/contact" element={<AdminContact/>}/>
                    <Route path="/admin/about" element={<AdminAbout/>}/>
                    <Route path="/admin/teachers/uploadTeacherData" element={<UploadTeacherData/>}/>
                    <Route path="/admin/gallery/uploadImage" element={<UploadImage/>}/>
                    <Route path="/admin/blogs/uploadBlogData" element={<UploadBlogData/>}/>
                    <Route path="/admin/about/uploadAboutData" element={<UploadAboutData/>}/>
                    <Route path="/admin/teachers/updateTeacherData" element={<UpdateTeacherData/>}/>
                    <Route path="/admin/blog/updateBlogData" element={<UpdateBlogData/>}/>
                    <Route path="/admin/about/updateAboutData" element={<UpdateAboutData/>}/>
                </Route>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default App;