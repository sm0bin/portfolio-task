'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionHead from '../_utils/SectionHead';
import Image from 'next/image';


const Testimonial = ({ data }) => {
    const sortedData = data.user.testimonials.filter(item => item.enabled === true);
    return (
        <div>
            <SectionHead title="Testimonials" />
            <Swiper
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3600,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}

                className="mySwiper w-3/4">
                {
                    sortedData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="card mx-12">
                                    <div className="card-body items-center text-center">
                                        <div className="avatar">
                                            <div className="w-20 rounded-full">
                                                <Image src={item.image.url} alt={item.name}
                                                    width={100}
                                                    height={100}
                                                    layout="responsive"
                                                />
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <h2 className="font-semibold text-2xl">{item.name}</h2>
                                            <h3 className=' font-medium mb-4'>{item.position}</h3>
                                            <div className="divider w-2/3 mx-auto  divider-primary"></div>
                                            <p>{item.review}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;