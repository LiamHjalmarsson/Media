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
						'font-semibold',
						isContact(link.path)
							? 'px-8 py-2.5 bg-primary text-white rounded-full hover:bg-primary-hover transition duration-300'
							: 'p-4 group-hover:text-primary',
					]">
					{{ link.label }}

					<span
						v-if="!isContact(link.path)"
						class="absolute left-0 -bottom-2 origin-center bg-primary h-0.5 w-0 max-w-full transition-all duration-300 group-hover:w-full transform"></span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
