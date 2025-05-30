export const generateMetaTags = (seoData) => {
	const defaultTitle = seoData?.metaTitle || "Alt-media";

	const defaultDescription =
		seoData?.metaDescription || "Default description";

	const canonicalUrl =
		seoData?.metaCanonicalUrl || window.location.href;

	return [
		{
			name: "description",
			content: defaultDescription,
		},
		{
			name: "robots",
			content: seoData?.preventIndexing
				? "noindex"
				: "index",
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
	];
};
