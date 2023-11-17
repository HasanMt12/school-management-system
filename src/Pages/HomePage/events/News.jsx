import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { Navigation } from 'swiper/modules';
import Aos from 'aos';
import 'aos/dist/aos.css';
import sample from '../../../assets/sample.jpg';

const News = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className='bg-[#171C32] h-[100vh] flex lg:flex-row flex-col lg:px-10 md:px-5 px-2 gap-6 items-start'>
      <div className='relative lg:w-[25%] lg:h-[100%] md:h-[30%] h-[40%] lg:py-10 md:py-6 py-4 pr-6  w-full'>
        <div className=''>
          <h3 className='lg:text-lg md:text-md text-sm text-center font-bold text-white'>
            NEWS & EVENTS
          </h3>
          <h3 className='lg:text-lg md:text-md text-sm font-semibold lg:mt-24 md:mt-6 mt-6 text-sky-50'>
            Ormiston College is committed to keeping our current and past students, parents, carers, teachers, and local community informed of news, events, and achievements.
          </h3>
          <div className='border-b-2 absolute lg:bottom-16 md:bottom-0 bottom-0  cursor-pointer hover:text-sky-500 hover:border-sky-500 text-white border-white'>
            COLLEGE NEWS
          </div>
        </div>
      </div>

      <div className='lg:w-[75%] lg:h-[100%] md:h-[70%] h-[60%] w-full '>
        <section className=''>
          <Swiper
            className='my-auto'
            breakpoints={{
              240: {
                        slidesPerView: 2,
                        spaceBetween: 2
                    },
                    340: {
                        slidesPerView: 2.5,
                        spaceBetween: 2
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 4
                    },
                    900: {
                        slidesPerView: 2.5,
                        spaceBetween: 4
                    }
                }}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide className=' bg-[#262D42] my-2 mx-4'>
              <div className='bg-[#262D42] shadow-lg px-4 py-4'>
                <img src={sample} alt='' className='object-cover object-center lg:w-[100%] md:w-[30%] w-[50%] lg:h-[100%] md:h-[30%] h-[50%] mx-auto' />
                <h2 className='text-center lg:my-10 md:my-6 my-4 lg:text-lg md:text-md text-sm uppercase text-[#495272]'>College news</h2>
                <h2 className='text-center text-white lg:text-lg md:text-md text-xs lg:block hidden'>Drone technology is now used in fields as diverse as business</h2>
                <h2 className='text-center text-white hover:text-sky-500  lg:my-10 md:my-6 lg:text-lg md:text-md text-xs'>Read more</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide className=' bg-[#262D42] my-2 mx-4'>
              <div className='bg-[#262D42] shadow-lg px-4 py-4'>
                <img src={sample} alt='' className='object-cover object-center lg:w-[100%] md:w-[30%] w-[50%] lg:h-[100%] md:h-[30%] h-[50%] mx-auto' />
                <h2 className='text-center lg:my-10 md:my-6 my-4 lg:text-lg md:text-md text-sm uppercase text-[#495272]'>College news</h2>
                <h2 className='text-center text-white lg:text-lg md:text-md text-xs lg:block hidden'>Drone technology is now used in fields as diverse as business</h2>
                <h2 className='text-center text-white hover:text-sky-500  lg:my-10 md:my-6 lg:text-lg md:text-md text-xs'>Read more</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-[#262D42] my-2 mx-4'>
              <div className='bg-[#262D42] shadow-lg px-4 py-4'>
                <img src={sample} alt='' className='object-cover object-center lg:w-[100%] md:w-[30%] w-[50%] lg:h-[100%] md:h-[30%] h-[50%] mx-auto' />
                <h2 className='text-center lg:my-10 md:my-6 my-4 lg:text-lg md:text-md text-sm uppercase text-[#495272]'>College news</h2>
                <h2 className='text-center text-white lg:text-lg md:text-md text-xs lg:block hidden'>Drone technology is now used in fields as diverse as business</h2>
                <h2 className='text-center text-white hover:text-sky-500  lg:my-10 md:my-6 lg:text-lg md:text-md text-xs'>Read more</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className=' bg-[#262D42] my-2 mx-4'>
              <div className='bg-[#262D42] shadow-lg px-4 py-4'>
                <img src={sample} alt='' className='object-cover object-center lg:w-[100%] md:w-[30%] w-[50%] lg:h-[100%] md:h-[30%] h-[50%] mx-auto' />
                <h2 className='text-center lg:my-10 md:my-6 my-4 lg:text-lg md:text-md text-sm uppercase text-[#495272]'>College news</h2>
                <h2 className='text-center text-white lg:text-lg md:text-md text-xs lg:block hidden'>Drone technology is now used in fields as diverse as business</h2>
                <h2 className='text-center text-white hover:text-sky-500  lg:my-10 md:my-6 lg:text-lg md:text-md text-xs'>Read more</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default News;
