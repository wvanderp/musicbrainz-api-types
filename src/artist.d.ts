import {Period} from './Period';
import {Area} from './area';
import { Alias } from './alias';
import {Recording} from './recording';
import { Relations } from './relations';
import { Work } from './work';
import { ReleaseGroup } from './release-group';
import { Release } from './release';
import { Tag } from './tag';
import { Rating } from './rating';
import { Genre } from './genre';


export interface Artist {
	id: string;
	name: string;
	disambiguation: string;
	'sort-name': string;
	annotation?: string | null;

	type?: string | null;
	'type-id'?: string | null;
	'gender-id'?: string | null;
	gender?: string | null;
	'life-span'?: Period;
	country?: string;

	ipis?: string[]; // ToDo
	isnis?: string[];
	
	area?: Area;
	begin_area?: Area | null;
	end_area?: Area | null;
	'begin-area'?: Area | null;
	'end-area'?: Area | null;

	relations?: Relations[];

	works?: Work[];
	'release-groups'?: ReleaseGroup[];
	recordings?: Recording[];
	releases?: Release[];

	tags?: Tag[]
	aliases?: Alias[];
	rating?: Rating;
	genres?: Genre[];
}











