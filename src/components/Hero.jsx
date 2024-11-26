import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="bg-black text-white lg:px-8  md:p-3 sm:p-1  " >
        <div className="paddings w-full relative ">
            <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row ">
                <div className="relative">
                    {/* <figure className="w-[30rem] h-[30rem] z-10 absolute bg-slate-300 rounded-full -top-28 -left-20 opacity-[.3] blur-2xl  " /> */}
                    {/* <figure className="w-[3rem] h-[3rem] z-20 absolute top-[13px] left-[8.5rem] lg:top-[35px] lg:left-[13rem] md:top-[15px] md:left-[8rem] bg-blue-700 rounded-full  " /> */}
                    <h1 className="font-extrabold  z-40 relative text-[3.8rem] lg:text-[70px]" >Dicover <br /> Most Suitable <br />Proerty </h1>
                    <div className="flex flex-col mt-5 text-[14px] ">
                        <span className="capitalize text-slate-400 " >find a variety of properties that suit you very easilly</span>
                        <span className="capitalize text-slate-400 ">forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="mt-5 w-[20rem] ">
                        <label className="input input-bordered w-auto flex items-center gap-2">
                        <input type="text" className="grow text-black " placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 cursor-pointer text-black opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    </div>
                    <div className="flex flex-row mt-7 mb-7 gap-7">
                    <div>
                        <p className='text-[24px] lg:text-[30px] md:text-[25px] font-bold '> 
                                <CountUp start={11900} end={12000} duration={4} />
                            <span className='text-blue-500 ml-2 ' >+</span>
                            </p>                            
                            <span className='text-xs text-slate-400' >Premium Product</span>
                        </div>
                        <div className="">
                            <p className='text-[24px] lg:text-[30px] md:text-[25px] font-bold '> 
                                <CountUp start={5900} end={6000} duration={4} />
                            <span className='text-blue-500 ml-2' >+</span>
                            </p>
                            <span className='text-xs text-slate-400' >Happy Customer</span>
                        </div>
                        <div className="">
                        <p className='text-[24px] lg:text-[30px] md:text-[25px] font-bold '> 
                                <CountUp end={210} />
                            <span className='text-blue-500 ml-2' >+</span>
                            </p>
                            <span className='text-xs text-slate-400' >Awards Winning</span>
                        </div>
                    </div>
                </div>
                <div className="img-container"> 
                    <img src="./hero-image.png" alt="" className="img-w" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero