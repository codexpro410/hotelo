<template>
  <section class="py-16 container mx-auto px-4 space-y-8">
    <RoomListCard v-for="(room, i) in rooms" :key="i" :room="room" />
  </section>
</template>

<script setup>
import { rooms } from '@/data/roomsData'
import RoomListCard from './ourRooms/RoomsCard.vue'
</script>
