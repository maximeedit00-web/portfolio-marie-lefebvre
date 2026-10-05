import settings from '../../content/settings.json';

/**
 * Informations du site — modifiables depuis /admin (Decap CMS).
 * Les valeurs viennent de content/settings.json.
 */
export const site = {
	name: settings.name,
	shortName: settings.shortName,
	role: settings.role,
	speciality: settings.speciality,
	tagline: settings.tagline,
	description: settings.description,

	email: settings.email,
	instagram: { handle: settings.instagram_handle, url: settings.instagram_url },
	discord: { handle: settings.discord_handle, url: settings.discord_url },

	/** Textes principaux, modifiables depuis l'admin. */
	texts: {
		heroScript: settings.hero_script,
		heroTitle: settings.hero_title,
		heroIntro: settings.hero_intro,
		aboutP1: settings.about_p1,
		aboutP2: settings.about_p2,
		aboutP3: settings.about_p3,
	},

	nav: [
		{ label: 'Accueil', href: '/' },
		{ label: 'Montage', href: '/work' },
		{ label: 'Graphisme', href: '/graphisme' },
		{ label: 'Comm', href: '/comm' },
		{ label: 'À propos', href: '/about' },
		{ label: 'Services', href: '/services' },
		{ label: 'Avis', href: '/avis' },
		{ label: 'Contact', href: '/contact' },
	],
} as const;

export type NavItem = (typeof site.nav)[number];
