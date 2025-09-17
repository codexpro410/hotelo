<template>
  <section class="bg-zinc-900 text-white py-16">
    <BreadCrumb/>
    <div class="container pt-10 mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
      
      <!-- Content -->
      <div class="lg:col-span-8 space-y-6">
        <div>
          <h2 class="text-4xl font-bold">Alister Cock</h2>
          <p class="text-lg font-medium text-zinc-400 mt-1">Reservation Agent</p>
          <hr class="border-zinc-700 my-4" />
        </div>

        <!-- Social icons -->
        <div class="flex space-x-3">
          <a v-for="icon in socials" :key="icon.name" :href="icon.href" target="_blank"
             class="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-600 hover:bg-primary hover:text-white transition">
            <component :is="icon.icon" class="w-5 h-5" />
          </a>
        </div>

        <!-- Description -->
        <p class="text-zinc-300 leading-relaxed">
          Phasellus in libero et nunc malesuada tincidunt. Morbi auctor tristique semper. 
          Nunc condimentum dapibus felis, non volutpat ligula dapibus non. 
          Quisque varius massa magna, eget iaculis ipsum tincidunt sed. 
          Sed tempus magna id nunc posuere auctor. Morbi aliquam a justo eget cursus. 
          Donec at quam id ex mollis dapibus eget ac sem. 
          Maecenas pharetra bibendum massa, ut tincidunt lectus.
        </p>
      </div>

      <!-- Image -->
      <div class="lg:col-span-4">
        <img
          src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-4.jpg"
          alt="Team Member"
          class="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BreadCrumb from "@/components/commonTemps/BreadCrumb.vue";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-vue-next";

// Define social links
const socials = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];
</script>

