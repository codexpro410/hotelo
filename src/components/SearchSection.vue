<template>
  <section class="py-12 bg-gray-100 dark:bg-zinc-900">
    <div class="container mx-auto px-4">
      <div class="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6">
        <form @submit.prevent="onSearch" class="grid md:grid-cols-6 gap-4">
          <!-- Check-in -->
          <div class="md:col-span-1">
            <label class="block mb-2 opacity-80">Check-in</label>
            <input
              type="date"
              v-model="form.checkIn"
              class="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            />
          </div>

          <!-- Check-out -->
          <div class="md:col-span-1">
            <label class="block mb-2 opacity-80">Check-out</label>
            <input
              type="date"
              v-model="form.checkOut"
              class="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            />
          </div>

          <!-- Rooms -->
          <div class="md:col-span-1">
            <label class="block mb-2 opacity-80">Rooms</label>
            <select
              v-model.number="form.rooms"
              class="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            >
              <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>

          <!-- Adults -->
          <div class="md:col-span-1">
            <label class="block mb-2 opacity-80">Adults</label>
            <select
              v-model.number="form.adults"
              class="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            >
              <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>

          <!-- Children -->
          <div class="md:col-span-1">
            <label class="block mb-2 opacity-80">Children</label>
            <select
              v-model.number="form.children"
              class="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            >
              <option v-for="n in 5" :key="n" :value="n-1">
                {{ n-1 }} Child{{ n-1 > 1 ? 'ren' : '' }}
              </option>
            </select>
          </div>

          <!-- Submit -->
          <div class="md:col-span-6 lg:col-span-1 flex justify-end mt-2">
            <button type="submit" class="bg-[#ad58eb] text-white rounded hover:bg-purple-700 transition w-3/4">Search</button>
          </div>
        </form>

        <!-- Message -->
        <p v-if="message" class="mt-4 text-sm text-red-400">{{ message }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  checkIn: '',
  checkOut: '',
  rooms: 1,
  adults: 2,
  children: 0,
})
const message = ref('')

function onSearch() {
  message.value = ''

  if (!form.checkIn || !form.checkOut) {
    message.value = 'Please select both check-in and check-out dates.'
    return
  }
  const inDate = new Date(form.checkIn)
  const outDate = new Date(form.checkOut)
  if (outDate <= inDate) {
    message.value = 'Check-out must be after check-in.'
    return
  }

  message.value = `Searching rooms from ${form.checkIn} to ${form.checkOut}...`
}
</script>

<style scoped>
@media (max-width: 767px) {
  form {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
