'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Features = () => {
    const features = [
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 1',
            description: 'Mahabat barada kabir hat 1.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 2',
            description: 'Mahabat barada kabir hat 2.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 3',
            description: 'Mahabat barada kabir hat 3.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 4',
            description: 'Mahabat barada kabir hat 4.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 5',
            description: 'Mahabat barada kabir hat 5.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 6',
            description: 'Mahabat barada kabir hat 6.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 7',
            description: 'Mahabat barada kabir hat 7.',
        },
        {
            icon: '/icons/sync-saved.svg',
            title: 'Mahabat 8',
            description: 'Mahabat barada kabir hat 8.',
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                {/* Section Title */}
                <h2 className="text-3xl pl-4 sm:pl-8 mb-8 inline-block">
                    <span className=" py-1 px-4 border-4 border-x-2 border-dashed border-x-green-700 border-y-green-400 rounded-xl text-emerald-700">
                        Mahabat
                    </span>
                </h2>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="py-6"
                    aria-label="Mahabat Features Carousel"
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                {/* Feature Icon */}
                                <div className="mb-4">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={64}
                                        height={64}
                                        className="mx-auto"
                                    />
                                </div>
                                {/* Feature Title */}
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                                    {feature.title}
                                </h3>
                                {/* Feature Description */}
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Features;
