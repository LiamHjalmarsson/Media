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
					:to="link.href"
					:class="[
						'font-semibold',
						isContact(link.slug)
							? 'px-8 py-2.5 bg-primary text-white rounded-full hover:bg-primary-hover'
							: 'p-4 group-hover:text-primary',
					]">
					{{ link.label }}

					<span
						v-if="!isContact(link.slug)"
						class="absolute left-0 bottom-0 origin-center bg-primary h-0.5 w-0 max-w-full transition-all duration-300 group-hover:w-full transform"></span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
