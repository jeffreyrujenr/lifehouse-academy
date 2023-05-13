import Image from 'next/image';

const team = [
	{
		image: 'http://via.placeholder.com/360x360',
		name: 'Preethi Ravichandran',
		role: 'Video Editor',
	},
	{
		image: 'http://via.placeholder.com/360x360',
		name: 'Sushmitha ',
		role: 'Designer',
	},
	{
		image: 'http://via.placeholder.com/360x360',
		name: 'Prabakar Mariyaraj',
		role: 'Entrepreneur',
	},
];

const Team = () => {
	return (
		<section
			id='team'
			className='flex flex-col min-h-screen w-full justify-center items-center text-center p-8'>
			<h1 className='text-3xl mb-8'>Our Team</h1>
			<div className='flex flex-wrap w-full justify-evenly items-center'>
				{team.map((member) => (
					<div
						key={member.name}
						className='card lg:card-side shadow-xl w-96 my-4'>
						<figure>
							<Image
								src={member.image}
								alt=''
								width={100}
								height={100}
								className='rounded lg:mr-0'
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
