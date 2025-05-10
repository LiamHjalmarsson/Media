<script setup>
const store = useGlobalStore();

const isContact = (slug) => slug === "contact";
</script>

<template>
	<nav class="h-full flex max-lg:hidden">
		<ul class="flex items-center space-x-5">
			<li
				v-for="link in store.header.links"
				:key="link.path"
				class="relative group">
				<NuxtLink
					:to="link.path"
					:class="[
						'font-semibold text-lg px-5 py-2.5',
						isContact(link.path)
							? ' bg-primary text-neutral-white rounded-full shadow hover:bg-primary-hover transition-colors duration'
							: ' hover:text-primary',
					]">
					{{ link.label }}

					<span
						v-if="!isContact(link.path)"
						class="absolute left-0 bottom-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration"></span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
