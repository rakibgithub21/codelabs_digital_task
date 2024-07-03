import logo from '../assets/Media/logo light.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#020043] p-[120px]">
            <div className="container mx-auto">
                <img src={logo} alt="" />

                <div className='mt-12 md:flex flex-wrap justify-between '>

                    <div className='text-[#FFFFF5] mb-10 md:mb-0 space-y-3 md:space-y-10'>

                        <div>
                            <p>123 Main Street Anytown, USA</p>
                            <p>Postal Code: 12345</p>
                        </div>

                        <div>
                            <p>Support: support@oyolloo.com</p>
                            <p>(Available : 10:00am to 07:00pm)</p>
                        </div>
                       
                    </div>
                   

                    <div className='text-[#FFFFF5]  mb-10 md:mb-0 space-y-2 md:space-y-4'>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Success Page</p>
                        <p>Terms and condition</p>
                    </div>

                    <div className='text-[#FFFFF5]  mb-10 md:mb-0 space-y-2 md:space-y-4'>
                        <p>Services</p>
                        <p>Scheduling</p>
                        <p>Contact Us</p>
                        <p>Patient Portal</p>
                    </div>

                    <div className='text-[#FFFFF5]'>
                        <p>Follow Us</p>
                        <div>
                            <div className='flex gap-2 mb-6 text-2xl mt-3'>
                                <p><FaFacebook /></p>
                                <p><FaInstagram /></p>
                                <p><FaLinkedin /></p>
                                <p><FaYoutube /></p>
                           </div>
                            <div className='text-sm'>
                                @docplus 2024
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;