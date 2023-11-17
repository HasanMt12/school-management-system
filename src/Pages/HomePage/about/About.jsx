
import { LuSparkle } from 'react-icons/lu';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './About.css'
import "swiper/css/pagination";

const About = () => {

    return (
        <div className='about-section'>
            <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper"
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
            >
                    
                {/* Slider 1 */}
                <SwiperSlide className='slide-1 '>
                    <div className=' text-violet-200 '>

                        <h1  className='text-fade-up text-4xl lg:text-5xl font-bold w-10/12 lg:w-5/12 mx-auto mt-20'>From a tiny spark may burst a mighty flame</h1>

                        <p className='text-base w-10/12 lg:w-4/12 mx-auto  mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla nam adipisci pariatur, sequi vero. Numquam est repellat totam, explicabo et aliquam iure minus! Facere, doloribus ad? Labore, nisi animi.</p>

                        <div className='flex justify-center items-center'>
                            <div className=" center-style">


                                <span>
                                    <button href="" className='button'>DISCOVER WHY</button>
                                </span>
                                <div className='bdr bdr1'></div>
                                <div className='bdr bdr2'></div>
                                <div className='bdrs bdr5'></div>
                                <div className='bdrs bdr6'></div>
                                <div className='bdr bdr3'></div>
                                <div className='bdr bdr4'></div>
                                <div className='star-style-1'>
                                    <LuSparkle />
                                </div>
                                <LuSparkle className='star-style-2' />
                                <LuSparkle className='star-style-3' />
                            </div>

                        </div>


                    </div>
                </SwiperSlide>

                {/* Slider 2 */}
                <SwiperSlide className='slide-2 '>
                    <div className=' text-violet-200 '>
                        <small className='text-sm font-semibold text-white'>WHY ORMISTON COLLEGE</small>

                        <h1 className='text-4xl lg:text-5xl font-bold w-10/12 lg:w-5/12 mx-auto mt-20'>From a tiny spark may burst a mighty flame</h1>

                        <p className='text-base w-10/12 lg:w-4/12 mx-auto  mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla nam adipisci pariatur, sequi vero. Numquam est repellat totam, explicabo et aliquam iure minus! Facere, doloribus ad? Labore, nisi animi.</p>

                  
                        <div className='flex justify-center items-center'>
                            <div className=" center-style">


                                <span>
                                    <button href="" className='button'>DISCOVER WHY</button>
                                </span>
                                <div className='bdr bdr1'></div>
                                <div className='bdr bdr2'></div>
                                <div className='bdrs bdr5'></div>
                                <div className='bdrs bdr6'></div>
                                <div className='bdr bdr3'></div>
                                <div className='bdr bdr4'></div>
                                <div className='star-style-1'>
                                    <LuSparkle />
                                </div>
                                <LuSparkle className='star-style-2' />
                                <LuSparkle className='star-style-3' />
                            </div>

                        </div>


                    </div>
                </SwiperSlide>

                {/* Slider 3 */}
                <SwiperSlide className='slide-3 '>
                    <div className=' text-violet-200 '>
                        <small className='text-sm font-semibold text-white'>WHY ORMISTON COLLEGE</small>

                        <h1 className='text-4xl lg:text-5xl font-bold w-10/12 lg:w-5/12 mx-auto mt-20'>From a tiny spark may burst a mighty flame</h1>

                        <p className='text-base w-10/12 lg:w-4/12 mx-auto  mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla nam adipisci pariatur, sequi vero. Numquam est repellat totam, explicabo et aliquam iure minus! Facere, doloribus ad? Labore, nisi animi.</p>

                        {/* <div className='button-container'>

                            <div>
                                <div className="center-style">
                                    <span>
                                        <button href="" className='button'>DISCOVER WHY</button>
                                    </span>
                                    <div className='bdr bdr1'></div>
                                    <div className='bdr bdr2'></div>
                                    <div className='bdr bdr3'></div>
                                    <div className='bdr bdr4'></div>
                                </div>
                            </div>

                        </div> */}




                        {/* <button className='mt-10 text-sm outline outline-1 px-4 py-2'>DISCOVER WHY</button> */}

                        <div className='flex justify-center items-center'>
                            <div className=" center-style">


                                <span>
                                    <button href="" className='button'>DISCOVER WHY</button>
                                </span>
                                <div className='bdr bdr1'></div>
                                <div className='bdr bdr2'></div>
                                <div className='bdrs bdr5'></div>
                                <div className='bdrs bdr6'></div>
                                <div className='bdr bdr3'></div>
                                <div className='bdr bdr4'></div>
                                <div className='star-style-1'>
                                    <LuSparkle />
                                </div>
                                <LuSparkle className='star-style-2' />
                                <LuSparkle className='star-style-3' />
                            </div>

                            {/* <div className='star-style'>
                                    <LuSparkle />
                                </div>
                                <div className='star-style'>
                                    <LuSparkle />
                                </div> */}
                        </div>


                    </div>
                </SwiperSlide>

                {/* Slider 4 */}
                <SwiperSlide className='slide-4 '>
                    <div className=' text-violet-200 '>
                        <small className='text-sm font-semibold text-white'>WHY ORMISTON COLLEGE</small>

                        <h1 className='text-4xl lg:text-5xl font-bold w-10/12 lg:w-5/12 mx-auto mt-20'>From a tiny spark may burst a mighty flame</h1>

                        <p className='text-base w-10/12 lg:w-4/12 mx-auto  mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nulla nam adipisci pariatur, sequi vero. Numquam est repellat totam, explicabo et aliquam iure minus! Facere, doloribus ad? Labore, nisi animi.</p>

                        {/* <div className='button-container'>

                            <div>
                                <div className="center-style">
                                    <span>
                                        <button href="" className='button'>DISCOVER WHY</button>
                                    </span>
                                    <div className='bdr bdr1'></div>
                                    <div className='bdr bdr2'></div>
                                    <div className='bdr bdr3'></div>
                                    <div className='bdr bdr4'></div>
                                </div>
                            </div>

                        </div> */}




                        {/* <button className='mt-10 text-sm outline outline-1 px-4 py-2'>DISCOVER WHY</button> */}

                        <div className='flex justify-center items-center'>
                            <div className=" center-style">


                                <span>
                                    <button href="" className='button'>DISCOVER WHY</button>
                                </span>
                                <div className='bdr bdr1'></div>
                                <div className='bdr bdr2'></div>
                                <div className='bdrs bdr5'></div>
                                <div className='bdrs bdr6'></div>
                                <div className='bdr bdr3'></div>
                                <div className='bdr bdr4'></div>
                                <div className='star-style-1'>
                                    <LuSparkle />
                                </div>
                                <LuSparkle className='star-style-2' />
                                <LuSparkle className='star-style-3' />
                            </div>

                            {/* <div className='star-style'>
                                    <LuSparkle />
                                </div>
                                <div className='star-style'>
                                    <LuSparkle />
                                </div> */}
                        </div>


                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default About;