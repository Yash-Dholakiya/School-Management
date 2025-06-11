import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

const UpdateTeacherData = () => {
    const location = useLocation();
    const teacher = location.state || {};
    const navigate = useNavigate();
    const [image, setImage] = useState(teacher.profile);
    const [formData, setFormData] = useState({
        id : teacher.id,
        name: teacher.name,
        Phone: teacher.Phone,
        address: teacher.address,
        profile: null,
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;

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
        data.append('id',formData.id);
        data.append('name', formData.name);
        data.append('Phone', formData.Phone);
        data.append('address', formData.address);
        data.append('profile', formData.profile);
        try {
            const response = await axios.post(
                'https://schoolproject.hirenow.co.in/api/updateteacher',
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
                    <input type="hidden" value={formData.id}/>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-bold text-lg">Name</label>
                        <input value={formData.name} type="text" name="name" id="name" onChange={handleChange} required
                               placeholder="Teacher's Name"
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="address" className="font-bold text-lg">Address</label>
                        <input value={formData.address} type="text" name="address" id="address" onChange={handleChange}
                               required placeholder="Teacher's address"
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phone" className="font-bold text-lg">Phone No.</label>
                        <input value={formData.Phone} type="text" name="Phone" id="phone" onChange={handleChange}
                               required placeholder="Teacher's Phone No."
                               className="px-2 py-2 text-black border rounded-md placeholder:text-black"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-lg">Profile</span>
                        <img
                            src={image?.startsWith('data:') ? image : `https://schoolproject.hirenow.co.in/images/${image}`}
                            alt="teacherImg"
                            className="w-40 h-40 object-cover rounded" />
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

export default UpdateTeacherData;