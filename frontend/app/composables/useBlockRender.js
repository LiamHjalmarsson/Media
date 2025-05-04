import {
	Hero,
	BlocksFullImage,
	BlocksList,
	ErrorFallback,
	FeatureArticle,
	FeatureProject,
	FeatureService,
	BlocksSolutionItems,
	BlocksFaq,
} from "#components";

const blockComponents = {
	"layout.hero": Hero,
	"blocks.featured-service": FeatureService,
	"blocks.featured-project": FeatureProject,
	"blocks.featured-article": FeatureArticle,
	"blocks.list": BlocksList,
	"blocks.solution": BlocksSolutionItems,
	"blocks.full-image": BlocksFullImage,
	"blocks.faq": BlocksFaq,
};

export const useBlockRenderer = (componentType) => {
	return blockComponents[componentType] || ErrorFallback;
};
