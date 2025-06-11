import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!image){
            alert("Please Add Image");
        }
        const formData = new FormData();
        formData.append('profile',image)
        try {
            const response = await axios.post('https://schoolproject.hirenow.co.in/api/gallery-store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if(response){
                navigate('/admin/gallery');
            }
            else {
                alert("Error saving image.")
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Submission failed. Please try again.');
        }
    }
    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="flex flex-col mt-5 mb-10 items-center gap-10">
                <h1 className="text-[28px] font-bold text-center">Upload Image</h1>
                <form encType='multipart/form-data' onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <span className="text-black font-bold">Add Image</span>
                    <input type="file" name="addimg" id="addimg" onChange={handleChange} className="border rounded-md file:px-2 file:py-2 file:bg-gray-500 file:me-3 w-full" required/>
                    <button className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default UploadImage;