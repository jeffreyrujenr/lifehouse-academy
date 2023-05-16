import Image from 'next/image';

const team = [
	{
		image: '/Preethi.jpg',
		name: 'Preethi Ravichandran',
		role: 'Video Editing Coach',
	},
	{
		image: '/Sushmita.jpg',
		name: 'Sushmitha Selvadass',
		role: 'Graphic Design Coach',
	},
	{
		image: 'http://via.placeholder.com/360x360',
		name: 'Prabakar Mariyaraj',
		role: 'Entrepreneurship Coach',
	},
];

const Team = () => {
	return (
		<section
			id='team'
			className='flex flex-col min-h-screen w-full justify-center items-center text-center py-16'>
			<h1 className='text-3xl'>Our Team</h1>
			<div className='flex flex-wrap w-full justify-evenly items-center'>
				{team.map((member) => (
					<div
						key={member.name}
						className='card lg:card-side shadow-xl w-96 my-4'>
						<figure>
							<Image
								src={member.image}
								alt=''
								width={360}
								height={360}
								className='rounded bg-white'
								quality={100}
							/>
						</figure>
						<div className='card-body my-auto'>
							<h2 className='card-title mx-auto'>{member.name}</h2>
							<p className='mx-auto opacity-75'>{member.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
