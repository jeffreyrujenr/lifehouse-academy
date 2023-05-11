const Hero = () => {
	return (
		<section className='flex flex-col h-[80vh] justify-center items-center text-center'>
			<div className='flex flex-col justify-center items-center text-center backdrop-blur-lg bg-white/5 w-[60%] rounded-lg p-8'>
				<h1 className='text-6xl'>LIFEHOUSE ACADEMY</h1>
				<p className='my-8 text-xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad
					magnam tempora autem. Ad, ullam! Corporis, eveniet? Iure porro sed
					harum adipisci quod vero error laboriosam asperiores recusandae. Odio,
					obcaecati!
				</p>
				<div className='flex justify-around items-center text-center w-full px-32'>
					<button className='text-xl px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-500'>
						Courses
					</button>
					<button className='text-xl px-4 py-2 rounded-lg backdrop-blur-lg'>
						Contact Us
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
