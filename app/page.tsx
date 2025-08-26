import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen md:h-screen flex flex-col bg-white sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5">
				{/* Left Column */}
				<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 md:flex md:items-center">
					<ProfileSection />
				</div>

				{/* Right Column */}
				<div className="md:col-span-3 flex flex-col md:justify-center">
					{/* Skills Section */}
					<div className="">
						<SkillsSection />
					</div>

					{/* Experience Section */}
					<div>
						<ExperienceSection />
					</div>

				</div>
			</div>
		</main>
	);
}
