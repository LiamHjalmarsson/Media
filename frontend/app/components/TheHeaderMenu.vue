<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
	<button
		class="p-4 flex flex-col lg:hidden overflow-hidden"
		@click="toggleMenu">
		<span
			:class="[
				'h-0.5 w-8 bg-neutral mb-1 transition-all duration-fast transform',
				isMenuOpen ? 'rotate-45 translate-y-2' : '',
			]" />
		<span
			:class="[
				'h-0.5 w-6 bg-neutral mb-1 transition-all duration-fast transform',
				isMenuOpen ? 'translate-x-[300%]' : '',
			]" />
		<span
			:class="[
				'h-0.5 bg-neutral mb-1 transition-all duration-fast transform',
				isMenuOpen
					? 'w-8 -rotate-45 -translate-y-1'
					: 'w-4',
			]" />
	</button>

	<Teleport to="body">
		<TheHeaderMobileMenu :isMenuOpen="isMenuOpen" />
	</Teleport>
</template>
