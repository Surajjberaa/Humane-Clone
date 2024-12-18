import React from 'react'

function HeroSection() {
  return (
    <section className='w-full h-[430px] pt-36 pl-12 grid grid-cols-2'>
        <div id='heroLeft'>
            <h1 className='text-[60px] font-bold leading-tight'>
            Go Deeper <br/>into CosmOS
            </h1>
            <h2 className='pt-5 text-[20px] text-left font-bold'>
            See how our operating system is built <br/> for a universe of connected devices.
            </h2>
        </div>
        <div id='heroRight' className='flex justify-center '>
            <div>
                <img loading="lazy" data-scroll-disabled src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734523273/image_tttj5f.jpg" alt="" className='h-[250px] w-[430px] object-cover rounded-3xl' />
            </div>
        </div>
       </section>
  )
}

export default HeroSection