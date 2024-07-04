import chartIcons from '../assets/Icons/Group 12.svg'
import mediaIcons from '../assets/Icons/Group (1).svg'
import certifiedIcons from '../assets/Icons/contract (1) 1.svg'
import coinsIcons from '../assets/Icons/Group.svg'

import person1 from '../assets/People/Ellipse 2.svg'
import person2 from '../assets/People/Ellipse 3.svg'
import person3 from '../assets/People/Ellipse 4.svg'
import person4 from '../assets/People/Ellipse 5.svg'

const ComprehensiveCare = () => {
    return (
        <div className="lg:grid lg:grid-cols-5 container mx-auto gap-20 px-3 md:px-0 my-20">
            <div className="border rounded-3xl bg-[#FBFBFB] mb-5 lg:mb-0 p-5 col-span-1 border-[#02004333]">
                <h3 className='text-[#020043] font-semibold text-[40px]'>90%</h3>
                <p className='text-[#020043] mt-2 mb-6 w-[156px]'>Patient satisfaction rate, reflecting our commitment.</p>
                <img className='mx-auto' src={chartIcons} alt="" />
            </div>
            <div className="col-span-3">
                <h3 className='font-semibold md:text-[48px] text-3xl md:w-[532px] mb-[21px] mx-auto text-center leading-tight'>Comprehensive Care for Every Patient</h3>

                <div className='md:grid md:grid-cols-3 gap-7 space-y-5 md:space-y-0'>
                    <div className='col-span-1 p-5 bg-[#FFFFF5] border rounded-3xl border-[#02004333]  '>
                        <h3 className='text-[#020043] font-semibold text-[40px] '>500+</h3>
                        <p className='w-[155px] text-[#020043]'>Board-certified doctors</p>
                        <img className='ml-auto' src={certifiedIcons} alt="" />
                    </div>
                    <div className='col-span-1 border border-[#02004333] rounded-3xl p-5  bg-[#FBFBFB]'>
                        <h3 className='text-[#020043] font-semibold text-[40px] '>4.8</h3>
                        <p className='text-[#020043] mt-1 mb-5'>Over 20,000 Patient</p>
                        <div className='md:flex relative hidden'>
                            <div className='w-14 z-20 absolute h-14 rounded-full '>
                                <img className='w-full' src={person1} alt="" />
                            </div>
                            <div className='w-14 z-30 left-10 absolute h-14 rounded-full '>
                                <img className='w-full' src={person2} alt="" />
                            </div>
                            <div className='w-14 left-20 z-40 absolute h-14 rounded-full '>
                                <img className='w-full' src={person3} alt="" />
                            </div>
                            <div className='w-14 left-[120px]  z-50 absolute h-14 rounded-full'>
                                <img className='w-full' src={person4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 bg-[#FFFFF5] border border-[#02004333] rounded-3xl p-5'>
                        <h3 className='text-[#020043] font-semibold text-[40px] '>$5000</h3>
                        <p className='text-[#020043]  mb-1'>Money spend <br /> for poor patient</p>
                        <img className='ml-auto' src={coinsIcons} alt="" />
                    </div>
                </div>

            </div>
            <div className="border rounded-3xl bg-[#FBFBFB] mt-5 lg:mt-0  p-5 col-span-1 border-[#02004333]">
                <h3 className='text-[#020043] font-semibold text-[40px]'>50+</h3>
                <p className='text-[#020043] mt-2 mb-11 w-[156px]'>Free lession video for patient</p>
                <img className='mx-auto' src={mediaIcons} alt="" />
            </div>
        </div>
    );
};

export default ComprehensiveCare;