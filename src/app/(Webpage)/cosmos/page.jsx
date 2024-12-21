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

                    <video loading="lazy" src="https://player.vimeo.com/progressive_redirect/playback/1021907326/rendition/2160p/file.mp4?loc=external&oauth2_token_id=1775640829&signature=ff2d1a1b63cf6e91a4ca84c98128358a2e9e0381402d0760672593d2ec1a3f60" className='h-[600px] w-[1200px]' controls={true} ></video>
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