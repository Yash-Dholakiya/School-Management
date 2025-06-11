import React, {useEffect, useState} from 'react';
import Hero from "./Hero";
import {RiSearchLine} from "react-icons/ri";
import axios from "axios";
// import assets from "../assets/images/assets.js";

const Teacher = () => {
    const [teacher, setTeacher] = useState([])
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
    useEffect(() => {
        axios.get("https://schoolproject.hirenow.co.in/api/all-teacher-show")
            .then((res)=>setTeacher(res.data[0]))
            .catch((err)=>console.log(err))
    }, []);
    return (
        <>
            <Hero heading="Our Best Faculty" content="Data Guru - Guru SMP Negeri 1 Cibadak"/>
            <section className="md:py-20 py-10 px-[7%]">
                <div className="flex justify-center">
                    <div
                        className="flex items-center bg-[#F6F7F9] text-[##919FAE] sm:w-[50%] w-[100%] px-3 h-12 rounded-lg gap-3">
                        <label htmlFor="searchteacher"><RiSearchLine className="text-xl"/></label>
                        <input type="search" name="search" id="searchteacher"
                               className="focus:outline-none px-2 py-1 text-lg w-full" placeholder="Search Teacher"/>
                    </div>
                </div>
                <hr className="my-5"/>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 row-auto gap-5">
                    {teacher.map((item) => (
                        <div key={item.id} className="flex flex-col gap-3 items-center rounded-md shadow-lg shadow-black/30 py-10">
                            <div className="h-42 w-32">
                                <img src={`https://schoolproject.hirenow.co.in/images/${item.profile}`} alt="teacherimg" className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col gap-1 px-1">
                                <p>Name : {item.name}</p>
                                <p>Address : {item.address}</p>
                                <p>Phone No. : {item.Phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Teacher;