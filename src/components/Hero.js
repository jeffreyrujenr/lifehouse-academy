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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
						eligendi neque aspernatur ad aut, repellat mollitia quisquam?
						Explicabo, tenetur quo.
					</p>
					<div className='flex justify-evenly items-center px-10'>
						<Link
							href='/#courses'
							className='btn btn-primary'>
							Courses
						</Link>
						<Link
							href='/#contact'
							className='btn btn-outline'>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
