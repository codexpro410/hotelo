<template>
  <section class="py-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4 text-[#191919] dark:text-white">Our Latest Blog</h2>
      <p class="text-gray-600 dark:text-white max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <p class="w-1/4 bg-primary h-1 mx-auto mb-12"></p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  </section>
</template>

<script setup>
const blogs = [
  {
    id: 1,
    title: "A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.",
    category: "Europe",
    image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "The Importance of an Integrated Booking Engine in a Hotel’s Direct Booking.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.",
    category: "Ireland",
    image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "The Secret to Summertime Success on Your Hotel’s Website.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.",
    category: "Dubai",
    image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-3.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "How H10 Hotels grew their marketing database by capturing first-party data?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.",
    category: "New York",
    image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-4.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "How Penta Hotels Tripled Their Survey Answers Using Form Builder?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.",
    category: "Singapore",
    image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-5.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Inside Palacio Estoril: Combining Historical Charm with Cutting-Edge Hospitality.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.",
    category: "Australia",
    image: "https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-6.jpg",
    link: "#"
  },
]
</script>
