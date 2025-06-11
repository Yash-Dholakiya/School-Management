import React from 'react';

const Blog = (props) => {
    return (
        <article className="flex flex-col items-center p-4 rounded-md shadow-lg shadow-black/30 gap-2">
            <div className="w-full md:h-96 sm:h-80 h-60 rounded-md">
                <img src={props.img} alt="blogimage" className="w-full h-full rounded-md"/>
            </div>
            <h2 className="text-xl font-bold">{props.heading}</h2>
            <p className="text-[#919FAE]">{props.desc}</p>
        </article>
    );
};

export default Blog;