'use client'
import { FC } from "react";
import {Container,Text, H1} from './TechnologyStore.style'
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const quickAccessItems = [
    {
        image: '/tv.jpg',
        text:"Hikers 43' Frameless FHD Flatscreen"
    },
    {
        image: '/airboard.jpg',
        text:"F9 Wireless Fingerprint Earpod"
    },
    {
        image: '/powerbank.jpg',
        text:"20000mah Itel Powerbank"
    },
    {
        image: '/phone.jpg',
        text:"Redmi Note 11 Andriod 12"
    },
    {
        image: '/Groceries.png',
        text:"Groceries"
    },
    {
        image: '/Fridge.png',
        text:"Refrigerators"
    },
    {
        image: '/generators.png',
        text:"Generators"
    },
    {
        image: '/mobile_appliances.png',
        text:"Mobile Accessories"
    },
    {
        image: '/mens_sneakers.png',
        text:"Men's Sneakers"
    },
    {
        image: '/fashion.jpeg',
        text:"Fashion"
    }

]

const TechnologyStore:FC = () => {
  return (
      <>
          <Container>
                <H1>Technology Store</H1>
               
      <Swiper
        spaceBetween={10}
        loop={false}
              slidesPerView={window.innerWidth <= 768 ? 4 : 7}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2000, // set the delay in milliseconds
          disableOnInteraction: false, // keep autoplay running when user interacts with the swiper
        }}
          >
                {quickAccessItems.map((item, id) => (
                    <SwiperSlide key={id}>
                        <Image src={item.image} alt='' width={1000} height={1000} />
                        <Text>{item.text }</Text>
                    </SwiperSlide>
                ))
                        }
            </Swiper>
             
        </Container>
      </>
  )
}

export default TechnologyStore