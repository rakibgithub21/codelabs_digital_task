import { GoArrowUpRight } from "react-icons/go";
import x_ray from '../assets/Media/Rectangle 27-2.png'
import male_doctor from '../assets/Media/Rectangle 27-1.png'
import female_doctor from '../assets/Media/Rectangle 27.png'


const Service = () => {
    return (
        <div className="bg-[#FFFFF5] p-10 container my-20 mx-auto">

            <div className="flex flex-col gap-10 lg:flex-row justify-between items-center">

                <div className="lg:w-1/2 w-full">
                    <button className="py-[10px] bg-[#FBFBFB] rounded-[25px] px-[24px] border border-[#343268]">Service</button>
                    <h3 className="text-[36px] text-[#020043] my-4 lg:w-[502px] font-semibold">Empowering Health, Enriching Lives</h3>
                    <p className="md:w-[500px]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <button className="flex mt-10 items-center px-[24px] py-[12px] bg-[#FFC637] rounded-[12px]">
                        Appointment <GoArrowUpRight />
                    </button>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="relative">
                        <div>
                            <img className="lg:rounded-[30px] rounded-lg w-full" src={x_ray} alt="" />
                        </div>
                        <div className="bg-[#020043] bottom-0 rounded-lg lg:bottom-5 lg:left-5 bg-opacity-60 lg:w-[350px] lg:rounded-[28px] p-[35px] absolute text-white">
                            <div className="flex gap-3">
                                <div>
                                    <h3 className="font-semibold text-xl">Advanced Technology</h3>
                                    <p className="text-xs  mt-2">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
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

            <div className="flex flex-col lg:flex-row  gap-20 mt-20 items-center" >

                <div className="lg:w-1/2 w-full">
                    <div className="relative">
                        <div>
                            <img className="lg:rounded-[30px] rounded-lg w-full" src={male_doctor} alt="" />
                        </div>
                        <div className="bg-[#020043] bottom-0 lg:bottom-5 lg:left-5 bg-opacity-60 lg:w-[380px] rounded-lg lg:rounded-[28px] p-[35px] absolute text-white">
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

                <div className="lg:w-1/2 w-full">
                    <div className="relative">
                        <div>
                            <img className="lg:rounded-[30px] rounded-lg w-full" src={female_doctor} alt="" />
                        </div>
                        <div className="bg-[#020043] lg:bottom-5 bottom-0 lg:left-5 bg-opacity-60 lg:w-[380px] lg:rounded-[28px] rounded-lg p-[35px] absolute w-full text-white">
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