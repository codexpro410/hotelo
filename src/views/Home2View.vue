<template>
  <main>
    <HeroHome2/>
    <SearchSection />
    <FeaturesCheck/>
    <Counter/>
    <PageTitle />
    <RoomCardList />
    <PageTitle h2="Our Clients Feedback"/>
    <TestimonialsGridTemplate/>
    <PageTitle h2="Our Team"/>
    <TeamSliderTemplate/>
    <ContactView/>
    <BlogSliderTemplate/>
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
import ContactView from './ContactView.vue'
import HeroHome2 from '@/components/HeroHome2.vue'
import FeaturesCheck from '@/components/about/FeaturesCheck.vue'
import Counter from '@/components/about/Counter.vue'
import RoomCardList from '@/components/ourRooms/RoomCardList.vue'
import PageTitle from '@/components/commonTemps/PageTitle.vue'
import TestimonialsGridTemplate from '@/components/testimonialsGridTemplate.vue'
import TeamSliderTemplate from '@/components/TeamSliderTemplate.vue'
import BlogSliderTemplate from '@/components/BlogSliderTemplate.vue'
</script>