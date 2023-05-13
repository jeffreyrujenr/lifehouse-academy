import Image from 'next/image';
import Link from 'next/link';

const courses = [
	{
		image: 'http://via.placeholder.com/640x360',
		name: 'Course 1',
		instructor: 'Instructor 1',
		duration: 'Duration 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		image: 'http://via.placeholder.com/640x360',
		name: 'Course 2',
		instructor: 'Instructor 2',
		duration: 'Duration 2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		image: 'http://via.placeholder.com/640x360',
		name: 'Course 3',
		instructor: 'Instructor 3',
		duration: 'Duration 3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
];

const Courses = () => {
	return (
		<section
			id='courses'
			className='flex flex-col min-h-screen w-full justify-center items-center text-center px-8'>
			<h1 className='text-3xl mb-8'>Courses</h1>
			{/* <div className='flex'>
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
			</div> */}
			<div className='flex flex-wrap justify-center items-center'>
				{courses.map((course) => (
					<div
						key={course.name}
						className='card w-96 shadow-xl m-4'>
						<figure>
							<Image
								src={course.image}
								alt=''
								height={300}
								width={400}
								className=''
							/>
						</figure>
						<div className='card-body border-x-[1px] border-b-[1px] rounded-2xl rounded-t-none'>
							<h2 className='card-title'>
								{course.name}
								<div className='badge badge-secondary'>NEW</div>
							</h2>
							<p>{course.description}</p>
							<div className='card-actions justify-between'>
								<div className='badge badge-outline'>{course.duration}</div>
								<div className='badge badge-outline'>{course.instructor}</div>
								<button className='btn btn-primary'>Enroll</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Courses;
