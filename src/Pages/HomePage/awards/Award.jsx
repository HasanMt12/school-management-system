import 'swiper/css/free-mode';
import './Award.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Award = () => {
    return (
        <div className='h-[50%] slider py-16 text-center border border-gray-600 border-x-0'>
            <h2 className='text-white text-center lg:text-2xl md:text-xl text-lg'>THE BRIGHTEST OF SPARKS</h2>

            <Swiper  navigation={true} modules={[Navigation]}
                breakpoints={{
                    340: {
                        slidesPerView: 5,
                        spaceBetween: 5
                    },
                    700: {
                        slidesPerView: 5,
                        spaceBetween: 5
                    }
                }}
                FreeMode={true}
                // modules={[FreeMode]}
                className=" mySwiper ">

                {/* Slider 1 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                    </div>
                </SwiperSlide>

                {/* Slider 2 */}
                <SwiperSlide className='slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />

                    </div>
                </SwiperSlide>

                {/* Slider 3 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />
                    </div>
                </SwiperSlide>

                {/* Slider 4 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide className=' slide'>
                    <div className='flex items-center lg:w-[90px] md:w-[70px] w-[50px] mx-auto justify-center gap-8'>
                        <img className='' src="https://static.vecteezy.com/system/resources/previews/008/513/645/non_2x/award-ribbon-black-and-white-illustration-png.png" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>

            <a href='' className='border border-t-0 border-x-0 inline-block px-1 pb-1  cursor-pointer border-b-1 text-white text-xm mx-auto font-semibold'>READ MORE</a >
        </div>
    );
};

export default Award;