export interface Alias {
	name: string;
	'sort-name': string;
	ended: boolean;
	'type-id': string | null;
	type: string | null;
	locale: string | null;
	primary: boolean | null;
	begin: string | null;
	end: string | null;
}