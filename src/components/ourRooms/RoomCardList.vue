<template>
  <div class=" rounded-xl overflow-hidden shadow-lg bg-[#191919]">
    <div  v-for="(room) in rooms"
          :key="room.id" class="container m-auto w-full flex flex-col md:flex-row my-4">
      <!-- Image (left on md+) -->
      <div class="relative md:w-6/12 !h-[400px] ">
        <img
          :src="room.image"
          :alt="room.name"
          class="w-full h-64 md:h-full object-cover rounded-md"
        />
        <!-- Price pill -->
        <span
          class="absolute left-4 top-4 bg-[#ad58eb] text-white text-sm font-semibold px-3 py-1 rounded-lg shadow"
        >
          {{ room.price }}
        </span>
      </div>

      <!-- Content (right on md+) -->
      <div class="p-6 md:w-6/12 flex flex-col justify-between bg-[#1e1e1f]">
        <div>
          <div class="flex items-start justify-between">
            <h3 class="text-2xl font-bold text-white">{{ room.name }}</h3>

            <!-- Stars -->
            <div class="flex items-center space-x-1">
              <StarIcon
                v-for="n in room.stars"
                :key="n + room.name"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
          </div>

          <!-- Features -->
          <div class="flex flex-wrap items-center gap-6 text-gray-300 mt-4 text-sm">
            <div class="flex items-center gap-2">
              <Bed class="w-5 h-5 text-[#ad58eb]" />
              <span>{{ room.beds }} Bed</span>
            </div>
            <div class="flex items-center gap-2">
              <Bath class="w-5 h-5 text-[#ad58eb]" />
              <span>{{ room.baths }} Bath</span>
            </div>
            <div class="flex items-center gap-2">
              <Wifi class="w-5 h-5 text-[#ad58eb]" />
              <span>Wifi</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-300 mt-4 text-sm leading-relaxed">
            {{ room.description }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between mt-6">
          <router-link
            :to="`/rooms/details/${encodeURIComponent(room.name)}`"
            class="inline-block bg-[#ad58eb] text-white px-5 py-2 rounded hover:bg-[#9a3fe0] transition"
          >
            View Details
          </router-link>

          <router-link
            to="/booking"
            class="inline-block bg-[#111111] border border-zinc-800 text-white px-5 py-2 rounded hover:bg-black transition"
          >
            Book Now
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bed, Bath, Wifi } from 'lucide-vue-next'
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  room: {
    type: Object,
    required: true
  }
})
import { rooms } from '@/data/roomsData'
</script>

<style scoped>

</style>
