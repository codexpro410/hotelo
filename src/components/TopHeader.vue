<template>
  <header class="w-full bg-zinc-100 dark:bg-zinc-800 text-sm">
    <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
      <!-- left info -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1 opacity-80">
          <Phone class="w-4 h-4 text-primary" /> <span class="hover:text-primary cursor-pointer transition-all duration-100">+12345678999</span>
        </div>
        <div class="hidden md:flex items-center gap-1 opacity-80">
          <Mail class="w-4 h-4 text-primary" /> <span class="hover:text-primary cursor-pointer transition-all duration-100">hello@hotelo.com</span>
        </div>
        <div class="hidden md:flex items-center gap-1 opacity-80">
          <MapPin class="w-4 h-4 text-primary" /> <span class="hover:text-primary cursor-pointer transition-all duration-100">123 Western Road Melbourne, UK.</span>
        </div>
      </div>

      <!-- right side -->
      <div class="flex items-center gap-4">
        <!-- social icons -->
        <a href="#" class="opacity-80 hover:opacity-100"><Facebook class="w-4 h-4 text-primary" /></a>
        <a href="#" class="opacity-80 hover:opacity-100"><Instagram class="w-4 h-4 text-primary" /></a>
        <a href="#" class="opacity-80 hover:opacity-100"><Twitter class="w-4 h-4 text-primary" /></a>
        <a href="#" class="opacity-80 hover:opacity-100"><Linkedin class="w-4 h-4 text-primary" /></a>

        <!-- language dropdown -->
        <Globe class="w-4 h-4 text-primary" />
        <div class="relative">
          <button
            @click="toggleDropdown"
            class="flex items-center gap-2 opacity-80 hover:opacity-100"
          >
            <span :class="`fi fi-${currentLang.flag}`"></span>
            <span>{{ currentLang.code }}</span>
          </button>
          <div
            v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-700 shadow-md rounded-lg z-50"
          >
            <ul class="py-1 text-sm">
              <li
                v-for="lang in languages"
                :key="lang.code"
                class="flex items-center gap-2 px-3 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-600 cursor-pointer"
                @click="selectLang(lang)"
              >
                <span :class="`fi fi-${lang.flag}`"></span>
                <span>{{ lang.code }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- login/register -->
        <a href="#" class="flex items-center gap-1 opacity-80 hover:opacity-100">
          <User class="w-4 h-4 text-primary" /> <span class="hidden sm:inline hover:text-primary cursor-pointer transition-all duration-100">Login / Register</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Globe, User } from "lucide-vue-next"
import { ref } from "vue"

const languages = [
  { code: "ENG", flag: "gb" },
  { code: "GER", flag: "de" },
  { code: "FRA", flag: "fr" },
  { code: "SPA", flag: "es" },
  { code: "ITA", flag: "it" },
  { code: "RUS", flag: "ru" }
]

const currentLang = ref(languages[0])
const dropdownOpen = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function selectLang(lang) {
  currentLang.value = lang
  dropdownOpen.value = false
}
</script>

<style>
@import "flag-icons/css/flag-icons.min.css";
</style>
