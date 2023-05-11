import Image from 'next/image';

const Courses = () => {
	return (
		<div className='flex flex-col h-[80vh] justify-center items-center text-center'>
			<h1 className='text-3xl mb-8'>Courses</h1>
			<div className='flex'>
				<div className='flex flex-col justify-center items-center p-8 mx-4 rounded-lg backdrop-blur-lg'>
					<Image
						src=''
						alt=''
						height={150}
						width={200}
						className='bg-white rounded-lg mb-4'
					/>
					<h3 className='text-xl opacity-75'>Lorem ipsum dolor sit</h3>
					<p className='opacity-50 mb-4'>Lorem ipsum dolor</p>
					<button className='text-xl px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-500'>
						Register
					</button>
				</div>
				<div className='flex flex-col justify-center items-center p-8 mx-4 rounded-lg backdrop-blur-lg'>
					<Image
						src=''
						alt=''
						height={150}
						width={200}
						className='bg-white rounded-lg mb-4'
					/>
					<h3 className='text-xl opacity-75'>Lorem ipsum dolor sit</h3>
					<p className='opacity-50 mb-4'>Lorem ipsum dolor</p>
					<button className='text-xl px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-500'>
						Register
					</button>
				</div>
				<div className='flex flex-col justify-center items-center p-8 mx-4 rounded-lg backdrop-blur-lg'>
					<Image
						src=''
						alt=''
						height={150}
						width={200}
						className='bg-white rounded-lg mb-4'
					/>
					<h3 className='text-xl opacity-75'>Lorem ipsum dolor sit</h3>
					<p className='opacity-50 mb-4'>Lorem ipsum dolor</p>
					<button className='text-xl px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-500'>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Courses;
