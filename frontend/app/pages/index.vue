<script setup>
const { find } = useStrapi();

const { data: homePage } = await useAsyncData("home", () =>
	find("home-page", {
		populate: [
			"hero",
			"hero.image",
			"hero.buttons",
			"serviceSection",
			"serviceSection.services",
		],
	})
);

const heroData = computed(() => homePage.value.data.hero);

const servicesData = computed(
	() => homePage.value.data.serviceSection
);
</script>

<template>
	<Hero :hero="heroData" />

	<BaseSection :title="servicesData.title">
		<ul class="grid grid-cols-2 lg:grid-cols-3 gap-20">
			<ServiceFeatured
				v-for="service in servicesData.services"
				:key="service.id"
				:service="service" />
		</ul>
	</BaseSection>

	<BenefitsItems />
</template>
