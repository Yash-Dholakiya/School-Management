import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

const UpdateAboutData = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const about = location.state || {}
    const [formData, setFormData] = useState({
        id: about.id,
        title: about.title,
        information: about.information,
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('id', formData.id);
        data.append('title', formData.title);
        data.append('information', formData.information);
        try {
            const response = await axios.post(
                'https://schoolproject.hirenow.co.in/api/updateabout-data',
                data
            );
            if (response) {
                navigate('/admin/about');
            } else {
                alert('Error saving about info');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Submission failed. Please try again.');
        }
    };
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="flex flex-col mt-5 mb-10 items-center gap-10">
                <h1 className="text-[28px] font-bold text-center">Update About Data</h1>
                <form className="flex flex-col gap-5 w-[30%]" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="hidden" value={formData.id}/>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="font-bold text-lg">About Title</label>
                        <input type="text" value={formData.title} id="title" name="title" onChange={handleChange} required
                               placeholder="About Title"
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="information" className="font-bold text-lg">About Information</label>
                        <input type="text" value={formData.information} id="information" name="information" onChange={handleChange} required
                               placeholder="About Information"
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md"
                            type="submit">Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default UpdateAboutData;