<template>
  <section class="py-16 bg-gray-900">
    <div class="container mx-auto px-4 text-center">
      <swiper
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        navigation
        pagination
        class="rounded-2xl overflow-hidden"
      >
        <swiper-slide v-for="(room, index) in rooms4" :key="index">
          <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden">
            <img :src="room.image" alt="" class="w-full h-[300px] object-cover" />
            <div class="p-6 text-left">
              <h3 class="w-full text-xl font-semibold text-white flex items-center justify-between gap-2">
                <span>{{ room.name }}</span>
                <span class="flex text-yellow-400">
                  <StarIcon v-for="star in room.stars" :key="star" class="w-4 h-4" />
                </span>
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-300 truncate">{{ room.description }}</p>
              <div class="flex items-center gap-3 mt-4 text-gray-400 text-sm">
                <span class="flex items-center gap-1">
                  <Bed class="w-4 h-4 text-[#ad58eb]" /> {{ room.beds }} Bed
                </span>
                <span class="flex items-center gap-1">
                  <Bath class="w-4 h-4 text-[#ad58eb]" /> {{ room.baths }} Bath
                </span>
                <span class="flex items-center gap-1">
                  <Wifi class="w-4 h-4 text-[#ad58eb]" /> Wifi
                </span>
              </div>
              <button
                class="mt-5 bg-[#ad58eb] text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Bed, Bath, Wifi } from "lucide-vue-next";
import { StarIcon } from "@heroicons/vue/24/solid";
import { rooms } from "@/data/roomsData";

const rooms4 = rooms.slice(0, 4);
</script>
