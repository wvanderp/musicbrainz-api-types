import { Alias } from './alias';
import { Area } from './area';
import { Artist } from './artist';
import { Recording } from './recording';
import { ReleaseGroup } from './release-group';
import { Relations } from './relations';
import { Tag } from './tag';
import { Genre } from './genre';

export interface CoverArtArchive {
	count: number;
	front: boolean;
	darkened: boolean;
	artwork: boolean;
	back: boolean;
}

export type MediaFormatType = 
'Digital Media' 
| '12" Vinyl' 
| 'CD' 
| '7\" Vinyl'
| 'Cassette'
| 'Vinyl'
| "DVD-Video"
|"Blu-ray"
| null;

export interface Track {
	id: string;
	position: number;
	recording: Recording;
	number: string; // in JSON, this is a string field
	length: number;
	title: string;
	'artist-credit'?: ArtistCredit[];
}

export interface ReleaseEvent {
	area?: Area | null;
	date?: string;
}

export interface ArtistCredit {
	artist: Artist;
	joinphrase: string;
	name: string;
}

export type ReleaseQuality = 'normal' | 'high';  // ToDo

export interface Medium {
	title: string;
	format?: MediaFormatType;
	'format-id': string | null;
	'tracks'?: Track[];
	'track-count': number;
	'track-offset'?: number;
	position: number;
}


export interface Release {
	id: string;
	title: string;
	'text-representation': { 
		'language': string | null;
		'script': string | null
	};
	disambiguation: string;
	annotation?: string | null;
	asin?: string | null;
	'status-id': string | null;
	packaging?: string | null;
	status: string | null;
	'packaging-id'?: string | null;
	'release-events'?: ReleaseEvent[];
	date?: string;
	media?: Medium[];
	'cover-art-archive'?: CoverArtArchive;
	country?: string | null;
	quality: ReleaseQuality;
	barcode: string | null;
	relations?: Relations[];
	'artist-credit'?: ArtistCredit[]; // Include 'artist-credits '
	'release-group'?: ReleaseGroup | null; // Include: 'release-groups'

	aliases?: Alias[];
	tags?: Tag[]
	genres?: Genre[]
}