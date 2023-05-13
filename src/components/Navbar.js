import Image from 'next/image';
import Link from 'next/link';
import {
	Bars3Icon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';

const Navbar = () => {
	return (
		<nav className='navbar h-[10vh] z-10 px-16 fixed bg-white dark:black'>
			{/* Desktop Navbar */}
			<div className='navbar-start hidden lg:flex'>
				<Link
					href='/#hero'
					className='hover:opacity-50'>
					<Image
						className='rounded-full bg-white'
						src='http://via.placeholder.com/360x360'
						alt=''
						height={40}
						width={40}
					/>
				</Link>
			</div>

			<div className='navbar-center hidden lg:flex w-[95%] justify-evenly'>
				<ul className='menu menu-horizontal px-1 z-10 bg-inherit'>
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
							height={28}
							width={28}
						/>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#eee] dark:bg-[#111] rounded-box w-52'>
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

			<div className='lg:hidden navbar-center'>
				<Link
					href='/#hero'
					className='hover:opacity-50 text-lg'>
					LIFEHOUSE ACADEMY
				</Link>
			</div>

			<div className='lg:hidden navbar-end'>
				<Link
					href='/#hero'
					className='hover:opacity-50'>
					<Image
						className='rounded-full'
						src='http://via.placeholder.com/360x360'
						alt=''
						height={40}
						width={40}
					/>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
