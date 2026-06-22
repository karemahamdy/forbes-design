<template>
  <footer class="mt-12 mb-4 bg-white text-[#111111] transition-colors duration-300 dark:bg-[#050505] dark:text-white">
    <div class="max-w-[1400px] mx-auto px-4">

      <!-- Top Line -->
      <div class="border-t-2 border-[#111111] transition-colors duration-300 dark:border-white"></div>

      <!-- Logo -->
      <div class="p-4">
        <NuxtImg src="/images/Forbes Middle East.svg" width="100" height="25" loading="lazy" alt="Forbes Middle East"
          class="h-[25px] w-auto dark:invert" />
      </div>

      <!-- Bottom Line -->
      <div class="border-t border-[#111111] transition-colors duration-300 dark:border-white"></div>

      <!-- Footer Bottom -->
      <div class="flex items-center justify-between gap-4 py-4">

        <!-- Copyright -->
        <div class="flex items-center gap-2 text-[14px] text-[#222] transition-colors duration-300 dark:text-white">
          <span>
            &copy; {{ year }} Forbes Middle East. All Rights Reserved.
          </span>
        </div>

        <!-- Social -->
        <ul class="flex items-center gap-5" aria-label="Social media links">
          <li>
            <Instagram :size="18"
              class="stroke-[2.2] transition duration-300 hover:-translate-y-0.5 hover:text-[#c00000] dark:hover:text-[#ff3333]"
              aria-hidden="true" />
          </li>

          <li>
            <Linkedin :size="18"
              class="stroke-[2.2] transition duration-300 hover:-translate-y-0.5 hover:text-[#c00000] dark:hover:text-[#ff3333]"
              aria-hidden="true" />
          </li>

          <li>
            <Youtube :size="18"
              class="stroke-[2.2] transition duration-300 hover:-translate-y-0.5 hover:text-[#c00000] dark:hover:text-[#ff3333]"
              aria-hidden="true" />
          </li>
          <li>
            <Twitter :size="18"
              class="stroke-[2.2] transition duration-300 hover:-translate-y-0.5 hover:text-[#c00000] dark:hover:text-[#ff3333]"
              aria-hidden="true" />
          </li>

        </ul>
      </div>

      <!-- Bottom Line -->
      <div class="border-t border-[#111111] transition-colors duration-300 dark:border-white"></div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from 'lucide-vue-next'

const year = new Date().getFullYear()
</script>
