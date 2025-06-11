import React, {useEffect, useState} from 'react';
import {RiDeleteBin6Line} from "react-icons/ri";
import axios from "axios";

const AdminContact = () => {
        const [contact, setContact] = useState([]);
        const fetch_contact = () => {
            axios.get("https://schoolproject.hirenow.co.in/api/all-contecttt-show")
                .then((res)=>setContact(res.data[0]))
                .catch((err)=>console.log(err))
        }
        useEffect(() => {
            fetch_contact()
        }, []);
        const handleDelete = async (id) => {
            if (!window.confirm("Are you sure you want to delete this contact data?")) return;

            try {
                await axios.delete(`https://schoolproject.hirenow.co.in/api/contecttt-delete/${id}`);
                alert("Teacher data deleted successfully!");
                fetch_contact(); // Refresh the gallery after deletion
            } catch (error) {
                console.error("Failed to delete teacher data:", error);
                alert("Failed to delete teacher data.");
            }
        }
        return (
            <section className="px-[4.5%] md:pt-[80px]">
                <div className="mt-5 mb-10 flex flex-col items-center gap-5">
                    <h1 className="text-[28px] font-bold text-center">Contact Data</h1>
                    <div className="w-full overflow-x-scroll">
                        <table className="w-full table-auto border">
                            <thead>
                            <tr className="bg-gray-500 font-bold text-white">
                                <th className="p-2">Index</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Subject</th>
                                <th className="p-2">Query</th>
                                <th className="p-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contact.map((item,index)=>(
                                <tr key={index} className={index%2!==0?"bg-gray-100":"bg-white"}>
                                    <th className="p-2">{index+1}</th>
                                    <th className="p-2">{item.name}</th>
                                    <th className="p-2">{item.email}</th>
                                    <th className="p-2">{item.subject}</th>
                                    <th className="p-2">{item.query}</th>
                                    <th className="p-2">
                                        <div className="flex gap-4 text-md justify-center">
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

export default AdminContact;