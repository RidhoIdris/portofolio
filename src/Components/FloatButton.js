import React from 'react'
import {Link} from 'react-router-dom'

export default function FloatButton({color}) {
    return (
        <div className="fixed right-0 bottom-0 mr-8 mb-8">
            <Link to="/">
                <button className={`rounded-full ${color} px-2 focus:outline-none py-2 hover:bg-blue-300 `} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></button>
            </Link>
        </div>
    )
}
