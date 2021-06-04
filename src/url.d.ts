import { RelationList } from './relations';

export interface Url {
	id: string;
	resource: string;
	'relation-list': RelationList[];
}