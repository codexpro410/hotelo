<template>
  <section class="py-16 bg-white dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <!-- <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <p class="w-1/4 bg-primary h-1 text-center mx-auto mb-3"></p> -->

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(room, index) in rooms"
          :key="index"
          class="bg-[#191919] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <!-- Image + price -->
          <div class="relative">
            <img :src="room.image" alt="room" class="w-full h-[300px] object-cover" />
            <span
              class="absolute left-4 bottom-0 translate-y-1/2 bg-primary text-white px-3 py-1 text-sm rounded shadow"
            >
              {{ room.price }}
            </span>
          </div>

          <!-- Room info -->
          <div class="p-6 text-left">
            <div class="flex justify-between items-center mt-3">
              <h3 class="w-full text-xl font-semibold text-white flex items-center justify-between gap-2">
                <span>{{ room.name }}</span>
                <span class="flex text-yellow-400 ">
                  <StarIcon v-for="star in room.stars" :key="star" class="w-4 h-4" />
                </span>
              </h3>
            </div>

            <!-- Features -->
            <div class="flex items-center text-gray-400 text-sm mt-2 space-x-4">
              <span class="flex items-center gap-1">
                <Bed class="w-4 h-4 text-[#ad58eb]" />{{ room.beds }} Bed
              </span>
              <span class="flex items-center gap-1">
                <Bath  class="text-[#ad58eb]" />{{ room.baths }} Bath
              </span>
              <span class="flex items-center gap-1">
                <Wifi  class="text-[#ad58eb]" />Wifi
              </span>
            </div>

            <!-- Description -->
            <p class="text-gray-300 text-sm mt-3">
              {{ room.description }}
            </p>

            <!-- Buttons -->
            <div class="flex justify-between mt-5">
              <button
                class="bg-[#ad58eb] text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                View Details
              </button>
              <button
                class="bg-white dark:bg-gray-900 text-[#191919] dark:text-white px-4 py-2 rounded hover:bg-primary dark:hover:bg-primary transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Bed, Bath, Wifi } from "lucide-vue-next";
import { StarIcon } from "@heroicons/vue/24/solid";

// ✅ Import rooms data
import { rooms } from "@/data/roomsData";

</script>