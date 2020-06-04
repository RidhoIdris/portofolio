import React from 'react'
import {Link} from 'react-router-dom'

export default function Portofolio() {

	const Card = ({image,title,link}) => {
		return(
			<div className="bg-white w-full rounded-lg shadow-lg relative">
				<div>
					<img src={image} alt="byu" className="w-full h-64 object-cover rounded-t-lg" />
					<h1 className="py-6 text-center text-lg font-bold">{title}</h1>
				</div>
				<div className="transition ease-in duration-200 bg-main-color absolute top-0 w-full w-full h-full opacity-0 hover:opacity-100 rounded-lg flex justify-center items-center">
				<Link to={link} className="transition-150 border-white border-2 py-1 px-4 hover:bg-white hover:text-main-color text-white font-semibold rounded-full"> View Website</Link>
				</div>
			</div>
		)
	}

    return (
        <div>
			{/* Header */}
			<div className="header flex justify-between container mx-auto py-6 px-6 md:px-0 items-center">
					<div className="font-bold text-3xl">Ridho Idris</div>
					<Link to="/contact" className="transition-150 border-main-color border-2 py-1 px-4 hover:bg-main-color hover:text-white font-semibold rounded-full"> Say Hello</Link>
			</div>
			{/* Header */}

			{/* Hero */}
			<div className="flex flex-col mt-10 px-6 md:px-0  items-center">
				<h1 className="text-4xl -md:text-3xl text-center font-bold">Designer, Front-end Developer, Back-end Developer</h1>
				<p className="text-2xl -md:text-xl text-center mt-2">I design and code beautifully simple things, and I love what I do.</p>
				<img src={require('../assets/portofolio/avatar.svg')} alt="avatar" className="mt-10"/>
				<img src={require('../assets/portofolio/hero.svg')} alt="hero" className="mt-10"/>
			</div>
			{/* Hero */}
			
			{/* Description */}
			<div className="w-full px-6 md:px-0 h-auto bg-main-color flex flex-col items-center justify-center pt-20 pb-64">
					<h1 className="md:text-3xl text-2xl text-white font-bold">Hi, I’m Ridho. Nice to meet you.</h1>
					<p className="text-white md:w-1/2 mt-4 text-center">I am a Full Stack Developer. I have 4+ years experience in Web Applications,Mobile App, Social Apps, E Learning Platforms, Online Shopping, Job Portals, CRMs, ERP Systems using HTML5, CSS3, JavaScript, AJAX, Jquery, NodeJS, ReactJS, NativeJS, Bootstrap,Php,SQL, Mysqli, codeigniter, Laravel, wordPress. I work tirelessly to ensure every job is done on time and correctly. Thanks for visiting my profile :)</p>
			</div>
			{/* Description */}

			{/* Skill */}
			<div className="flex justify-center px-12 xl:px-40 text-center -mt-40 -md:mb-0 mb-32 flex flex-col md:flex-row">
					<div className="w-full md:w-1/3 mb-16 md:mb-0 md:rounded-r-none rounded-r-lg bg-white shadow rounded-l-lg px-12 py-12">
						<div className="flex justify-center mt-10"><img src={require('../assets/portofolio/designer.svg')} alt="icon designer"/></div>
							<h1 className="font-bold text-2xl mt-8">Designer</h1>
							<p className="mt-2">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
							<h3 className="mt-10 text-main-color font-semibold text-md">Things I enjoy designing:</h3>
							<p className="mt-2">UX, UI, Web, Mobile, Apps, Logos</p>
							<h3 className="mt-10 text-main-color font-semibold text-md">Design Tools:</h3>
							<ul className="mt-2">
								<li className="mt-2">Balsamiq Mockups</li>
								<li className="mt-2">Figma</li>
								<li className="mt-2">Sketch</li>
								<li className="mt-2">Photoshop</li>
								<li className="mt-2">Adobe Ilustrator</li>
								<li className="mt-2">Corel Draw</li>
								<li className="mt-2">Pen & Paper</li>
							</ul>
						</div>
					<div className="w-full md:w-1/3 mb-16 md:mb-0 md:rounded-r-none rounded-r-lg bg-white shadow px-12 py-12">
						<div className="flex justify-center mt-10"><img src={require('../assets/portofolio/frontend.svg')} alt="icon portofolio"/></div>
						<h1 className="font-bold text-2xl mt-8">Front-end Developer</h1>
						<p className="mt-2">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
						<h3 className="mt-10 text-main-color font-semibold text-md">Languages I speak:</h3>
						<p className="mt-2">HTML, CSS, Sass, Less, Javascript</p>
						<h3 className="mt-10 text-main-color font-semibold text-md">Dev Tools:</h3>
						<ul className="mt-2">
							<li className="mt-2">React Js</li>
							<li className="mt-2">React Native</li>
							<li className="mt-2">Vue Js</li>
							<li className="mt-2">Bootstrap</li>
							<li className="mt-2">Tailwind CSS</li>
							<li className="mt-2">Ant Design</li>
							<li className="mt-2">Semantic UI</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3 mb-16 md:mb-0 rounded-r-lg bg-white shadow px-12 py-12">
						<div className="flex justify-center mt-10"><img className="w-16" src={require('../assets/portofolio/coding.svg')} alt="icon coding"/></div>
						<h1 className="font-bold text-2xl mt-5">Back-end Developer</h1>
						<p className="mt-2">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
						<h3 className="mt-10 text-main-color font-semibold text-md">Languages I speak:</h3>
						<p className="mt-2">PHP, NodeJS, Pyton</p>
						<h3 className="mt-10 text-main-color font-semibold text-md">Dev Tools:</h3>
						<ul className="mt-2">
							<li className="mt-2">Laravel</li>
							<li className="mt-2">Lumen</li>
							<li className="mt-2">Codeigniter</li>
							<li className="mt-2">Express Js</li>
							<li className="mt-2">Adonis Js</li>
							<li className="mt-2">Django</li>
							<li className="mt-2">API</li>
							<li className="mt-2">SSO</li>
						</ul>
					</div>
			</div>
			{/* Skill */}

			{/* Portofolio */}
			<div className="flex justify-center mb-20 flex-col items-center -md:px-8 px-24">
				<h1 className="md:text-3xl text-4xl font-bold">My Recent Work</h1>
				<p className="text-center">Here are a few design projects I've worked on recently. Want to see more? <Link to="/contact" className="cursor-pointer font-semibold text-main-color">Email me.</Link></p>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 -lg:w-full">
					<Card image={require('../assets/portofolio/byu.JPG')} title="Redesign App By.u" link="/byu" />
					<Card image={require('../assets/portofolio/dashboard.JPG')} title="Simple Dashboard" link="/dashboard" />
					<Card image={require('../assets/portofolio/google.jpg')} title="Clone Google Search" link="/google" />
				</div>
				<button className="transition-150 focus:outline-none mt-16 border-main-color border-2 py-2 px-16 hover:bg-main-color hover:text-white text-main-color font-semibold rounded-full"> Load More</button>
			</div>
			{/* Portofolio */}

			{/* Footer */}
			<div className="w-full bg-main-color py-5 text-white px-6 md:px-20 flex justify-between">
				<a href="/" className="text-white hover:underline hover:text-gray-400">Handcrafted by me @Ridho Idris</a>
				<a className="font-sm text-white hover:underline hover:text-gray-400" href="https://tailwindcss.com/">Made With React and TailwindCSS</a>
			</div>
			{/* Footer */}
        </div>
    )
}
