import Image from 'next/image';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Courses from '@/components/Courses';
import Contact from '@/components/Contact';

export default function Home() {
	return (
		<main className='flex flex-col h-full justify-center items-center text-center'>
			{/* Hero */}
			<Hero />
			{/* Courses */}
			<Courses />
			{/* Team */}
			<Team />
			{/* Contact */}
			<Contact />
		</main>
	);
}
