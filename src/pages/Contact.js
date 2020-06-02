import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        AOS.init({
          duration : 1000
        })
      });
    return (
        <div data-aos="fade-down">
            <div>
                <div className="header flex justify-between container mx-auto py-12 px-6 md:px-0 items-center border-b-2">
                    <div className="font-bold text-3xl text-main-color">Logo</div>
                    <Link to="/">
                        <svg className="w-6 h-6 fill-current text-main-color hover:text-purple-500" aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path></svg>
                    </Link>
                </div>
                    <div className="flex justify-center -mt-20">
                        <img className="w-32 h-32" alt="avatar" src={require('../assets/portofolio/avatar.svg')}/>
                    </div>
                    <div className="text-center py-12 px-6">
                        <h1 className="text-4xl font-semibold text-center">Thanks for taking the time to reach out.<br className="xl:block"/> How can I help you today?</h1>
                    </div>
                    <form action="#" className="px-6 md:px-32 text-main-color text-2xl">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="h-16 w-full font-semibold rounded-lg px-6 border-main-color border focus:border-2 focus:border-main-color focus:outline-none"/>
                            <input type="text" placeholder="Email" className="h-16 w-full font-semibold rounded-lg px-6 border-main-color border focus:border-2 focus:border-main-color focus:outline-none"/>
                        </div>
                        <textarea name="" className="pt-4 font-semibold rounded-lg px-6 border-main-color border focus:border-2 focus:border-main-color focus:outline-none w-full mt-4" placeholder="Message" rows="6"></textarea>
                        <div className="flex justify-center mt-10 mb-16">
                        <Link to="/" className="border-main-color border-2 py-1 px-10 hover:bg-main-color hover:text-white font-semibold rounded-full"> Submit</Link>
                        </div>
                    </form>
                </div>
        </div>
    )
}
