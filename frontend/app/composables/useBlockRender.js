import {
	Hero,
	ServiceFeatures,
	BlocksFullImage,
	SolutionItems,
	ProjectFeatures,
	BlocksList,
	SolutionFaq,
	ArticleFeatured,
	ErrorFallback,
} from "#components";

const blockComponents = {
	"layout.hero": Hero,
	"blocks.featured-service": ServiceFeatures,
	"blocks.featured-project": ProjectFeatures,
	"blocks.featured-article": ArticleFeatured,
	"blocks.list": BlocksList,
	"blocks.solution": SolutionItems,
	"blocks.full-image": BlocksFullImage,
	"blocks.faq": SolutionFaq,
};

export const useBlockRenderer = (componentType) => {
	return blockComponents[componentType] || ErrorFallback;
};
