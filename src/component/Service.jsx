import { GoArrowUpRight } from "react-icons/go";
import x_ray from '../assets/Media/Rectangle 27-2.png'
import male_doctor from '../assets/Media/Rectangle 27-1.png'
import female_doctor from '../assets/Media/Rectangle 27.png'


const Service = () => {
    return (
        <div className="bg-[#FFFFF5] p-10 container mx-auto">

            <div className="flex justify-between items-center">

                <div className="w-1/2">
                    <button className="py-[10px] bg-[#FBFBFB] rounded-[25px] px-[24px] border border-[#343268]">Service</button>
                    <h3 className="text-[36px] text-[#020043] my-4 w-[502px] font-semibold">Empowering Health, Enriching Lives</h3>
                    <p className="w-[500px]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <button className="flex mt-10 items-center px-[24px] py-[12px]  bg-[#FFC637] rounded-[12px]">
                        Appointment <GoArrowUpRight />
                    </button>
                </div>

                <div className="w-1/2">
                    <div className="relative">
                        <div>
                            <img className="rounded-[30px] w-full" src={x_ray} alt="" />
                        </div>
                        <div className="bg-[#020043] bottom-5 left-5 bg-opacity-60 w-[350px] rounded-[28px] p-[35px] absolute text-white">
                            <div className="flex gap-3">
                                <div>
                                    <h3 className="font-semibold text-xl">Advanced Technology</h3>
                                    <p className="text-xs mt-2">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                </div>
                                <div className="flex items-end">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#FFC637] rounded-2xl">
                                        <GoArrowUpRight className="text-2xl " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex  gap-20 mt-20 items-center" >

                <div className="w-1/2">
                    <div className="relative">
                        <div>
                            <img className="rounded-[30px] w-full" src={male_doctor} alt="" />
                        </div>
                        <div className="bg-[#020043] bottom-5 left-5 bg-opacity-60 w-[380px] rounded-[28px] p-[35px] absolute text-white">
                            <div className="flex gap-3">
                                <div>
                                    <h3 className="font-semibold text-xl">Online Doctor Meet</h3>
                                    <p className="text-xs mt-2">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                </div>
                                <div className="flex items-end">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#FFC637] rounded-2xl">
                                        <GoArrowUpRight className="text-2xl " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="relative">
                        <div>
                            <img className="rounded-[30px] w-full" src={female_doctor} alt="" />
                        </div>
                        <div className="bg-[#020043] bottom-5 left-5 bg-opacity-60 w-[380px] rounded-[28px] p-[35px] absolute text-white">
                            <div className="flex gap-3">
                                <div>
                                    <h3 className="font-semibold text-xl">Consultancy your health</h3>
                                    <p className="text-xs mt-2">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                </div>
                                <div className="flex items-end">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#FFC637] rounded-2xl">
                                        <GoArrowUpRight className="text-2xl " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;