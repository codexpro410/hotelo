<template>
  <section class="py-16 bg-white dark:bg-zinc-900">
    <BreadCrumb/>
    <PageTitle h2="Our Team"/>
    <TeamSliderTemplate/>
  </section>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BreadCrumb from "@/components/commonTemps/BreadCrumb.vue";
import PageTitle from "@/components/commonTemps/PageTitle.vue";
import TeamSliderTemplate from "@/components/TeamSliderTemplate.vue";
</script>
