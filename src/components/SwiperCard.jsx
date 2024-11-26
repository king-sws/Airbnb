import { SquareChevronRight , SquareChevronLeft } from 'lucide-react';
import { useSwiper } from "swiper/react";
import 'swiper/css';

const SwipB = ()=>{
    const swiper = useSwiper()
  return (
    <div className="absolute -top-[4rem] right-4 ">
      <button onClick={()=>swiper.slidePrev()} > <SquareChevronLeft size={40} color="blue" className='transition wi duration-150 ease-in-out  delay-150 hover:-translate-x-1 hover:scale-110 ' /> </button>
      <button onClick={()=>swiper.slideNext()} > <SquareChevronRight size={40} color="blue" className='transition wi duration-150 ease-in-out  delay-150 hover:translate-x-1 hover:scale-110 ' /> </button>
    </div>
  )
  }

  export default SwipB