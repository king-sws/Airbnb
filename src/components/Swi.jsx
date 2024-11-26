import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../contant/comm.json";
import { sliderSettings } from "../contant/sl";
import 'swiper/css';
import { SquareChevronRight , SquareChevronLeft } from 'lucide-react';

const SwipB = ()=>{
  const swiper = useSwiper()
return (
  <div className="absolute -top-[4rem] right-4 ">
    <button onClick={()=>swiper.slidePrev()} > <SquareChevronLeft size={40} color="blue" className='transition wi duration-150 ease-in-out  delay-150 hover:-translate-x-1 hover:scale-110 ' /> </button>
    <button onClick={()=>swiper.slideNext()} > <SquareChevronRight size={40} color="blue" className='transition wi duration-150 ease-in-out  delay-150 hover:translate-x-1 hover:scale-110 ' /> </button>
  </div>
)
}
  


const Swi = () => {
  return (
    <section id="residencies" className='mb-24'>
      <div className="paddings innerWidth relative overflow-hidden ">
          <div className="flex flex-col mb-2 ">
              <span className="text-orange-400 lg:font-semibold md:font-semibold text-[25px] lg:text-[30px] md:text-[30px] ">Best Choices</span>
              <span className='text-blue-900  font-semibold text-[20px] lg:text-[30px] md:text-[30px] '>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings} >
              <SwipB/>
              <div className="flex flex-col items-center">
                {data.map((items , i)=>(
                  <SwiperSlide key={i} >
                    <div className="hover:bg-slate-300 flex flex-col items-center p-3 gap-1 rounded-lg ">
                      <img src={items.image} alt="" className="max-w-[20rem] w-full " />
                      <div className="flex flex-col items-start">
                      <p className="font-bold text-blue-900 mt-1 text-[24px] " > {items.name} </p>
                      <span className="" > <span className="font-bold text-orange-400 " >$</span> {items.price} </span>
                      <p className="text-slate-500 max-w-[240px] " > {items.detail} </p>
                      </div>
                      </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
    </section>
  );
};

export default Swi;
