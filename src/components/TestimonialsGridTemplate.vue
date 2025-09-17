<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-[#191919] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <div class="bg-gray-100 dark:bg-[#fff5dc] !text-black p-8 rounded-2xl shadow-lg">
            <ul class="flex items-center mb-4 gap-1 text-yellow-400">
              <StarIcon v-for="n in 5" :key="n" class="w-4 h-4"/>
              <li><span class="ml-2 text-gray-600 dark:text-black">(5.0)</span></li>
            </ul>
            <p class="text-lg text-gray-700 dark:text-black italic mb-6">
              "{{ testimonial.message }}"
            </p>
            <div class="flex items-center gap-4">
              <img :src="testimonial.avatar" alt="" class="w-14 h-14 rounded-full object-cover border-2 border-[#ad58eb]" />
              <div>
                <h4 class="font-semibold text-[#ad58eb]">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500 dark:text-black">{{ testimonial.job }}</p>
              </div>
            </div>
          </div>
      </div>
      </div>
</template>

<script setup>
import { testimonials } from '@/data/testimonials';
import { StarIcon } from '@heroicons/vue/24/solid'

</script>