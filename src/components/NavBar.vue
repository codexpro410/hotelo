<template>
  <header class="h-20 sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-base/70 border-b border-zinc-200/50 dark:border-zinc-700/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="h-16 flex items-center gap-4 relative">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 font-extrabold text-lg">
          <img src="/images/logo.png"
               alt="Logo"
               width="200"
               height="80" />
        </router-link>

        <!-- Nav links -->
        <nav class="hidden md:flex items-center gap-6 ml-8">
          <router-link to="/" class="hover:text-primary">Home</router-link>
          <router-link to="/about" class="hover:text-primary">About Us</router-link>
          <a href="#OurRooms" class="hover:text-primary">Our Rooms+</a>
          <a href="#Pages" class="hover:text-primary">Pages+</a>
          <a href="#Blog" class="hover:text-primary">Blog+</a>
          <a href="#Contact" class="hover:text-primary">Contact</a>
        </nav>

        <!-- Search -->
        <div class="hidden lg:flex items-center ml-auto mr-3 border border-zinc-300 dark:border-zinc-700 rounded-tl-xl rounded-br-xl overflow-hidden">
          <input
            placeholder="Search…"
            class="px-3 py-1 bg-white dark:bg-zinc-900 outline-none"
          />
          <button class="px-4 py-2 bg-white dark:bg-zinc-900 hover:bg-primary/50 group flex items-center justify-center">
            <Search class="w-4 h-4 text-primary group-hover:text-white transition-colors" />
          </button>
        </div>

        <!-- Actions: CTA -->
        <div class="ml-auto md:ml-0 flex items-center gap-3 relative">
          <!-- Animated hover button (Book Now) -->
          <router-link
            to="/about"
            class="group relative inline-flex items-center overflow-hidden rounded-tl-xl rounded-br-xl p-[2px]"
          >
            <!-- animated gradient border -->
            <span
              class="absolute inset-0 -z-10 animate-gradient bg-[length:200%_100%] bg-gradient-to-r from-[#ad58eb] via-purple-500 to-[#ad58eb]"
            ></span>

            <!-- inner button -->
            <span
              class="px-6 py-2 w-full h-full bg-[#ad58eb] dark:bg-[#ad58eb] rounded-tl-xl rounded-br-xl font-semibold text-white transition-colors duration-500 group-hover:bg-black group-hover:text-white"
            >
              Book Now
            </span>
          </router-link>
        </div>
      </div>
    </div>

  
    <button
      @click="toggleTheme"
      class="fixed right-4 top-[200px] flex items-center gap-2 px-3 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-lg hover:bg-primary/50 transition-colors z-50"
    >
      <component :is="isDark ? SunIcon : MoonIcon" class="w-5 h-5 text-yellow-400" />

    </button>
  </header>
</template>

<script setup>
import { Search } from "lucide-vue-next"
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
const isDark = computed(() => theme.dark)
const toggleTheme = () => theme.toggle()
</script>
