import mapImg from '../../../assets/map.png'
import { BsPlusLg } from 'react-icons/bs'
import './FindUs.css';

const FindUs = () => {
    return (
        <div className='h-[50%] findus-section text-center py-20 px-3 lg:py-20'>
            <div className='bg-violet-400 lg:h-20 lg:w-20 md:h-14 md:w-14 h-10 w-10 mx-auto justify-center items-center rounded-[50%] flex lg:p-4 md:p-2 p-2'>
                <img className='object-cover ' src={mapImg} alt="" />
            </div>
            <div className='text-white mt-5'>
                <small className='font-semibold text-base'>FIND US</small>
                <p className='lg:text-xl md:text-lg my-2 md:my-3 lg:my-3 text-sm'>Azimpur , Dhaka</p>
                <div className='border border-t-0 border-x-0 inline-block px-2 pb-1 border-sky-500 cursor-pointer border-b-1'>
                    <span className=' flex justify-center items-center gap-1 lg:text-xl md:text-lg  text-sm text-sky-500 font-semibold'>OPEN MAP
                        <BsPlusLg className='text-xl pb-1 font-bold' />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FindUs;