<template>
  <section class="py-16 bg-gray-50 dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        Explore Our Rooms (Slider Style)
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>

      <swiper
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }"
        class="pb-12"
      >
        <swiper-slide
          v-for="(room, index) in rooms"
          :key="index"
          class="bg-[#191919] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
        >
          <img :src="room.image" alt="room" class="w-full h-52 object-cover" />
          <div class="p-6 text-left">
            <span class="bg-[#ad58eb] text-white px-3 py-1 text-sm rounded">
              {{ room.price }}
            </span>
            <h3 class="text-xl font-semibold text-white mt-3">{{ room.name }}</h3>
            <div class="flex items-center text-gray-400 text-sm mt-2 space-x-4">
              <span><i class="fas fa-bed mr-1 text-[#ad58eb]"></i>{{ room.beds }} Bed</span>
              <span><i class="fas fa-bath mr-1 text-[#ad58eb]"></i>{{ room.baths }} Bath</span>
              <span><i class="fas fa-wifi mr-1 text-[#ad58eb]"></i>Wifi</span>
            </div>
            <p class="text-gray-300 text-sm mt-3">
              {{ room.description }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "RoomsSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      rooms: Array.from({ length: 8 }).map((_, i) => ({
        name: "Luxury Room",
        price: "$120 / Night",
        beds: 2,
        baths: 1,
        description:
          "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
        image: "https://source.unsplash.com/600x400/?hotel,bedroom&sig=" + i,
      })),
    };
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #ad58eb !important;
}
.swiper-pagination-bullet-active {
  background: #ad58eb !important;
}
</style>
