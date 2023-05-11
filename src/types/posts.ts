export interface Post {
	id: number;
	title: string;
	content: any;
	excerpt: any;
	date: string;
	modified: string;
	slug: string;
	featured_media: string;
	categories: number[];
	author: string;
	reading_time: number;
}
