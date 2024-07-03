import { GoArrowUpRight } from "react-icons/go";
import doctorImage from '../assets/Media/Rectangle 24.png'

const WhoWeAre = () => {
    return (
        <div className="flex justify-between my-20 container mx-auto p-10">
            <div className="">
                <button className="py-[10px] bg-[#FFFFF5] rounded-[25px] px-[24px] border border-[#343268]">Who We Are</button>
                <h3 className="mt-[15px] font-semibold text-[36px] w-[396px]">We Help To Get Soultions</h3>
                <p className="mb-[45px] w-[580px]  mt-[16px]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className="flex items-center px-[24px] py-[12px]  bg-[#FFC637] rounded-[12px]">
                    Learn More <GoArrowUpRight />
                </button>
            </div>
            <div className="relative">
                <div>
                    <img src={ doctorImage} alt="" />
                </div>
                <div className="bg-[#343268] text-white absolute -bottom-6 -left-20 w-[395px] p-5 rounded-[32px]">
                    <h3 className="mb-5 font-medium text-[26px]">Our mission is simple</h3>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;