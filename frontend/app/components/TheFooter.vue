<script setup>
const store = useGlobalStore();
</script>

<template>
	<footer class="bg-neutral text-neutral-white p-20">
		<div class="mx-auto max-w-[1250px]">
			<h3 class="text-heading-2xl font-semibold">
				{{ store.footer.title }}
			</h3>
			<div class="w-fit mt-5">
				<BaseButton to="about" label="Kontakta oss" />
			</div>
		</div>
		<nav class="mx-auto max-w-[1250px] mt-20">
			<ul
				class="flex w-full space-x-10 items-start justify-between">
				<li
					v-for="link in store.footer.footerColumn"
					:key="link.label"
					class="flex flex-col gap-5 font-heading text-heading-xxs">
					<NuxtLink :to="link.path">
						{{ link.label }}
					</NuxtLink>

					<ul class="space-y-5">
						<li v-for="subLink in link.links">
							<NuxtLink
								:to="link.path + '/' + subLink.path"
								class="text-body-sm">
								{{ subLink.label }}
							</NuxtLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</footer>
</template>
