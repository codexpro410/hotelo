<template>
    <!-- Counter -->
   <section class="bg-zinc-900 py-16">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div
        v-for="(item, index) in counters"
        :key="index"
        class="bg-zinc-800 rounded-xl p-8 text-center shadow hover:shadow-lg transition"
      >
        <!-- Icon -->
        <div class="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
          <component :is="item.icon" class="w-6 h-6" />
        </div>

        <!-- Counter -->
        <div class="text-3xl font-bold text-white flex justify-center gap-2">
          <CountUp :end-val="item.value" :duration="2.5" /> +
        </div>

        <!-- Label -->
        <p class="text-zinc-400 mt-2">{{ item.label }}</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { CheckCircle, Home,  Trophy, Cog} from "lucide-vue-next";

import CountUp from "vue-countup-v3";

const counters = [
  { value: 540, label: "Exclusive Rooms", icon: Home },
  { value: 990, label: "Successful Story", icon: CheckCircle },
  { value: 3500, label: "Global Presence", icon: Trophy },
  { value: 54, label: "Experiences", icon: Cog },
];
</script>