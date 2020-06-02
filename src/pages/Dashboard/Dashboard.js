import React,{useState} from 'react'
import { FiUser,FiArrowRightCircle,FiGrid,FiActivity,FiFilter,FiChevronRight,FiChevronDown } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiAnchor } from "react-icons/ti";


export default function Dashboard() {

    const [state, setstate] = useState(false)
    const [menu, setmenu] = useState('Dashboard')
    const [submenu, setSubmenu] = useState('')

    const Menu = () =>{
        const items = [
            { 
                name: 'Dashboard', 
                label: 'Dashboard',
                icon: <FiActivity/>
            },
            {   name: 'Master', 
                label: 'Master',
                icon: <FiGrid/>,
                items: [
                    { name: 'statements', label: 'Statements' },
                    { name: 'reports', label: 'Reports' },
                ],
            },
            {   name: 'Report', 
                label: 'Report',
                icon: <FiFilter/>,
                items: [
                    { name: 'profile', label: 'Profile' },
                    { name: 'insurance', label: 'Insurance' },
                ],
            },
            
        ]
        return(
            <ul>
            {items.map(({label,name,icon,items: subItems})=>(
                <li key={name} className={`px-5 mt-6 ${menu === name ? 'border-l-4 border-indigo-500':''} cursor-pointer`}>
                    <div onClick={()=>{
                        setmenu(name)
                        setSubmenu()}} className={`flex items-center justify-between ${menu === name ? 'text-indigo-500':''} hover:text-indigo-500`}>
                        <div className="flex items-center">
                            {icon}
                            <span className="ml-3 -lg:hidden font-semibold">{label}</span>
                        </div>
                        {Array.isArray(subItems) ? (
                            menu === name ? <FiChevronDown/>:<FiChevronRight/>
                        ) : null}
                    </div>
                    {Array.isArray(subItems) ? (
                    <div>
                    <ul className={`ml-8 ${menu === name ?'':'hidden'} mt-3 grid gap-2`}>
                        {subItems.map((subItem) => (
                        <li onClick={()=>{setSubmenu(subItem.name)}} key={subItem.name} className={`hover:text-indigo-500 ${submenu === subItem.name ? 'text-indigo-500':''} cursor-pointer`}>{subItem.label}</li>
                        ))}
                    </ul>
                    </div>
                    ) : null}
                </li>
            ))}
            </ul>
        )
    }

    return (
        <div className="bg-light-blue flex h-screen text-white overflow-y-hidden">

            {/* SideBar */}

            <div className="bg-dark-blue w-64 overflow-y-auto flex flex-col justify-between">
                <div>
                    <div className="py-8 px-5 flex items-center">
                        <TiAnchor size={34}/>
                        <span className="ml-3 -lg:hidden text-2xl font-bold">Logo</span>
                    </div>
                    <Menu/>
                </div>
                <div className="px-4 mb-5">
                    <img alt="sidebar" src={require('../../assets/admin/header.svg')} />
                </div>
            </div>

            {/* SideBar */}

            <div className="w-full flex flex-col">
                <div className="flex items-center justify-between px-10 py-8">
                    <div>Dashboard</div>
                    <div className="flex items-center">
                        <span className="italic text-gray-500 text-sm">01-June-2020, Monday</span>
                        <div className="relative inline-block">
                            <button onMouseEnter={()=>{setstate(!state)}} className="focus:outline-none relative z-10 focus:shadow-outline tracking-widest bg-teal-500 py-2 px-2 ml-4  rounded-full"><FiUser/></button>
                            <div onClick={()=>{setstate(!state)}} className={`fixed ${state ? '':'hidden'} inset-0 bg-black opacity-50 h-full w-full z-auto`}>
                            </div>
                            <ul className={`absolute ${state ? '':'hidden'} bg-indigo-700 cursor-pointer rounded-lg w-32 py-4 right-0 mt-2`}>
                                <li className="hover:bg-indigo-500 px-4">One</li>
                                <li className="hover:bg-indigo-500 px-4">Two</li>
                                <li className="hover:bg-indigo-500 px-4">Trhee</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto px-10">
                    <div className="flex justify-between text-indigo-500">
                            <span>Your courses</span>
                            <button className="flex items-center focus:outline-none hover:text-indigo-300">
                                <span>More</span>
                                <i className="ml-2"><FiArrowRightCircle/></i>
                            </button>
                    </div>
                    <div className="grid mt-6 gap-2 md:grid-flow-col -md:grid-rows-1">
                        <div className="bg-dark-blue w-full h-32 rounded-lg flex justify-between px-8 items-center">
                            <div className="flex items-center">
                                <button className="bg-indigo-500 w-16 rounded-lg h-16 mr-4 rounded-lg font-bold">B1</button>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 italic">Business English</span>
                                    <span className="font-semibold">Grammar</span>
                                </div>
                            </div>
                            <button><IoIosArrowRoundForward size="42"/></button>
                        </div>
                        <div className="bg-dark-blue w-full h-32 rounded-lg flex justify-between px-8 items-center">
                            <div className="flex items-center">
                                <button className="bg-indigo-500 w-16 rounded-lg h-16 mr-4 rounded-lg font-bold">B2</button>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 italic">Business English</span>
                                    <span className="font-semibold">Pharsar Verbs</span>
                                </div>
                            </div>
                            <button><IoIosArrowRoundForward size="42"/></button>
                        </div>
                        <div className="bg-dark-blue w-full h-32 rounded-lg flex justify-between px-8 items-center">
                            <div className="flex items-center">
                                <button className="bg-indigo-500 w-16 rounded-lg h-16 mr-4 rounded-lg font-bold">B3</button>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 italic">Business English</span>
                                    <span className="font-semibold">Vocabulary</span>
                                </div>
                            </div>
                            <button><IoIosArrowRoundForward size="42"/></button>
                        </div>
                    </div>
                </div>
                <div className="italic text-xs text-gray-500 px-10 mb-4">© 2020 · Ridho Idris · All rights reserved</div>
            </div>
        </div>
    )
}
