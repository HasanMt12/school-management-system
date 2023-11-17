
import './Years.css';
import { Swiper, SwiperSlide  } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
const Years = () => {
    return (
        <div className='h-[50%]  year-section px-auto'>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 4
                    },
                    700: {
                        slidesPerView: 5,
                        spaceBetween: 2
                    }
                }}
                loop={true}
                className=""
            >
                <SwiperSlide  className="bg-transparent  year-style">
                    <div className=' cursor-pointer px-5 text-center lg:py-[40%] md:py-[32%] py-[26%]'>
                        <small className='text-white text-sm font-semibold'>15 MONTHS TO 5 YEARS OF AGE</small>
                        <h3 className='text-2xl text-white font-semibold my-5'>Early Learning Center</h3>
                        <a href="" className='text-white border border-x-0 border-t-0 py-1 font-semibold'>Discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className="bg-transparent year-style">
                    <div className=' cursor-pointer px-5 text-center lg:py-[40%] md:py-[32%] py-[26%]'>
                        <small className='text-white text-sm font-semibold'>15 MONTHS TO 5 YEARS OF AGE</small>
                        <h3 className='text-2xl text-white font-semibold my-5'>Early Learning Center</h3>
                        <a href="" className='text-white border border-x-0 border-t-0 py-1 font-semibold'>Discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className="bg-transparent year-style">
                    <div className=' cursor-pointer px-5 text-center lg:py-[40%] md:py-[32%] py-[26%]'>
                        <small className='text-white text-sm font-semibold'>15 MONTHS TO 5 YEARS OF AGE</small>
                        <h3 className='text-2xl text-white font-semibold my-5'>Early Learning Center</h3>
                        <a href="" className='text-white border border-x-0 border-t-0 py-1 font-semibold'>Discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className="bg-transparent year-style">
                    <div className=' cursor-pointer px-5 text-center lg:py-[40%] md:py-[32%] py-[26%]'>
                        <small className='text-white text-sm font-semibold'>15 MONTHS TO 5 YEARS OF AGE</small>
                        <h3 className='text-2xl text-white font-semibold my-5'>Early Learning Center</h3>
                        <a href="" className='text-white border border-x-0 border-t-0 py-1 font-semibold'>Discover more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className="bg-transparent year-style">
                    <div className=' cursor-pointer px-5 text-center lg:py-[40%] md:py-[32%] py-[26%]'>
                        <small className='text-white text-sm font-semibold'>15 MONTHS TO 5 YEARS OF AGE</small>
                        <h3 className='text-2xl text-white font-semibold my-5'>Early Learning Center</h3>
                        <a href="" className='text-white border border-x-0 border-t-0 py-1 font-semibold'>Discover more</a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Years;