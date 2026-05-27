export type LanguageBlock = {
	label?: string;
	script?: string;
	definition?: string;
};

export type GlossarySource = {
	title: string;
	detail?: string;
	url?: string;
	accessed?: string;
};

/** `null` = always visible (e.g. Baatin, Zaahir). */
export type GlossaryPinGroup = 1 | 2 | 3;

export type GlossaryTerm = {
	slug: string;
	english: { label: string; definition: string; shortDef?: string };
	urdu?: LanguageBlock;
	kashmiri?: LanguageBlock;
	category?: 'ghazal' | 'sarir' | 'topic';
	pinGroup?: GlossaryPinGroup | null;
	sources?: GlossarySource[];
};

export type Poet = {
	slug: string;
	name: string;
	bio: string;
	legacyPath?: string;
};
