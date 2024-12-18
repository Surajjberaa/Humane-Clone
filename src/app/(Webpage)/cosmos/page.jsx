import Architecture from '@/app/components/Architecture'
import ContactUs from '@/app/components/ContactUs'
import DesignSection from '@/app/components/DesignSection'
import Details from '@/app/components/Details'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HeroSection'
import OsIntelligence from '@/app/components/OsIntelligence'
import React from 'react'

function Cosmos() {
    return (
        <div className=' bg-[#141414] h-full'>
            <HeroSection />
            <OsIntelligence />
            <Details />
            <section className='h-full bg-black'>
                <div className='grid grid-cols-2 '>
                    <div className='mt-52'>
                        <h1 className='text-[130px] leading-none ml-12 font-semibold '>
                            How <span className='text-[#F3D321]'>CosmOS</span> Works
                        </h1>
                    </div>
                    <div className='flex flex-col justify-end mb-4 ml-12 mr-6'>
                        <h2 className='text-[20px]' >
                            Curious to see how it all works?
                        </h2>
                        <h2 className='text-[20px] mt-5' >
                            Let’s go inside Ai Pin to take a deeper look at how agents, actions, orchestration and more all come together with the power of CosmOS.
                        </h2>
                    </div>
                </div>
                <div className='h-full w-full flex items-center justify-center mt-40 pb-20'>

                    <video loading="lazy" src="https://download-video-ak.vimeocdn.com/v3-1/playback/d017d7f4-6774-417a-b79a-69e2cf62647e/37462067-e8e01aca?__token__=st=1734566137~exp=1734580537~acl=%2Fv3-1%2Fplayback%2Fd017d7f4-6774-417a-b79a-69e2cf62647e%2F37462067-e8e01aca%2A~hmac=37ed4067a9b36b88237bd31034a052017255217ad03c1ec98d5a82ed437e1bfe&r=dXMtd2VzdDE%3D" className='h-[600px] w-[1200px]' controls={true} ></video>
                </div>
            </section>
            <Architecture />
            <DesignSection />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Cosmos