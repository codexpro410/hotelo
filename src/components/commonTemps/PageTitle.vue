
<template>
  <div class="text-center py-16 bg-[#191919]">
    <h2 class="text-[40px] font-bold">{{ h2 }}</h2>
    <p class="text-[16px] w-1/3 m-auto mt-2">{{ p }}</p>
    <p class="h-1 w-1/4 m-auto bg-primary mt-2"></p>
  </div>
</template>

<script setup>
defineProps({
  h2: {
    type: String,
    default: "Explore Our Rooms",
  },
  p: {
   type: String,
   default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  }  
})
</script>