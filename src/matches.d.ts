import { Area } from './area';
import { Artist } from './artist';
import { Recording } from './recording';
import { Release } from './release';
import { ReleaseGroup } from './release-group';
import { Url } from './url';
import DateTimeFormat = Intl.DateTimeFormat;

export interface Match {
	score: number // ToDo: provide feedback: should be a number
}

export interface ArtistMatch extends Artist, Match {
}

export interface ReleaseGroupMatch extends ReleaseGroup, Match {
}

export interface ReleaseMatch extends Release, Match {
}

export interface AreaMatch extends Area, Match {
}

export interface SearchResult {
	created: DateTimeFormat;
	count: number;
	offset: number;
}

export interface ArtistList extends SearchResult {
	artists: ArtistMatch[]
}

export interface AreaList extends SearchResult {
	areas: AreaMatch[]
}

export interface ReleaseList extends SearchResult {
	releases: ReleaseMatch[]
}

export interface ReleaseGroupList extends SearchResult {
	'release-groups': ReleaseGroupMatch[]
}

export interface UrlList extends SearchResult {
	urls: UrlMatch[]
}

export interface UrlMatch extends Match, Url {
}

export interface UrlSearchResult extends SearchResult {
	urls?: UrlMatch[];
}

export interface IsrcSearchResult {
	'isrc': string;
	'recordings': Recording[];
}

export interface ExernalIds {
	[type: string]: string;
}

export interface ReleaseSearchResult extends SearchResult {
	releases: Release[];
}

/**
 * https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2#Subqueries
 */
export type EntityType = 'area' |
'artist' |
'collection' |
'event' |
'instrument' |
'label' |
'place' |
'recording' |
'release' |
'release-group' |
'series' |
'work' |
'url';

export type Relationships = 'area-rels' |
'artist-rels' |
'event-rels' |
'instrument-rels' |
'label-rels' |
'place-rels' |
'recording-rels' |
'release-rels' |
'release-group-rels' |
'series-rels' |
'url-rels' |
'work-rels';

export enum LinkType {
	license = 302,
	production = 256,
	samples_IMDb_entry = 258,
	get_the_music = 257,
	purchase_for_download = 254,
	download_for_free = 255,
	stream_for_free = 268,
	crowdfunding_page = 905,
	other_databases = 306,
	Allmusic = 285
}

/**
 * https://wiki.musicbrainz.org/Development/XML_Web_Service/Version_2/Search#Artist
 */
export interface Pagination {
	/**
   * Return search results starting at a given offset. Used for paging through more than one page of results.
   */
	offset?: number;
	/**
   * An integer value defining how many entries should be returned. Only values between 1 and 100 (both inclusive) are allowed. If not given, this defaults to 25.
   */
	limit?: number;
}

/**
 * https://wiki.musicbrainz.org/Development/XML_Web_Service/Version_2/Search#Artist
 */
export interface SearchQuery extends Pagination {
	/**
   * Lucene search query, this is mandatory
   */
	query: string;
}