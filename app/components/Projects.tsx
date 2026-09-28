import { projects } from '../data';

// Rows have a fixed height (112px on phones, 88px wider) so the list shows exactly three and scrolls for the rest.
const Projects = () => {
	return (
		<section className="flex flex-col gap-3">
			<h2 className="m-0 text-xs font-normal uppercase tracking-[0.25em] text-muted">Projects</h2>
			<ul className="m-0 h-[336px] sm:h-[264px] list-none ink-scroll snap-y snap-mandatory overflow-y-auto border-t border-rule p-0 pr-6">
				{projects.map((p) => (
					<li key={p.name} className="grid h-[112px] sm:h-[88px] snap-start grid-cols-[1fr_auto] content-center items-center gap-x-6 gap-y-1.5 border-b border-rule-soft sm:grid-cols-[180px_1fr_76px]">
						<a href={p.url} target="_blank" rel="noopener noreferrer" className="self-center justify-self-start text-[15px] font-medium transition-colors hover:text-accent">
							{p.name}
						</a>
						<div className="col-span-2 row-start-2 flex flex-col gap-0.5 sm:col-span-1 sm:row-start-auto">
							<span className="text-sm text-ink-soft">{p.description}</span>
							<span className="text-xs text-muted">{p.tech}</span>
						</div>
						<span className="col-start-2 row-start-1 text-right text-xs text-muted sm:col-start-auto sm:row-start-auto">{p.date}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
