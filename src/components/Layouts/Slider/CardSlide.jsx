// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import TrendCard from '../AllCards/TrendCard';
const CardSlide = () => { 
    const [trend, setTrend] = useState([]);
    useEffect(() => {
        fetch('./trending.json')
            .then(res => res.json())
            .then(data => setTrend(data.nfts))
    }, []);
    console.log(trend);
    return (
        <div>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        {
            trend.map(data => <SwiperSlide><TrendCard data={data}></TrendCard></SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default CardSlide;