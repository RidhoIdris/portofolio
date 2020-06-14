import React, { useState } from 'react'
import { FiLayers,FiArrowRight,FiAirplay, FiShare2, FiMap, FiDatabase, FiSend, FiSliders, FiSlack, FiActivity } from "react-icons/fi";
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function Index() {

    const [nav, setNav] = useState(true)

    return (
        <div className="overflow-x-hidden">
            <div className="w-screen min-h-screen bg-gigas-500">
                <nav className="flex justify-between flex-wrap items-center container mx-auto">
                    <Link to="/"><img alt="logo" className="p-8" src={require('./img/logo.png')} /></Link>
                    <div className="block lg:hidden p-8">
                        <button className="flex items-center" onClick={()=>{setNav(!nav)}} >
                            <svg className="fill-current h-6 w-6 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <ul className={`flex -lg:flex-col ${nav && '-lg:hidden'} -lg:w-full -lg:bg-gigas-700 lg:space-x-5 text-white uppercase -lg:py-3 tracking-wider`}>
                        <li className="lg:hover:underline hover:font-bold -lg:px-8 -lg:py-2 -lg:hover:bg-gigas-800 hover:cursor-pointer">Home</li>
                        <li className="lg:hover:underline hover:font-bold -lg:px-8 -lg:py-2 -lg:hover:bg-gigas-800 hover:cursor-pointer">Pages</li>
                        <li className="lg:hover:underline hover:font-bold -lg:px-8 -lg:py-2 -lg:hover:bg-gigas-800 hover:cursor-pointer">Services</li>
                        <li className="lg:hover:underline hover:font-bold -lg:px-8 -lg:py-2 -lg:hover:bg-gigas-800 hover:cursor-pointer">Case Studies</li>
                        <li className="lg:hover:underline hover:font-bold -lg:px-8 -lg:py-2 -lg:hover:bg-gigas-800 hover:cursor-pointer">Contact</li>
                    </ul>
                </nav>
                <div className="flex justify-between container mx-auto p-8 -md:text-center">
                    <div className="flex flex-col text-white relative z-10 lg:mt-10  -md:items-center">
                        <button className="p-2 w-12 h-12 items-center flex justify-center rounded-full bg-orange-500"><FiLayers size="24"/></button>
                        <h1 className="xl:text-6xl text-5xl -sm:text-3xl leading-tight py-4">Sales Optimization & Data Analysis</h1>
                        <img className="w-64 md:hidden" alt="hero" src={require('./img/hero.png')} />
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus aenean lacinia bibendum.</p>
                        <button className="p-2 w-40 items-center flex justify-center rounded-full bg-orange-500 mt-6">View Detail<FiArrowRight className="ml-2"/></button>
                    </div>
                    <img className="w-60p relative z-10 h-60p -mr-20 -md:hidden" alt="hero" src={require('./img/hero.png')} />
                    <img alt="shapes" className="absolute top-0 mt-10  left-0" src={require('./img/shapes.png')} />
                </div>
            </div>
            <div className="container mx-auto py-8 px-8 flex flex-col items-center text-center mt-16">
                <div className="lg:px-56"> 
                    <h1 className="text-3xl font-semibold">Full Service Digital Marketing Agency</h1>
                    <p className="text-gray-500 mt-3">Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-5 mt-10 xl:px-32">
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiAirplay className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Digital PR Link-Building</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiShare2 className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Link Building & Content</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiMap className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Maps Search Optimization</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiDatabase className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Big Data Analysis</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiSend className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Custom Email Design</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiSliders className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Monitoring Ranking</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiSlack className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Code Optimization</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                     <div className=" h-64 p-4 rounded-lg shadow-lg hover:bg-blue-ribbon-500 transition ease-in duration-200 hover:cursor-pointer hover:text-white bg-white justify-start">
                         <div className="rounded-full p-4 w-16 h-16 bg-white flex justify-center items-center">
                            <FiActivity className="text-blue-ribbon-500" size={32}/>
                         </div>
                         <h1 className="text-left text-xl">Nap Syndication</h1>
                         <p className="text-sm text-left my-2">Lorem ipsum dolor sit amet adicing elit maecenas sa faubus mollis interdum.</p>
                         <span className="text-gray-500 text-sm flex  items-center justify-content-center hover:text-blue-ribbon-700 cursor-pointer text-left block">VIEW MORE <FiArrowRight className="ml-2"/></span>
                     </div>
                </div>
            </div>
            <div className="h-screen w-full">
                <div className="flex justify-between -md:flex-col -md:justify-center -md:text-center h-full items-center container mx-auto md:px-8">
                    <h1 className="text-6xl -md:text-3xl font-bold">Under Contruction</h1>
                    <img className="bg-cover lg:w-80p" alt="under" src={require('./img/under.jpg')}/>
                </div>
            </div>
             {/* Footer */}
             <div className="bg-gigas-500">
                <div className="container mx-auto -md:space-y-4 px-4 md:px-8 grid grid-cols-1  md:grid-cols-3 items-center py-6">
                    <div className="flex flex-col h-100p md:px-2">
                        <h1 className="text-white font-bold uppercase text-xl">Adress</h1>
                        <span className="text-gray-500 mt-2">Kebayoran Lama, Jakarta Selatan, Indonesia</span>
                        <span className="text-gray-500 mt-1">+1 (123) 465 798</span>
                        <span className="text-gray-500 mt-1">ridhoidris@gmail.com</span>
                    </div>
                    <div className="flex flex-col h-100p md:px-2">
                        <h1 className="text-white font-bold uppercase text-xl">useful link</h1>
                        <ul className="text-gray-500 mt-2">
                            <li className="hover:text-gray-700 cursor-pointer hover:underline">About Us</li>
                            <li className="hover:text-gray-700 cursor-pointer hover:underline">Serevice</li>
                            <li className="hover:text-gray-700 cursor-pointer hover:underline">News & Blog</li>
                            <li className="hover:text-gray-700 cursor-pointer hover:underline">Contact Us</li>
                            <li className="hover:text-gray-700 cursor-pointer hover:underline">Case</li>
                        </ul>
                    </div>
                    <div className="flex flex-col h-100p md:px-2">
                        <h1 className="text-white font-bold uppercase text-xl">Get Subscribe Now</h1>
                        <span className="text-gray-500 mt-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden</span>
                        <input placeholder="Your Email" className="border py-2 px-4 border-gray-300 focus:outline-none focus:shadow-outline text-gray-500 mt-3 mb-2 rounded-full" />
                        <button className="bg-blue-ribbon-500 w-full xl:w-1/2 hover:shadow-outline hover:bg-blue-ribbon-600 focus:outline-none rounded-full py-2 px-4 uppercase text-white flex items-center justify-center"><AiOutlineMail size="20" className="mr-2"/>Subscribe Now</button>
                    </div>
                </div>
                <div className="flex text-white border-t border-gray-400 justify-center items-center py-4 container mx-auto">
                    <span className="text-center">Copyright 2020 © Ridho Idris</span>
                </div>
            </div>
            {/* Footer */}
        </div>
    )
}
