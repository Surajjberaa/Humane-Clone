import Details from '@/app/components/Details'
import HeroSection from '@/app/components/HeroSection'
import OsIntelligence from '@/app/components/OsIntelligence'
import React from 'react'

function Cosmos() {
  return (
    <div className=' bg-[#141414] h-full'>
       <HeroSection/>
       <OsIntelligence/>
       <Details/>
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

                    <video src="https://download-video-ak.vimeocdn.com/v3-1/playback/d017d7f4-6774-417a-b79a-69e2cf62647e/37462067-e8e01aca?__token__=st=1734540701~exp=1734555101~acl=%2Fv3-1%2Fplayback%2Fd017d7f4-6774-417a-b79a-69e2cf62647e%2F37462067-e8e01aca%2A~hmac=dd411c32100af3ffca80e2c5b426a343599117adf6e1e76f6e4557fb21528df4&r=dXMtd2VzdDE%3D" className='h-[600px] w-[1200px]' autoPlay={true} controls={true} ></video>
                </div>
            </section>
    </div>
  )
}

export default Cosmos