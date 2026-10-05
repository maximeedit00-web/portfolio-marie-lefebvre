import data from '../../content/affiches.json';

export interface Affiche {
	title?: string;
	description?: string;
	/** Chemin de l'image (dans /public/media). */
	poster: string;
}

/** Affiches — modifiables depuis /admin (content/affiches.json). */
export const affiches: Affiche[] = data.items.map((i) => ({
	title: i.title || undefined,
	description: i.description || undefined,
	poster: i.poster,
}));
