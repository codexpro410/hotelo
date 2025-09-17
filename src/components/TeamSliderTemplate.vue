<template>
    <div class="container mx-auto px-4 text-center">
      <swiper
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        navigation
        pagination
        class="rounded-2xl overflow-hidden"
      >
        <swiper-slide v-for="member in team4" :key="member.id">
          <div class="bg-[#222222] relative group overflow-hidden rounded-t-lg">
            <a :href="member.link">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-80 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <div
              class="absolute bottom-3 right-3 p-1 bg-primary group-hover:bg-black transition-colors duration-300 cursor-pointer z-10"
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

          <div class="p-6 text-center relative bg-[#222222]">
            <h3 class="text-lg font-semibold text-[#191919] dark:text-white">{{ member.name }}</h3>
            <span class="text-gray-500 dark:text-gray-300">{{ member.role }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teamMembers } from '@/data/TeamData';
import { Linkedin, Instagram, Facebook, Share2, TwitterIcon } from 'lucide-vue-next';
const team4 = teamMembers.slice(0, 4);
</script>