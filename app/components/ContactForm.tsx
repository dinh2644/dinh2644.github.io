'use client';

import { useRef, useState, type FormEvent } from 'react';
import { MailIcon } from './Icons';

// Submissions go through Formspree, which forwards them to my inbox.
const FORMSPREE_URL = 'https://formspree.io/f/xldwepoa';

const field = 'mt-1.5 block w-full border border-rule-strong bg-paper px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-ink';
const label = 'text-xs uppercase tracking-[0.18em] text-muted';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const ContactForm = ({ triggerClassName }: { triggerClassName?: string }) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [status, setStatus] = useState<Status>('idle');

	const open = () => {
		setStatus('idle');
		dialogRef.current?.showModal();
	};
	const close = () => dialogRef.current?.close();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (status === 'sending') return;
		const form = e.currentTarget;
		setStatus('sending');
		try {
			const res = await fetch(FORMSPREE_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			form.reset();
			setStatus('sent');
		} catch (err) {
			console.error(err);
			setStatus('error');
		}
	};

	return (
		<>
			<button type="button" onClick={open} aria-label="Contact me" title="Contact me" className={triggerClassName}>
				<MailIcon className="h-[19px] w-[19px]" />
			</button>

			<dialog
				ref={dialogRef}
				onClick={(e) => e.target === dialogRef.current && close()}
				className="w-[calc(100%-2rem)] max-w-md border border-rule bg-paper p-0 text-left text-ink shadow-[0_24px_60px_rgba(40,30,15,0.18)] backdrop:bg-ink/40"
			>
				<div className="relative flex flex-col gap-6 p-8">
					<button type="button" onClick={close} aria-label="Close contact form" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-muted outline-none transition-colors hover:text-ink focus-visible:ring-1 focus-visible:ring-ink">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-5 w-5" aria-hidden>
							<path d="M6 6l12 12M18 6L6 18" />
						</svg>
					</button>

					<h2 className="m-0 text-center text-base font-normal uppercase tracking-[0.25em]">Get in touch</h2>

					<form onSubmit={onSubmit} className="flex flex-col gap-5">
						<label className="block">
							<span className={label}>Name</span>
							<input type="text" name="name" required autoFocus autoComplete="name" className={field} />
						</label>
						<label className="block">
							<span className={label}>Email</span>
							<input type="email" name="email" required autoComplete="email" className={field} />
						</label>
						<label className="block">
							<span className={label}>Message</span>
							<textarea name="message" required rows={5} className={`${field} resize-none`} />
						</label>
						<button
							type="submit"
							disabled={status === 'sending'}
							className="min-h-[44px] bg-ink px-4 py-3 text-xs uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:bg-muted"
						>
							{status === 'sending' ? 'Sending…' : 'Send message'}
						</button>
						<p role="status" className="m-0 min-h-[1.25rem] text-center text-sm">
							{status === 'sent' && <span className="text-ink-soft">Thank you, I&apos;ll get back to you shortly.</span>}
							{status === 'error' && <span className="text-accent">Something went wrong. Please try again later.</span>}
						</p>
					</form>
				</div>
			</dialog>
		</>
	);
};

export default ContactForm;
