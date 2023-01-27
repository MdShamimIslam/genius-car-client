import React from 'react';
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero  bg-base-200 rounded-lg my-14">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-4/5 h-full max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute w-2/5 border-8 right-20 top-2/3 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h3 className="text-2xl font-semibold text-orange-600">About Us</h3>
                <h1 className="text-5xl font-bold mt-3">
                    We are qualified <br />
                    & of experience <br />
                    in this field
                </h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;