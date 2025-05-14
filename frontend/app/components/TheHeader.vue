<script setup>
const store = useGlobalStore();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 600;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed  z-50 transition duration-fast mx-auto w-full max-w-screen-xl box-border h-16 bg-accent/70 shadow-2xl text-neutral-white backdrop-blur-xl border border-neutral/10',
    ]"
  >
    <div
      class="relative flex items-center justify-between space-x-10 h-full px-5 lg:px-10"
    >
      <NuxtLink to="/">
        <span
          class="font-semibold text-body-lg md:text-body-xl text-secondary-hover"
        >
          {{ store.header.logo.logoText || store.siteName }}
        </span>
      </NuxtLink>

      <TheHeaderNavigation />

      <TheHeaderMenu />
    </div>
  </header>
</template>
