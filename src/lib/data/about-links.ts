export type ConnectLink = {
	label: string;
	shortLabel: string;
	href: string;
	kind: 'instagram' | 'youtube' | 'threads' | 'spotify';
};

export const connectLinks: ConnectLink[] = [
	{
		label: 'Mohammad Muneem — Instagram',
		shortLabel: 'Instagram (Muneem)',
		href: 'https://www.instagram.com/mohammad.muneem/',
		kind: 'instagram'
	},
	{
		label: 'Alif — Instagram',
		shortLabel: 'Instagram (Alif)',
		href: 'https://www.instagram.com/everythingisalif/',
		kind: 'instagram'
	},
	{
		label: 'Alif — YouTube',
		shortLabel: 'YouTube',
		href: 'https://www.youtube.com/@alifsmusic',
		kind: 'youtube'
	},
	{
		label: 'Mohammad Muneem — Threads',
		shortLabel: 'Threads',
		href: 'https://www.threads.net/@Mohammad.muneem',
		kind: 'threads'
	},
	{
		label: 'Alif — Spotify',
		shortLabel: 'Spotify',
		href: 'https://open.spotify.com/artist/66PL9mtBViWeqR2wUrS0Bk',
		kind: 'spotify'
	}
];

export const contactEmail = 'Sarirekhamma.alif@gmail.com';
