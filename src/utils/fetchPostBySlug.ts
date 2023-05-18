import { PUBLIC_BLOG_URL } from '$env/static/public';

const fetchPostBySlug = async (slug: string) => {
	const response = await fetch(`${PUBLIC_BLOG_URL}/posts?_embed&slug=${slug}`);
	const posts = await response.json();
	return posts[0];
};

export default fetchPostBySlug;
