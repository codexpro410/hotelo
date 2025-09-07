<template>
  <section class="py-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-center text-white mb-4">Our Clients Feedback</h2>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p class="w-1/4 bg-primary h-1 text-center mx-auto mb-3"></p>

      <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="3"
        :space-between="40"
        navigation
        pagination
        class="w-full "
      >
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
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
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    name: 'Andrew Smith',
    job: 'Motivational Speaker',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-1.png',
  },
  {
    id: 2,
    name: 'Jane Ronan',
    job: 'Insurance Expert',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-6.png',
  },
  {
    id: 3,
    name: 'Jenin Pamela',
    job: 'Social Influencer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-1.png',
  },
  {
    id: 4,
    name: 'Daisy Lucy',
    job: 'Graphics Designer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-6.png',
  },
  {
    id: 5,
    name: 'Taylor Sopia',
    job: 'Digital Marketer',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-1.png',
  },
  {
    id: 6,
    name: 'John Doe',
    job: 'Banker',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-6.png',
  },
]
</script>
