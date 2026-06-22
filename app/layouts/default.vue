<template>
  <div class="flex min-h-screen flex-col bg-white text-[#111111] transition-colors duration-300 dark:bg-[#050505] dark:text-white">
    <LayoutHeader />
    <LayoutNavbar />
    <main class="w-full max-w-screen-xl flex-grow mx-auto px-6 py-8">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
</script>
