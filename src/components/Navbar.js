import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='flex h-[15vh] justify-center items-center text-center bg-[#111] sticky top-0 left-0 right-0 z-10'>
			<div className='w-[25%] flex justify-center items-center text-center'>
				<Link href=''>
					<Image
						className='rounded-full bg-white'
						src=''
						alt=''
						height={72}
						width={72}
					/>
				</Link>
			</div>
			<div className='w-[75%] pl-32 flex justify-evenly items-center text-center'>
				<Link
					href=''
					className='text-xl'>
					TEAM
				</Link>
				<Link
					href=''
					className='text-xl'>
					SCHOOLS
				</Link>
				<Link
					href=''
					className='text-xl'>
					CONTACT US
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
