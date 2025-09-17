<template>
  <main>
    <HeroSlider />
    <SearchSection />
    <PageTitle h2="Explore Our Rooms (Grid Style)"/>
    <RoomsGrid />
    <PageTitle h2="Explore Our Rooms (Slider Style)"/>
    <RoomsCarousel />
    <PageTitle h2="Frequently Asked Questions"/>
    <FAQSection />
    <PageTitle h2="Our Clients Feedback"/>
    <TestimonialsSection />
    <PageTitle h2="Our Team"/>
    <TeamSection />
    <PageTitle h2="Our Latest Blog"/>
    <BlogSection />
  </main>
</template>



<script setup>
import HeroSlider from '@/components/HeroSlider.vue'
import SearchSection from '@/components/SearchSection.vue'
import RoomsGrid from '@/components/RoomsGrid.vue'
import RoomsCarousel from '@/components/RoomsCarousel.vue'
import FAQSection from '@/components/FaqSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import PageTitle from '@/components/commonTemps/PageTitle.vue'
</script>