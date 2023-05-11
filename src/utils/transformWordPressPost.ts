import convertUnicodeTOString from './htmlCodeToSymbol';

const transformWordPressPost = (post: any) => {
	const {
		title,
		content,
		excerpt,
		date,
		modified,
		slug,
		featured_media,
		categories,
		id,
		better_featured_image,
		_embedded
	} = post;

	const { author } = _embedded;

	return {
		title: convertUnicodeTOString(title.rendered),
		content: content.rendered,
		excerpt: excerpt.rendered,
		date: formatDate(date),
		modified,
		slug,
		featured_media: better_featured_image?.source_url || featured_media,

		categories,
		id,
		author: author[0].name,
		reading_time: getReadingTime(content.rendered)
	};
};

// convert date to readable format
export const formatDate = (date: string) => {
	const newDate = new Date(date);
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return newDate.toLocaleDateString('en-US', options);
};

// get reading time
export const getReadingTime = (content: string) => {
	const wordsPerMinute = 200;
	const noOfWords = content.split(/\s/g).length;
	const minutes = noOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};

export default transformWordPressPost;
