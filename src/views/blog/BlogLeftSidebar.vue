<template>
  <section class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

      <!-- Sidebar -->
      <BlogSideBar/>

      <!-- Blog Content -->
      <div class="lg:col-span-3">
        <PageTitle h2="Our Latest Blog"/>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
          v-for="blog in blogs"
          :key="blog.id"
          class="bg-gray-50 dark:bg-black/50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          <div class="relative overflow-hidden cursor-pointer">
            <img
              :src="blog.image"
              alt="Blog"
              class="w-full h-80 object-cover hover:scale-150 transition-all duration-500"
            />
            <span class="absolute bottom-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
              {{ blog.category }}
            </span>
          </div>

          <div class="p-6 text-left">
            <h3 class="text-xl font-semibold mb-2 text-[#191919] dark:text-white hover:text-primary transition">
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
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-8 space-x-2">
          <button class="px-3 py-1 border rounded hover:bg-primary hover:text-white">1</button>
          <button class="px-3 py-1 border rounded hover:bg-primary hover:text-white">2</button>
          <button class="px-3 py-1 border rounded hover:bg-primary hover:text-white">3</button>
          <button class="px-3 py-1 border rounded hover:bg-primary hover:text-white">→</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogs } from "@/data/blogData.js";
import PageTitle from "@/components/commonTemps/PageTitle.vue";
import BlogSideBar from "@/components/blog/BlogSideBar.vue";



</script>
