<template>
<div>
    <BreadCrumb/>
    <section class="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
    <!-- صورة -->
    <img
      src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/error.png"
      alt="404 Error"
      class="max-w-md w-full mb-6"
    />

    <!-- عنوان -->
    <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Error 404 : Page Not Found
    </h3>

    <!-- وصف -->
    <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>

    <!-- زر العودة -->
    <router-link
      to="/"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium shadow hover:bg-primary/90 transition"
    >
      <Home class="w-5 h-5" />
      Back to Home
    </router-link>
  </section>
    </div>
    </template>
    <script setup>
import BreadCrumb from '@/components/commonTemps/BreadCrumb.vue';
import { Home } from 'lucide-vue-next';

</script>
