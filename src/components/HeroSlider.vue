<template>
  <section class="relative h-[70vh] md:h-[80vh]">
    <Swiper
      class="h-full"
      :modules="modules"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :navigation="true"
      :pagination="{ clickable: true }"
      :mousewheel="false"
      grab-cursor="true"
      effect="fade"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-for="(s, i) in slides"
        :key="i"
        class="relative h-full"
      >
        <!-- Background image + overlay -->
        <div class="absolute inset-0">
          <img
            :src="`/images/heroSlider/${s.img}`"
            alt=""
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40"></div>
        </div>

        <!-- Slide content -->
        <div class="relative z-10 h-full flex items-center">
          <div class="max-w-7xl mx-auto px-4">
            <div
              class="text-white max-w-2xl text-center"
              :data-aos="s.aos"
              :data-aos-delay="s.delay"
              data-aos-once="true"
            >
              <h5 class="text-sm uppercase tracking-widest mb-2">{{ s.kicker }}</h5>
              <h2 class="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                {{ s.title }}
              </h2>
              <p class="mb-6 opacity-90">{{ s.subtitle }}</p>
              <router-link to="/about" class="border-2 p-6 rounded-full w-1/4 text-lg border-gray-300  inline-block hover:bg-purple-600 transition duration-700">
                Booking
              </router-link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- pagination bullets container -->
    <div class="absolute left-0 right-0 bottom-6 z-20 flex justify-center"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  EffectFade,
} from 'swiper/modules'

const slides = [
  { img: '1.jpeg', kicker: 'Welcome To Our Hotel', title: 'Imagine a place where you can be yourself.', subtitle: 'Relax in comfort and style — enjoy unforgettable moments with us.', aos: 'fade-up', delay: '100' },
  { img: '2.jpeg', kicker: 'Welcome To Our Hotel', title: 'Comfort, elegance, and unforgettable moments.', subtitle: 'We create the perfect stay tailored to you.', aos: 'fade-up', delay: '100' },
  { img: '3.jpeg', kicker: 'Welcome To Our Hotel', title: 'Your perfect getaway starts here.', subtitle: 'Book a room and enjoy exceptional hospitality.', aos: 'fade-up', delay: '100' },
]

const modules = [Autoplay, Navigation, Pagination, Mousewheel, EffectFade]

function onSlideChange(swiper) {
  if (window.AOS && typeof window.AOS.refresh === 'function') {
    setTimeout(() => window.AOS.refresh(), 50)
  }
}

onMounted(() => {
  if (window.AOS && typeof window.AOS.refresh === 'function') {
    window.AOS.refresh()
  }
})
</script>

<style scoped>


.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  width: 3rem;
  height: 3rem;
  background: rgba(0,0,0,0.25);
  border-radius: 0.5rem;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(0,0,0,0.35);
}

.swiper-pagination-bullet {
  background: rgba(255,255,255,0.6);
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #ad58eb;
}

.swiper-slide {
  transition: opacity 800ms ease;
}
</style>
