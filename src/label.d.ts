import { Alias } from './alias';
import { Area } from './area';
import { Genre } from './genre';
import { Period } from './period';
import { Rating } from './rating';
import { Relations } from './relations';
import { Release } from './release';
import { Tag } from './tag';

export interface Label {
	id: string;
	name: string;
	'sort-name': string;
	disambiguation: string;
	'label-code': number | null;
	annotation?: string | null;

	'life-span'?: Period;

	type: string | null;
	'type-id': string | null;

	ipis?: string[];
	isnis?: string[],

	relations?: Relations[];

	country?: string | null;

	area?: Area;
	releases?: Release[];

	rating?: Rating;
	tags?: Tag[];
	genres?: Genre[];
	aliases?: Alias[];
}