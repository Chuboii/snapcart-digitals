'use client'
import { FC } from "react";
import {Container,Image,Text, H1, Box, Wrap} from './AllProducts.style'
import "swiper/css";

const quickAccessItems = [
    {
        image: '/5k_store.png',
        text:"5000 Store"
    },
    {
        image: '/Smartphone.jpg',
        text:"AllProducts & Tables"
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

const AllProducts:FC = () => {
  return (
      <>
          <Container>
                <H1>NON STOP SHOPPING</H1>
               
<Wrap>
                  {quickAccessItems.map((item, id) => (
                      <Box key={id}>
                          <Image src={item.image} width={1000 } height={1000} alt='' />
                          <Text>{item.text}</Text>
                      </Box>
                  ))
                  }
              </Wrap>
             
        </Container>
      </>
  )
}

export default AllProducts