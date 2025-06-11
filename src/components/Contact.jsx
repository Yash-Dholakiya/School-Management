import React, {useState} from 'react';
import Hero from "./Hero";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        subject: '',
        query: '',
    };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('query', formData.query);
        try {
            const response = await axios.post(
                'https://schoolproject.hirenow.co.in/api/contecttt-store',
                data
            );
            if (response) {
                setFormData(initialState)
            } else {
                alert('Error saving contact info');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Submission failed. Please try again.');
        }
    };
    return (
        <>
            <Hero content="If you have any questions, please fill in the form below" heading="Contact US"/>
            <section className="md:py-20 ms:py-10 px-[7%] flex flex-col items-center">
                <div className="md:w-[60%] w-full mb-10">
                    <form className="flex flex-col gap-7 text-[#0C101A] text-[18px]" onSubmit={handleSubmit}>
                        <div className="flex md:flex-row flex-col justify-between w-full md:gap-0 gap-7">
                            <div className="flex flex-col md:w-[48%] w-full gap-2">
                                <label htmlFor="name">Name</label>
                                <input onChange={handleChange} type="text" id="name" name="name" placeholder="Name" value={formData.name}
                                       className="px-5 py-3 bg-[#F6F7F9] rounded-lg placeholder:text-[#919FAE] text-[#0C101A]" required/>
                            </div>
                            <div className="flex flex-col md:w-[48%] w-full gap-2">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleChange} type="email" id="email" name="email" placeholder="abc@xyz.com" value={formData.email}
                                       className="px-5 py-3 bg-[#F6F7F9] rounded-lg placeholder:text-[#919FAE] text-[#0C101A]" required/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="subject">Subject</label>
                            <input onChange={handleChange} type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject}
                                   className="px-5 py-3 bg-[#F6F7F9] rounded-lg placeholder:text-[#919FAE] text-[#0C101A]" required/>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="msg">Your Query</label>
                            <textarea onChange={handleChange} name="query" id="msg" placeholder="Enter Your Query" value={formData.query}
                                      className="px-5 py-3 bg-[#F6F7F9] rounded-lg placeholder:text-[#919FAE] text-[#0C101A] min-h-28 max-h-52" required/>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit"
                                    className="sm:text-[18px] text-[16px] border-none bg-[#0193DC] px-10 py-2 rounded-md text-white">Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:h-[500px] sm:h-[300px] h-[200px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9682633622933!2d106.7898599750783!3d-6.8943995931047555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68316af442641b%3A0x96edb366f22211d5!2sSMP%20Negeri%201%20CIBADAK!5e0!3m2!1sen!2sin!4v1746014495104!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;