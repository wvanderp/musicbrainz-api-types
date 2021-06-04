import {Tag} from './tag';
import {Genre} from './genre';
import { Alias } from './alias';

export interface Work {
	title: string;
	id: string;
	languages: string[];
	language: string | null;
	disambiguation: string;
	attributes: [];
	type: string | null;
	'type-id': string | null;
	iswcs: string[];

	aliases?: Alias[];
	tags?: Tag[]
	genres?: Genre[]
}