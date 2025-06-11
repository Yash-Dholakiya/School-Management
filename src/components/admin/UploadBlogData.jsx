import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const UploadBlogData = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        profile: null,
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('profile', formData.profile);
        try {
            const response = await axios.post(
                'https://schoolproject.hirenow.co.in/api/blog-store',
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
                <h1 className="text-[28px] font-bold text-center">Upload Blog Data</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="text" onChange={handleChange} name="title" placeholder="Blog Title" className="px-2 py-2 text-black border rounded-md placeholder:text-black" required/>
                    <input type="text" onChange={handleChange} name="description" placeholder="Blog Description" className="px-2 py-2 text-black border rounded-md placeholder:text-black" required/>
                    <input type="file" onChange={handleChange} name="profile" className="border rounded-md file:px-2 file:py-2 file:bg-gray-500 file:me-3 w-full" required/>
                    <button className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default UploadBlogData;