import React from 'react'
import Separator from './Separator'

function Details() {
    return (
        <section className='h-full'>
            <section className='h-[500px]'>
                <div className='grid grid-cols-2 mt-52'>
                    <div>
                        <h1 className='text-[130px] leading-none ml-12 font-semibold '>
                            What <span className='text-[#F3D321]'>CosmOS</span> Does
                        </h1>
                    </div>
                    <div className='flex justify-center items-end'>
                        <h2 className='text-[24px]' >
                        CosmOS intelligently orchestrates advanced agents and Large Language Models (LLM) to create a seamless, context-aware experience.
                        </h2>
                    </div>
                </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                        <div className='grid grid-cols-2 mt-20'>
                            <div className=''>
                                <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734531207/intelligentAgents.8b1d751b_nekrg6.svg" alt="" className='ml-12 h-[400px] w-[550px]' />
                            </div>
                            <div className='ml-20 mt-20'>
                                <h1 className='text-2xl font-bold mb-10'>Intelligent Agents For Every Tasks</h1>
                                <h2 className='font-light opacity-60 mb-5'>Intelligent agents are at the core of CosmOS. Agents are specialized AI programs designed to handle specific tasks and work together seamlessly. They operate in the background without the need for direct management. These agents are the driving force behind CosmOS’ ability to understand context, anticipate needs, and execute complex operations.</h2>
                                <h2 className='opacity-60 font-light mb-5'>Each agent is an expert in its domain — weather, news, music, vision, communication, task planning, etc. They work together, sharing information and coordinating efforts to tackle multi-step challenges.</h2>
                            </div>
                        </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                <div className='grid grid-cols-2 mt-20'>
                    <div className='ml-12'>
                        <h1 className=' mt-28 text-2xl font-bold'>Personalised & Contextual</h1>
                        <h2 className='mt-10 font-light opacity-60 '>CosmOS evolves and becomes personalized over time by learning from your interactions and history and staying contextually relevant with up to date data from the web and information you provide.</h2>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734531906/personalizedAndContextual.f55a1a64_p9sewn.svg" alt="" className='ml-16 h-[400px] w-[550px]' />
                    </div>
                </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                        <div className='grid grid-cols-2 mt-20'>
                            <div className=''>
                                <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734532630/aiBus.16c4156d_r5xvw2.svg" alt="" className='ml-12 h-[400px] w-[550px]' />
                            </div>
                            <div className='ml-20 mt-20'>
                                <h1 className='text-2xl font-bold mb-10'>The Ai Bus: An Intelligent Orchestrator</h1>
                                <h2 className='font-light opacity-60 mb-5 mr-5'>At the heart of CosmOS lies the Ai Bus, a powerful AI orchestration system. This intelligent conductor seamlessly coordinates various AI models, data sets, services, and device capabilities to deliver a fluid, intuitive experience. From your device to LLMs to any API in between, CosmOS handles complex requests with ease.</h2>
                                
                            </div>
                        </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                <div className='grid grid-cols-2 mt-20'>
                    <div className='ml-12'>
                        <h1 className=' mt-28 text-2xl font-bold'>Multistep Reasoning & Parallel Processing</h1>
                        <h2 className='mt-10 font-light opacity-60 '>CosmOS breaks down requests into multiple steps and directs them to specialized agents ensuring they have the necessary information to process tasks accurately. The Ai Bus coordinates how results and information are shared across agents while simultaneously managing multiple requests in parallel.</h2>
                        <h2 className='mt-5 font-light opacity-60 '>CosmOS understands the context and intent behind your requests. When agents come back with results, CosmOS makes sure they’re appropriate, accurate and keeps processing if the task isn’t done yet.</h2>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734532869/parallelProcessing.b0d0f535_xxodgo.svg" alt="" className='ml-16 h-[400px] w-[550px]' />
                    </div>
                </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                        <div className='grid grid-cols-2 mt-20'>
                            <div className=''>
                                <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734533068/intelligentErrorHandling.73909035_lerigm.svg" alt="" className='ml-12 h-[400px] w-[550px]' />
                            </div>
                            <div className='ml-20 mt-20'>
                                <h1 className='text-2xl font-bold mb-10'>Intelligent Error Handling</h1>
                                <h2 className='font-light opacity-60 mb-5 mr-5'>If an agent encounters an issue, our sophisticated orchestration finds alternative sources — minimizing errors and maximizing results.</h2>
                                
                            </div>
                        </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                <div className='grid grid-cols-2 mt-20'>
                    <div className='ml-12'>
                        <h1 className=' mt-28 text-2xl font-bold'>Scalable & Adaptable</h1>
                        <h2 className='mt-10 font-light opacity-60 '>CosmOS is designed to support multiple device form factors and adapts to the latest advancements in AI technologies — making it easy for new agents and capabilities to come on board.</h2>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734533205/scalableAndAdaptable.d1537873_nn3eof.svg" alt="" className='ml-16 h-[400px] w-[550px]' />
                    </div>
                </div>
            </section>
            <Separator/>
            <section className='h-[500px]'>
                        <div className='grid grid-cols-2 mt-20'>
                            <div className=''>
                                <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1734533321/multimodalControl.7d3e094c_nbkoux.svg" alt="" className='ml-12 h-[400px] w-[550px]' />
                            </div>
                            <div className='ml-20 mt-20'>
                                <h1 className='text-2xl font-bold mb-10'>Multimodal Control</h1>
                                <h2 className='font-light opacity-60 mb-5 mr-5'>CosmOS will understand your intent and orchestrate the right inputs that are available on your device. Native multimodal support on CosmOS means that you can use multiple input methods such as, voice, touch, text, gesture or vision — and combine or switch between them midstream.</h2>
                                
                            </div>
                        </div>
            </section>
        </section>
    )
}

export default Details