import mini from '../../content/miniatures.json';
import dessin from '../../content/dessins.json';

export interface Graphic {
	title?: string;
	/** Chemin de l'image (dans /public/media). */
	poster: string;
}

/** Miniatures — modifiables depuis /admin (content/miniatures.json). */
export const miniatures: Graphic[] = mini.items.map((i) => ({
	title: i.title || undefined,
	poster: i.poster,
}));

/** Dessins & illustrations — modifiables depuis /admin (content/dessins.json). */
export const dessins: Graphic[] = dessin.items.map((i) => ({
	title: i.title || undefined,
	poster: i.poster,
}));
