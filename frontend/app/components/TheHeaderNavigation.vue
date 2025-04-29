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
						'font-semibold text-body-lg',
						isContact(link.path)
							? 'px-5 py-3 bg-primary transition-transform text-neutral-white rounded-full'
							: 'p-4',
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
