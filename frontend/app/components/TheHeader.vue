<script setup>
const store = useGlobalStore();

const isScrolled = ref(false);

const handleScroll = () => {
	if (window.scrollY > 650) {
		isScrolled.value = true;
	} else {
		isScrolled.value = false;
	}
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onBeforeMount(() => {
	window.removeEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<header
		:class="[
			'fixed  inset-x-0 top-0 z-50 py-1.5 sm:border-0 sm:py-5 sm:px-10 bg-transparent transition duration-300',
			isScrolled
				? 'text-neutral bg-neutral-white/20 backdrop-blur-lg'
				: ' text-neutral-white bg-transparent',
		]">
		<div
			class="flex max-lg:flex-col items-center justify-between max-lg:space-y-10 lg:space-x-10">
			<NuxtLink
				to="/"
				class="font-bold text-heading-sm text-secondary">
				<NuxtImg v-if="store.header.logo.showLogo" />
				<span v-else>
					{{ store.header.logo.logoText }}
				</span>
			</NuxtLink>

			<TheHeaderNavigation />
		</div>
	</header>
</template>
