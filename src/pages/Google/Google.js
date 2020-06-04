import React,{useState} from 'react'
import { BsGrid3X3GapFill,BsSearch,BsX } from "react-icons/bs";

export default function Google() {
    const [state, setstate] = useState('')
    
    return (
        <div className="flex flex-col h-screen">
            <div className="">
                <ul className="flex justify-end py-8 px-8 items-center">
                    <li className="mr-6 text-gray-500 hover:underline cursor-pointer">Gmail</li>
                    <li className="mr-6 text-gray-500 hover:underline cursor-pointer">Gambar</li>
                    <li className="mr-6 text-gray-500 cursor-pointer"><BsGrid3X3GapFill/></li>
                    <li className="mr-6 text-gray-500 cursor-pointer">
                        <img alt="user" src={require('../../assets/portofolio/avatar.svg')} className="w-8 h-8 rounded-full"/>
                    </li>
                </ul>
            </div>
            <div className="h-full pb-20 flex flex-col justify-center items-center">
                    <img alt="google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                    <div className="relative w-9/12 lg:w-2/5 mt-6">
                        <input id="search" value={state} onChange={(e)=>{setstate(e.target.value) }} className="border border-gray-300 px-10 py-4 text-gray-700 w-full h-12 rounded-full  focus:outline-none focus:shadow-lg" />
                        <BsSearch style={{left:'15px', top:'16'}} className="absolute text-gray-500" />
                        {state && <BsX onClick={()=>{setstate('');document.getElementById("search").focus()}} style={{right:'15px', top:'16'}} size={18} className="absolute hover:cursor-pointer text-gray-500" />}
                    </div>
                    <div className="flex mt-6 none px-2 py-2 inline-block">
                        <button style={{backgroundColor:"#f4f4f4", color:'#676f79'}} className="text-gray-500 px-4 py-2 rounded-md hover:shadow-lg hover:text-gray-700 inline-block ">Penulusuran Google</button>
                        <button style={{backgroundColor:"#f4f4f4", color:'#676f79'}} className="text-gray-500 px-4 py-2 rounded-md hover:shadow-lg hover:text-gray-700 inline-block ml-4">Saya Lagi Beruntung</button>
                    </div>
                    <div className="text-sm text-gray-600 mt-4">
                        Google Menawarkan: 
                        <span style={{color:'#3472d0'}} className="hover:underline hover:cursor-pointer ml-4">English</span> 
                        <span style={{color:'#3472d0'}} className="hover:underline hover:cursor-pointer ml-4">Bali</span>
                    </div>
            </div>
            <div style={{backgroundColor:'#f2f2f2'}} className="bg-green-700 text-gray-600 border-b px-8 py-2">Indonesia</div>
            <div style={{backgroundColor:'#f2f2f2'}} className="bg-green-800 text-gray-700 px-8 py-2 flex -md:flex-col justify-between">
                <div>
                    <span className="hover:underline hover:cursor-pointer ">Periklanan</span>
                    <span className="hover:underline hover:cursor-pointer ml-8">Bisnis</span>
                    <span className="hover:underline hover:cursor-pointer ml-8">Tentang</span>
                    <span className="hover:underline hover:cursor-pointer ml-8">Cara Kerja Penulusuran</span>
                </div>
                <div>
                    <span className="hover:underline hover:cursor-pointer mr-8">Privasi</span>
                    <span className="hover:underline hover:cursor-pointer mr-8">Persyaratan</span>
                    <span className="hover:underline hover:cursor-pointer ">Setelan</span>
                </div>
            </div>
        </div>
    )
}
