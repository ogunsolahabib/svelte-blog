import fetchPostBySlug from '../../../utils/fetchPostBySlug.js';

export const load = async ({ params }) => {
	const post = await fetchPostBySlug(params.slug);

	return post;
};
