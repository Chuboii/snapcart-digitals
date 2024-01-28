'use client'
import { FC } from "react";
import {Container,Image,Text, H1} from './FashionStore.style'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";



const quickAccessItems = [
    {
        image: '/5k_store.png',
        text:"5000 Store"
    },
    {
        image: '/Smartphone.jpg',
        text:"Phones & Tables"
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
        image: '/FashionStore.jpeg',
        text:"FashionStore"
    }

]
const FashionStore:FC = () => {
  
  return (
      <>
          <Container>
                <H1>Fashion Store</H1>
               
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
                        <Image src={item.image} width={1000 } height={1000} alt="" />
                        <Text>{item.text}</Text>
                    </SwiperSlide>
                ))
                        }
            </Swiper>
             
        </Container>
      </>
  )
}

export default FashionStore