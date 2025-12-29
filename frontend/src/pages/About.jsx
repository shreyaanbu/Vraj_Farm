import React from 'react'
import ContactFooter from '../assets/components/ContactFooter'
import { assets } from '@/assets/assets.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  return (
    <div>
      <div className='items-center bg-[var(--light-yellow)] sm:px-20 py-20 text-center'>
        <h1 className='text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b bg-gradient-to-b from-[var(--green)] to-[var(--brown)] bg-clip-text text-transparent px-5'>About Us</h1>
        <p className='text-[var(--black)] p-10 sm:text-[1rem] md:text-[1.5rem] italic text-justify'>
          We started in the year _year_, in _location_. Our main motivation was to produce the best quality of Kesar mangoes, keeping in mind the health of the consumer as well as that of the environment. Organic farming has paved the way for that, and so far every year, we produce _quantity_ of mangoes. There are _number of_ healthy mango trees, solely nurtured through the ways of organic farming, whose nutritious bounty we reap annually.
        </p>
        <p className='text-[var(--black)] px-10 sm:text-[1rem] md:text-[1.5rem] italic'>
          Here are some photographs from our nurtured farm:
        </p>
        <div className="w-full max-w-5xl mx-auto py-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-lg overflow-hidden "
          >
            <SwiperSlide>
              <img src={assets.mango1} alt="mangoes" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.mango2} alt="mangoes" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.mango3} alt="mangoes" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.mango4} alt="mangoes" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>




      <div className="items-center bg-[var(--yellow)] sm:px-20 py-20">
        <h1 className="text-center text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b from-[var(--brown)] to-[var(--black)] bg-clip-text text-transparent px-5">
          Organic Farming:
        </h1>
        <p className='p-10 sm:text-[1rem] md:text-[1.5rem] text-justify'>
          Organic farming for mango cultivation, particularly for the prized <em>Kesar</em> variety in India, emphasizes natural growth methods that preserve both the fruit's rich flavor and the environment. Grown primarily in Gujarat’s Gir region, Kesar mangoes thrive in nutrient-rich, well-drained soil and warm, dry climates. Organic practices avoid synthetic fertilizers and chemical pesticides, instead using <strong>compost, green manure, neem-based sprays,</strong> and <strong>biological pest control</strong> to enrich the soil and protect the trees. This approach not only enhances the mango’s natural sweetness and aroma but also supports long-term soil health and biodiversity. With increasing demand for chemical-free produce, organic Kesar mangoes offer a sustainable and health-conscious choice for consumers while supporting traditional farming communities across India.
        </p>
      </div>


      <ContactFooter />
    </div>
  )
}

export default About
