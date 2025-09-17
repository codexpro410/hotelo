<template>
  <div class="bg-[#222222]">
    <PageTitle 
    h2="Get In Touch" 
     />
     <!-- part 2 -->
  <div class="container mx-auto px-4 text-center grid  grid-cols-1 lg:grid-cols-2 gap-10 items-end pt-16">
    <!-- Form -->
    <form
      class="space-y-6 bg-white bg-transparent p-8 rounded-2xl shadow-lg"
      @submit.prevent="handleSubmit"
    >
      <h3 class="text-2xl font-bold mb-4">Drop Us A Message</h3>

      <!-- Name + Email -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          v-model="form.name"
          type="text"
          placeholder="Name"
          class="w-full border bg-transparent border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <input
          v-model="form.email"
          type="email"
          placeholder="example@gmail.com"
          class="w-full border  bg-transparent border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <!-- Phone + Subject -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          v-model="form.phone"
          type="text"
          placeholder="+1 (414) 312-4433"
          class="w-full border bg-transparent border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <input
          v-model="form.subject"
          type="text"
          placeholder="Subject"
          class="w-full border bg-transparent border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <!-- Message -->
      <textarea
        v-model="form.message"
        rows="6"
        placeholder="Your message here"
        class="w-full border bg-transparent border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
      ></textarea>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full flex items-center justify-center gap-2 bg-primary/40 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-black transition duration-300"
      >
        Send Message
        <i class="bx bx-chevron-right text-xl"></i>
      </button>

      <!-- Success Message -->
      <p
        v-if="success"
        class="text-green-600 bg-green-100 border border-green-300 rounded-lg px-4 py-3 mt-4"
      >
        Your message was sent successfully.
      </p>
    </form>

    <!-- Image -->
    <div class="flex justify-center lg:justify-end">
      <img
        src="/public/images/contact/Contact.png"
        alt="Contact"
        class=" max-w-full rounded-full shadow-md h-full"
        height="500"
        width="700"
      />
    </div>
  </div>



     <!-- end part 2 -->
  </div>
</template>

<script setup>
import PageTitle from '@/components/commonTemps/PageTitle.vue'
import { ref } from "vue"

const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
})

const success = ref(false)

const handleSubmit = () => {
  console.log("Form submitted:", form.value)
  success.value = true
  setTimeout(() => (success.value = false), 3000)
}
</script>

