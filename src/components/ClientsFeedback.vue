<template>
  <section class="py-16 bg-gray-50 dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        Our Clients Feedback
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        navigation
        pagination
        class="w-full max-w-3xl mx-auto"
      >
        <swiper-slide v-for="(feedback, i) in feedbacks" :key="i">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <p class="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
              "{{ feedback.comment }}"
            </p>
            <div class="flex items-center justify-center space-x-4">
              <img
                :src="feedback.image"
                alt="Client"
                class="w-16 h-16 rounded-full border-2 border-[#ad58eb]"
              />
              <div class="text-left">
                <h4 class="text-xl font-bold text-[#191919] dark:text-white">
                  {{ feedback.name }}
                </h4>
                <p class="text-gray-500 dark:text-gray-400 text-sm">
                  {{ feedback.role }}
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "ClientsFeedback",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      feedbacks: [
        {
          name: "John Doe",
          role: "Business Traveler",
          comment:
            "Amazing experience! The staff was very friendly and the rooms were spotless.",
          image: "https://i.pravatar.cc/150?img=1",
        },
        {
          name: "Emily Smith",
          role: "Vacation Guest",
          comment:
            "The hotel facilities were top-notch. Loved the pool and spa services!",
          image: "https://i.pravatar.cc/150?img=2",
        },
        {
          name: "Michael Brown",
          role: "Event Organizer",
          comment:
            "Perfect place for our conference. Everything was well arranged.",
          image: "https://i.pravatar.cc/150?img=3",
        },
      ],
    };
  },
};
</script>
