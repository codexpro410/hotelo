<template>
  <div>
    <LoadingScreen v-if="loading" />
    <div v-else>
      <TopHeader />
      <NavBar />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TopHeader from '@/components/TopHeader.vue'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { useThemeStore } from '@/stores/theme'

const loading = ref(true)
const theme = useThemeStore()


onMounted(() => {
theme.init()
setTimeout(() => (loading.value = false), 1200)
})

</script>
<!-- <template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style> -->
