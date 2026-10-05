import data from '../../content/graphics.json';

export type GraphicKind = 'Miniature' | 'Dessin';

export interface Graphic {
	kind: GraphicKind;
	orientation: 'landscape' | 'portrait';
	title?: string;
	description?: string;
	/** Chemin de l'image (dans /public/media). */
	poster: string;
}

/** Miniatures et dessins — modifiables depuis /admin (content/graphics.json). */
export const graphics: Graphic[] = data.items.map((i) => ({
	kind: i.kind as GraphicKind,
	orientation: i.orientation as 'landscape' | 'portrait',
	title: i.title || undefined,
	description: i.description || undefined,
	poster: i.poster,
}));

export const miniatures = graphics.filter((g) => g.kind === 'Miniature');
export const dessins = graphics.filter((g) => g.kind === 'Dessin');
