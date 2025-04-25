<script setup>
const links = [
	{
		path: "/projects",
		label: "Project",
	},
	{
		path: "/services",
		label: "Service",
	},
	{
		path: "/articles",
		label: "Artiklar",
	},
	{
		path: "/about",
		label: "Om oss",
	},
];
</script>

<template>
	<nav>
		<ul
			class="flex items-center max-lg:flex-col max-lg:space-y-10 lg:space-x-5">
			<li
				v-for="link in links"
				:key="link.path"
				class="relative group">
				<NuxtLink
					:to="link.path"
					class="p-4 font-semibold group-hover:text-primary transition-colors duration-150">
					{{ link.label }}

					<span
						class="absolute left-0 bottom-0 origin-center bg-primary h-0.5 w-0 max-w-full scale-x-0 transition-all duration-150 group-hover:w-full transform group-hover:scale-x-100"></span>
				</NuxtLink>
			</li>

			<li class="pl-5">
				<NuxtLink
					to="/contact"
					class="px-8 py-2 bg-primary text-white rounded-full font-semibold transition duration-150 hover:bg-primary-hover">
					Kontakta
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
