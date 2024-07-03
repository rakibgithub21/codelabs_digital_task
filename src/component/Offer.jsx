import { GoArrowUpRight } from 'react-icons/go';
import bannerImage from '../assets/Media/Rectangle 32.png'
import logo from '../assets/Media/logo light.png'

const Offer = () => {
    const bannerStyle = {
        backgroundImage: `radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%), url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        width: '100%',
    };
    return (
        <div style={bannerStyle} className='rounded-[48px] h-[500px] my-20 p-[60px] '>

            <img className='ml-auto' src={logo} alt="" />

            <div>
                <h3 className='text-white text-[40px] font-semibold'>Get Your <br />
                    First Appointment <br />
                    at 50% Off!</h3>
                <div className='flex gap-3 mt-[24px]'>
                    <button className="flex font-medium items-center px-[24px] py-[12px] bg-[#FFC637] rounded-[12px]">
                        Appointment <GoArrowUpRight />
                    </button>
                    <button  className="border text-white border-[#FFFFF5] rounded-xl flex items-center gap-2 font-medium  px-[24px] py-[12px]">Learn More <GoArrowUpRight /></button>
               </div>
            </div>

        </div>
    );
};

export default Offer;