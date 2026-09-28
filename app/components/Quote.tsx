'use client';

import { useState } from 'react';
import { quote } from '../data';

// Click (or tap) the quote to switch between the German original and the English translation.
const Quote = () => {
	const [english, setEnglish] = useState(false);

	return (
		<figure className="m-0 flex max-w-[300px] flex-col items-center gap-1.5">
			<button
				type="button"
				onClick={() => setEnglish((v) => !v)}
				aria-pressed={english}
				className="grid cursor-pointer bg-transparent p-0 text-[15px] italic leading-relaxed text-ink-soft transition-colors hover:text-ink"
			>
				<span lang="de" aria-hidden={english} className={`col-start-1 row-start-1 block transition-opacity duration-500 ${english ? 'opacity-0' : 'opacity-100'}`}>
					{quote.de}
				</span>
				<span lang="en" aria-hidden={!english} className={`col-start-1 row-start-1 block transition-opacity duration-500 ${english ? 'opacity-100' : 'opacity-0'}`}>
					{quote.en}
				</span>
			</button>
			<figcaption className="text-xs text-muted">— {quote.author}</figcaption>
		</figure>
	);
};

export default Quote;
