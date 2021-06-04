import { Alias } from './alias';
import { Genre } from './genre';
import { Rating } from './rating';
import { Relations } from './relations';
import {ArtistCredit, Release} from './release';
import { Tag } from './tag';

export interface ReleaseGroup {
	id: string;
	count?: number;
	title: string;
	'sort-name'?: string;
	annotation?: string | null;

	'primary-type': string | null;
	"primary-type-id": string | null;
	"secondary-types": string[];
	"secondary-type-ids": string[];
	
	"first-release-date": string;
	
	disambiguation: string;
	
	'artist-credit'?: ArtistCredit[]

	relations?: Relations[];
	releases?: Release[]; // include 'releases'

	aliases?: Alias[]
	tags?: Tag[]
	genres?: Genre[]
	rating?: Rating
}