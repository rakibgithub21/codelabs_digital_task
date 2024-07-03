import bannerImage from '../assets/Media/Rectangle 5.png'

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%), url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px'
    };
    return (
        <div style={bannerStyle} className='container mx-auto rounded-[48px]'>
            
        </div>
    );
};

export default Banner;