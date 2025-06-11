import React from 'react';
import {useNavigate} from "react-router-dom";

const Btn = (props) => {
    const navigate = useNavigate();
    return (
        <button className="sm:text-[18px] text-[16px] border-none bg-[#0193DC] px-10 py-2 rounded-md text-white cursor-pointer"
                onClick={() => {
                    navigate(props.navpath)
                }}>
            {props.text}
        </button>
    );
};

export default Btn;