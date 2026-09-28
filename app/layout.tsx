import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const description = 'Software engineer turning ideas into real products through full-stack development and applied AI engineering.';

export const metadata: Metadata = {
	metadataBase: new URL('https://dinh2644.github.io'),
	title: 'Brandon Dinh',
	description,
	authors: [{ name: 'Brandon Dinh' }],
	creator: 'Brandon Dinh',
	keywords: ['Brandon Dinh', 'Software Engineer', 'Full-Stack Development', 'Applied AI Engineering', 'Portfolio'],
	openGraph: {
		title: 'Brandon Dinh',
		description,
		url: 'https://dinh2644.github.io/',
		siteName: 'Brandon Dinh',
		images: [{ url: '/assets/portrait.webp', width: 720, height: 1046, alt: 'Ink portrait of Brandon Dinh' }],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} bg-paper font-sans text-ink antialiased`}>{children}</body>
		</html>
	);
}
