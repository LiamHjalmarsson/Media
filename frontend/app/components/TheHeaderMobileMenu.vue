<script setup>
const store = useGlobalStore();
</script>

<template>
	<div
		class="absolute top-full left-0 mt-4 w-full flex justify-center md:justify-end z-40 lg:hidden">
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
</template>
