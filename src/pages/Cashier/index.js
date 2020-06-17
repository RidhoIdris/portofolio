import React from 'react'
import { FiHome, FiPieChart, FiMessageCircle, FiBookOpen, FiSettings, FiLogIn, FiSearch, FiChevronDown, FiEdit } from "react-icons/fi";

export default function Index() {
    const Category = ({image,name,active}) => {
		return(
			<div className="h-32 bg-dark-blue rounded-lg flex flex-col items-center justify-center">
                <div className={`border ${active ? 'bg-orange-500' :''} border-orange-500 p-4 rounded-lg hover:bg-orange-500 cursor-pointer`}>
                    <img src={image} alt={name} />
                </div>
                <span className="mt-1">{name}</span>
            </div>
		)
	}
    const Menu = ({image,name,harga}) => {
		return(
			<div className="h-48 bg-dark-blue hover:bg-orange-500 hover:text-white rounded-lg flex flex-col items-center justify-center">
                <div className={` bg-orange-500 hover:bg-dark-blue w-24 h-24 flex justify-center items-center rounded-full cursor-pointer`}>
                    <img className="w-20" src={image} alt={name} />
                </div>
                <span className="mt-1">{name}</span>
                <span className="text-gray-500">${harga}</span>
            </div>
		)
	}
    const Pesanan = ({image}) => {
		return(
			<div className="flex items-center justify-between px-8 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center text-white">
                        <div className="bg-orange-500 w-20 p-2 rounded-lg cursor-pointer">
                            <img src={image} alt="aasd" />
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <h1>Cheese Burger</h1>
                            <span>$5.48</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center text-gray-500">
                    <span className="mx-3">x2</span>
                    <h1 className="text-lg">$10.96</h1>
                </div>
            </div>
		)
	}
    return (
        <div className="w-full h-screen bg-light-blue flex">
            <div className="h-full bg-dark-blue overflow-y-auto flex flex-col items-center px-6">
                <div className="py-12">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.5 40V20C52.4991 19.1232 52.2676 18.262 51.8288 17.5029C51.3901 16.7438 50.7593 16.1134 50 15.675L32.5 5.675C31.7399 5.23616 30.8777 5.00513 30 5.00513C29.1223 5.00513 28.2601 5.23616 27.5 5.675L10 15.675C9.24066 16.1134 8.60995 16.7438 8.17115 17.5029C7.73236 18.262 7.5009 19.1232 7.5 20V40C7.5009 40.8768 7.73236 41.738 8.17115 42.4971C8.60995 43.2562 9.24066 43.8866 10 44.325L27.5 54.325C28.2601 54.7638 29.1223 54.9949 30 54.9949C30.8777 54.9949 31.7399 54.7638 32.5 54.325L50 44.325C50.7593 43.8866 51.3901 43.2562 51.8288 42.4971C52.2676 41.738 52.4991 40.8768 52.5 40Z" stroke="#E43F5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.75 10.525L30 17.025L41.25 10.525" stroke="#E43F5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.75 49.475V36.5L7.5 30" stroke="#E43F5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M52.5 30L41.25 36.5V49.475" stroke="#E43F5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.17505 17.4L30 30.025L51.825 17.4" stroke="#E43F5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30 55.2V30" stroke="#E43F5A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <ul className="mt-2 space-y-2">
                    <li className="cursor-pointer shadow-red text-white bg-merah-500 w-20 h-20 rounded-lg flex flex-col justify-center items-center">
                        <FiHome size={32}/>
                        <span className="text-sm mt-1">Home</span>
                    </li>
                    <li className="cursor-pointer text-white hover:bg-merah-500 hover:shadow-red w-20 h-20 rounded-lg flex flex-col justify-center items-center">
                        <FiPieChart size={32}/>
                        <span className="text-sm mt-1">Dashboard</span>
                    </li>
                    <li className="cursor-pointer text-white hover:bg-merah-500 hover:shadow-red w-20 h-20 rounded-lg flex flex-col justify-center items-center">
                        <FiMessageCircle size={32}/>
                        <span className="text-sm mt-1">Message</span>
                    </li>
                    <li className="cursor-pointer text-white hover:bg-merah-500 hover:shadow-red w-20 h-20 rounded-lg flex flex-col justify-center items-center">
                        <FiBookOpen size={32}/>
                        <span className="text-sm mt-1">Bills</span>
                    </li>
                    <li className="cursor-pointer text-white hover:bg-merah-500 hover:shadow-red w-20 h-20 rounded-lg flex flex-col justify-center items-center">
                        <FiSettings size={32}/>
                        <span className="text-sm mt-1">Setting</span>
                    </li>
                </ul>
                <div className="cursor-pointer my-auto text-white hover:text-merah-500 w-20 h-20 rounded-lg flex flex-col justify-center items-center">
                    <FiLogIn size={32}/>
                    <span className="text-sm mt-1">Log Out</span>
                </div>
            </div>
            <div className="h-full w-80p overflow-y-auto text-white">
                <div className="flex justify-between items-center m-12">
                    <h1 className="text-4xl"><b>Menu</b> Category</h1>
                    <div className="relative">
                        <input placeholder="Search for food, cofee, etc" className="bg-dark-blue focus:outline-none pl-8 pr-6 placeholder-gray-500 h-10 w-64 rounded-lg"/>
                        <FiSearch style={{top:'13'}} className="text-gray-500 ml-2 absolute"/>
                    </div>
                </div>
                <div className="grid grid-cols-7 mx-12 gap-6 ">
                    <Category name="Coffee" image={require('./icon/coffee.svg')} />
                    <Category active name="Burger" image={require('./icon/burger.svg')} />
                    <Category name="Pizza" image={require('./icon/pizza.svg')} />
                    <Category name="Snak" image={require('./icon/snack.svg')} />
                    <Category name="Drink" image={require('./icon/drink.svg')} />
                    <Category name="Donuts" image={require('./icon/donuts.svg')} />
                    <Category name="Ice Cream" image={require('./icon/ice_cream.svg')} />
                </div>
                <div className="flex justify-between items-center m-12">
                    <h1 className="text-4xl"><b>Choose</b> Order</h1>
                    <div className="flex items-center justify-center cursor-pointer hover:text-orange-500">
                        <h1>Short By <b>Popular</b></h1>
                        <FiChevronDown className="ml-1"/>
                    </div>
                </div>
                <div className="grid grid-cols-5 m-12 gap-6 ">
                    <Menu harga="5.89" name="Triple Burger" image={require('./menu/image 9.png')} />
                    <Menu harga="6.24" name="Double Cheese" image={require('./menu/image 10.png')} />
                    <Menu harga="2.15" name="Cheese Burger" image={require('./menu/image 11.png')} />
                    <Menu harga="3.25" name="Original Burger" image={require('./menu/image 12.png')} />
                    <Menu harga="8.99" name="Kebab Katsu" image={require('./menu/image 17.png')} />
                    <Menu harga="4.27" name="Happy Breakfast" image={require('./menu/image 18.png')} />
                    <Menu harga="1.89" name="Chiken Pop3" image={require('./menu/image 19.png')} />
                    <Menu harga="5.35" name="Chiken Nugget" image={require('./menu/image 20.png')} />
                </div>
            </div>
            <div className="h-full bg-dark-blue w-30p overflow-y-auto">
                <div className="flex items-center justify-between py-12 px-8">
                    <h1 className="text-white text-3xl"><b>Order</b> Menu</h1>
                    <button type="button" className="w-10 focus:outline-none flex items-center justify-center rounded-lg h-10 text-white bg-merah-500"><FiEdit/></button>
                </div>
                <Pesanan name="Cheese Burger" image={require('./menu/image 11.png')}/>
                <Pesanan name="Triple Burger" image={require('./menu/image 9.png')}/>
                <Pesanan name="Original Burger" image={require('./menu/image 12.png')}/>
                <Pesanan name="Kebab Katsu" image={require('./menu/image 17.png')}/>
                <hr className="m-8"/>
                <div className="px-8">
                    <div className="flex items-center justify-between text-white">
                        <span>Sub Total</span>
                        <span>$43.84</span>
                    </div>
                    <div className="flex items-center justify-between text-white">
                        <span>PPN (10%)</span>
                        <span>$4.38</span>
                    </div>
                    <div className="flex items-center justify-between text-white">
                        <span>Total</span>
                        <b>$48.22</b>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <button type="button" className="w-full focus:outline-none rounded-lg h-10 flex items-center justify-center text-white bg-merah-500"><b className="mr-2">Charger</b>$48.22</button>
                </div>
            </div>
        </div>
    )
}
