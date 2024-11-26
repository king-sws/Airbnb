import { Facebook, Instagram, X, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-10">
        <div className="footer p-10 bg-base-300 text-base-content borr">
            <nav>
                <img src="./logo2.png" alt="" />
                <p className='text-slate-500 text-[16px] ' >Our vision is to make all people</p>
                <p className='text-slate-500 text-[16px] ' > The best place to live for them</p>
            </nav>
            <nav>
            <h6 className="font-bold text-[18px] mb-1 text-blue-950 ">Services</h6> 
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
            <h6 className="font-bold text-[18px] mb-1 text-blue-950">Company</h6> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <h6 className="font-bold text-[18px]bmb-1 mb-6 text-blue-950">Social</h6> 
            <div className="grid grid-flow-col gap-4">
            <a href={''} > <Facebook color='blue'  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/> </a>
            <a href=""> <Instagram color='#E4405F'  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/> </a>
            <a href=""> <X  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/> </a>
            <a href=""> <Youtube color='red' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' /> </a>
            </div>
        </nav>
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside className='' >
            <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
</footer>
</footer>
  )
}

export default Footer