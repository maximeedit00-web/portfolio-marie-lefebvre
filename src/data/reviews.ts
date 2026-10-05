import data from '../../content/reviews.json';

/**
 * Témoignages clients — modifiables depuis /admin (content/reviews.json).
 * Proviens de la section « Témoignages clients » du site d'origine de Marie.
 */
export interface Review {
	author?: string;
	role?: string;
	rating: number;
	text: string;
	date?: string;
	source?: string;
}

export const reviews: Review[] = data.items.map((r) => ({
	author: r.author || undefined,
	role: r.role || undefined,
	rating: r.rating,
	text: r.text,
	date: (r as any).date || undefined,
	source: (r as any).source || undefined,
}));
