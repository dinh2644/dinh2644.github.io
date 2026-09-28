import Profile from './components/Profile';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function Portfolio() {
	return (
		<main className="min-h-screen bg-paper text-ink">
			<div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-screen lg:grid-cols-[500px_1fr]">
				<div className="border-b border-rule px-6 py-10 sm:px-10 lg:flex lg:flex-col lg:border-b-0 lg:border-r lg:px-12 lg:py-14">
					<Profile />
				</div>
				<div className="flex flex-col justify-center gap-12 px-6 py-10 sm:px-10 lg:px-20 lg:py-12">
					<Experience />
					<Projects />
				</div>
			</div>
		</main>
	);
}
