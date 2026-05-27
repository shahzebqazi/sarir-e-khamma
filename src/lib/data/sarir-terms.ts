import type { GlossaryTerm } from '$lib/types/glossary';

export const sarirTerms: GlossaryTerm[] = [
	{
		slug: 'baatin',
		category: 'sarir',
		english: {
			label: 'Baatin',
			definition:
				'The inward, hidden dimension—what is felt and meant beneath the surface of words. In Sarir e Khamma, baatin names the private layer of experience that writing uncovers.'
		},
		urdu: {
			label: 'Bātin',
			script: 'باطن',
			definition: 'ظاہر کے مقابلے میں باطنی، پوشیدہ معنی اور احساس۔'
		}
	},
	{
		slug: 'zaahir',
		category: 'sarir',
		english: {
			label: 'Zaahir',
			definition:
				'The outward, manifest layer—what appears on the page or in performance. Zaahir is the shape words take when they are shared and heard.'
		},
		urdu: {
			label: 'Ẓāhir',
			script: 'ظاہر',
			definition: 'وہ جو ظاہر ہو، سامنے آئے—لفظوں کی باہری شکل۔'
		}
	},
	{
		slug: 'sarir-e-khamma',
		category: 'sarir',
		english: {
			label: 'Sarir e Khamma',
			definition:
				'“The subtle sound a pen makes as it glides over paper”—the delicate noise marking the birth of what is to be heard, read, and documented. The workshop title names intimate listening to one’s own thoughts.'
		},
		urdu: {
			label: 'Sarīr e Khama',
			script: 'سریرِ خامہ',
			definition: 'قلم کے کاغذ پر چلنے کی باریک آواز؛ خامہ سے پیدا ہونے والی تحریر۔'
		},
		kashmiri: {
			label: 'Sarīr e Khama',
			definition: 'The whisper of the pen on the page—a Kashmiri–Urdu image for beginning to write.'
		}
	}
];
