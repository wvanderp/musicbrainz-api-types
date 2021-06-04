import { Alias } from './alias';
import { Genre } from './genre';
import { Relations } from './relations';
import { ArtistCredit, Release } from './release';
import { Tag } from './tag';

export interface Recording {
	id: string;
	video: boolean;
	length: number | null;
	title: string;
	disambiguation: string;
	isrcs?: string[];
	releases?: Release;
	relations?: Relations[];
	'artist-credit'?: ArtistCredit[];

	aliases?: Alias[];
	tags?: Tag[]
	genres?: Genre[]
}
