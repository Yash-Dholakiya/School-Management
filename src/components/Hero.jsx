import React from 'react';
import Btn from './Btn'

const Hero = (props) => {
    return (
        <section
            className="md:bg-[url(src/assets/images/headerbg.png)] md:h-[100vh] bg-size-[100vw_100vh] md:my-[0px] my-10">
            <div
                className="md:h-[100vh] flex flex-col md:justify-center px-[7%] md:items-center items-start gap-7 md:text-white text-black">
                <h1 className="sm:text-[30px] text-[20px] md:text-center">{props.heading}</h1>
                {props.content ? <p className="sm:text-[24px] text-[18px] md:text-center">{props.content}</p> : ""}
                {props.btntext && props.navpath ? <Btn navpath={props.navpath} text={props.btntext}/> : ""}
            </div>
        </section>
    );
};

export default Hero;