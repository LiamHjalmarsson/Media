<script setup>
const store = useGlobalStore();

const isScrolled = ref(false);

const handleScroll = () => {
	if (window.scrollY > 50) {
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
			'fixed inset-x-0 top-0 z-10 py-1.5 sm:border-0 sm:py-5 sm:px-10 bg-transparent transition duration-300',
			isScrolled
				? 'bg-neutral-white text-neutral shadow'
				: 'bg-transparent text-neutral-white',
		]">
		<div
			class="flex max-lg:flex-col items-center justify-between max-lg:space-y-10 lg:space-x-10">
			<NuxtLink
				to="/"
				class="font-semibold text-heading-xs text-secondary">
				{{ store.settings.siteName }}
			</NuxtLink>

			<TheHeaderNavigation />
		</div>
	</header>
</template>
