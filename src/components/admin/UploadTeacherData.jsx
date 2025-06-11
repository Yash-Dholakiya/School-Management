import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const UploadTeacherData = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        Phone: '',
        address: '',
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
        data.append('name', formData.name);
        data.append('Phone', formData.Phone);
        data.append('address', formData.address);
        data.append('profile', formData.profile);
        try {
            const response = await axios.post(
                'https://schoolproject.hirenow.co.in/api/teacher-store',
                data
            );
            if (response) {
                navigate('/admin/teachers');
            } else {
                alert('Error saving teacher info');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Submission failed. Please try again.');
        }
    };
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="flex flex-col mt-5 mb-10 items-center gap-10">
                <h1 className="text-[28px] font-bold text-center">Upload Teacher Data</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="text" name="name" onChange={handleChange} required placeholder="Teacher's Name" className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    <input type="text" name="address" onChange={handleChange} required placeholder="Teacher's address" className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    <input type="text" name="Phone" onChange={handleChange} required placeholder="Teacher's Phone No." className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    <input type="file" name="profile" onChange={handleChange} required className="border rounded-md file:px-2 file:py-2 file:bg-gray-500 file:me-3 w-full"/>
                    <button className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default UploadTeacherData;