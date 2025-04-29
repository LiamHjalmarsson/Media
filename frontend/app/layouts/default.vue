<template>
	<div class="min-h-screen flex flex-col">
		<TheHeader />

		<main class="text-neutral font-body text-body-lg grow">
			<slot />
		</main>

		<TheFooter />
	</div>
</template>
