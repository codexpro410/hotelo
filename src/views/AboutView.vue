<template>
  <section class="bg-zinc-900 text-white py-16">
    <BreadCrumb/>
    <FeaturesCheck/>
  </section>

  
  <!-- slider  -->
    <PageTitle h2="Our Clients Feedback"/>
    <TestimonialsSection />
    <!-- team grid -->
     <PageTitle h2="Our Team"/>
    <TeamSection />
</template>

<script setup>
import FeaturesCheck from "@/components/about/FeaturesCheck.vue";
import BreadCrumb from "@/components/commonTemps/BreadCrumb.vue";
import PageTitle from "@/components/commonTemps/PageTitle.vue";
import TeamSection from "@/components/TeamSection.vue";
import TestimonialsSection from "@/components/TestimonialsSection.vue";

</script>
