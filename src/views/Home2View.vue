<template>
  <main>
    <HeroHome2 />
    <SearchSection />
    <FeaturesCheck />
    <Counter />
    <PageTitle />
    <RoomCardList />
    <PageTitle h2="Our Clients Feedback" />
    <TestimonialsGridTemplate />
    <PageTitle h2="Our Team" />
    <TeamSliderTemplate />
    <ContactView />
    <BlogSliderTemplate />
  </main>
</template>

<script setup>
import Counter from '@/components/about/Counter.vue'
import FeaturesCheck from '@/components/about/FeaturesCheck.vue'
import BlogSliderTemplate from '@/components/BlogSliderTemplate.vue'
import PageTitle from '@/components/commonTemps/PageTitle.vue'
import HeroHome2 from '@/components/HeroHome2.vue'
import RoomCardList from '@/components/ourRooms/RoomCardList.vue'
import SearchSection from '@/components/SearchSection.vue'
import TeamSliderTemplate from '@/components/TeamSliderTemplate.vue'
import TestimonialsGridTemplate from '@/components/TemplateTestimonialsGrid.vue'
import ContactView from './ContactView.vue'
</script>
