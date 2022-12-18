import React from 'react';
import "./about.css"
export default function About() {
    return (
        <div className='text-center'>
            <div className="mt-4">
            <h1 className="text-5xl md:text-8xl font-extrabold bg-clip-text mb-4" data-aos="zoom-y-out">Acknowledge</h1>
            <span className="font-extrabold md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">emotions</span>
            <p className="text-gray-400 md:text-2xl mt-5 ">Your emotions are an integral part as to who you are. Start now by acknowledging them.</p>
            </div>
            <a href="/try" class="mt-4 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"></span>
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gradient-to-r from-blue-500 to-teal-400 group-hover:h-full"></span>
            <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Start Now</span>
            </a>
            <div className='flex flex-row'>
                <img  className="object-cover"src='https://researchoutreach.org/wp-content/uploads/2020/07/shutterstock_1628997811.png'></img>
                <div className="w-[50%]">
                    <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mt-[40%]">
                        <div className="justify-center flex flex-row">
                        <img src='https://images.gr-assets.com/authors/1652281333p2/2345.jpg' className='rounded-full'></img>
                        <div>
                        <p className = "text-sky-500 ml-3 text-lg font-semibold">Nicholas Sparks</p>
                        <p className= "text-white ml-3 font-semibold text-center">Renowned Novelist</p>
                        </div>
                        </div>
                        <p className="text-gray-400 text-lg font-medium ml-auto">“The emotion that can break your heart is sometimes the very one that heals it...”
</p>
                    </div>
                </div>
            </div>
        </div>
    );
}