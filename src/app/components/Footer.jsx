import React from 'react'

function Footer() {
    return (
        <div className='border-t border-white border-opacity-30 flex justify-between bg-black h-20'>
            <div className='flex items-center pl-10'>
                <div >
                    <svg viewBox="0 0 24 23" width={30} height={30} className="h-jTWvec h-AxgJE h-AxgJj"><title>Humane</title><path d="M12.1093 22.448C10.0186 22.448 8.10527 21.972 6.36927 21.02C4.65193 20.0493 3.28927 18.7427 2.28127 17.1C1.29193 15.4573 0.797266 13.6467 0.797266 11.668C2.75727 11.5373 4.56793 10.9773 6.22927 9.988C7.8906 8.99867 9.2346 7.70133 10.2613 6.096C11.2879 4.472 11.8666 2.71733 11.9973 0.831999C14.0133 0.831999 15.8799 1.31733 17.5973 2.288C19.3146 3.25867 20.6773 4.57467 21.6853 6.236C22.6933 7.89733 23.1973 9.71733 23.1973 11.696C23.1973 13.6187 22.6933 15.4013 21.6853 17.044C20.6773 18.6867 19.3239 20.0027 17.6253 20.992C15.9266 21.9627 14.0879 22.448 12.1093 22.448Z" fill="currentColor"></path></svg>
                </div>
                <div><h1 className='text-[11px] opacity-20 pl-8'>© Humane Inc. 2024 All rights reserved.</h1></div>
            </div>
            <div className='flex items-center gap-3 pr-10'>
                <div className='font-semibold'>X</div>
                |
                <div className='font-semibold'>Instagram</div>
                |
                <div className='font-semibold'>LinkedIn</div>
                |
                <div className='font-semibold'>Discord</div>
            </div>
        </div>
    )
}

export default Footer