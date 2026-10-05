import settings from '../../content/settings.json';
import navigation from '../../content/navigation.json';

/**
 * Informations du site — modifiables depuis /admin.
 * Les valeurs viennent de content/settings.json et content/navigation.json.
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

	/** Image d'aperçu lors du partage du lien (facultative). */
	ogImage: (settings as any).og_image || '',

	/** Textes principaux, modifiables depuis l'admin. */
	texts: {
		heroScript: settings.hero_script,
		heroTitle: settings.hero_title,
		heroIntro: settings.hero_intro,
		aboutP1: settings.about_p1,
		aboutP2: settings.about_p2,
		aboutP3: settings.about_p3,
	},

	/** Onglets du menu — modifiables depuis l'admin (content/navigation.json). */
	nav: navigation.items,
} as const;

export type NavItem = { label: string; href: string };
