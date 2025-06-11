import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const UpdateBlogData = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const blog = location.state || {};
    const [image, setImage] = useState(blog.profile);
    const [formData, setFormData] = useState({
        id : blog.id,
        title: blog.title,
        description: blog.description,
        profile: null,
    });
    const handleChange = (e) => {
        const {name, value, files} = e.target;

        if (name === "profile" && files && files[0]) {
            const file = files[0];
            setFormData({
                ...formData,
                profile: file,
            });

            // Set preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('id', formData.id);
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('profile', formData.profile);
        try {
            const response = await axios.post(
                'https://schoolproject.hirenow.co.in/api/updateblog-data',
                data
            );
            if (response) {
                navigate('/admin/blogs');
            } else {
                alert('Error saving blog info');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Submission failed. Please try again.');
        }
    };
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="flex flex-col mt-5 mb-10 items-center gap-10">
                <h1 className="text-[28px] font-bold text-center">Update Blog Data</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="hidden" value={formData.id}/>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="font-bold text-lg">Blog Title</label>
                        <input type="text" value={formData.title} id="title" onChange={handleChange} name="title" placeholder="Blog Title"
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description" className="font-bold text-lg">Blog Description</label>
                        <input type="text" value={formData.description} id="description" onChange={handleChange} name="description"
                               placeholder="Blog Description"
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black" required/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-lg">Profile</span>
                        <img
                            src={image?.startsWith('data:') ? image : `https://schoolproject.hirenow.co.in/images/${image}`}
                            alt="teacherImg"
                            className="w-40 h-40 object-cover rounded"/>
                        <input type="file" name="profile" onChange={handleChange} required
                               className="border rounded-md file:px-2 file:py-2 file:bg-gray-500 file:me-3 w-full"/>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md"
                            type="submit">Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UpdateBlogData;