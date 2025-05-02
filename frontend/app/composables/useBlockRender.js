import {
	Hero,
	ServiceFeatures,
	BlocksFullImage,
	SolutionItems,
	ProjectFeatures,
	BlocksList,
	SolutionFaq,
	ArticleFeatured,
} from "#components";

export const useBlockRenderer = (componentType) => {
	switch (componentType) {
		case "layout.hero":
			return Hero;
		case "blocks.featured-service":
			return ServiceFeatures;
		case "blocks.featured-project":
			return ProjectFeatures;
		case "blocks.list":
			return BlocksList;
		case "blocks.solution":
			return SolutionItems;
		case "blocks.full-image":
			return BlocksFullImage;
		case "blocks.faq":
			return SolutionFaq;
		case "blocks.featured-article":
			return ArticleFeatured;
		default:
			return null;
	}
};
