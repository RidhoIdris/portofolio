import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";


export default function index() {
    return (
        <div style={{backgroundColor:"#1d1d23"}} className="overflow-hidden font-montserrat">
            <div className="h-screen w-full">
                <div className="absolute bg-cover bg-fixed top-0 w-full h-full"  style={{backgroundImage:`url(${require('./img/herobg.jpg')})`}}></div>
                <div className="flex justify-center items-center absolute bottom-0 z-10 w-full">
                {/* <img src={require('./img/scroll.gif')} alt="mouse" className=" w-16  " /> */}
                {/* <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                    <path id="wheel" d="M123.359,79.775l0,72.843" style={{fill:"none",stroke:'#fff',strokeWidth:'20px'}}/>
                    <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style="fill:none;stroke:#fff;stroke-width:20px;"/>
                </svg> */}
                </div>
                <div className="bg-black w-full h-full absolute top-0 opacity-75"></div>
                <nav className="flex justify-between items-center py-5 container mx-auto relative z-10 px-12" style={{height:'12vh'}}>
                    <ul className="flex items-center justify-center space-x-10 font-bold text-white -md:hidden">
                        <li className="cursor-pointer hover:underline">HOME</li>
                        <li className="cursor-pointer hover:underline">ABOUT</li>
                        <li className="cursor-pointer hover:underline">MENUS</li>
                        <li className="cursor-pointer hover:underline">OFFERS</li>
                    </ul>
                    <img src={require('./img/logo.png')} className="w-20" alt="restaurant logo"/>
                    <div className="block md:hidden">
                        <button className="flex items-center" >
                            <svg className="fill-current h-6 w-6 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <ul className="flex items-center justify-center space-x-10 font-bold text-white -md:hidden">
                        <li className="cursor-pointer hover:underline">GALLERY</li>
                        <li className="cursor-pointer hover:underline">CONTACT</li>
                        <li className="cursor-pointer hover:underline">BLOG</li>
                    </ul>
                </nav>
                <div className="relative z-10 flex flex-col md:flex-row text-center md:text-left justify-center md:justify-between items-center container mx-auto" style={{height:'88vh'}}>
                    <div className="w-1/2">
                        <img src={require('./img/hero.png')} alt="hero"/>
                    </div>
                    <div className="ml-10 w-1/2">
                        <h1 style={{color:'#e58f00'}} className="text-4xl md:text-5xl lg:text-6xl  font-extrabold leading-tight">Contact Us For <br/>Best Breakfast</h1>
                        <p className="text-white font-semibold text-lg md:text-2xl my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <button className="bg-orange-500 hover:text-white focus:outline-none hover:bg-orange-600 text-black px-12 py-4 rounded-lg text-xl font-bold">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mx-auto container items-center h-screen w-full">
                <div className="w-1/2">
                    <img src={require('./img/aboutus.jpg')}  alt="about us"/>
                </div>
                <div className="w-1/2 ml-10">
                    <h1 className="text-white text-5xl font-bold">About Us</h1>
                    <p className="text-white pr-32 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <h1 className="text-white text-5xl font-bold">Our Food Gallery</h1>
                <div className="grid grid-cols-3 gap-5 h-full mt-10">
                    <img src={require('./img/galery1.jpg')}  alt="Gallery"/>
                    <img src={require('./img/galery2.jpg')}  alt="Gallery"/>
                    <img src={require('./img/galery3.jpg')}  alt="Gallery"/>
                    <img src={require('./img/galery4.jpg')}  alt="Gallery"/>
                    <img src={require('./img/galery5.jpg')}  alt="Gallery"/>
                    <img src={require('./img/galery6.jpg')}  alt="Gallery"/>
                </div>
            </div>
            <div className="text-center relative w-full h-screen mt-24 flex justify-center items-center">
                <div className="absolute w-full h-full bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage:`url(${require('./img/enjoy.jpg')})`}} />
                <div className="w-50p h-auto relative z-10 border-8 border-orange-500 p-10">
                    <div className="w-full left-0 top-0 h-full absolute bg-black opacity-50 "/>
                    <h1 className="text-5xl text-white font-bold relative z-10">Enjoy Our Food</h1>
                    <p className="text-white font-semibold text-3xl relative z-10 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
            </div>
            <div className="container mx-auto mt-24">
                <h1 className="text-white text-5xl font-bold text-center">Our Menu</h1>
                <div className="grid grid-cols-3 gap-5 h-full mt-10">
                    <div>
                        <img src={require('./img/menu1.jpg')}  alt="Menu"/>
                        <h1 className="text-orange-500 font-bold text-2xl tracking-wide mt-5">ITALIAN SOURCE MUSHROOM</h1>
                        <p className="text-white font-semibold text-lg my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        <span className="font-bold text-orange-500 text-xl">Price: $12.00</span>
                    </div>
                    <div>
                        <img src={require('./img/menu2.jpg')}  alt="Menu"/>
                        <h1 className="text-orange-500 font-bold text-2xl tracking-wide mt-5">ITALIAN SOURCE MUSHROOM</h1>
                        <p className="text-white font-semibold text-lg my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        <span className="font-bold text-orange-500 text-xl">Price: $12.00</span>
                    </div>
                    <div>
                        <img src={require('./img/menu3.jpg')}  alt="Menu"/>
                        <h1 className="text-orange-500 font-bold text-2xl tracking-wide mt-5">ITALIAN SOURCE MUSHROOM</h1>
                        <p className="text-white font-semibold text-lg my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        <span className="font-bold text-orange-500 text-xl">Price: $12.00</span>
                    </div>
                </div>
            </div>
            {/* <div className="w-full mt-32 relative -xl:flex -xl:items-center" style={{backgroundColor:"#e58f00",height:"500px"}}>
                <img className="xl:absolute -xl:w-50p" style={{top:'-60px'}} src={require('./img/bestmeal.png')} alt="Best Meal"/>
                <div className="container mx-auto flex h-full">
                    <div className="w-1/3 -xl:hidden"/>
                    <div className="text-white w-2/3 h-full flex flex-col justify-center ml-10 xl:ml-20">
                        <h1 className="xl:text-6xl -xl:text-5xl text-2xl font-bold">Enjoy Best Meal</h1>
                        <p className="font-semibold text-3xl -xl:text-xl w-2/3 leading-tight mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </div>
            </div> */}
            <div className="w-full h-screen relative flex justify-between items-center">
                <div className="h-50p w-full absolute z-10" style={{backgroundColor:"#e58f00"}}>
                </div>
                <img className="relative z-20 w-50p" src={require('./img/bestmeal.png')} alt="Best Meal"/>
                <div className="text-white relative z-20 ml-10">
                    <h1 className="xl:text-6xl -xl:text-5xl text-2xl font-bold">Enjoy Best Meal</h1>
                    <p className="font-semibold text-3xl -xl:text-xl w-2/3 leading-tight mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-48" style={{backgroundColor:'#35353b'}}>
                <img src={require('./img/foodlover.png')} alt="Food Lover"/>
                <ul className="flex text-white my-10 font-bold space-x-20 tracking-wide">
                    <li className="cursor-pointer hover:underline">HOME</li>
                    <li className="cursor-pointer hover:underline">ABOUT US</li>
                    <li className="cursor-pointer hover:underline">SERVICES</li>
                    <li className="cursor-pointer hover:underline">FOODS</li>
                    <li className="cursor-pointer hover:underline">CONTACT</li>
                    <li className="cursor-pointer hover:underline">LOCATION</li>
                </ul>
                <ul className="flex space-x-10">
                    <li className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"><FaFacebookF/></li>
                    <li className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"><FaTwitter/></li>
                    <li className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"><FaInstagram/></li>
                    <li className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"><FaPinterestP/></li>
                </ul>
            </div>
        </div>
    )
}
