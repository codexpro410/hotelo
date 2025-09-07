<template>
  <section class="py-16 bg-gray-50 dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        Our Latest Blog
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(post, i) in posts"
          :key="i"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <img :src="post.image" alt="Blog Post" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#191919] dark:text-white mb-2">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ post.excerpt }}
            </p>
            <a
              href="#"
              class="inline-block px-4 py-2 rounded-md bg-[#ad58eb] text-white hover:bg-[#9333ea] transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurBlog",
  data() {
    return {
      posts: [
        {
          title: "Luxury Rooms for Your Comfort",
          excerpt: "Discover our spacious and elegant rooms designed for ultimate relaxation.",
          image: "https://source.unsplash.com/600x400/?hotel,room",
        },
        {
          title: "Fine Dining Experience",
          excerpt: "Taste world-class cuisines prepared by our professional chefs.",
          image: "https://source.unsplash.com/600x400/?restaurant,food",
        },
        {
          title: "Relax in Our Spa",
          excerpt: "Unwind with premium spa treatments in a serene environment.",
          image: "https://source.unsplash.com/600x400/?spa,relax",
        },
      ],
    };
  },
};
</script>
