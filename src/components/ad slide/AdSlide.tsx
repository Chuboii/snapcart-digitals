'use client'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import './AdSlide.scss'
// import ad1 from '@/flashsell.png'
// import ad2 from '@/slide 1.png'
// import ad3 from '@/slide 2.jpg'
// import ad4 from '@/slide 3.jpg'
import Image from "next/image";

const adsItems = [
  {
    path: "/flashsell.png",
  },
  {
    path: "/slide 2.jpg",
  },
  {
    path: "/slide 3.jpg",
  },
  {
    path: "/slide 1.png",
  }
]
const AdSlider: FC = () => {
  return (
      <>
                   <section className='adslide-container'>
      <Swiper
        spaceBetween={50}
        loop={true}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2000, // set the delay in milliseconds
          disableOnInteraction: false, // keep autoplay running when user interacts with the swiper
        }}
        >
          {
            adsItems.map((item, id) => (
              <SwiperSlide key={id} >
                <Image width={1000} height={1000} className="slide-img" src={item.path} alt=""/>
              </SwiperSlide>
            ))
        }
              </Swiper>
              </section>
    </>
  );
};

export default AdSlider;
