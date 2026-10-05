/**
 * Prestations proposées par Marie.
 * Uniquement les domaines réellement présents sur son site d'origine.
 * Aucun service inventé, aucun tarif inventé.
 */
export interface Service {
	icon: string;
	title: string;
	lead: string;
	items: string[];
	/** Lien facultatif vers une page dédiée. */
	href?: string;
	/** Libellé du lien. */
	linkLabel?: string;
}

export const services: Service[] = [
	{
		icon: 'lucide:clapperboard',
		title: 'Montage vidéo',
		lead: 'Je monte vos vidéos de A à Z : sélection, rythme, habillage, livraison.',
		items: ['Formats courts', 'Storytelling', 'Défis IRL & multicam', 'Gameplay YouTubeur', 'Motion design', 'Intro & vlog'],
	},
	{
		icon: 'lucide:palette',
		title: 'Graphisme',
		lead: 'Miniatures, affiches et dessins pour habiller vos contenus.',
		items: ['Miniatures', 'Affiches', 'Dessins'],
		href: '/graphisme',
		linkLabel: 'Voir le graphisme',
	},
	{
		icon: 'lucide:megaphone',
		title: 'Communication',
		lead: 'Faire connaître un projet ou une structure, sur le terrain comme en ligne.',
		items: ['Stratégie de contenu', 'Réseaux sociaux', 'Communication de terrain'],
		href: '/comm',
		linkLabel: 'Voir la communication',
	},
];

/** Mention tarifaire reprise telle quelle depuis le site d'origine. */
export const pricingNote = 'Tarifs sur devis, variables en fonction de la demande.';
