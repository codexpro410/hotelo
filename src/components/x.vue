<template>
  <section class="bg-gray-100 dark:bg-[#191919] py-4">
    <div class="container mx-auto px-4">
      <nav class="text-sm text-gray-600 dark:text-gray-300">
        <ol class="list-reset flex">
          <li>
            <a href="/" class="text-[#ad58eb] hover:underline flex items-center">
              <i class="fas fa-home mr-1"></i> Home
            </a>
          </li>
          <li><span class="mx-2">/</span></li>
          <li>
            <a href="/about" class="hover:underline">About</a>
          </li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-800 dark:text-white font-semibold">Current Page</li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BreadCrumb',
}
</script>
