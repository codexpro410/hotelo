<template>
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
</template>

<script setup>
import { blogs } from '@/data/blogData';
import { computed, ref } from 'vue';


const search = ref("");

const categories = ["Europe", "Ireland", "Dubai", "New York", "Singapore", "Australia", "Hong Kong"];
const tags = ["Vacation", "Adventure", "Explore", "Destination", "Travel", "Tour", "Tourism", "Holiday"];

const filteredBlogs = computed(() =>
  blogs.filter((b) => b.title.toLowerCase().includes(search.value.toLowerCase()))
);
</script>