<template>
  <section class="py-16 bg-black text-white">
    <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
    
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

      <!-- Sidebar -->
      <aside class="lg:col-span-1 space-y-8">
        <!-- Search -->
        <div class="p-4 border rounded-lg">
          <h6 class="font-semibold mb-2">Search</h6>
          <div class="flex items-center border rounded px-2">
            <input
              type="text"
              placeholder="Search"
              class="w-full bg-transparent focus:outline-none py-2"
              v-model="search"
            />
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
            </svg>
          </div>
        </div>

        <!-- Recent Posts -->
        <div class="p-4 border rounded-lg">
          <h6 class="font-semibold mb-2">Recent Posts</h6>
          <ul class="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li v-for="post in blogs.slice(0, 6)" :key="post.id">
              <a :href="post.link" class="hover:text-primary">{{ post.title }}</a>
            </li>
          </ul>
        </div>

        <!-- Archives -->
        <div class="p-4 border rounded-lg">
          <h6 class="font-semibold mb-2">Archives</h6>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><a href="#">January 2024</a></li>
            <li><a href="#">February 2024</a></li>
            <li><a href="#">March 2024</a></li>
            <li><a href="#">April 2024</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="p-4 border rounded-lg">
          <h6 class="font-semibold mb-2">Categories</h6>
          <ul class="space-y-2 text-sm text-gray-300">
            <li v-for="cat in categories" :key="cat">
              <a href="#" class="hover:text-primary">{{ cat }}</a>
            </li>
          </ul>
        </div>

        <!-- Tags -->
        <div class="p-4 border rounded-lg">
          <h6 class="font-semibold mb-2">Tags</h6>
          <div class="flex flex-wrap gap-2">
            <a v-for="tag in tags" :key="tag"
              href="#"
              class="px-3 py-1 bg-gray-700 rounded-full text-xs hover:bg-primary hover:text-white transition">
              {{ tag }}
            </a>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { blogs } from "@/data/blogData.js";
import PageTitle from "@/components/commonTemps/PageTitle.vue";

const search = ref("");
const categories = ["Europe", "Ireland", "Dubai", "New York", "Singapore", "Australia", "Hong Kong"];
const tags = ["Vacation", "Adventure", "Explore", "Destination", "Travel", "Tour", "Tourism", "Holiday"];

const filteredBlogs = computed(() =>
  blogs.filter((b) => b.title.toLowerCase().includes(search.value.toLowerCase()))
);
</script>
