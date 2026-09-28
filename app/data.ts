export const profile = {
	name: 'Brandon Dinh',
	roles: ['Software Engineer', 'Full-Stack Developer', 'Applied AI Engineer'],
	location: 'Stony Point, New York',
	email: 'dinh2644.mail@gmail.com',
	github: 'https://github.com/dinh2644',
	linkedin: 'https://linkedin.com/in/dinh2644',
	resume: 'https://drive.google.com/drive/u/0/folders/18HlxC39xhM9oOIr1Fmo7S7DP-y6891Mb',
};

export const quote = {
	de: '„Was ist schlecht? – Alles, was aus der Schwäche stammt.“',
	en: '“What is bad? – Everything that stems from weakness.”',
	author: 'Friedrich Nietzsche',
};

export const skills = [
	{ label: 'Languages', items: 'Python, JavaScript, TypeScript' },
	{ label: 'Frameworks', items: 'FastAPI, React' },
	{ label: 'Databases', items: 'PostgreSQL, MongoDB' },
	{ label: 'Tools', items: 'Docker, Git' },
	{ label: 'AI tools', items: 'Claude Code, Codex, OpenCode' },
];

export type Job = {
	company: string;
	role: string;
	place: string;
	dates: string;
	bullets: string[];
};

export const jobs: Job[] = [
	{
		company: 'Enable Healthcare',
		role: 'Software Developer',
		place: 'Park Ridge, NJ',
		dates: 'Sep 2025 — Present',
		bullets: [
			'Architected a multi-agent voice AI (Twilio, Deepgram, FastAPI) that automates appointment scheduling and billing calls for healthcare practices, holding end-to-end response latency under 800ms',
			'Launched an OAuth 2.0-secured email-sending API that scopes each client app to approved Microsoft 365 mailboxes and enforces per-client send limits, eliminating unauthorized sender abuse across all integrated apps',
			'Designed a FastAPI/PostgreSQL data-security gateway between production databases and client apps, enforcing row-level access, column masking, and audit logging on 100% of queries',
		],
	},
	{
		company: 'HACU — U.S. Treasury',
		role: 'Software Engineer Intern',
		place: 'Remote',
		dates: 'Jun 2022 — Jan 2025',
		bullets: [
			'Automated Excel-to-SQL Server ingestion with C# APIs, cutting ~20 minutes of manual processing per run and removing hand-entry errors from the pipeline',
			'Streamlined ETL workflows with SQL stored procedures, accelerating processing of 20,000+ records per cycle for downstream analysis',
			'Reduced data-table load time by ~500ms (from ~1.2s to ~0.7s) by implementing AJAX-based pagination over SQL Server-backed APIs',
		],
	},
	{
		company: 'Headstarter AI',
		role: 'Software Engineer Fellow',
		place: 'Remote',
		dates: 'Jul 2024 — Sep 2024',
		bullets: [
			'Shipped 5 AI applications in 7 weeks using Next.js, Gemini, Pinecone, RAG, and Stripe, reaching 100+ users',
			'Led a 4-person engineering team through design, build, and deployment of 5 full-stack apps, delivering 100% of them on schedule',
			'Deployed an event-discovery platform (Next.js, Firebase, Stripe) with CI/CD pipelines on Vercel, enabling zero-downtime releases',
		],
	},
];

export type Project = {
	name: string;
	date: string;
	url: string;
	description: string;
	tech: string;
};

// Newest first.
export const projects: Project[] = [
	{ name: 'CloudBox', date: 'Jun 2025', url: 'https://github.com/dinh2644/CloudBox', description: 'A lightweight, cross-platform virtual machine manager.', tech: 'C++ · CMake' },
	{ name: 'Distributed Commerce', date: 'Apr 2025', url: 'https://github.com/dinh2644/distributed_ecommerce_system', description: 'An event-driven e-commerce backend of Go microservices.', tech: 'Go · Kafka · Redis · Docker' },
	{ name: 'LiveLingo', date: 'Mar 2025', url: 'https://github.com/dinh2644/livelingo', description: 'Live English translations for foreign-language videos.', tech: 'Next.js · TypeScript · Python · MongoDB · BullMQ' },
	{ name: 'RAG Chatbot', date: 'Aug 2024', url: 'https://rag-chatbot-chi.vercel.app', description: 'A chatbot that answers from your own documents.', tech: 'Next.js · LangChain · Pinecone · Gemini' },
	{ name: 'PantryAI', date: 'Aug 2024', url: 'https://pantry-ai-sandy.vercel.app', description: 'Tracks your pantry and suggests recipes.', tech: 'Next.js · Gemini · Supabase' },
	{ name: 'Shell', date: 'Jun 2024', url: 'https://github.com/dinh2644/shell', description: 'A small POSIX-style command-line shell.', tech: 'Python' },
	{ name: 'HTTP Server', date: 'Jun 2024', url: 'https://github.com/dinh2644/http-server', description: 'A web server built from raw TCP sockets.', tech: 'C · POSIX Sockets' },
];
