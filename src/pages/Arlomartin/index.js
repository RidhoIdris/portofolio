import React from 'react'
import { FiChevronDown } from "react-icons/fi";


export default function Index() {

    return (
        <div className="font-poppins" style={{background:'linear-gradient(to top, #fd746c, #ff9068)'}}>
            <div className="h-screen w-full flex flex-col justify-center items-center px-8">
                <img className="w-40 md:w-64" src={require('./img/logo.png')} alt="ini logo"/>
                <h1 className="text-red-900 mt-10 md:mt-16 font-bold text-3xl md:text-5xl text-center">Dream Big, Cook Bigger!</h1>
                <p className="text-red-900 mt-2 font-bold text-center">Offering everything that every other cookgroup offers for a fraction of the price</p>
                <button className="mt-10 md:mt-20 px-8 focus:outline-none py-2 font-semibold text-white hover:bg-red-900 rounded-full flex justify-center items-center"><FiChevronDown size={20} className="mr-2"/> Purchase</button>
            </div>
        </div>
    )
}
