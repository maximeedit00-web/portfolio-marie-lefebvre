import data from '../../content/pages.json';

/** Textes des pages — modifiables depuis /admin (content/pages.json). */
export const pages = data;

export interface Section {
	titre: string;
	texte: string;
}
