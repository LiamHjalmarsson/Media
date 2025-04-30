import {
	Hero,
	ServiceFeatures,
	BenefitItems,
	BlocksFullImage,
	SolutionItems,
} from "#components";

export const useBlockRenderer = (componentType) => {
	switch (componentType) {
		case "layout.hero":
			return Hero;
		case "blocks.title-with-relations":
			return ServiceFeatures;
		case "blocks.list":
			return BenefitItems;
		case "blocks.solution":
			return SolutionItems;
		case "blocks.full-image":
			return BlocksFullImage;
		default:
			return null;
	}
};
