import {
	Hero,
	ServiceFeatures,
	BenefitItems,
} from "#components";

export const useBlockRenderer = (componentType) => {
	switch (componentType) {
		case "layout.hero":
			return Hero;
		case "blocks.title-with-relations":
			return ServiceFeatures;
		case "blocks.list":
			return BenefitItems;
		default:
			return null;
	}
};
