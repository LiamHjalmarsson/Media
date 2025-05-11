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
		enter-active-class="transition-all ease-in-out duration-500 overflow-hidden"
		enter-from-class="max-h-0  "
		enter-to-class="max-h-[400px]  "
		leave-active-class="transition-all ease-in-out duration-500 overflow-hidden"
		leave-from-class="max-h-[400px]  "
		leave-to-class="max-h-0 ">
		<div
			v-if="isMenuOpen"
			class="fixed top-20 left-0 w-full flex justify-center md:justify-end z-40 lg:hidden">
			<ul
				class="bg-neutral-white w-[95%] md:w-fit rounded-xl shadow-2xl p-10 text-neutral flex flex-col gap-10">
				<li
					v-for="link in store.header.links"
					:key="link.path">
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
