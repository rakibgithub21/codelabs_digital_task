/* eslint-disable react/no-unescaped-entities */
import person1 from '../assets/People/Ellipse 10.svg'
import person2 from '../assets/People/Ellipse 3.svg'
import person3 from '../assets/People/Ellipse 2.svg'

import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <div className="my-20">
            <button className="py-[10px] rounded-[25px] px-[24px] border border-[#343268]">Testimonial</button>
            <h3 className="text-[36px] text-[#020043] font-semibold mt-4 mb-8">What they say about us</h3>

            <div className="flex gap-5">
                <div className="bg-[#FFFFF5] p-10 rounded-2xl">
                    <h3 className='text-[#020043] text-[19px] font-semibold'>Expertise and Compassion <br /> Combined</h3>
                    <p className='text-[#4D4C7B] mt-3 mb-4'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                    <div className='flex gap-2 items-center'>
                        <div className='w-14 h-14'>
                            <img className='w-full rounded-full' src={person1} alt="" />
                        </div>
                        <div>
                           
                            <p className='text-[ #020043] font-medium'>Sarah D, <span className='text-[#4D4C7B] font-normal'>IT Professional</span></p>
                            <div className='flex mt-1 text-lg text-[#FFE03D] gap-1'>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] p-10 rounded-2xl">
                    <h3 className='text-[#020043] text-[19px] font-semibold'>Life-Saving Care, Life-Changing <br /> Experience</h3>
                    <p className='text-[#4D4C7B] mt-3 mb-4'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                    <div className='flex gap-2 items-center'>
                        <div className='w-14 h-14'>
                            <img className='w-full rounded-full' src={person2} alt="" />
                        </div>
                        <div>
                           
                            <p className='text-[ #020043] font-medium'>Michael R, <span className='text-[#4D4C7B] font-normal'>Business Executive</span></p>
                            <div className='flex mt-1 text-lg text-[#FFE03D] gap-1'>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] p-10 rounded-2xl">
                    <h3 className='text-[#020043] text-[19px] font-semibold'>A Partner in Health and <br /> Wellness</h3>
                    <p className='text-[#4D4C7B] mt-3 mb-4'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                    <div className='flex gap-2 items-center'>
                        <div className='w-14 h-14'>
                            <img className='w-full rounded-full' src={person3} alt="" />
                        </div>
                        <div>
                           
                            <p className='text-[ #020043] font-medium'>David S, <span className='text-[#4D4C7B] font-normal'>IT Lawyer</span></p>
                            <div className='flex mt-1 text-lg text-[#FFE03D] gap-1'>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                                <p><FaStar/></p>
                            </div>
                        </div>
                    </div>
                </div>

              

                

            </div>

        </div>
    );
};

export default Testimonial;