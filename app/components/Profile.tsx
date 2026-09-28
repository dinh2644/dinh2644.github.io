import Image from 'next/image';
import Quote from './Quote';
import ContactForm from './ContactForm';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { profile, skills } from '../data';

const iconLink = 'flex h-11 w-11 items-center justify-center text-ink-soft transition-colors hover:text-accent';

const Profile = () => {
	return (
		<section className="flex flex-col items-center gap-7 text-center lg:flex-1">
			<Image
				src="/assets/portrait.webp"
				alt="Ink portrait of Brandon Dinh"
				width={720}
				height={1046}
				priority
				className="h-auto w-44 [@media(min-width:1024px)_and_(max-height:800px)]:w-32"
			/>

			<div className="flex flex-col items-center gap-3">
				<h1 className="m-0 text-[22px] font-normal uppercase tracking-[0.22em]">{profile.name}</h1>
				<p className="m-0 flex flex-col items-center gap-0.5 text-[12.5px] text-ink-soft sm:flex-row sm:gap-x-1.5">
					{profile.roles.map((role, i) => (
						<span key={role} className="whitespace-nowrap">
							{i > 0 && <span className="mr-1.5 hidden text-rule-strong sm:inline">|</span>}
							{role}
						</span>
					))}
				</p>
				<p className="m-0 text-xs tracking-wide text-muted">{profile.location}</p>
				<nav className="-mb-2 flex items-center">
					<ContactForm triggerClassName={iconLink} />
					<a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title={profile.github} className={iconLink}>
						<GitHubIcon className="h-[17px] w-[17px]" />
					</a>
					<a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title={profile.linkedin} className={iconLink}>
						<LinkedInIcon className="h-4 w-4" />
					</a>
					<a href={profile.resume} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent">
						Résumé
					</a>
				</nav>
			</div>

			<div className="h-px w-10 bg-rule-strong" aria-hidden />
			<Quote />

			<div className="flex w-full flex-col items-center gap-5 lg:mt-auto">
				<h2 className="m-0 text-xs font-normal uppercase tracking-[0.25em] text-muted">Skills</h2>
				<dl className="m-0 grid grid-cols-[auto_auto] justify-center gap-x-8 gap-y-3 text-sm">
					{skills.map((s) => (
						<div key={s.label} className="contents">
							<dt className="text-right text-muted">{s.label}</dt>
							<dd className="m-0 text-left text-ink-soft">{s.items}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
};

export default Profile;
