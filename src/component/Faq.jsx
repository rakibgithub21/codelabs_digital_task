import { FaAngleDown } from "react-icons/fa6";

const Faq = () => {
    return (
        <div className="my-20 container mx-auto">
            <button className="py-[10px] rounded-[25px] px-[24px] border border-[#343268]">Faq</button>
            <h3 className="text-[36px] text-[#020043] font-semibold mt-4 mb-8">Frequntly Asked Question</h3>
            <div>
                {/* <p className="bg-[#FFFFF5] pl-[45px] pb-[31px] rounded-lg p-3"> What are your office hours?</p> */}
                <section>
                    <div className="container mx-auto">
                        <div className="space-y-4 ">
                            <div className=" rounded-lg dar">
                                <button className="flex items-center border-b bg-[#FFFFF5] pt-[11px] pl-[45px] pb-[31px] justify-between w-full">
                                    <h1 className="font-semibold text-gray-700 ">How i can play for my appoinment ?</h1>
                                </button>

                                <p className="mt-6 pt-[11px] pl-[45px] pb-[15px] text-sm text[#343268] ">
                                    Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                                </p>
                            </div>

                            <div className="p-4 border bg-[#FFFFF5]  rounded-lg ">
                                <button className="flex  pl-[45px] pb-[8px]  items-center justify-between w-full">
                                    <h1 className="font-semibold text-gray-700 ">How can I schedule an appointment?</h1>

                                    <span className="">
                                        <FaAngleDown className="text-lg"/>
                                    </span>
                                </button>
                            </div>

                            <div className="p-4 border bg-[#FFFFF5]  rounded-lg ">
                                <button className="flex pl-[45px] pb-[8px] items-center justify-between w-full">
                                    <h1 className="font-semibold text-gray-700 ">Do you accept insurance?</h1>

                                    <span className="">
                                        <FaAngleDown className="text-lg" />
                                    </span>
                                </button>
                            </div>

                            <div className="p-4 border bg-[#FFFFF5]  rounded-lg ">
                                <button className="flex pl-[45px] pb-[8px] items-center justify-between w-full">
                                    <h1 className="font-semibold text-gray-700 ">What should I bring to my appointment?</h1>

                                    <span className="">
                                        <FaAngleDown className="text-lg" />
                                    </span>
                                </button>
                            </div>

                            <div className="p-4 border bg-[#FFFFF5] rounded-lg ">
                                <button className="flex items-center pl-[45px] pb-[8px] justify-between w-full">
                                    <h1 className="font-semibold text-gray-700 ">What should I bring to my appointment?</h1>

                                    <span className="">
                                        <FaAngleDown className="text-lg" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Faq;