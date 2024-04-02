import { getAllData } from '@/utils/getAllData';
import Image from 'next/image';
import React from 'react';

const Hero = async () => {
    const data = await getAllData();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src={data.user.about.avatar.url} alt="hero" width={500} height={500} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.user.about.name}</h1>
                    <p className="py-6">{data.user.about.description}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;