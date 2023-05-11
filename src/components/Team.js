import Image from 'next/image';

const Team = () => {
	return (
		<section className='flex h-[80vh] w-screen justify-evenly items-center text-center bg-white text-black'>
			<h1 className='text-3xl mb-8'>The Team</h1>
			<div className='flex flex-col justify-around items-center text-center'>
				<div className='flex justify-center items-center p-8 border-2 rounded-lg backdrop-blur-lg'>
					<Image
						className='rounded-lg bg-black mr-4'
						src=''
						alt=''
						height={72}
						width={72}
					/>
					<div className='flex flex-col justify-center items-center text-center'>
						<h3 className='text-xl opacity-75'>Lorem ipsum dolor sit</h3>
						<p className='opacity-50'>Lorem ipsum dolor</p>
					</div>
				</div>
				<div className='flex justify-center items-center p-8 border-2 rounded-lg backdrop-blur-lg'>
					<Image
						className='rounded-lg bg-black mr-4'
						src=''
						alt=''
						height={72}
						width={72}
					/>
					<div className='flex flex-col justify-center items-center text-center'>
						<h3 className='text-xl opacity-75'>Lorem ipsum dolor sit</h3>
						<p className='opacity-50'>Lorem ipsum dolor</p>
					</div>
				</div>
				<div className='flex justify-center items-center p-8 border-2 rounded-lg backdrop-blur-lg'>
					<Image
						className='rounded-lg bg-black mr-4'
						src=''
						alt=''
						height={72}
						width={72}
					/>
					<div className='flex flex-col justify-center items-center text-center'>
						<h3 className='text-xl opacity-75'>Lorem ipsum dolor sit</h3>
						<p className='opacity-50'>Lorem ipsum dolor</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
