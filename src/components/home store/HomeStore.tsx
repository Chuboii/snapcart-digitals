'use client'
import { FC } from "react";
import { Container, Text, H1 } from './HomeStore.style'
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const quickAccessItems = [
    {
        image: '/5k_store.png',
        text:"5000 Store"
    },
    {
        image: '/Smartphone.jpg',
        text:"HomeStore & Tables"
    },
    {
        image: '/tv.png',
        text:"Televisions"
    },
    {
        image: '/conmputing.png',
        text:"Computing Deals"
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

const HomeStore:FC = () => {
  return (
      <>
          <Container>
                <H1>Home Store</H1>
               
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
                        <Image src={item.image} alt='///' width={1000 } height={1000 } />
                        <Text>{item.text }</Text>
                    </SwiperSlide>
                ))
                        }
            </Swiper>
             
        </Container>
      </>
  )
}

export default HomeStore