import type { GlossaryPinGroup } from '$lib/types/glossary';

export type GlossaryPinConfig = {
	pin: string;
	group: GlossaryPinGroup;
	title: string;
};

/** Workshop pins — one per locked group. */
export const glossaryPins: GlossaryPinConfig[] = [
	{ pin: '2212', group: 1, title: 'Opening & rhyme' },
	{ pin: '122', group: 2, title: 'Couplet & prosody' },
	{ pin: '222', group: 3, title: 'Meaning & metre notes' }
];

const alwaysVisibleSlugs = new Set(['baatin', 'zaahir']);

/** Slug → pin group for terms that require a pin. */
export const pinGroupBySlug: Record<string, GlossaryPinGroup> = {
	'sarir-e-khamma': 1,
	matla: 1,
	radeef: 1,
	kaafiya: 1,
	qaafiya: 1,
	behr: 1,
	'behr-e-hazaj': 2,
	sher: 2,
	maqta: 2,
	'misra-ul-ula-misra-us-sani': 2,
	'aruz-urooz': 2,
	majazi: 2,
	haqiqi: 3,
	khaliq: 3,
	makhlooq: 3,
	tasawwuf: 3,
	'behr-hazaj': 3
};

export function termPinGroup(slug: string): GlossaryPinGroup | null {
	if (alwaysVisibleSlugs.has(slug)) return null;
	return pinGroupBySlug[slug] ?? null;
}

export function pinForGroup(group: GlossaryPinGroup): string | undefined {
	return glossaryPins.find((p) => p.group === group)?.pin;
}

export function groupTitle(group: GlossaryPinGroup): string {
	return glossaryPins.find((p) => p.group === group)?.title ?? `Group ${group}`;
}
