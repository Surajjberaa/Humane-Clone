import React from 'react'

function Architecture() {
    return (
        <section>
            <section className='h-[500px] '>
                <div className='grid grid-cols-2 mt-52'>
                    <div>
                        <h1 className='text-[110px] leading-none ml-12 font-semibold '>
                            How <br /><span className='text-[#F3D321]'>CosmOS</span><br />is Different
                        </h1>
                    </div>
                    <div className='flex justify-center items-end'>
                        <h2 className='text-[24px]' >

                            How CosmOS architecture compares to traditional Graphical User Interface Operating Systems (GUI OS).
                        </h2>
                    </div>
                </div>
            </section>
            <section className='h-[1000px]'>
                <div className='grid grid-cols-2 '>
                    <div className='flex items-center flex-col text-center '>
                        <h1 className='text-4xl font-semibold'>Traditional OS Architecture</h1>
                        <h2 className='pt-4 opacity-50 px-32'>Most traditional operating systems follow a rigid, layered architecture.</h2>
                        <div className='flex justify-center gap-1 pt-8'>
                            <div className='border-white border-2 rounded-3xl pt-1 pb-1 bg-[#E9E9E9]'>
                                <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                            </div>
                            <div className='border-white border-2 rounded-3xl pt-1 pb-1 bg-[#E9E9E9]'>
                                <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                            </div>
                            <div className='border-white border-2 rounded-3xl pt-1 pb-1 bg-[#E9E9E9]'>
                                <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                            </div>
                            <div className='border-white border-2 rounded-3xl pt-1 pb-1 bg-[#E9E9E9]'>
                                <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-full'>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#CCCCCC]'>OS app framework</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#B2B2B2]'>OS Gui</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#808080]'>operating system</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#4D4D4D]'>kernel</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#333333]'>firmware</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#1F1F1F]'>assembly</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#0D0D0D]'>CPU</div>
                            <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#000000]'>hardware</div>
                        </div>
                    </div>
                    <div className='flex items-center flex-col text-center'>
                        <h1 className='text-4xl font-semibold'>Cosm<span className='text-[#F3D321]'>OS</span> Architecture</h1>
                        <h2 className='pt-4 opacity-50 px-32'>Our revolutionary design rethinks the traditional operating system structure from the ground up.</h2>

                        <div className='flex justify-center items-center flex-col w-full pt-8'>
                            <div className='border-2 border-[#F3D321] rounded-3xl p-2 bg-[#F3D321] bg-opacity-45'>
                                <h1>AI</h1>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 text-black font-semibold bg-[#FFD600]'>OS app framework</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 text-black font-semibold bg-[#FFD600]'>OS Gui</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 text-black font-semibold bg-[#FFD600]'>operating system</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 text-black font-semibold bg-[#FFD600]'>kernel</div>
                                <div className='flex justify-center gap-1 '>
                                    <div className='border-[#FFD600] my-1 border-2 rounded-3xl pt-1 pb-1 bg-[#FFD600]'>
                                        <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                        <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                                    </div>
                                    <div className='border-[#FFD600] my-1 border-2 rounded-3xl pt-1 pb-1 bg-[#FFD600]'>
                                        <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                        <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                                    </div>
                                    <div className='border-[#FFD600] my-1 border-2 rounded-3xl pt-1 pb-1 bg-[#FFD600]'>
                                        <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                        <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                                    </div>
                                    <div className='border-[#FFD600] my-1 border-2 rounded-3xl pt-1 pb-1 bg-[#FFD600]'>
                                        <div className='h-12 w-24 bg-white text-black rounded-full flex items-center justify-center font-semibold'>GUI</div>
                                        <div className='mt-2 h-12 w-24 bg-black rounded-full flex items-center justify-center'>logic</div>
                                    </div>
                                </div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 text-black font-semibold bg-[#FFD600]'>firmware</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 text-black font-semibold bg-[#FFD600]'>assembly</div>
                            </div>
                            <div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#4D4D4D]'>kernel</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#333333]'>firmware</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#1F1F1F]'>assembly</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#0D0D0D]'>CPU</div>
                                <div className='w-[420px] h-[40px] flex justify-center items-center rounded-full mt-1 bg-[#000000]'>hardware</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Architecture