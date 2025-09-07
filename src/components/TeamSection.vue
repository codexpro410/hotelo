<template>
  <section class="py-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4 text-[#191919] dark:text-white">Our Team</h2>
      <p class="text-gray-600 dark:text-white max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <p class="w-1/4 bg-primary h-1 mx-auto mb-12"></p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          :data-aos="'fade-up'"
          :data-aos-duration="1200 + index * 200"
        >
          <div class="relative group overflow-hidden rounded-t-lg">
            <a :href="member.link">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <div
              class="absolute bottom-3 right-3 text-primary group-hover:text-black transition-colors duration-300 cursor-pointer z-10"
            >
              <Share2 class="w-6 h-6"/>
            </div>

            <div
              class="absolute bottom-12 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a href="#" class="bg-white text-black hover:bg-primary hover:text-white p-2 rounded-lg transition-all duration-150">
                <Facebook class="w-4 h-4"/>
              </a>
              <a href="#" class="bg-white text-black hover:bg-primary hover:text-white p-2 rounded-lg transition-all duration-150">
                <TwitterIcon class="w-4 h-4"/>
              </a>
              <a href="#" class="bg-white text-black hover:bg-primary hover:text-white p-2 rounded-lg transition-all duration-150">
                <Instagram class="w-4 h-4"/>
              </a>
              <a href="#" class="bg-white text-black hover:bg-primary hover:text-white p-2 rounded-lg transition-all duration-150">
                <Linkedin class="w-4 h-4"/>
              </a>
            </div>
          </div>

          <div class="p-6 text-center relative">
            <h3 class="text-lg font-semibold text-[#191919] dark:text-white">{{ member.name }}</h3>
            <span class="text-gray-500 dark:text-gray-300">{{ member.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { Linkedin, Instagram, Facebook, Share2, TwitterIcon } from 'lucide-vue-next';

const teamMembers = [
  { name: "John Smith", role: "Hotel Manager", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-1.jpg", link: "#" },
  { name: "Amily Mark", role: "Hotel Receptionist", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-7.jpg", link: "#" },
  { name: "Lucy Eva", role: "Concierge", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-5.jpg", link: "#" },
  { name: "Alister Cock", role: "Reservation Agent", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-4.jpg", link: "#" },
  { name: "Jammy Haris", role: "HR Manager", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-5.jpg", link: "#" },
  { name: "Taylor Sopia", role: "IT Manager", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-4.jpg", link: "#" },
  { name: "Harry Steve", role: "Accounting Manager", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-7.jpg", link: "#" },
  { name: "Sarah Taylor", role: "Security Manager", image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-1.jpg", link: "#" },
]
</script>
