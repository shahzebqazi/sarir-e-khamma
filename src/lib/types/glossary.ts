export type LanguageBlock = {
	label?: string;
	script?: string;
	definition?: string;
};

export type GlossaryTerm = {
	slug: string;
	english: { label: string; definition: string };
	urdu?: LanguageBlock;
	kashmiri?: LanguageBlock;
	category?: 'ghazal' | 'sarir' | 'topic';
};

export type Poet = {
	slug: string;
	name: string;
	bio: string;
	legacyPath?: string;
};
