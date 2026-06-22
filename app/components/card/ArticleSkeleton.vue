<template>
  <div class="animate-pulse bg-white transition-colors duration-300 dark:bg-[#050505]">
    <!-- Hero image placeholder -->
    <div class="w-full bg-[#eeeeee] dark:bg-[#111111]" style="aspect-ratio:980/653;"></div>
    <div class="max-w-screen-md mx-auto px-6 py-8 space-y-6">
      <!-- Author row -->
      <div class="flex items-center gap-3 border-b border-[#111111] pb-4 dark:border-white">
        <div class="h-9 w-9 rounded-full bg-[#eeeeee] dark:bg-[#111111]"></div>
        <div class="space-y-1.5">
          <div class="h-3 w-28 rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
          <div class="h-2.5 w-20 rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
        </div>
      </div>
      <!-- Title -->
      <div class="space-y-3">
        <div class="h-6 w-full rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
        <div class="h-6 w-11/12 rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
        <div class="h-6 w-3/4 rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
      </div>
      <!-- Body paragraphs -->
      <div v-for="i in 4" :key="i" class="space-y-2">
        <div class="h-3.5 w-full rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
        <div class="h-3.5 w-full rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
        <div class="h-3.5 w-5/6 rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
        <div class="h-3.5 w-full rounded bg-[#eeeeee] dark:bg-[#111111]"></div>
      </div>
    </div>
  </div>
</template>
