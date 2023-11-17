

import About from './about/About';
import Award from './awards/Award';
import Commitment from './commitment/Commitment';
import Culture from './culture/Culture';
import FindUs from './find-us/FindUs';
import Follow from './follow/Follow';
import Hero from './hero-section/Hero';
import './Home.css';
import Years from './years/Years';
import { LuSparkle } from 'react-icons/lu';
import News from './events/News';

const Home = () => {

    

  return (
    <div className='containers'>
      <div className='relative'>
        <div className="sections">
          <Hero />
          <div className='divider absolute left-[50%] bottom-0'></div>
        </div>

        <div className=' absolute left-[50%] z-10'>
          <div className='flex flex-col justify-center -ml-[6px] items-center'>
            <div className='divider2'></div>
            <div><LuSparkle className='text-sky-400 mt-1 icon'></LuSparkle></div>
          </div>
        </div>

        <div className="sections ">
          <About />
        </div>
      </div>

      <div className="sections hidden lg:block">
        <Years />
        <Commitment />
      </div>

      <div className="sections block lg:hidden">
        <Years />
      </div>

      <div className="sections block lg:hidden">
        <Commitment />
      </div>

      <div className="sections">
        <Culture />
      </div>

      <div className='sections'>
        <FindUs />
        <Award />
      </div>
      <div className='sections'>
       <News />
      </div>

      <div className='sectionsB '>
        <Follow />
      </div>
    </div>
  );
};

export default Home;
