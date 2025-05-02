<script setup>
const store = useGlobalStore();

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 600;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll, {
		passive: true,
	});
	handleScroll();
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<header
		:class="[
			'fixed inset-x-0 top-4 z-50 sm:py-4 sm:px-8  transition duration-fast mx-auto rounded-full w-[80%] max-w-[1200px] box-border',
			isScrolled
				? 'bg-neutral-white/60 shadow-xl text-neutral backdrop-blur-xl bg-blend-overlay border border-neutral/10'
				: ' text-neutral-white ',
		]">
		<div
			class="flex max-lg:flex-col items-center justify-between max-lg:space-y-10 lg:space-x-10">
			<NuxtLink
				to="/"
				:class="[
					'font-bold text-heading-xs ',
					isScrolled
						? ' text-secondary-hover'
						: 'text-secondary',
				]">
				<!-- <NuxtImg v-if="store.header.logo.showLogo" /> -->
				<span>
					{{ store.header.logo.logoText }}
				</span>
			</NuxtLink>

			<TheHeaderNavigation />
		</div>
	</header>
</template>
