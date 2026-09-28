'use client';

import { useState } from 'react';
import { jobs } from '../data';

const Experience = () => {
	const [active, setActive] = useState(0);
	const job = jobs[active];

	return (
		<section className="flex flex-col gap-4">
			<h2 className="m-0 text-xs font-normal uppercase tracking-[0.25em] text-muted">Experience</h2>
			<div className="flex flex-col gap-6 md:flex-row md:gap-10">
				<div role="tablist" aria-orientation="vertical" aria-label="Experience" className="flex overflow-x-auto no-scrollbar md:w-[210px] md:shrink-0 md:flex-col">
					{jobs.map((j, i) => {
						const selected = i === active;
						return (
							<button
								key={j.company}
								id={`tab-${i}`}
								role="tab"
								aria-selected={selected}
								aria-controls="job-panel"
								onClick={() => setActive(i)}
								className={`flex min-h-[44px] shrink-0 flex-col items-start gap-1 px-4 py-3 text-left transition-colors border-b-2 md:border-b-0 md:border-l-2 ${
									selected ? 'border-ink text-ink' : 'border-rule text-muted hover:text-ink'
								}`}
							>
								<span className="text-sm font-medium">{j.company}</span>
								<span className="text-xs">{j.dates}</span>
							</button>
						);
					})}
				</div>
				<div id="job-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="flex flex-col gap-3 md:min-h-[260px]">
					<h3 className="m-0 text-base font-medium">
						{job.role} <span className="font-normal text-muted">· {job.place}</span>
					</h3>
					<ul className="m-0 flex list-disc flex-col gap-2 pl-4 text-sm leading-relaxed text-ink-soft">
						{job.bullets.map((b) => (
							<li key={b}>{b}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Experience;
