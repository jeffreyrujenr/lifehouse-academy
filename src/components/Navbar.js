'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
	Bars3Icon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
	}, [theme]);

	return (
		<nav className='navbar z-10 fixed backdrop-blur-xl border-[1px] rounded-xl'>
			{/* Desktop Navbar */}
			<div className='navbar-start hidden lg:flex'>
				<Link
					href='/#hero'
					className='hover:opacity-75'>
					<Image
						className='rounded-full h-[8vh] w-[8vh] m-2'
						src='/LA_LOGO.png'
						alt=''
						height={128}
						width={128}
					/>
				</Link>
			</div>

			<div className='navbar-center hidden lg:flex w-[95%] justify-evenly'>
				<ul className='menu menu-horizontal z-10 bg-inherit'>
					{/* <li tabIndex={0}>
						<a>
							Schools
							<ChevronDownIcon
								height={20}
								width={20}
							/>
						</a>
						<ul className='p-2'>
							<li>
								<Link href='/school-of-music'>
									School of Media & Leadership
								</Link>
							</li>
							<li>
								<Link href='/school-of-media'>
									School of Entrepreneurship & Business
								</Link>
							</li>
						</ul>
					</li> */}
					<li>
						<Link href='/#courses'>Courses</Link>
					</li>
					<li>
						<Link href='/#team'>Our Team</Link>
					</li>
					<li>
						<Link href='/#contact'>Contact Us</Link>
					</li>
				</ul>
			</div>

			{/* Mobile Navbar */}
			<div className='lg:hidden navbar-start'>
				<div className='dropdown dropdown-bottom'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'>
						<Bars3Icon
							height={128}
							width={128}
							className='h-[5vh] w-[5vh]'
						/>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-6 p-2 shadow rounded-box w-52 bg-white'>
						{/* <li tabIndex={0}>
							<p>
								Schools
								<ChevronRightIcon
									height={12}
									width={12}
								/>
							</p>
							<ul className='p-2'>
								<li>
									<Link href='/school-of-music'>
										School of Media & Leadership
									</Link>
								</li>
								<li>
									<Link href='/school-of-media'>
										School of Entrepreneurship & Business
									</Link>
								</li>
							</ul>
						</li> */}
						<li>
							<Link href='/#courses'>Courses</Link>
						</li>
						<li>
							<Link href='/#team'>Our Team</Link>
						</li>
						<li>
							<Link href='/#contact'>Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* <div className='lg:hidden navbar-center'>
				<Link
					href='/#hero'
					className='hover:opacity-50 text-lg'>
					LIFEHOUSE ACADEMY
				</Link>
			</div> */}

			<div className='lg:hidden navbar-end'>
				<Link
					href='/#hero'
					className='hover:opacity-75'>
					<Image
						className='rounded-full h-[8vh] w-[8vh] m-2'
						src='/LA_LOGO.png'
						alt=''
						height={128}
						width={128}
					/>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
