import data from '../../content/clients.json';

/** Chaînes / clients — modifiables depuis /admin (content/clients.json). */
export interface Client {
	name?: string;
	/** Logo / photo de profil (chemin dans /public/media). */
	logo?: string;
	/** Lien vers la chaîne / le profil. */
	url?: string;
}

export const clients: Client[] = data.items.map((c) => ({
	name: c.name || undefined,
	logo: c.logo || undefined,
	url: c.url || undefined,
}));
