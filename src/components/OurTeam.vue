<template>
  <section class="py-16 bg-white dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        Our Team
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(member, i) in team"
          :key="i"
          class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <img
            :src="member.image"
            alt="Team Member"
            class="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#ad58eb]"
          />
          <h4 class="text-xl font-bold text-[#191919] dark:text-white">
            {{ member.name }}
          </h4>
          <p class="text-gray-500 dark:text-gray-300">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurTeam",
  data() {
    return {
      team: [
        {
          name: "Sarah Johnson",
          role: "General Manager",
          image: "https://i.pravatar.cc/150?img=10",
        },
        {
          name: "James Wilson",
          role: "Head Chef",
          image: "https://i.pravatar.cc/150?img=11",
        },
        {
          name: "Anna Roberts",
          role: "Event Planner",
          image: "https://i.pravatar.cc/150?img=12",
        },
      ],
    };
  },
};
</script>
