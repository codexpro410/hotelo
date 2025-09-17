<!--  عايز 3 اشكال من ال Card
  list, grid, details -->
<template>
  <div
    v-for="(room, index) in rooms"
    :key="index"
    class="grid-cols-1 bg-[#191919] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
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
          <span class="flex text-yellow-400">
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
          <Bath class="text-[#ad58eb]" />{{ room.baths }} Bath
        </span>
        <span class="flex items-center gap-1"> <Wifi class="text-[#ad58eb]" />Wifi </span>
      </div>

      <!-- Description -->
      <p class="text-gray-300 text-sm mt-3">
        {{ room.description }}
      </p>

      <!-- Buttons -->
      <div class="flex justify-between mt-5">
        <button class="bg-[#ad58eb] text-white px-4 py-2 rounded hover:bg-purple-700 transition">
          View Details
        </button>
        <button
          class="bg-white dark:bg-gray-900 text-[#191919] dark:text-white px-4 py-2 roundeddivver:bg-primary dark:hover:bg-primary transition"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rooms: {
    type: Object,
    required: true,
  },
})
</script>
