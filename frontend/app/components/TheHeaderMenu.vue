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
				'h-0.5 w-7 bg-neutral mb-1 transition-all duration-fast transform',
				isMenuOpen ? 'rotate-45 translate-y-2' : '',
			]" />
		<span
			:class="[
				'h-0.5 w-6 bg-neutral mb-1 transition-all duration-fast transform',
				isMenuOpen ? ' opacity-0 scale-0' : '',
			]" />
		<span
			:class="[
				'h-0.5 bg-neutral mb-1 transition-all duration-fast transform',
				isMenuOpen
					? 'w-7 -rotate-45 -translate-y-1'
					: 'w-5',
			]" />
	</button>

	<Teleport to="body">
		<TheHeaderMobileMenu
			:isMenuOpen="isMenuOpen"
			@close-menu="isMenuOpen = false" />
	</Teleport>
</template>
