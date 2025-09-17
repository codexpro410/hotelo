<template>
  <div class="breadscrumb-contain text-center py-12 bg-gray-100 dark:bg-[#222222] rounded-xl">
    <!-- Title -->
    <h2 class="text-3xl font-bold mb-4">{{ pageTitle }}</h2>

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="flex justify-center items-center gap-2 text-gray-600 dark:text-gray-300">
        <!-- Home -->
        <li class="flex items-center gap-2">
          <router-link to="/" class="hover:text-primary">
            <Home class="w-5 h-5" />
          </router-link>
          <MoveRight class="w-4 h-4" />
        </li>

        <!-- Parents -->
        <li
          v-for="(m, index) in parents"
          :key="index"
          class="flex items-center gap-2"
        >
          <router-link :to="m.path" class="hover:text-primary">
            {{ cleanTitle(m.meta.title) }}
          </router-link>
          <MoveRight v-if="index < parents.length" class="w-4 h-4" />
        </li>

        <!-- Current Page -->
        <li class="text-primary font-medium">
          {{ pageTitle }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { Home, MoveRight } from "lucide-vue-next";

const route = useRoute();

// 🔹 العنوان الحالي
const pageTitle = route.meta.title?.replace(" - Hotel", "") || route.name;

// 🔹 كل الـ parents (ما عدا الصفحة الحالية نفسها)
const parents = route.matched.filter(r => r.path !== route.path && r.meta?.title);

// 🔹 دالة تنظيف العنوان
const cleanTitle = (title) => title?.replace(" - Hotel", "") || title;
</script>
