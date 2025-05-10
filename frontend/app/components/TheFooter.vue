<script setup>
const store = useGlobalStore();
</script>

<template>
	<footer
		class="bg-neutral text-neutral-white p-5 md:p-10 lg:p-20">
		<div class="mx-auto max-w-screen-xl">
			<h3
				class="text-heading-sm md:text-heading-md lg:text-heading-lg font-semibold font-heading">
				{{ store.footer.title }}
			</h3>
			<div class="w-fit mt-5">
				<BaseButton to="about" label="Kontakta oss" />
			</div>
		</div>
		<nav class="mx-auto max-w-screen-xl mt-10">
			<ul
				class="grid md:grid-cols-2 lg:grid-cols-4 w-full items-start justify-between">
				<li
					v-for="link in store.footer.footerColumn"
					:key="link.label"
					class="flex flex-col font-heading mb-5 lg:mb-10">
					<NuxtLink
						:to="link.path"
						class="text-body-lg lg:text-heading-xxs font-semibold">
						{{ link.label }}
					</NuxtLink>

					<ul class="mt-5">
						<li
							v-for="subLink in link.links"
							:key="subLink.id"
							class="mb-5">
							<NuxtLink
								:to="link.path + '/' + subLink.path"
								class="text-body-md">
								{{ subLink.label }}
							</NuxtLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</footer>
</template>
