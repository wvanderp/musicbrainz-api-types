import { Area } from './area';
import { Release } from './release';
import { ReleaseGroup } from './release-group';
import { Work } from './work';
import {Label} from './label';

 type RelationDirection = 'backward' | 'forward';


interface BaseRelation {

	attributes: unknown[];
	'attribute-values': unknown;
	'attribute-credits'?: Record<string, unknown>;
	'attribute-ids': unknown;

	direction: RelationDirection;

	begin: null | string;
	ended: boolean;
	end: null | string;

	'source-credit': string;
	'target-credit': string;

	type: string;
	'type-id': string;
	'target-type': string;
}

interface ArtistRelation extends BaseRelation {
	'target-type': 'artist';
	artist: {
		id: string;
		'type-id': string | null;
		type: 'Person' | 'Group' | 'Other' | null;
		'sort-name': string;
		name: string;
		disambiguation: string;
	};
}

interface UrlRelation  extends BaseRelation {
	'target-type': 'url';
	url: {
		id: string;
		resource: string;
	}
}

interface EventRelation extends BaseRelation {
	'target-type': 'event';
	event: {
		time: string;
		setlist: string;
		type: string | null;
		'type-id': string | null;
		name:  string;
		id:  string;
		disambiguation: string;
		cancelled: boolean;
	}
}

interface RecordingRelation extends BaseRelation {
	'target-type': 'recording';
	recording: {
		title: string;
		id: string;
		disambiguation: string;
		video: boolean;
		length: number | null;
	};
}

interface ReleaseRelation extends BaseRelation {
	'target-type': 'release';
	release: Release
}

interface WorkRelation extends BaseRelation {
	'target-type': 'work';
	work: Work
}

interface LabelRelation  extends BaseRelation {
	'target-type': 'label';
	label: Label
}

interface Release_groupRelation extends BaseRelation {
	'target-type': 'release_group';
	release_group: ReleaseGroup
}

interface AreaRelation extends BaseRelation {
	'target-type': 'area';
	area: Area
}

interface SeriesRelation extends BaseRelation {
	'target-type': 'series';
	'ordering-key'?: number;
	series: {
		type: string;
		'type-id': string;
		'id': string;
		'disambiguation': string;
		name: string;
	}
}


export type Relations = 
UrlRelation 
| ArtistRelation 
| EventRelation 
| RecordingRelation 
| ReleaseRelation
| WorkRelation
| LabelRelation
| Release_groupRelation
| AreaRelation
| SeriesRelation;

export interface RelationList {
	relations: Relations[];
}