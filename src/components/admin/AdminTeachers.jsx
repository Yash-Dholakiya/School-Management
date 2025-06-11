import React, {useEffect, useState} from 'react';
import {RiAddFill, RiEditBoxLine,RiDeleteBin6Line} from "react-icons/ri";
// import assets from "../../assets/images/assets.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AdminTeachers = () => {
    const [teacher, setTeacher] = useState([]);
    const navigate = useNavigate();
    // const teacherData = [
    //     {imgLink:assets.t1,name:"Hj. ELIS HERNAWATI, S.Pd.",nip:"196606051992032008",pelajaran:"Ilmu Pengetahuan Sosial"},
    //     {imgLink:assets.t2,name:"Drs. Osad",nip:"196203121989031014",pelajaran:"Bahasa Indonesia"},
    //     {imgLink:assets.t3,name:"Hj. ENUNG NURHASANAH, S.Pd.",nip:"196202021983022006",pelajaran:"Bahasa Indonesia"},
    //     {imgLink:assets.t4,name:"HANA WIJAYA, S.Pd.",nip:"196207091983022001",pelajaran:"Matematika"},
    //     {imgLink:assets.t5,name:"MAMAN, S.Pd., M.M.Pd.",nip:"196402161989031005",pelajaran:"Penjaskes"},
    //     {imgLink:assets.t6,name:"RAKHMAT, S.Pd.,M.Si.",nip:"196703101986031002",pelajaran:"Pendidikan Kewarganegaraan"},
    //     {imgLink:assets.t7,name:"RITA NURYANTI, S.Pd.",nip:"197108041998022003",pelajaran:"Ilmu Pengetahuan Alam"},
    //     {imgLink:assets.t8,name:"IDA LAELASARI, S.Pd.",nip:"196811231998022001",pelajaran:"Bahasa Sunda"},
    //     {imgLink:assets.t9,name:"SUPRIYONO, S.Pd.",nip:"196511141998021001",pelajaran:"Bahasa Inggris"},
    // ]
    const fetch_teacher = () => {
        axios.get("https://schoolproject.hirenow.co.in/api/all-teacher-show")
            .then((res)=>setTeacher(res.data[0]))
            .catch((err)=>console.log(err))
    }
    useEffect(() => {
        fetch_teacher()
    }, []);
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this teacher data?")) return;

        try {
            await axios.delete(`https://schoolproject.hirenow.co.in/api/teacher-delete/${id}`);
            alert("Teacher data deleted successfully!");
            fetch_teacher(); // Refresh the gallery after deletion
        } catch (error) {
            console.error("Failed to delete teacher data:", error);
            alert("Failed to delete teacher data.");
        }
    }
    const handleUpdate = (item) => {
        navigate("/admin/teachers/updateTeacherData", {
            state: item,
        });
    }
    return (
        <section className="px-[4.5%] md:pt-[80px]">
            <div className="mt-5 mb-10 flex flex-col items-center gap-5">
                <h1 className="text-[28px] font-bold text-center">Teachers Data</h1>
                <div className="flex justify-end w-full">
                    <button className="px-4 py-2 text-white bg-blue-600 cursor-pointer flex justify-center items-center gap-2 rounded-md"
                            onClick={() => {
                                navigate("/admin/teachers/uploadTeacherData")
                            }}
                    >
                        <span>Add Teacher</span><span><RiAddFill/></span>
                    </button>
                </div>
                <div className="w-full overflow-x-scroll">
                    <table className="w-full table-auto border">
                        <thead>
                            <tr className="bg-gray-500 font-bold text-white">
                                <th className="p-2">Index</th>
                                <th className="p-2">Image</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Address</th>
                                <th className="p-2">Phone No.</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teacher.map((item,index)=>(
                                <tr key={index} className={index%2!==0?"bg-gray-100":"bg-white"}>
                                   <th className="p-2">{index+1}</th>
                                   <th className="p-2">
                                       <div className="flex justify-center">
                                           <div className="w-24 h-34">
                                               <img src={`https://schoolproject.hirenow.co.in/images/${item.profile}`} alt="teacherimg" className="h-full w-full"/>
                                           </div>
                                       </div>
                                   </th>
                                   <th className="p-2">{item.name}</th>
                                   <th className="p-2">{item.address}</th>
                                   <th className="p-2">{item.Phone}</th>
                                   <th className="p-2">
                                       <div className="flex gap-4 text-md justify-center">
                                            <button className="text-blue-600 cursor-pointer" onClick={()=>handleUpdate(item)}><RiEditBoxLine/></button>
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

export default AdminTeachers;