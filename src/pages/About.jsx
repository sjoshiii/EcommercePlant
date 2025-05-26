import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center'>
        
        {/* <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_img" /> */}
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At The Green Lilyy, we believe that plants bring life, calm, and beauty to every space. Our mission is to connect people with nature through a curated selection of indoor and outdoor plants, accessories, and expert care advice.</p>

          <p>Whether you’re a seasoned plant parent or just starting your green journey, our collections are designed to inspire, educate, and bring greenery into your daily life — one leaf at a time.</p>

          <div className='text-2xl text-center pt-8'>
            <Title  text1={'OUR'} text2={'MISSION'}/>
          </div>

          <p>To nurture a community of plant lovers by offering quality plants, sustainable practices, and exceptional customer care. We’re passionate about helping you create vibrant, healthy environments that reflect your personal style.</p>
        </div>

      </div>
      
      <div className='text-2xl py-4 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>  

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Healthy Plants Guarantee:</b>
              <p className='text-gray-600'>
                We carefully select and nurture every plant to ensure you receive vibrant, healthy greenery that will thrive in your home or garden.
              </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Expert Guidance:</b>
              <p className='text-gray-600'>
                From care instructions to plant styling tips, our team is here to support you every step of the way in your plant journey.
              </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Customer Satisfaction:</b>
              <p className='text-gray-600'>
                We value your happiness and strive to provide excellent service, fast shipping, and a seamless shopping experience.
              </p>
          </div>

      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
