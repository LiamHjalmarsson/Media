<script setup>
const store = useGlobalStore();

const isContact = (slug) => slug === "contact";
</script>

<template>
	<nav>
		<ul
			class="flex items-center max-lg:flex-col max-lg:space-y-10 lg:space-x-5">
			<li
				v-for="link in store.header.links"
				:key="link.path"
				class="relative group">
				<NuxtLink
					:to="link.path"
					:class="[
						'font-semibold text-lg',
						isContact(link.path)
							? 'px-6 py-2 bg-primary text-white rounded-full shadow-sm'
							: 'px-4 py-2 hover:text-primary',
					]">
					{{ link.label }}

					<span
						v-if="!isContact(link.path)"
						class="absolute left-0 bottom-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-slow"></span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
