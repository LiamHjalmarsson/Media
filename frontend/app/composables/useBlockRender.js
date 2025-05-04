import {
	Hero,
	BlocksFullImage,
	BlocksList,
	ErrorFallback,
	BlocksSolutionItems,
	BlocksFaq,
	BlocksFeatureProjects,
	BlocksFeatureServices,
	BlocksFeatureArticles,
} from "#components";

const blockComponents = {
	"layout.hero": Hero,
	"blocks.featured-service": BlocksFeatureServices,
	"blocks.featured-project": BlocksFeatureProjects,
	"blocks.featured-article": BlocksFeatureArticles,
	"blocks.list": BlocksList,
	"blocks.solution": BlocksSolutionItems,
	"blocks.full-image": BlocksFullImage,
	"blocks.faq": BlocksFaq,
};

export const useBlockRenderer = (componentType) => {
	return blockComponents[componentType] || ErrorFallback;
};
