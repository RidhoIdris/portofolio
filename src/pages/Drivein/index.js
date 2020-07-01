import React,{useState} from 'react'
import { FiUser,FiPlay, FiChevronsRight } from "react-icons/fi";


export default function Index() {
    const [nav, setNav] = useState(true)
    return (
        <div className="font-poppins overflow-hidden">
            <div className="w-full h-screen overflow-hidden">
                <div className="flex flex-wrap py-8 justify-between h-10p items-center container mx-auto">
                        <div className="logo">
                            <img className="w-32" src={require('./img/logo.svg')} alt="ini logo"/>
                        </div>
                        <div className="block lg:hidden">
                            <button className="flex items-center" onClick={()=>{setNav(!nav)}}>
                                <svg className="fill-current h-6 w-6 text-drive-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                            </button>
                        </div>
                        <ul className={`flex ${nav && '-lg:hidden'} -lg:py-4 -lg:bg-drive-500 -lg:flex-col -lg:w-full lg:space-x-5 lg:items-center justify-center`}>
                            <li className="text-drive-600 -lg:hover:bg-drive-400 -lg:text-white lg:hover:text-drive-500 cursor-pointer lg:hover:underline ">Drivers</li>
                            <li className="text-drive-600 -lg:hover:bg-drive-400 -lg:text-white lg:hover:text-drive-500 cursor-pointer lg:hover:underline ">Passengers</li>
                            <li className="text-drive-600 -lg:hover:bg-drive-400 -lg:text-white lg:hover:text-drive-500 cursor-pointer lg:hover:underline ">About Us</li>
                            <li className="text-drive-600 -lg:hover:bg-drive-400 -lg:text-white lg:hover:text-drive-500 cursor-pointer lg:hover:underline ">Contact</li>
                        </ul>
                        <ul className={`flex ${nav && '-lg:hidden'} -lg:py-4 -lg:bg-drive-500 -lg:flex-col -lg:w-full lg:space-x-5 lg:items-center justify-center`}>
                            <li className="text-drive-500 -lg:hover:bg-drive-400 -lg:text-white lg:hover:text-drive-500 cursor-pointer"><span className="flex items-center"><FiUser className="mr-2"/>Log In</span></li>
                            <li className="text-drive-500 -lg:hover:bg-drive-400 border-2 border-drive-500 hover:bg-drive-500 hover:text-white rounded-full px-6 py-1 -lg:text-white cursor-pointer">Sign Up</li>
                        </ul>
                    </div>
                <div className="w-full h-90p container mx-auto flex justify-between items-center">
                <div>
                        <h1 className="text-6xl leading-tight font-bold text-drive-500">Start Your Workday Comfortaly</h1>
                        <p className="my-10 text-lg text-drive-500 pr-48">Get in, sit back experience the comfort of car takes you directly to your destination. Arriving work as a sardine with public transport or sweating is a thing of the past.</p>
                        <button className="font-bold focus:outline-none text-xl px-8 py-2 text-white rounded-lg bg-drive-500 hover:bg-drive-600 tracking-widest"><span className="flex items-center"><FiPlay className="mr-2"/>Discover</span></button>
                </div>
                <img className="w-100p -mr-32  py-2" src={require(('./img/hero.svg'))} alt="hero"/>
                </div>
            </div>
            <div className="h-screen container mx-auto">
                <h1 className="text-5xl text-center text-drive-500 font-bold">How to get started?</h1>
                <div className="grid grid-cols-4 col-gap-16 mt-20">
                    <div>
                        <img src={require('./img/tutor1.svg')} alt="tutor"/>
                        <h1 className="text-2xl text-center my-5 text-drive-500">Create your account</h1>
                        <p className="text-center text-gray-500">Complete your account with some basic information including your home, your work, your location and your working hours.</p>
                    </div>
                    <div>
                        <img src={require('./img/tutor2.svg')} alt="tutor"/>
                        <h1 className="text-2xl text-center my-5 text-drive-500">Plan your journeys</h1>
                        <p className="text-center text-gray-500">Complete your account with some basic information including your home, your work, your location and your working hours.</p>
                    </div>
                    <div>
                        <img src={require('./img/tutor3.svg')} alt="tutor"/>
                        <h1 className="text-2xl text-center my-5 text-drive-500">Meet your driver</h1>
                        <p className="text-center text-gray-500">Complete your account with some basic information including your home, your work, your location and your working hours.</p>
                    </div>
                    <div>
                        <img src={require('./img/tutor4.svg')} alt="tutor"/>
                        <h1 className="text-2xl text-center my-5 text-drive-500">Enjoy your journey</h1>
                        <p className="text-center text-gray-500">Complete your account with some basic information including your home, your work, your location and your working hours.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center container mx-auto h-screen">
                <img className="w-100p -ml-32" src={require('./img/left.svg')} alt="left"/>
                <div className="w-80p">
                    <p className="text-2xl text-drive-400">DriveIn is a mobile carpool platform that effortlessly brings commuters together in one car.<br/> Traveling home and work will never be the same again. Our mission is to stop traffic jams and CO2 pullution as a result of ineffecient car commuting.</p>
                    <p className="mt-5 mb-12 text-2xl text-drive-400">Are you in?</p>
                    <span className="font-bold text-2xl cursor-pointer text-drive-500 flex items-center">Learn more <FiChevronsRight className="ml-1"/></span>
                </div>
            </div>
            <div className="flex justify-between items-center container mx-auto h-screen">
                <div className="w-80p">
                    <p className="mt-5 mb-12 text-4xl font-bold text-drive-500">Our commitment<br/>to your safety</p>
                    <p className="text-2xl text-drive-400 pr-16">With every safety feature we add and every standart in the Comunity Guide that we uphold, we are committed to protecting you trhoughout the journey. Learn more about our Community Guide <span className="underline cursor-pointer text-drive-500">Here</span></p>
                    <span className="font-bold mt-12 text-2xl cursor-pointer text-drive-500 flex items-center">See all safety features <FiChevronsRight className="ml-1"/></span>
                </div>
                <img className="w-70p -mr-32 -mt-64" src={require('./img/right.svg')} alt="right"/>
            </div>
            <div className="flex relative h-screen">
                <img className="w-100p absolute bottom-0" src={require('./img/download.svg')} alt="download"/>
                <div className="relative z-10 w-full flex items-center justify-end pr-32">
                    <h1 className="text-4xl font-bold text-drive-500 w-50p float-right flex-center">Download the DriveIn application to get more benefits and experience</h1>
                </div>
            </div>
            <div className="h-50vh">

            </div>
            <div className="flex relative bg-drive-500 h-screen">
                <img className="w-100p absolute top-0" src={require('./img/footer.svg')} alt="footer"/>
            </div>
        </div>
    )
}
