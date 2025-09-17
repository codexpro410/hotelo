<template>
    <div class="container mx-auto px-4 pt-4 text-center">
      <swiper
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        navigation
        pagination
        class="rounded-2xl overflow-hidden"
      >
        <swiper-slide v-for="blog in blogs4" :key="blog.id">
          <div
            class="bg-gray-50 dark:bg-black/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div class="relative overflow-hidden cursor-pointer">
              <img
                :src="blog.image"
                alt="Blog"
                class="w-full h-80 object-cover hover:scale-150 transition-all duration-500"
              />
              <span
                class="absolute bottom-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm"
              >
                {{ blog.category }}
              </span>
            </div>

            <div class="p-6 text-left">
              <h3
                class="text-xl font-semibold mb-2 text-[#191919] dark:text-white hover:text-primary transition"
              >
                <a :href="blog.link">{{ blog.title }}</a>
              </h3>
              <p class="text-gray-600 dark:text-white mb-4">
                {{ blog.description }}
              </p>
              <a
                :href="blog.link"
                class="text-[#ad58eb] dark:text-white dark:hover:text-primary font-medium hover:underline flex items-center gap-1"
              >
                Read More <span>→</span>
              </a>
            </div>
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
import { blogs } from "@/data/blogData";

const blogs4 = blogs.slice(0, 4);
</script>
