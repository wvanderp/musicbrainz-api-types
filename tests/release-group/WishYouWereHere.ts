/* eslint-disable @typescript-eslint/no-unused-vars */

import { ReleaseGroup } from "../../src/release-group";

const releasesGroup: ReleaseGroup = {
	"primary-type": "Album",
	"primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc",
	annotation: null,
	relations: [
		{
			end: null,
			"type-id": "cf02e524-9d5b-46b7-a88e-329737395818",
			"attribute-ids": {},
			direction: "backward",
			type: "cover",
			release_group: {
				"primary-type": null,
				"primary-type-id": null,
				releases: [],
				disambiguation: "",
				id: "0ff80068-b629-49df-8faa-99dfe89b1517",
				"artist-credit": [
					{
						joinphrase: "",
						name: "Various Artists",
						artist: {
							type: null,
							"sort-name": "Various Artists",
							id: "89ad4ac3-39f7-470e-963a-56509c546377",
							disambiguation: "add compilations to this artist",
							"type-id": null,
							name: "Various Artists",
						},
					},
				],
				"secondary-types": [],
				"first-release-date": "2011-08-23",
				title: "Return to the Dark Side of the Moon",
				"secondary-type-ids": [],
			},
			"attribute-values": {},
			"target-credit": "",
			"target-type": "release_group",
			ended: false,
			begin: null,
			"source-credit": "",
			attributes: [],
		},
		{
			begin: null,
			ended: false,
			attributes: [],
			"source-credit": "",
			"attribute-values": {},
			release_group: {
				"artist-credit": [
					{
						artist: {
							name: "Pink Floyd",
							disambiguation: "",
							id: "83d91898-7763-47d7-b03b-b92132375c47",
							"type-id": null,
							"sort-name": "Pink Floyd",
							type: null,
						},
						name: "Pink Floyd",
						joinphrase: "",
					},
				],
				releases: [],
				"primary-type-id": null,
				"primary-type": null,
				disambiguation: "",
				id: "9c81fe7a-8377-447c-9275-1394a8548805",
				"secondary-type-ids": [],
				"first-release-date": "2011-09-23",
				"secondary-types": [],
				title: "Discovery",
			},
			"target-type": "release_group",
			"target-credit": "",
			"attribute-ids": {},
			direction: "forward",
			type: "included in",
			end: null,
			"type-id": "589447ea-be2c-46cc-b9e9-469e1d06e18a",
		},
		{
			release_group: {
				"secondary-types": [],
				"first-release-date": "1980",
				title: "The Pink Floyd Collection",
				"secondary-type-ids": [],
				"primary-type": null,
				"primary-type-id": null,
				releases: [],
				id: "0f9c71c8-4309-4044-8792-ffa7e9a37206",
				disambiguation: "",
				"artist-credit": [
					{
						artist: {
							type: null,
							"sort-name": "Pink Floyd",
							id: "83d91898-7763-47d7-b03b-b92132375c47",
							disambiguation: "",
							"type-id": null,
							name: "Pink Floyd",
						},
						joinphrase: "",
						name: "Pink Floyd",
					},
				],
			},
			"attribute-values": {},
			"target-type": "release_group",
			"target-credit": "",
			begin: null,
			ended: false,
			"source-credit": "",
			attributes: [],
			end: null,
			"type-id": "589447ea-be2c-46cc-b9e9-469e1d06e18a",
			direction: "forward",
			"attribute-ids": {},
			type: "included in",
		},
		{
			"target-type": "release_group",
			"target-credit": "",
			release_group: {
				"artist-credit": [
					{
						joinphrase: "",
						name: "Pink Floyd",
						artist: {
							type: null,
							name: "Pink Floyd",
							"sort-name": "Pink Floyd",
							disambiguation: "",
							"type-id": null,
							id: "83d91898-7763-47d7-b03b-b92132375c47",
						},
					},
				],
				"primary-type": null,
				releases: [],
				"primary-type-id": null,
				id: "18e251c9-9fc9-4f22-b1d9-dbc271675208",
				disambiguation: "",
				"secondary-type-ids": [],
				"secondary-types": [],
				"first-release-date": "1975",
				title: "Have a Cigar",
			},
			"attribute-values": {},
			attributes: [],
			"source-credit": "",
			begin: null,
			ended: false,
			"type-id": "fcf680a9-6871-4519-8c4b-8c6549575b35",
			end: null,
			type: "single from",
			direction: "backward",
			"attribute-ids": {},
		},
		{
			end: null,
			"type-id": "01018437-91d8-36b9-bf89-3f885d53b5bd",
			"ordering-key": 211,
			"attribute-ids": { number: "a59c5830-5ec7-38fe-9a21-c7ea54f6650a" },
			direction: "forward",
			series: {
				name: "Rolling Stone: 500 Greatest Albums of All Time: 2012 edition",
				id: "8668518f-4a1e-4802-8b0d-81703ced6418",
				"type-id": "4c1c4949-7b6c-3a2d-9d54-a50a27e4fa77",
				disambiguation: "",
				type: "Release group series",
			},
			type: "part of",
			"attribute-values": { number: "211" },
			"target-credit": "",
			"target-type": "series",
			ended: false,
			begin: null,
			attributes: ["number"],
			"source-credit": "",
		},
		{
			ended: false,
			begin: null,
			attributes: ["number"],
			"source-credit": "",
			"attribute-values": { number: "264" },
			"target-credit": "",
			"target-type": "series",
			"ordering-key": 263,
			direction: "forward",
			"attribute-ids": { number: "a59c5830-5ec7-38fe-9a21-c7ea54f6650a" },
			series: {
				type: "Release group series",
				disambiguation: "",
				"type-id": "4c1c4949-7b6c-3a2d-9d54-a50a27e4fa77",
				id: "6a4b53b9-2756-4afe-93f2-306039d41910",
				name: "Rolling Stone: 500 Greatest Albums of All Time: 2020 edition",
			},
			type: "part of",
			end: null,
			"type-id": "01018437-91d8-36b9-bf89-3f885d53b5bd",
		},
		{
			"attribute-values": {},
			"target-credit": "",
			"target-type": "url",
			ended: false,
			begin: null,
			"source-credit": "",
			attributes: [],
			end: null,
			"type-id": "a50a1d20-2b20-4d2c-9a29-eb771dd78386",
			direction: "forward",
			"attribute-ids": {},
			url: {
				resource: "https://www.allmusic.com/album/mw0000650633",
				id: "ccccba7b-8110-4f22-8aac-85e73b3211f7",
			},
			type: "allmusic",
		},
		{
			direction: "forward",
			"attribute-ids": {},
			type: "discogs",
			url: {
				resource: "https://www.discogs.com/master/11703",
				id: "e5c2be83-970c-460b-998f-ae80191c424a",
			},
			end: null,
			"type-id": "99e550f3-5ab4-3110-b5b9-fe01d970b126",
			begin: null,
			ended: false,
			attributes: [],
			"source-credit": "",
			"attribute-values": {},
			"target-type": "url",
			"target-credit": "",
		},
		{
			"attribute-values": {},
			"target-credit": "",
			"target-type": "url",
			ended: false,
			begin: null,
			attributes: [],
			"source-credit": "",
			end: null,
			"type-id": "156344d3-da8b-40c6-8b10-7b1c22727124",
			"attribute-ids": {},
			direction: "forward",
			url: {
				id: "2eaa29de-400a-49c2-8fba-9580901c50e1",
				resource:
          "http://lyrics.wikia.com/Pink_Floyd:Wish_You_Were_Here_(1975)",
			},
			type: "lyrics",
		},
		{
			end: null,
			"type-id": "38320e40-9f4a-3ae7-8cb2-3f3c9c5d856d",
			direction: "forward",
			"attribute-ids": {},
			type: "other databases",
			url: {
				id: "39b86631-2367-424e-8c29-89b66c10c896",
				resource:
          "https://rateyourmusic.com/release/album/pink_floyd/wish_you_were_here/",
			},
			"attribute-values": {},
			"target-type": "url",
			"target-credit": "",
			begin: null,
			ended: false,
			attributes: [],
			"source-credit": "",
		},
		{
			"type-id": "38320e40-9f4a-3ae7-8cb2-3f3c9c5d856d",
			end: null,
			url: {
				resource: "https://www.musik-sammler.de/album/20361/",
				id: "85a653c0-d99d-4396-8ad9-011be73383c8",
			},
			type: "other databases",
			"attribute-ids": {},
			direction: "forward",
			"target-credit": "",
			"target-type": "url",
			"attribute-values": {},
			attributes: [],
			"source-credit": "",
			ended: false,
			begin: null,
		},
		{
			url: {
				id: "4f0bc6ff-a1ab-4559-be68-226dec6707ef",
				resource: "https://www.bbc.co.uk/music/reviews/b8dp",
			},
			type: "review",
			direction: "forward",
			"attribute-ids": {},
			"type-id": "c3ac9c3b-f546-4d15-873f-b294d2c1b708",
			end: null,
			"source-credit": "",
			attributes: [],
			ended: false,
			begin: null,
			"target-credit": "",
			"target-type": "url",
			"attribute-values": {},
		},
		{
			type: "review",
			url: {
				id: "8f42e335-fd8e-40f0-86cc-1a1d023a4401",
				resource: "http://www.pinkfloydarchives.com/DJaCDPF.htm#WYWH7",
			},
			"attribute-ids": {},
			direction: "forward",
			"type-id": "c3ac9c3b-f546-4d15-873f-b294d2c1b708",
			end: null,
			"source-credit": "",
			attributes: [],
			begin: null,
			ended: false,
			"target-type": "url",
			"target-credit": "",
			"attribute-values": {},
		},
		{
			end: null,
			"type-id": "b988d08c-5d86-4a57-9557-c83b399e3580",
			direction: "forward",
			"attribute-ids": {},
			type: "wikidata",
			url: {
				id: "5363c12f-608a-460d-adf0-505e9831076b",
				resource: "https://www.wikidata.org/wiki/Q200872",
			},
			"attribute-values": {},
			"target-type": "url",
			"target-credit": "",
			begin: null,
			ended: false,
			"source-credit": "",
			attributes: [],
		},
	],
	rating: { value: 4.65, "votes-count": 49 },
	"secondary-type-ids": [],
	releases: [
		{
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			quality: "normal",
			aliases: [],
			packaging: "Cardboard/Paper Sleeve",
			tags: [{ count: 1, name: "rock" }],
			genres: [
				{
					name: "rock",
					id: "0e3fc579-2d24-4f20-9dae-736e1ec78798",
					disambiguation: "",
					count: 1,
				},
			],
			disambiguation: "",
			id: "f4a8aa35-da90-33d8-9307-c630d38a2bed",
			country: "US",
			date: "1975-09-12",
			status: "Official",
			"release-events": [
				{
					area: {
						type: null,
						disambiguation: "",
						id: "489ce91b-6658-3307-9877-795b68554c98",
						"type-id": null,
						"sort-name": "United States",
						"iso-3166-1-codes": ["US"],
						name: "United States",
					},
					date: "1975-09-12",
				},
			],
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
		},
		{
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			barcode: "",
			country: "GB",
			id: "424db76a-8604-4350-a50f-766f58570470",
			genres: [
				{
					disambiguation: "",
					id: "ae9b8279-3959-48d8-8a88-741a7f6d4a48",
					count: 1,
					name: "progressive rock",
				},
			],
			disambiguation: "",
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [{ count: 1, name: "progressive rock" }],
			"release-events": [
				{
					date: "1975-09-15",
					area: {
						type: null,
						name: "United Kingdom",
						"iso-3166-1-codes": ["GB"],
						id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
						"type-id": null,
						disambiguation: "",
						"sort-name": "United Kingdom",
					},
				},
			],
			date: "1975-09-15",
			status: "Official",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
		},
		{
			status: "Official",
			date: "1975",
			"release-events": [
				{
					date: "1975",
					area: {
						"iso-3166-1-codes": ["FR"],
						id: "08310658-51eb-3801-80de-5a0739207115",
						disambiguation: "",
						"type-id": null,
						"sort-name": "France",
						name: "France",
						type: null,
					},
				},
			],
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			tags: [],
			quality: "normal",
			aliases: [],
			packaging: "Cardboard/Paper Sleeve",
			genres: [],
			disambiguation: "",
			id: "3e16a8ab-5a66-39ce-afe9-ab2b46a223a2",
			country: "FR",
		},
		{
			status: "Official",
			date: "1975",
			"release-events": [
				{
					date: "1975",
					area: {
						type: null,
						name: "Germany",
						"sort-name": "Germany",
						disambiguation: "",
						id: "85752fda-13c4-31a3-bee5-0e5cb1f51dad",
						"type-id": null,
						"iso-3166-1-codes": ["DE"],
					},
				},
			],
			"packaging-id": "c70b737a-0114-39a9-88f7-82843e54f906",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			barcode: "",
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			tags: [],
			packaging: "Cassette Case",
			aliases: [],
			quality: "normal",
			country: "DE",
			id: "404dee1f-0479-36c9-b48c-28f942a0965b",
			genres: [],
			disambiguation: "",
		},
		{
			"packaging-id": null,
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			date: "1975",
			status: "Official",
			"release-events": [
				{
					date: "1975",
					area: {
						type: null,
						disambiguation: "",
						id: "85752fda-13c4-31a3-bee5-0e5cb1f51dad",
						"type-id": null,
						"sort-name": "Germany",
						"iso-3166-1-codes": ["DE"],
						name: "Germany",
					},
				},
			],
			quality: "normal",
			aliases: [],
			packaging: null,
			tags: [],
			disambiguation: "",
			genres: [],
			id: "8feae97b-5800-34c4-acdd-e64b93bf858a",
			country: "DE",
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
		},
		{
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"release-events": [
				{
					area: {
						type: null,
						"iso-3166-2-codes": ["CN-91"],
						"iso-3166-1-codes": ["HK"],
						"sort-name": "Hong Kong",
						id: "0373cdff-eac8-3fbc-92dc-36a607da06d1",
						"type-id": null,
						disambiguation: "",
						name: "Hong Kong",
					},
					date: "1975",
				},
			],
			status: "Official",
			date: "1975",
			country: "HK",
			id: "47d166df-2b9c-37f3-be35-3f7847c24a2c",
			genres: [],
			disambiguation: "",
			tags: [],
			packaging: "Cardboard/Paper Sleeve",
			quality: "normal",
			aliases: [],
			"text-representation": { script: "Latn", language: "eng" },
			title: "Wish You Were Here",
			barcode: "",
		},
		{
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			date: "1975",
			status: "Official",
			"release-events": [
				{
					area: {
						name: "Israel",
						"sort-name": "Israel",
						"type-id": null,
						id: "03691455-bb46-37e3-91d2-cb064a35ffcc",
						disambiguation: "",
						"iso-3166-1-codes": ["IL"],
						type: null,
					},
					date: "1975",
				},
			],
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [],
			country: "IL",
			genres: [],
			disambiguation: "",
			id: "cc8eef60-bf17-3596-8272-fc9bed39e653",
			barcode: "",
			"text-representation": { script: "Latn", language: "eng" },
			title: "Wish You Were Here",
		},
		{
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"release-events": [
				{
					area: {
						type: null,
						"iso-3166-1-codes": ["IT"],
						"type-id": null,
						disambiguation: "",
						id: "c6500277-9a3d-349b-bf30-41afdbf42add",
						"sort-name": "Italy",
						name: "Italy",
					},
					date: "1975",
				},
			],
			status: "Official",
			date: "1975",
			country: "IT",
			genres: [],
			disambiguation: "",
			id: "3afe7725-017e-3125-842a-30dadd2e91ac",
			tags: [],
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			barcode: "",
		},
		{
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			barcode: "",
			country: "JP",
			genres: [],
			disambiguation: "",
			id: "d96f8d6a-a2ee-3489-a378-9fe56659fa59",
			tags: [],
			packaging: "Cardboard/Paper Sleeve",
			quality: "normal",
			aliases: [],
			"release-events": [
				{
					date: "1975",
					area: {
						type: null,
						"sort-name": "Japan",
						"type-id": null,
						disambiguation: "",
						id: "2db42837-c832-3c27-b4a3-08198f75693c",
						"iso-3166-1-codes": ["JP"],
						name: "Japan",
					},
				},
			],
			status: "Official",
			date: "1975",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
		},
		{
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"release-events": [
				{
					area: {
						type: null,
						name: "Netherlands",
						"sort-name": "Netherlands",
						"type-id": null,
						disambiguation: "",
						id: "ef1b7cc0-cd26-36f4-8ea0-04d9623786c7",
						"iso-3166-1-codes": ["NL"],
					},
					date: "1975",
				},
			],
			date: "1975",
			status: "Official",
			genres: [],
			id: "485aee7f-95cb-3078-a5d0-b99763f53295",
			disambiguation: "",
			country: "NL",
			aliases: [],
			quality: "normal",
			packaging: "Cardboard/Paper Sleeve",
			tags: [],
			title: "Wish You Were Here",
			"text-representation": { script: "Latn", language: "eng" },
			barcode: "",
		},
		{
			barcode: "",
			"text-representation": { script: "Latn", language: "eng" },
			title: "Wish You Were Here",
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [],
			country: "ES",
			id: "e2b754b5-3aa4-3e27-8fd4-9591575f3bf3",
			genres: [],
			disambiguation: "",
			date: "1975",
			status: "Official",
			"release-events": [
				{
					area: {
						"sort-name": "Spain",
						id: "471c46a7-afc5-31c4-923c-d0444f5053a4",
						disambiguation: "",
						"type-id": null,
						"iso-3166-1-codes": ["ES"],
						name: "Spain",
						type: null,
					},
					date: "1975",
				},
			],
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
		},
		{
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [],
			country: "SE",
			id: "2319dd32-3757-35b9-b0f1-540d9feafea3",
			genres: [],
			disambiguation: "",
			barcode: "",
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			date: "1975",
			status: "Official",
			"release-events": [
				{
					date: "1975",
					area: {
						type: null,
						id: "23d10872-f5ae-3f0c-bf55-332788a16ecb",
						"type-id": null,
						disambiguation: "",
						"sort-name": "Sweden",
						"iso-3166-1-codes": ["SE"],
						name: "Sweden",
					},
				},
			],
		},
		{
			date: "1975",
			status: "Official",
			"release-events": [
				{
					date: "1975",
					area: {
						id: "d3be28b4-41f7-3752-8a05-ed45e1d1e492",
						disambiguation: "",
						"type-id": null,
						"sort-name": "Turkey",
						"iso-3166-1-codes": ["TR"],
						name: "Turkey",
						type: null,
					},
				},
			],
			"packaging-id": "c70b737a-0114-39a9-88f7-82843e54f906",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { script: "Latn", language: "eng" },
			aliases: [],
			quality: "normal",
			packaging: "Cassette Case",
			tags: [],
			disambiguation: "",
			genres: [],
			id: "9385dfa7-fff6-33f1-9b28-90ab1ca7b1fd",
			country: "TR",
		},
		{
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"release-events": [
				{
					date: "1976-02",
					area: {
						"iso-3166-1-codes": ["US"],
						"sort-name": "United States",
						id: "489ce91b-6658-3307-9877-795b68554c98",
						"type-id": null,
						disambiguation: "",
						name: "United States",
						type: null,
					},
				},
			],
			status: "Official",
			date: "1976-02",
			genres: [],
			disambiguation: "quadraphonic",
			id: "476f385f-50e3-3beb-9465-a0f22da58a8e",
			country: "US",
			tags: [],
			quality: "normal",
			aliases: [],
			packaging: "Cardboard/Paper Sleeve",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			barcode: "",
		},
		{
			tags: [],
			packaging: "Cardboard/Paper Sleeve",
			quality: "normal",
			aliases: [],
			country: "US",
			genres: [],
			id: "83b6295b-b3ec-476b-aa47-5d3aa9c4e475",
			disambiguation: "quadraphonic",
			barcode: null,
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			status: "Official",
			date: "1976",
			"release-events": [
				{
					area: {
						name: "United States",
						id: "489ce91b-6658-3307-9877-795b68554c98",
						disambiguation: "",
						"type-id": null,
						"sort-name": "United States",
						"iso-3166-1-codes": ["US"],
						type: null,
					},
					date: "1976",
				},
			],
		},
		{
			status: "Official",
			date: "1977",
			"release-events": [
				{
					area: {
						name: "Netherlands",
						"iso-3166-1-codes": ["NL"],
						id: "ef1b7cc0-cd26-36f4-8ea0-04d9623786c7",
						disambiguation: "",
						"type-id": null,
						"sort-name": "Netherlands",
						type: null,
					},
					date: "1977",
				},
			],
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			tags: [],
			aliases: [],
			quality: "normal",
			packaging: "Cardboard/Paper Sleeve",
			disambiguation: "",
			genres: [],
			id: "9a7924de-a19e-3d4f-a4c4-7949fcc15725",
			country: "NL",
		},
		{
			quality: "normal",
			aliases: [],
			packaging: "Cardboard/Paper Sleeve",
			tags: [],
			id: "a7e07094-db32-3575-b1f3-537abc4de3ac",
			genres: [],
			disambiguation: "",
			country: "YU",
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			date: "1978",
			status: "Official",
			"release-events": [
				{
					area: {
						name: "Yugoslavia",
						"sort-name": "Yugoslavia",
						id: "885dce63-c211-3033-8cf7-46cb82d440c7",
						"type-id": null,
						disambiguation: "",
						"iso-3166-1-codes": ["YU"],
						"iso-3166-3-codes": ["YUCS"],
						type: null,
					},
					date: "1978",
				},
			],
		},
		{
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			barcode: "",
			disambiguation: "Japanese CBS Mastersound pressing",
			genres: [],
			id: "bfec5a21-d5fc-464a-9e04-816c96b19332",
			country: "JP",
			tags: [],
			quality: "normal",
			aliases: [],
			packaging: "Gatefold Cover",
			"release-events": [
				{
					date: "1980",
					area: {
						name: "Japan",
						"type-id": null,
						id: "2db42837-c832-3c27-b4a3-08198f75693c",
						disambiguation: "",
						"sort-name": "Japan",
						"iso-3166-1-codes": ["JP"],
						type: null,
					},
				},
			],
			status: "Official",
			date: "1980",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "e724a489-a7e8-30a1-a17c-30dfd6831202",
		},
		{
			"release-events": [
				{
					date: "1980",
					area: {
						name: "United States",
						"sort-name": "United States",
						id: "489ce91b-6658-3307-9877-795b68554c98",
						disambiguation: "",
						"type-id": null,
						"iso-3166-1-codes": ["US"],
						type: null,
					},
				},
			],
			date: "1980",
			status: "Official",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			barcode: "074643345309",
			country: "US",
			disambiguation: "CBS Mastersound edition",
			genres: [],
			id: "f9e584e0-fde2-3459-899e-89dda3c9d67e",
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [],
		},
		{
			"packaging-id": "ec27701a-4a22-37f4-bfac-6616e0f9750a",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			status: "Official",
			date: "1982-10-01",
			"release-events": [
				{
					date: "1982-10-01",
					area: {
						type: null,
						name: "Japan",
						"iso-3166-1-codes": ["JP"],
						id: "2db42837-c832-3c27-b4a3-08198f75693c",
						disambiguation: "",
						"type-id": null,
						"sort-name": "Japan",
					},
				},
			],
			tags: [],
			quality: "normal",
			aliases: [],
			packaging: "Jewel Case",
			id: "1786dd7d-169a-485f-b9f2-1ffd3763f6b5",
			genres: [],
			disambiguation: "",
			country: "JP",
			barcode: "",
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
		},
		{
			barcode: "074644345315",
			"text-representation": { script: "Latn", language: "eng" },
			title: "Wish You Were Here",
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [],
			country: "US",
			genres: [],
			id: "5f02f4f8-63b4-3676-9094-75988fa1bcd1",
			disambiguation: "CBS Mastersound edition",
			date: "1982",
			status: "Official",
			"release-events": [
				{
					area: {
						type: null,
						"sort-name": "United States",
						id: "489ce91b-6658-3307-9877-795b68554c98",
						disambiguation: "",
						"type-id": null,
						"iso-3166-1-codes": ["US"],
						name: "United States",
					},
					date: "1982",
				},
			],
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
		},
		{
			country: "XG",
			genres: [],
			id: "d8f5c304-8f3f-32f8-b9f0-f27687205260",
			disambiguation: "",
			packaging: "Cardboard/Paper Sleeve",
			aliases: [],
			quality: "normal",
			tags: [],
			"text-representation": { language: "eng", script: "Latn" },
			title: "Wish You Were Here",
			barcode: "",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"release-events": [
				{
					date: "1983",
					area: {
						"iso-3166-3-codes": ["DDDE"],
						type: null,
						name: "East Germany",
						"iso-3166-1-codes": ["XG"],
						"sort-name": "East Germany",
						"type-id": null,
						disambiguation: "",
						id: "d907b0ac-2956-386f-a246-62d55779aae1",
					},
				},
			],
			date: "1983",
			status: "Official",
		},
		{
			barcode: null,
			title: "Wish You Were Here",
			"text-representation": { language: "eng", script: "Latn" },
			tags: [],
			quality: "normal",
			aliases: [],
			packaging: null,
			genres: [],
			disambiguation: "",
			id: "a538a1f0-7d61-46a0-b2c7-c0249773cf4c",
			country: "US",
			status: "Official",
			date: "1983",
			"release-events": [
				{
					area: {
						type: null,
						name: "United States",
						"iso-3166-1-codes": ["US"],
						"type-id": null,
						disambiguation: "",
						id: "489ce91b-6658-3307-9877-795b68554c98",
						"sort-name": "United States",
					},
					date: "1983",
				},
			],
			"packaging-id": null,
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
		},
		{
			tags: [],
			packaging: "Jewel Case",
			aliases: [],
			quality: "normal",
			country: "JP",
			id: "ba08ea28-bda0-4723-b9bc-f6d7b977d406",
			genres: [],
			disambiguation: "made in Japan",
			barcode: "",
			"text-representation": { script: "Latn", language: "eng" },
			title: "Wish You Were Here",
			"packaging-id": "ec27701a-4a22-37f4-bfac-6616e0f9750a",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			status: "Official",
			date: "1984-08",
			"release-events": [
				{
					date: "1984-08",
					area: {
						name: "Japan",
						disambiguation: "",
						id: "2db42837-c832-3c27-b4a3-08198f75693c",
						"type-id": null,
						"sort-name": "Japan",
						"iso-3166-1-codes": ["JP"],
						type: null,
					},
				},
			],
		},
		{
			genres: [],
			disambiguation: "",
			id: "7c65ead8-16c5-468f-82d6-ce21bd2201f3",
			country: "GB",
			tags: [],
			quality: "normal",
			aliases: [],
			packaging: "Cardboard/Paper Sleeve",
			title: "Wish You Were Here",
			"text-representation": { script: "Latn", language: "eng" },
			barcode: "",
			"status-id": "4e304316-386d-3409-af2e-78857eec5cfe",
			"packaging-id": "f7101ce3-0384-39ce-9fde-fbbd0044d35f",
			"release-events": [
				{
					date: "1984",
					area: {
						type: null,
						name: "United Kingdom",
						"iso-3166-1-codes": ["GB"],
						"sort-name": "United Kingdom",
						id: "8a754a16-0027-3a29-b6d7-2b40ea0481ed",
						"type-id": null,
						disambiguation: "",
					},
				},
			],
			status: "Official",
			date: "1984",
		},
	],
	disambiguation: "",
	genres: [
		{
			count: 0,
			disambiguation: "",
			id: "ceeaa283-5d7b-4202-8d1d-e25d116b2a18",
			name: "alternative rock",
		},
		{
			id: "aca1caab-09d1-44b5-ae84-590ff1d218fc",
			disambiguation: "",
			count: 1,
			name: "aor",
		},
		{
			name: "art rock",
			count: 9,
			disambiguation: "",
			id: "b7ef058e-6d83-4ca4-8123-9724bff4648b",
		},
		{
			name: "classic rock",
			count: 1,
			id: "93244085-20e5-4f16-9067-1d19143b3810",
			disambiguation: "",
		},
		{
			name: "experimental rock",
			id: "65c97e89-b42b-45c2-a70e-0eca1b8f0ff7",
			disambiguation: "",
			count: 1,
		},
		{
			id: "797e2e85-5ffd-495c-a757-8b4079052f0e",
			disambiguation: "",
			count: 1,
			name: "pop rock",
		},
		{
			disambiguation: "",
			id: "ae9b8279-3959-48d8-8a88-741a7f6d4a48",
			count: 16,
			name: "progressive rock",
		},
		{
			name: "psychedelic rock",
			disambiguation: "",
			id: "146ef761-5ad9-48b4-b0b3-483104f7da48",
			count: 2,
		},
		{
			count: 4,
			disambiguation: "",
			id: "0e3fc579-2d24-4f20-9dae-736e1ec78798",
			name: "rock",
		},
		{
			name: "space rock",
			count: 1,
			disambiguation: "",
			id: "532dcf83-5641-446d-b007-51292b401650",
		},
	],
	id: "1a272023-10d3-38ee-bab3-317b55fcc21d",
	aliases: [
		{
			name: "Wish You Were Here / Early Singles",
			end: null,
			"sort-name": "Wish You Were Here / Early Singles",
			"type-id": null,
			ended: false,
			begin: null,
			primary: null,
			locale: null,
			type: null,
		},
		{
			ended: false,
			begin: null,
			primary: null,
			type: null,
			locale: null,
			name: "Wish You Were Here: The High Resolution Remasters",
			end: null,
			"type-id": null,
			"sort-name": "Wish You Were Here: The High Resolution Remasters",
		},
	],
	"artist-credit": [
		{
			joinphrase: "",
			name: "Pink Floyd",
			artist: {
				name: "Pink Floyd",
				tags: [
					{ count: 0, name: "60s" },
					{ count: 0, name: "70s" },
					{ name: "80s", count: 0 },
					{ count: 0, name: "90s" },
					{ count: 11, name: "art rock" },
					{ name: "avant-garde", count: 1 },
					{ count: -2, name: "band" },
					{ count: 0, name: "britannique" },
					{ name: "british", count: 3 },
					{ name: "classic pop and rock", count: 0 },
					{ name: "classic rock", count: 1 },
					{ name: "defacing", count: -2 },
					{ count: -1, name: "english" },
					{ count: 0, name: "film soundtrack" },
					{ name: "hard rock", count: 1 },
					{ count: 1, name: "pop rock" },
					{ count: 7, name: "progressive" },
					{ name: "progressive rock", count: 32 },
					{ count: 1, name: "psychedelic pop" },
					{ name: "psychedelic rock", count: 25 },
					{ count: 18, name: "rock" },
					{ name: "rock opera", count: 3 },
					{ name: "roger waters", count: -2 },
					{ name: "rolling stones", count: 0 },
					{ count: 4, name: "space rock" },
					{ count: 0, name: "uk" },
				],
				aliases: [
					{
						"type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
						"sort-name": "Floyd",
						end: null,
						name: "Floyd",
						type: "Search hint",
						locale: null,
						primary: null,
						begin: null,
						ended: false,
					},
					{
						"sort-name": "Pink Floid",
						"type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
						name: "Pink Floid",
						end: null,
						primary: null,
						type: "Search hint",
						locale: null,
						ended: false,
						begin: null,
					},
					{
						begin: null,
						ended: false,
						type: "Artist name",
						locale: "en",
						primary: true,
						end: null,
						name: "Pink Floyd",
						"type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
						"sort-name": "Pink Floyd",
					},
					{
						end: null,
						name: "The Pink Floyd",
						"type-id": "1937e404-b981-3cb7-8151-4c86ebfc8d8e",
						"sort-name": "The Pink Floyd",
						begin: null,
						ended: false,
						type: "Search hint",
						locale: null,
						primary: null,
					},
					{
						primary: true,
						locale: "ja",
						type: "Artist name",
						ended: false,
						begin: null,
						"type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
						"sort-name": "ピンク・フロイド",
						name: "ピンク・フロイド",
						end: null,
					},
					{
						begin: null,
						ended: false,
						locale: "ko",
						type: "Artist name",
						primary: true,
						end: null,
						name: "핑크 플로이드",
						"type-id": "894afba6-2816-3c24-8072-eadb66bd04bc",
						"sort-name": "핑크 플로이드",
					},
				],
				"sort-name": "Pink Floyd",
				"type-id": "e431f5f6-b5d2-343d-8b36-72607fffb74b",
				id: "83d91898-7763-47d7-b03b-b92132375c47",
				disambiguation: "",
				genres: [
					{
						name: "art rock",
						count: 11,
						disambiguation: "",
						id: "b7ef058e-6d83-4ca4-8123-9724bff4648b",
					},
					{
						name: "avant-garde",
						disambiguation: "",
						id: "b1c0c2ad-e5ae-4bb6-a1be-d66e195fd2d7",
						count: 1,
					},
					{
						count: 1,
						id: "93244085-20e5-4f16-9067-1d19143b3810",
						disambiguation: "",
						name: "classic rock",
					},
					{
						disambiguation: "",
						id: "51cb9f91-e6a2-41bf-891f-e78e3f1e52ab",
						count: 1,
						name: "hard rock",
					},
					{
						disambiguation: "",
						id: "797e2e85-5ffd-495c-a757-8b4079052f0e",
						count: 1,
						name: "pop rock",
					},
					{
						name: "progressive",
						id: "8d275a8d-154a-4bcb-8b5a-f56306ad4bcb",
						disambiguation: "",
						count: 7,
					},
					{
						name: "progressive rock",
						disambiguation: "",
						id: "ae9b8279-3959-48d8-8a88-741a7f6d4a48",
						count: 32,
					},
					{
						count: 1,
						id: "2aeb5340-c474-4677-b9a6-35ddac9b6a58",
						disambiguation: "",
						name: "psychedelic pop",
					},
					{
						name: "psychedelic rock",
						id: "146ef761-5ad9-48b4-b0b3-483104f7da48",
						disambiguation: "",
						count: 25,
					},
					{
						name: "rock",
						count: 18,
						id: "0e3fc579-2d24-4f20-9dae-736e1ec78798",
						disambiguation: "",
					},
					{
						count: 3,
						id: "baaf713d-1e4e-459e-a058-60d89ce1f9df",
						disambiguation: "",
						name: "rock opera",
					},
					{
						count: 4,
						disambiguation: "",
						id: "532dcf83-5641-446d-b007-51292b401650",
						name: "space rock",
					},
				],
				type: "Group",
			},
		},
	],
	tags: [
		{ count: 0, name: "1975" },
		{ count: 4, name: "album rock" },
		{ count: 0, name: "alternative rock" },
		{ name: "aor", count: 1 },
		{ name: "art rock", count: 9 },
		{ count: 0, name: "band" },
		{ name: "classic pop and rock", count: 0 },
		{ count: 1, name: "classic rock" },
		{ count: 1, name: "experimental rock" },
		{ name: "hipgnosis cover", count: 0 },
		{ name: "pop rock", count: 1 },
		{ name: "pop/rock", count: 0 },
		{ name: "prog rock", count: 3 },
		{ name: "prog-rock", count: 0 },
		{ name: "progressive rock", count: 16 },
		{ count: 0, name: "psychadelic" },
		{ count: 2, name: "psychedelic rock" },
		{ name: "rock", count: 4 },
		{ count: 0, name: "rock/pop" },
		{ count: 0, name: "should be public domain" },
		{ count: 1, name: "space rock" },
	],
	"secondary-types": [],
	"first-release-date": "1975-09-12",
	title: "Wish You Were Here",
};