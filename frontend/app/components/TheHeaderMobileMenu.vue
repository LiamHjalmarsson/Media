<script setup>
const store = useGlobalStore();

defineProps({
	isMenuOpen: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<transition
		enter-active-class="transition-all duration-slow ease-in overflow-hidden"
		enter-from-class="max-h-0"
		enter-to-class="max-h-[1000px]"
		leave-active-class="transition-all duration-slow ease-out overflow-hidden"
		leave-from-class="max-h-[1000px]"
		leave-to-class="max-h-0">
		<div
			v-if="isMenuOpen"
			class="fixed top-24 left-0 md:-left-14 w-full flex justify-center md:justify-end z-40 lg:hidden">
			<ul
				class="w-[85%] md:w-fit rounded-xl shadow-lg text-neutral flex flex-col transform-origin-top p-5 gap-2.5 border border-neutral/5 bg-neutral-white">
				<li
					v-for="(link, index) in store.header.links"
					:key="link.path"
					class="transition-opacity duration-slow px-4 py-2">
					<NuxtLink
						:to="link.path"
						class="block font-medium text-lg hover:text-primary text-center">
						{{ link.label }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</transition>
</template>
