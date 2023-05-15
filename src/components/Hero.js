import Link from 'next/link';

const Hero = () => {
	return (
		<section
			className='hero min-h-screen'
			id='hero'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-4xl font-bold'>LIFEHOUSE ACADEMY</h1>
					<p className='py-6'>
						Lifehouse Academy exists to equip people with technical skills to
						face the challenges of the world and make an impact in society.
					</p>
					<div className='flex justify-evenly items-center px-10'>
						<Link
							href='/#courses'
							className='btn btn-primary'>
							Courses
						</Link>
						<Link
							href='/#contact'
							className='btn btn-outline backdrop-blur-xl'>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
