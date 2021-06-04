import { Relations } from './relations';
import {Period} from './period';
import { Alias } from './alias';

type AreaType = 'District' | 'City' | 'Subdivision' | 'County';

export interface Area {
	id: string;
	'iso-3166-1-codes'?: string[];
	'iso-3166-2-codes'?: string[];
	'iso-3166-3-codes'?: string[];
	name: string;
	'sort-name': string;
	disambiguation: string;
	'type-id': string | null;
	type: AreaType | null;
	relations?: Relations[];
	aliases?: Alias[];
	'life-span'?: Period
}