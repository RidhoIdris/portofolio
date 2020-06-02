import React,{useEffect,useState} from 'react';
import AOS from 'aos';
import FloatButton from '../Components/FloatButton'
import 'aos/dist/aos.css';

function Byu() {

  const [isOpen, setisOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration : 1000
    })
  });

  return (
    <div className="w-full h-full">
      <div className="header flex -md:flex-col justify-between container -md:px-12 mx-auto mt-8 md:items-center">
          <div className="logo -md:flex -md:justify-between" data-aos='fade-right'>
            <img alt="byu"  className="w-16" src={require('../assets/byu.png')} />
            <button onClick={()=>{setisOpen(!isOpen)}} className="md:hidden font-bold text-2xl focus:outline-none">{ isOpen ? 'X' : '=' }</button>
          </div>
          <ul className={`flex -md:flex-col -md:mt-4 ${isOpen ? '' : '-md:hidden'} `} data-aos='fade-down'>
            <li className="font-semibold  ml-4 xl:ml-16 hover:text-byu cursor-pointer text-center tracking-wider">Fitur</li>
            <li className="font-semibold  ml-4 xl:ml-16 hover:text-byu cursor-pointer text-center tracking-wider">Cara Aktivasi</li>
            <li className="font-semibold  ml-4 xl:ml-16 hover:text-byu cursor-pointer text-center tracking-wider">Paket</li>
            <li className="font-semibold  ml-4 xl:ml-16 hover:text-byu cursor-pointer text-center tracking-wider">Program</li>
            <li className="font-semibold  ml-4 xl:ml-16 hover:text-byu cursor-pointer text-center tracking-wider">Bantuan</li>
            <li className="text-center ml-4 xl:ml-16 tracking-wider -md:mt-2"><button className="border-2 font-bold bg-byu text-white hover:bg-white hover:text-byu border-byu rounded-full px-8 py-1">Beli Paket</button></li>
            <li className="text-center ml-4 xl:ml-16 tracking-wider -md:mt-2"><button className="border-2 font-bold hover:bg-byu hover:text-white text-byu border-byu rounded-full px-8 py-1">Masuk</button></li>
          </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 -md:px-8 container mx-auto mt-24" >
        <div className="left" data-aos='fade-right'>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight -md:text-center">Provider serba digital pertama di Indonesia</h1>
          <div className="right mt-8 justify-center flex items-center md:hidden" data-aos='fade-up'>
            <img alt="byu" className="-md:w-3/4" src={require('../assets/byu-hero.png')}></img>
          </div>
          <p className="mt-8 pr-20 text-gray-500 text-lg -md:text-center -md:pr-0">Bebas pilih kuota plus topping, Semuanya Semaunya, Nikmatin layanan provider internet terbaik di jaringan 4G LTE by Telkomsel</p>
          <div className="-md:flex -md:justify-center">
            <button className="mt-12 border-2 font-bold bg-byu text-white hover:bg-white hover:text-byu border-byu rounded-full px-8 py-2">Beli SIM Card Sekarang</button>
          </div>
          <h3 className="font-bold mt-8 -md:flex -md:justify-center lg:mt-32">Download Aplikasi by.U</h3>
          <div className="flex mt-4 -md:justify-center mb-8">
            <img alt="byu" className="w-32" src={require('../assets/play-store.png')}></img>
            <img alt="byu" className="w-32" src={require('../assets/app-store.jpg')}></img>
          </div>
        </div>
        <div className="right -md:hidden" data-aos='fade-up'>
          <img alt="byu" className="-md:w-3/4" src={require('../assets/byu-hero.png')}></img>
        </div>
      </div>
      {/* <img alt="byu" className="fixed left-0 w-64 bottom-0 opacity-25" src={require('../assets/dot.png')}></img>
      <img alt="byu" className="fixed right-0 w-64 top-0 opacity-25" src={require('../assets/dot.png')}></img> */}
        <FloatButton color="bg-byu"/>
    </div>
  );
}

export default Byu;
