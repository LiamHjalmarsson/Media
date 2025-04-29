<script setup></script>

<template>
	<BaseSection
		title="Varför synas på webben"
		class="bg-accent text-neutral-white">
		<div class="grid grid-cols-2 gap-20 mb-20">
			<BenefitsItem v-for="i in 6" :key="i" />
		</div>

		<BaseButton label="Gratis analys" to="" />
	</BaseSection>
</template>

<!-- Snacka om att gratisa analys är ett direkt formulär med epost och företag / websida -->
