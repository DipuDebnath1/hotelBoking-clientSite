// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const RoomSlider = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl py-5 text-start font-semibold'> Gallery</h2>
            </div>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/YZmjmBH/hotel9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/8Y108Nk/hotel8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/mSfGKkN/hotel7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/4sYZ01h/hotel6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/RvVtpQY/hotel5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/1LfMC33/hotel4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/hydxq8F/hotel3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/3TdK9Gt/hotel2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-40' src="https://i.ibb.co/3TdK9Gt/hotel2.jpg" alt="" /></SwiperSlide>
      </Swiper>
    
        </div>
    );
};

export default RoomSlider;