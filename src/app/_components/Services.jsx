import Image from 'next/image';
import React from 'react';

const Services = ({ data }) => {

    return (
        <div>
            <h2>Services</h2>
            <div className="grid grid-cols-3 gap-4">
                {data.user.services.map(service => (
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <Image src={service.image.url} alt={service.name} width={500} height={500} className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <h2 className="card-title">{service.charge}</h2>
                            <p>{service.desc}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Services;