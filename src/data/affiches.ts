import type { ImageMetadata } from 'astro';

const affichesMap = import.meta.glob<ImageMetadata>('../assets/marie/affiches/*.{png,jpg}', {
	eager: true,
	import: 'default',
});

const a = (name: string): ImageMetadata => affichesMap[`../assets/marie/affiches/${name}`];

export interface Affiche {
	title: string;
	description: string;
	image: ImageMetadata;
}

/** [fichier, titre, description] */
const afficheMeta: [string, string, string][] = [
	['affiche-01.png', 'Tour de France 2025', 'Affiche pour la Ville de Vitré.'],
	['affiche-02.png', 'Tombée dans les pommes', 'Campagne « Vitré, ville apaisée ».'],
	['affiche-03.png', 'Conseil à la noix', 'Campagne « Vitré, ville apaisée ».'],
	['affiche-04.png', 'Gros sur la patate', 'Campagne « Vitré, ville apaisée ».'],
	['affiche-05.png', 'Le champignon', 'Campagne « Vitré, ville apaisée ».'],
	['affiche-06.png', 'Des prunes', 'Campagne « Vitré, ville apaisée ».'],
	['affiche-07.png', 'La fin des haricots', 'Campagne « Vitré, ville apaisée ».'],
	['affiche-08.jpg', 'Adios Bahonwa', 'Affiche.'],
	['affiche-09.jpg', 'Eminem', 'Affiche.'],
	['affiche-10.jpg', 'L’amour ouf', 'Affiche.'],
	['affiche-11.png', 'Aurore Culture Loisirs', 'Affiche de projet.'],
	['affiche-12.jpg', 'Tour de France en ville', 'L’affiche installée à Vitré.'],
	['affiche-13.jpg', 'Tour de France en ville', 'L’affiche installée à Vitré.'],
];

export const affiches: Affiche[] = afficheMeta.map(([f, title, description]) => ({
	title,
	description,
	image: a(f),
}));
