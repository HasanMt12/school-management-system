import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { LuSparkle } from 'react-icons/lu';
import { FreeMode } from 'swiper/modules';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import './Follow.css';

const Follow = () => {
    return (
        <div className=' flex items-center justify-center flex-col py-10 follow-section '>
            <div className='flex justify-center items-center gap-2'>
            <LuSparkle className='text-lg text-sky-500 icon' />
            <h1 className='lg:text-4xl md:text-2xl text-xl text-white font-bold '>Follow Us</h1>
            <LuSparkle className='text-lg text-sky-500 icon' />
            </div>
            <div className='text-white font-semibold flex lg:gap-10 md:gap-6 gap-2 my-6 '>
                <a href='' className=' md:flex justify-center sm:flex-1 items-center gap-2 lg:text-lg md:text-md text-xs'>
                    <BiLogoFacebookCircle className="text-center"/>
                    ORMISTON COLLEGE</a>

                <a href='' className=' md:flex sm:flex-1 justify-center items-center gap-2 lg:text-lg md:text-md text-xs'>
                    <AiFillInstagram className="text-center"/>
                    ORMISTON COLLEGE</a>
            </div>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2.5,
                        spaceBetween: 15
                    },
                    600: {
                        slidesPerView: 3.7,
                        spaceBetween: 15
                    },
                    800: {
                        slidesPerView: 4.7,
                        spaceBetween: 15
                    },
                    900: {
                        slidesPerView: 5.7,
                        spaceBetween: 15
                    }
                }}
                FreeMode={true}
                loop={true}
                modules={[FreeMode]}
                className=""
            >
                               <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>
                                <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>
                                <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>
                                <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>
                                <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>

                <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>

                            <SwiperSlide className='swiper-style'>
                <div className="relative cursor-pointer  w-64 h-64 overflow-hidden rounded-md shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://www.montereyherald.com/wp-content/uploads/migration/2015/201505/SPORTS_150529781_AR_0_LBULWBKUFPPZ.jpg?w=620"
                    alt="Card Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center">
                    <h3 className="text-xl font-semibold">Card Title</h3>
                    <p className="mt-2">Description goes here.</p>
                    </div>
                </div>
                <BiLogoFacebookCircle className='absolute z-10 bottom-2 left-2 text-white' />
                </div>

                </SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default Follow;