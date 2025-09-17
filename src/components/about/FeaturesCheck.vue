<template>
    <div class="container pt-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      
      <!-- Left Content -->
      <div>
        <span class="text-sm uppercase tracking-wide text-purple-400 font-semibold">
          About Us
        </span>
        <h2 class="text-4xl font-bold mt-2">
          Explore the Peaks, Find Your Adventure.
        </h2>
        <p class="text-zinc-400 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt
          labore dolore magna.
        </p>

        <!-- Feature List -->
        <ul class="space-y-3 mt-6">
          <li v-for="(item, index) in features" :key="index" class="flex items-start space-x-3">
            <CheckCircle class="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
            <span class="text-zinc-200">{{ item }}</span>
          </li>
        </ul>

        <!-- Button -->
        <a
          href="/contact"
          class="inline-block mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition"
        >
          Contact Us
        </a>
      </div>

      <!-- Right Video -->
      <div class="relative rounded-xl overflow-hidden shadow-lg">
        <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/UJEUwEJ6gH4"
              frameborder="0" allowfullscreen>
          </iframe>
      </div>
    </div>
</template>
<script setup>
import { CheckCircle} from "lucide-vue-next";

const features = [
  "Mobile Check-In",
  "VIP Shopping at Local Merchants",
  "Room Amenities: In-Room Tablets",
  "Enthusiast & Hobbyist Tech",
];
</script>