import type { ImageMetadata } from 'astro';

const graphicsMap = import.meta.glob<ImageMetadata>('../assets/marie/graphics/*.{png,jpg}', {
	eager: true,
	import: 'default',
});

const g = (name: string): ImageMetadata => graphicsMap[`../assets/marie/graphics/${name}`];

export type GraphicKind = 'Miniature' | 'Dessin';

export interface Graphic {
	title: string;
	kind: GraphicKind;
	description: string;
	image: ImageMetadata;
	orientation: 'landscape' | 'portrait';
}

/** miniatures : [fichier, titre, description] */
const miniatureMeta: [string, string, string][] = [
	['mini-01.png', 'Boss', 'Série Minecraft multijoueur.'],
	['mini-02.png', 'Devine la couleur', 'Concept de jeu, autour d’une capture.'],
	['mini-03.png', 'Gros don', 'Épisode Minecraft.'],
	['mini-04.png', 'Paladium Reforged', 'Épisode de série Minecraft.'],
	['mini-05.png', 'Endium', 'Épisode Minecraft.'],
	['mini-06.png', 'Pillage', 'Donjon Minecraft.'],
	['mini-07.png', 'Hitman', 'Vidéo sur le jeu Hitman.'],
	['mini-08.png', 'Mais t’es folle ?!', 'Épisode Minecraft.'],
	['mini-09.png', 'Technique cheatée', 'Épisode Paladium.'],
	['mini-10.png', 'Boost Miner', 'Un mod Minecraft mis en avant.'],
	['mini-11.png', 'Bendy', 'Jeu Bendy and the Ink Machine.'],
	['mini-12.png', 'Son ami décédé', 'Minecraft, ambiance horreur.'],
];

/** dessins : [fichier, titre, description] */
const dessinMeta: [string, string, string][] = [
	['dessin-01.png', 'Créature', 'Illustration.'],
	['dessin-02.jpg', 'Méduses', 'Peinture.'],
	['dessin-03.jpg', 'Roses', 'Peinture.'],
	['dessin-04.jpg', 'Marilyn', 'Peinture.'],
	['dessin-05.jpg', 'Burnt heart', 'Dessin.'],
	['dessin-06.jpg', 'Portrait', 'Crayon.'],
	['dessin-07.jpg', 'Portrait', 'Dessin.'],
	['dessin-08.jpg', 'Montagne', 'Peinture.'],
	['dessin-09.jpg', 'Route de nuit', 'Peinture.'],
];

export const miniatures: Graphic[] = miniatureMeta.map(([f, title, description]) => ({
	title,
	description,
	kind: 'Miniature',
	image: g(f),
	orientation: 'landscape',
}));

export const dessins: Graphic[] = dessinMeta.map(([f, title, description]) => ({
	title,
	description,
	kind: 'Dessin',
	image: g(f),
	orientation: 'portrait',
}));
