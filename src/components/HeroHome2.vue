<template>
  <section class="bg-zinc-900 py-16">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      <!-- Left Image -->
      <div class="flex justify-center" data-aos="fade-up" data-aos-duration="1600">
        <img 
          src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/banner.jpg" 
          alt="Banner Image" 
          class="rounded-2xl shadow-lg"
        />
      </div>

      <!-- Right Content -->
      <div data-aos="fade-up" data-aos-duration="1200">
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-snug mb-6">
          Refresh Your Spirit, Summit Style.
        </h1>

        <p class="text-zinc-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p class="text-zinc-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div>
          <router-link 
            to="/about" 
            class="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
          >
            Discover More
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>
