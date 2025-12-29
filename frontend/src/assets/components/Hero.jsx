import React from 'react'
import { assets } from '@/assets/assets.js';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div>
      <div className='items-center bg-[var(--green)] sm:px-10 py-20 text-center'>
        <h1 className='
          text-[3rem] 
          md:text-[4rem] 
          font-bold 
          text-[var(--yellow)] 
          md:text-transparent 
          md:bg-gradient-to-b 
          md:from-[var(--light-yellow)] 
          md:to-[var(--yellow)] 
          md:bg-clip-text 
          px-5'
        >
          Vraj Kesar Farm
        </h1>

        <p className='text-white p-10 pb-20 sm:text-[1rem] md:text-[1.5rem]'>
          Naturally sweet, and bursting with flavor—our organic Kesar mangoes are a golden delight in bite! 🥭✨
        </p>
        <Link to='./collection' className='p-4 text-[1.5rem] bg-[var(--black)] text-white rounded-md font-bold hover:bg-[var(--yellow)] hover:text-[var(--brown)] transition-[var(--transition)]'>Order Now
        </Link>
      </div>

      <div className="items-center bg-[var(--yellow)] text-center sm:px-10 py-20">
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold bg-gradient-to-b from-[var(--brown)] to-[var(--black)] bg-clip-text text-transparent px-5">
          When you buy our mangoes, you help us in supporting:
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-10 rounded-sm">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full max-w-[65vw] lg:max-w-[30vw]"
          >
            <SwiperSlide>
            <img src={assets.mango1} alt="mangoes" className="rounded-sm" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={assets.mango3} alt="mangoes" className="rounded-sm" />
            </SwiperSlide>
            </Swiper>



            <ul className="flex flex-col items-stretch gap-8 text-justify font-bold text-[1.5rem] lg:text-[1.5rem] p-8 sm:p-12">
              <div >
                <p>Good Health</p>
                <p className='font-normal text-[1rem] sm:text-[1.25rem]'>
                  Our mangoes are grown without harmful chemicals, ensuring that every bite is rich in natural goodness. Packed with essential vitamins, antioxidants, and fiber, they support your immune system and overall well-being.
                </p>
              </div>
              <div>
                <p>Happy Soil</p>
                <p className='font-normal text-[1rem] sm:text-[1.25rem]'>
                  We nurture our soil through sustainable farming practices that promote biodiversity and natural fertility. Healthy soil is the foundation of nutrient-rich fruits and a resilient farm ecosystem.
                </p>
              </div>
              <div>
                <p>Nutrition-Packed Fruits</p>
                <p className='font-normal text-[1rem] sm:text-[1.25rem]'>
                  Each mango is a powerhouse of nutrients—rich in Vitamin C, A, and potassium. Grown with care, our fruits deliver not just taste but genuine health benefits in every juicy slice.
                </p>
              </div>
              <div>
                <p>Health of Our Mango Trees</p>
                <p className='font-normal text-[1.0rem] sm:text-[1.25rem]'>
                  We prioritize the long-term health of our mango trees by using organic compost, natural pest control, and mindful pruning. A healthy tree bears better fruit and contributes to a thriving, eco-friendly orchard.
                </p>
              </div>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Hero
