import React,{useState} from 'react'


export default function Index() {

    const [nav, setNav] = useState(true)

    return (
        <div className="font-poppins ">
                <div className="h-screen w-full relative overflow-hidden px-8" style={{backgroundColor:"#EFF5FF"}}>
                <div className="absolute" style={{left:'-500px',top:'-300px'}}>
                    <svg width="500%" viewBox="0 0 820 820" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M409.889 819.778C636.264 819.778 819.778 636.264 819.778 409.889C819.778 183.514 636.264 0 409.889 0C183.514 0 0 183.514 0 409.889C0 636.264 183.514 819.778 409.889 819.778Z" fill="white"/>
                    </svg>
                </div>
                <div className="flex flex-wrap -lg:py-4 justify-between h-10p items-center container mx-auto relative z-20">
                    <div className="logo">
                        <img className="w-48" src={require('./img/logo.png')} alt="ini logo"/>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center" onClick={()=>{setNav(!nav)}}>
                            <svg className="fill-current h-6 w-6 text-royal-blue-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <ul className={`flex ${nav && '-lg:hidden'} -lg:py-4 -lg:bg-royal-blue-500 -lg:flex-col -lg:w-full lg:space-x-5 lg:items-center justify-center`}>
                        <li className="text-gray-600 hover:bg-royal-blue-400 -lg:text-white lg:hover:text-gray-500 cursor-pointer lg:hover:underline ">About</li>
                        <li className="text-gray-600 hover:bg-royal-blue-400 -lg:text-white lg:hover:text-gray-500 cursor-pointer lg:hover:underline ">Features</li>
                        <li className="text-gray-600 hover:bg-royal-blue-400 -lg:text-white lg:hover:text-gray-500 cursor-pointer lg:hover:underline ">Login</li>
                        <li className="-lg:hidden"><button className="focus:outline-none text-white bg-royal-blue-500 hover:bg-royal-blue-600 px-10 py-2 rounded-lg">Daftar</button></li>
                    </ul>
                </div>
                <div className="h-90p lg:flex-row -lg:justify-center flex-col flex items-center container mx-auto relative z-10">
                    <div className="-lg:text-center -lg:flex -lg:flex-col -lg:items-center">
                        <h1 className="lg:text-5xl text-2xl md:text-4xl leading-tight font-semibold"><span className="text-royal-blue-500">Box Manageer</span> <span style={{color:'#1C234A'}}>is More<br/>than just storage</span></h1>
                        <p style={{color:"#7290B5"}} className="mt-5 font-medium md:text-lg">Save files and you in Box Manager and <br/> access from any device, anywhere.</p>
                        <img className="w-50p mt-5 lg:hidden" src={require('./img/hero.png')} alt="hero" />
                        <div className="lg:mt-20 flex space-x-4">
                            <button className="focus:outline-none font-semibold text-white bg-royal-blue-500 hover:bg-royal-blue-600 px-4 py-2 lg:px-16 lg:py-4 mt-5 rounded-lg">Get Started</button>
                            <button className="focus:outline-none font-semibold hover:text-white text-royal-blue-500 hover:bg-royal-blue-500 px-4 py-2 lg:px-16 lg:py-4 mt-5 rounded-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="flex-1 -lg:hidden justify-center flex">
                        <img className="w-60p" src={require('./img/hero.png')} alt="hero" />
                    </div>
                </div>
           </div>
        </div>
    )
}
