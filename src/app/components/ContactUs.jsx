'use client'
import React, { useEffect, useState } from 'react'

function ContactUs() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className='h-[900px] bg-black'>
      <div className='grid grid-cols-7 pt-20 '>
        <div className='col-span-4'>
          <h1 className='text-[80px] pl-10 leading-none'>Get the latest from Humane</h1>
          <div className='pl-10 pt-10'>
            <input type="text" className='bg-[#55585A] w-[400px] h-[50px] rounded-full pl-3' placeholder='Your email address' />
            <button className='mx-4 h-[50px] w-[100px] bg-[#F3D321] text-black rounded-full font-semibold'>Send</button>
          </div>
        </div>
        <div className='col-span-3'>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Ai Pin uses magnets for attachment to clothing or the wearer. For detailed information on safety, regulatory compliance, and usage guidelines, consult the provided Product Safety Guide and/or available online documentation.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Humane disclaims liability for damage resulting from ordinary wear and tear or misuse/abuse of Humane products or any other products. For comprehensive warranty details, consult the provided Quick Guide or review the warranty.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Purchase of Humane products is currently limited to the United States.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>The price for Ai Pin starts at $499. Taxes and fees not included. Ai Pin requires an active Humane Plan. $24/month, taxes and fees not included, plan automatically renews until canceled. For more information, review https://humane.com/humane-plan.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>TIDAL Offer is open only to new TIDAL users who do not already have a TIDAL account. Restrictions and conditions apply.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Offers apply to Humane Core Plan only. Premium Add-Ons and additional services not included.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Ai Pin’s battery life is contingent on variables such as the usage environment, usage patterns, device settings, and other pertinent factors.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Ai Pin should not be considered a substitute for a health professional’s advice; should not be used to diagnose a health condition.</p>
          <p className='text-[12px] py-2 opacity-40 ml-32 pr-20'>Features are subject to change.</p>
        </div>
      </div>
      <div>
        <div className='grid-cols-6 flex justify-between mt-20 pl-8'>
          <div>
            <h1 className='font-semibold'>cosmos</h1>
            <h1 className='font-semibold'>change log</h1>
            <h1 className='font-semibold'>humane plan</h1>
            <h1 className='font-semibold'>partnerships</h1>
          </div>
          <div>
            <h1 className='font-semibold'>humane news</h1>
            <h1 className='font-semibold'>media kit</h1>
            <h1 className='font-semibold'>join us</h1>
          </div>
          <div>
            <h1 className='font-semibold'>support</h1>
            <h1 className='font-semibold'>warranty</h1>
            <h1 className='font-semibold'>return policy</h1>
            <h1 className='font-semibold'>charge case recall</h1>
          </div>
          <div>
            <h1 className='font-semibold'>plan terms</h1>
            <h1 className='font-semibold'>privacy policy </h1>
            <h1 className='font-semibold'>terms of service</h1></div>
          <div></div>
          <div></div>
          <div></div>
          <button
            title='Back to top'
            onClick={scrollToTop}
            className='mr-10 bottom-10 right-10 bg-[#F3D321] text-black h-12 w-12 rounded-full font-bold text-base'
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactUs