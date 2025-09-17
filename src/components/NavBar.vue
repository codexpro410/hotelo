<template>
  <header
    class="h-20 sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-base/70 border-b border-zinc-200/50 dark:border-zinc-700/50"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="h-16 flex items-center gap-4 relative">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 font-extrabold text-lg">
          <img src="/images/logo.png" alt="Logo" width="200" height="80" />
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-6 ml-8 relative">
          <!-- Home -->
          <div class="relative group inline-block">
            <span class="hover:text-primary cursor-pointer select-none">Home</span>
            <div
              class="absolute left-0 top-full hidden group-hover:block pointer-events-none group-hover:pointer-events-auto
                     bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-48
                     transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <router-link to="/" class="block px-3 py-2 hover:bg-primary/10 rounded">Homepage One</router-link>
              <router-link to="/home-2" class="block px-3 py-2 hover:bg-primary/10 rounded">Homepage Two</router-link>
            </div>
          </div>

          <!-- About -->
          <router-link to="/about" class="hover:text-primary">About Us</router-link>

          <!-- Our Rooms -->
          <div class="relative group inline-block">
            <span class="hover:text-primary cursor-pointer select-none">Our Rooms +</span>
            <div
              class="absolute left-0 top-full hidden group-hover:block pointer-events-none group-hover:pointer-events-auto
                     bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-48
                     transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <router-link to="/rooms/grid" class="block px-3 py-2 hover:bg-primary/10 rounded">Grid</router-link>
              <router-link to="/rooms/slider" class="block px-3 py-2 hover:bg-primary/10 rounded">Slider</router-link>
              <router-link to="/rooms/list" class="block px-3 py-2 hover:bg-primary/10 rounded">List</router-link>
              <router-link to="/rooms/details" class="block px-3 py-2 hover:bg-primary/10 rounded">Details</router-link>
            </div>
          </div>

          <!-- Pages -->
          <div class="relative group inline-block">
            <span class="hover:text-primary cursor-pointer select-none">Pages +</span>
            <div
              class="absolute left-0 top-full hidden group-hover:block pointer-events-none group-hover:pointer-events-auto
                     bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-56
                     transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <!-- Team -->
              <div class="relative group/team">
                <span class="block px-3 py-2 hover:bg-primary/10 rounded cursor-pointer">Team »</span>
                <div
                  class="absolute left-full top-0 hidden group-hover/team:block group-hover/team:pointer-events-auto
                         bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-48
                         transition-all duration-300 opacity-0 translate-x-2 group-hover/team:opacity-100 group-hover/team:translate-x-0"
                >
                  <router-link to="/pages/team/grid" class="block px-3 py-2 hover:bg-primary/10 rounded">Grid</router-link>
                  <router-link to="/pages/team/slider" class="block px-3 py-2 hover:bg-primary/10 rounded">Slider</router-link>
                  <router-link to="/pages/team/details" class="block px-3 py-2 hover:bg-primary/10 rounded">Details</router-link>
                </div>
              </div>

              <!-- Testimonials -->
              <div class="relative group/testi mt-2">
                <span class="block px-3 py-2 hover:bg-primary/10 rounded cursor-pointer">Testimonials »</span>
                <div
                  class="absolute left-full top-0 hidden group-hover/testi:block group-hover/testi:pointer-events-auto
                         bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-48
                         transition-all duration-300 opacity-0 translate-x-2 group-hover/testi:opacity-100 group-hover/testi:translate-x-0"
                >
                  <router-link to="/pages/testimonials/grid" class="block px-3 py-2 hover:bg-primary/10 rounded">Grid</router-link>
                  <router-link to="/pages/testimonials/slider" class="block px-3 py-2 hover:bg-primary/10 rounded">Slider</router-link>
                </div>
              </div>

              <!-- باقي الصفحات -->
              <router-link to="/pages/booking" class="block px-3 py-2 hover:bg-primary/10 rounded">Booking Form</router-link>
              <router-link to="/pages/account" class="block px-3 py-2 hover:bg-primary/10 rounded">My Account</router-link>
              <router-link to="/pages/faq" class="block px-3 py-2 hover:bg-primary/10 rounded">FAQ</router-link>
              <router-link to="/pages/sample" class="block px-3 py-2 hover:bg-primary/10 rounded">Sample Page</router-link>
              <router-link to="/pages/privacy" class="block px-3 py-2 hover:bg-primary/10 rounded">Privacy Policy</router-link>
              <router-link to="/pages/404" class="block px-3 py-2 hover:bg-primary/10 rounded">404 Error Page</router-link>
            </div>
          </div>

          <!-- Blog -->
          <div class="relative group inline-block">
            <span class="hover:text-primary cursor-pointer select-none">Blog +</span>
            <div
              class="absolute left-0 top-full hidden group-hover:block pointer-events-none group-hover:pointer-events-auto
                     bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-56
                     transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <!-- Blog Layout -->
              <div class="relative group/bloglayout">
                <span class="block px-3 py-2 hover:bg-primary/10 rounded cursor-pointer">Blog Layout »</span>
                <div
                  class="absolute left-full top-0 hidden group-hover/bloglayout:block group-hover/bloglayout:pointer-events-auto
                         bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-48
                         transition-all duration-300 opacity-0 translate-x-2 group-hover/bloglayout:opacity-100 group-hover/bloglayout:translate-x-0"
                >
                  <router-link to="/blog/grid" class="block px-3 py-2 hover:bg-primary/10 rounded">Grid</router-link>
                  <router-link to="/blog/slider" class="block px-3 py-2 hover:bg-primary/10 rounded">Slider</router-link>
                  <router-link to="/blog/left-sidebar" class="block px-3 py-2 hover:bg-primary/10 rounded">Left Sidebar</router-link>
                  <router-link to="/blog/right-sidebar" class="block px-3 py-2 hover:bg-primary/10 rounded">Right Sidebar</router-link>
                </div>
              </div>

              <!-- Single Blog -->
              <div class="relative group/singleblog mt-2">
                <span class="block px-3 py-2 hover:bg-primary/10 rounded cursor-pointer">Single Blog »</span>
                <div
                  class="absolute left-full top-0 hidden group-hover/singleblog:block group-hover/singleblog:pointer-events-auto
                         bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-3 w-48
                         transition-all duration-300 opacity-0 translate-x-2 group-hover/singleblog:opacity-100 group-hover/singleblog:translate-x-0"
                >
                  <router-link to="/blog/no-sidebar" class="block px-3 py-2 hover:bg-primary/10 rounded">No Sidebar</router-link>
                  <router-link to="/blog/single-left" class="block px-3 py-2 hover:bg-primary/10 rounded">Left Sidebar</router-link>
                  <router-link to="/blog/single-right" class="block px-3 py-2 hover:bg-primary/10 rounded">Right Sidebar</router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <router-link to="/contact" class="hover:text-primary">Contact</router-link>
        </nav>

        <!-- Search -->
        <div
          class="hidden lg:flex items-center ml-auto mr-3 border border-zinc-300 dark:border-zinc-700 rounded-tl-xl rounded-br-xl overflow-hidden"
        >
          <input
            placeholder="Search…"
            class="px-3 py-1 bg-white dark:bg-zinc-900 outline-none"
          />
          <router-link to="/"
            class="px-4 py-2 bg-white dark:bg-zinc-900 hover:bg-primary/50 group flex items-center justify-center"
          >
            <Search class="w-4 h-4 text-primary group-hover:text-white transition-colors" />
          </router-link>
        </div>

        <!-- Actions: CTA -->
        <div class="ml-auto md:ml-0 flex items-center gap-3 relative">
          <!-- Animated hover button (Book Now) -->
          <router-link
            to="pages/booking"
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

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="mobileOpen = !mobileOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="mobileOpen" class="md:hidden bg-white dark:bg-zinc-900 shadow-lg p-4 space-y-3">
        <router-link to="/" class="block py-2">Home</router-link>
        <router-link to="/about" class="block py-2">About Us</router-link>
        <!-- ممكن هنا تعمل v-for وتخليها accordion-style -->
        <details>
          <summary class="py-2 cursor-pointer">Our Rooms</summary>
          <div class="pl-4 space-y-2">
            <router-link to="/rooms/grid">Grid</router-link>
            <router-link to="/rooms/slider">Slider</router-link>
            <router-link to="/rooms/list">List</router-link>
            <router-link to="/rooms/details">Details</router-link>
          </div>
        </details>
        <details>
          <summary class="py-2 cursor-pointer">Pages</summary>
          <div class="pl-4 space-y-2">
            <details>
              <summary class="cursor-pointer">Team</summary>
              <div class="pl-4 space-y-2">
                <router-link to="/pages/team/grid">Grid</router-link>
                <router-link to="/pages/team/slider">Slider</router-link>
                <router-link to="/pages/team/details">Details</router-link>
              </div>
            </details>
            <details>
              <summary class="cursor-pointer">Testimonials</summary>
              <div class="pl-4 space-y-2">
                <router-link to="/pages/testimonials/grid">Grid</router-link>
                <router-link to="/pages/testimonials/slider">Slider</router-link>
              </div>
            </details>
            <router-link to="/pages/booking">Booking Form</router-link>
            <router-link to="/pages/account">My Account</router-link>
            <router-link to="/pages/faq">FAQ</router-link>
            <router-link to="/pages/sample">Sample Page</router-link>
            <router-link to="/pages/privacy">Privacy Policy</router-link>
            <router-link to="/pages/not-found">404</router-link>
          </div>
        </details>
        <details>
          <summary class="py-2 cursor-pointer">Blog</summary>
          <div class="pl-4 space-y-2">
            <details>
              <summary class="cursor-pointer">Blog Layout</summary>
              <div class="pl-4 space-y-2">
                <router-link to="/blog/grid">Grid</router-link>
                <router-link to="/blog/slider">Slider</router-link>
                <router-link to="/blog/left-sidebar">Left Sidebar</router-link>
                <router-link to="/blog/right-sidebar">Right Sidebar</router-link>
              </div>
            </details>
            <details>
              <summary class="cursor-pointer">Single Blog</summary>
              <div class="pl-4 space-y-2">
                <router-link to="/blog/details/no-sidebar">No Sidebar</router-link>
                <router-link to="/blog/details/left-sidebar">Left Sidebar</router-link>
                <router-link to="/blog/details/right-sidebar">Right Sidebar</router-link>
              </div>
            </details>
          </div>
        </details>
        <router-link to="/contact" class="block py-2">Contact</router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "lucide-vue-next";

const mobileOpen = ref(false);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
