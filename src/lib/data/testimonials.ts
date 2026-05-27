export type Testimonial = {
	quote: string;
	author: string;
	roleOrSite?: string;
	href?: string;
};

export const testimonials: Testimonial[] = [
	{
		quote:
			'Thank you for instilling a passion for poetry in me. I enrolled in Sarir-e-khamma as a complete beginner to Shaeri; after quite an engaging, exciting and challenging course, I feel confidence in my voice, have a framework for composing poems and songs and managed to break some plateaus I had hit in self study.\n\nSarir-e-Khamma is very enjoyable and rewarding; I highly recommend signing up for the program. I gurantee you will take something or a lot away from it.',
		author: 'W. Worst',
		roleOrSite: 'iconoclastaud.io',
		href: 'https://iconoclastaud.io/'
	}
];
