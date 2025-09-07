const ExperienceSection = () => {
	const experiences = [
		{
			id: 1,
			role: 'Associate Software Engineer',
			company: 'Enable Healthcare Inc',
			period: 'Sep. 2025 - Present',
			highlights: 'Develop, maintain, and secure REST APIs, backend services, web interfaces, and AI solutions for healthcare practitioners',
		},
		{
			id: 2,
			role: 'AI Model Trainer',
			company: 'Outlier AI (Freelance)',
			period: 'May 2025 - Jul. 2025',
			highlights: 'Improved AI models through data annotations, prompt engineering, and quality assurance',
		},
		{
			id: 3,
			role: 'Walmart USA Advanced Software Engineering Virtual Experience',
			company: 'Forage (Certificate)',
			period: 'Issued May 2025',
			highlights: "Developed a novel heap data structure in Java for shipping logistics and designed a multi-mode data processor with UML for Walmart's internal teams",
		},
		{
			id: 4,
			role: 'Software Developer Intern',
			company: 'HACU / Department of the Treasury (Contract)',
			period: 'Jun. 2022 - Jan. 2025',
			highlights: 'Designed, developed, tested, and deployed software applications for Enterprise Applications',
		},
		{
			id: 5,
			role: 'Software Engineer Fellow',
			company: 'Headstarter AI',
			period: 'Jul. 2024 - Sep. 2024',
			highlights: 'Led a team of 4, built & deployed 5 full-stack AI applications, each reaching over 100 users',
		},
		{
			id: 6,
			role: 'CodePath WEB102',
			company: 'CodePath',
			period: 'Sep. 2023 - Nov. 2023',
			highlights: 'Developed 5 data-driven React apps, integrated external APIs, routing, and PostgreSQL',
		},
		{
			id: 7,
			role: 'Lyft Back-End Engineering Job Simulation',
			company: 'Forage (Certificate)',
			period: 'Issued Nov. 2023',
			highlights: 'Refactored and extended a Lyft Rentals backend from inheritance to composition with Python, implementing features using test-driven development, and writing unit tests',
		},
	];

	return (
		<div className="bg-white px-6">
			<div className="space-y-4 max-w-fill mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>
				<div className="space-y-5 max-h-80 overflow-y-auto no-scrollbar pl-1 ">
					{experiences.map((exp) => (
						<div key={exp.id} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />
								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
										<span className="text-sm text-gray-500">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600">{exp.company}</p>
									<p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
