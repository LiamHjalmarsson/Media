export const generateMetaTags = (seo) => {
	const defaultTitle = seo?.metaTitle || "Alt-media";

	const defaultDescription =
		seo?.metaDescription || "Default description";

	const canonicalUrl =
		seo?.metaCanonicalUrl || window.location.href;

	const defaultImage =
		`${process.env.STRAPI_URL || "http://localhost:1337"}` +
		seo?.metaImage?.url;

	return [
		{
			name: "description",
			content: defaultDescription,
		},
		{
			name: "robots",
			content: seo?.preventIndexing ? "noindex" : "index",
		},
		{
			property: "og:title",
			content: defaultTitle,
		},
		{
			property: "og:description",
			content: defaultDescription,
		},
		{
			property: "og:url",
			content: canonicalUrl,
		},
		{
			property: "og:image",
			content: defaultImage,
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:title",
			content: defaultTitle,
		},
		{
			name: "twitter:description",
			content: defaultDescription,
		},
		{
			name: "twitter:image",
			content: defaultImage,
		},
	];
};
