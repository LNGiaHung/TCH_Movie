import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import { useState } from "react";

const HomeScreen = () => {
	const [imgLoading, setImgLoading] = useState(true);

	return (
		<>
			<div className='relative h-screen text-white'>
				<Navbar />

				{imgLoading && (
					<div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center shimmer -z-10' />
				)}

				<img
					src="/hero.png"
					alt='Hero img'
					className='absolute top-0 left-0 w-full h-full object-cover -z-50'
					onLoad={() => setImgLoading(false)}
				/>

				<div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true' />

				<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>
					<div className='bg-gradient-to-b from-black via-transparent to-transparent 
					absolute w-full h-full top-0 left-0 -z-10' />

					<div className='max-w-2xl'>
						<h1 className='mt-4 text-6xl font-extrabold text-balance'>
							Welcome to Netflix
						</h1>
						<p className='mt-2 text-lg'>
							2024 | PG-13
						</p>

						<p className='mt-4 text-lg'>
							Watch unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
						</p>
					</div>

					<div className='flex mt-8'>
						<Link
							to="/login"
							className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex
							 items-center'
						>
							<Play className='size-6 mr-2 fill-black' />
							Get Started
						</Link>

						<Link
							to="/signup"
							className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'
						>
							<Info className='size-6 mr-2' />
							More Info
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeScreen;