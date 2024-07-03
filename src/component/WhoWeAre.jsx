import { GoArrowUpRight } from "react-icons/go";
import doctorImage from '../assets/Media/Rectangle 24.png'

const WhoWeAre = () => {
    return (
        <div className="flex gap-10 flex-col lg:justify-between lg:flex-row my-20 container mx-auto p-10">
            <div className="lg:w-1/2">
                <button className="py-[10px] bg-[#FFFFF5] rounded-[25px] px-[24px] border border-[#343268]">Who We Are</button>
                <h3 className="mt-[15px] font-semibold text-[36px] ">We Help To Get Soultions</h3>
                <p className="mb-[45px] mt-[16px]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className="flex items-center px-[24px] py-[12px]  bg-[#FFC637] rounded-[12px]">
                    Learn More <GoArrowUpRight />
                </button>
            </div>

            <div className="relative lg:w-1/2">
                <div>
                    <img className="w-full" src={ doctorImage} alt="" />
                </div>
                <div className="bg-[#343268] text-white absolute lg:-bottom-6 bottom-0 left-0 bg-opacity-70 md:bg-opacity-100 md:-left-10 md:-bottom-5 lg:-left-16 md:w-[395px] p-5 md:rounded-[32px]">
                    <h3 className="mb-5 font-medium text-[26px]">Our mission is simple</h3>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;