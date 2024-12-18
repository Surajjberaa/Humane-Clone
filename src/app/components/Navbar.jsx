'use client'
import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const logo = useRef()
  const navbar = useRef()

  useGSAP(() => {
    gsap.from(logo.current, {
      rotation: '-=360',
      duration: 3,
      delay: 3,
      ease: 'bounce'
    })
  })
  useEffect(() => {

    const showAnim = gsap.from(navbar.current, {
      yPercent: -200,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top ",
      end: "max",

      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  }, [])

  return (
    <div ref={navbar} className='w-full h-16 mt-6  flex items-center justify-center fixed z-9'>
      <div className='w-full h-full rounded-full  backdrop-filter backdrop-blur-2xl bg-neutral-500 bg-opacity-15 mx-6 flex items-center justify-between pl-4 pr-1'>
        <div>
          <div ref={logo}>
            <svg viewBox="0 0 24 23" width={30} height={30} className="h-jTWvec h-AxgJE h-AxgJj"><title>Humane</title><path d="M12.1093 22.448C10.0186 22.448 8.10527 21.972 6.36927 21.02C4.65193 20.0493 3.28927 18.7427 2.28127 17.1C1.29193 15.4573 0.797266 13.6467 0.797266 11.668C2.75727 11.5373 4.56793 10.9773 6.22927 9.988C7.8906 8.99867 9.2346 7.70133 10.2613 6.096C11.2879 4.472 11.8666 2.71733 11.9973 0.831999C14.0133 0.831999 15.8799 1.31733 17.5973 2.288C19.3146 3.25867 20.6773 4.57467 21.6853 6.236C22.6933 7.89733 23.1973 9.71733 23.1973 11.696C23.1973 13.6187 22.6933 15.4013 21.6853 17.044C20.6773 18.6867 19.3239 20.0027 17.6253 20.992C15.9266 21.9627 14.0879 22.448 12.1093 22.448Z" fill="currentColor"></path></svg>
          </div>
        </div>
        <div className='flex gap-6'>
          <h2 className='font-bold text-base text-white'>ai pin</h2>
          <h2 className='font-bold text-base text-white'>tech details</h2>
          <h2 className='font-bold text-base text-white'>cosmos</h2>
          <h2 className='font-bold text-base text-white'>accessories</h2>
          <h2 className='font-bold text-base text-white'>support</h2>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <h1 className='font-bold text-base'>account</h1>
          <div>

            <button className='bg-[#00FFF6] text-black h-12 w-20 rounded-full font-bold text-base'>buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar