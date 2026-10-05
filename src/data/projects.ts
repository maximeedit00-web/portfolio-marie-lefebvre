import data from '../../content/projects.json';

export type Orientation = 'horizontal' | 'vertical';

export type Category =
	| 'Montage long'
	| 'Formats courts'
	| 'Vlog'
	| 'Motion design'
	| 'Trailer'
	| 'Créateurs'
	| 'Communication';

export interface Project {
	slug: string;
	title: string;
	channel?: string;
	category: Category;
	format: '16:9' | '9:16';
	orientation: Orientation;
	/** Identifiant YouTube (facultatif si la vidéo est hébergée sur le site). */
	videoId?: string;
	/** Fichier vidéo local (dans /public/videos). */
	videoFile?: string;
	description: string;
	/** Chemin de l'image d'aperçu (dans /public/media). */
	poster: string;
	featured?: boolean;
}

/** Les vidéos sont modifiables depuis /admin (content/projects.json). */
export const projects: Project[] = data.items.map((p) => ({
	slug: p.slug,
	title: p.title,
	channel: p.channel || undefined,
	category: p.category as Category,
	format: p.format as '16:9' | '9:16',
	orientation: p.orientation as Orientation,
	videoId: p.videoId || undefined,
	videoFile: p.videoFile || undefined,
	description: p.description,
	poster: p.poster,
	featured: p.featured,
}));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export const categories: ('Tous' | Category)[] = [
	'Tous',
	'Montage long',
	'Formats courts',
	'Vlog',
	'Motion design',
	'Trailer',
	'Créateurs',
	'Communication',
];

/** Vidéo de présentation, intégrée sur la page À propos. */
export const introVideoId = 'N39xiMklC4c';
