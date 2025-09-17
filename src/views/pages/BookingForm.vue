<template>
<div>
   <BreadCrumb/>
   <div class="w-1/2 m-auto">
       <PageTitle h2="Book Any Accommodation With Minimalist Price And Comfortable Destinations" p=""/>
    </div>
 <!-- Category Tabs -->
    <div class="container mx-auto">
      <div class="flex justify-center gap-10 pb-2 relative">
        <div
          v-for="(cat, index) in categories"
          :key="index"
          class="flex flex-col items-center cursor-pointer"
          @click="selectedCategory = cat"
        >
          <p
            :class="[
              'text-lg font-medium transition-colors',
              selectedCategory === cat ? 'text-primary' : 'text-white'
            ]"
          >
            {{ cat }}
          </p>
          <!-- Circle under active -->
          <div
            v-if="selectedCategory === cat"
            class="w-2 h-2 mt-1 bg-primary rounded-full"
          ></div>
        </div>
      </div>
      <hr class="border-zinc-700" />
      <!-- Dynamic Heading -->
    <h2 class="text-center text-[30px] font-bold mt-5">
      {{ headingText }}
    </h2>
    </div>
      <form 
        @submit.prevent="handleSubmit" 
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-5"
      >
        <!-- Name -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Your Name</label>
          <input 
            v-model="form.name" 
            type="text" 
            placeholder="Name" 
            required
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Address -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Address</label>
          <input 
            v-model="form.address" 
            type="text" 
            placeholder="Address" 
            required
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Email</label>
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="Email" 
            required
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Phone</label>
          <input 
            v-model="form.phone" 
            type="tel" 
            placeholder="Phone" 
            required
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Room Type -->
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-white mb-2">Rooms</label>
          <select 
            v-model="form.roomType"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          >
            <option>Select A Room</option>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Triple Room</option>
            <option>Quad Room</option>
            <option>Queen Room</option>
            <option>King Room</option>
            <option>Twin Room</option>
            <option>Studio Room</option>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Superior Suite</option>
            <option>Presidential Suite</option>
          </select>
        </div>

        <!-- Starting Date -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Starting Date</label>
          <input 
            v-model="form.startDate" 
            type="date" 
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Ending Date -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Ending Date</label>
          <input 
            v-model="form.endDate" 
            type="date" 
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Adult -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Adult</label>
          <input 
            v-model="form.adult" 
            type="number" 
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Child -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Child</label>
          <input 
            v-model="form.child" 
            type="number" 
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <!-- Rooms Count -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Rooms</label>
          <select 
            v-model="form.rooms"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          >
            <option v-for="n in 10" :key="n">{{ n }}</option>
          </select>
        </div>

        <!-- Nights -->
        <div>
          <label class="block text-sm font-medium text-white mb-2">Nights</label>
          <select 
            v-model="form.nights"
            class="w-full rounded-lg border border-zinc-700 bg-zinc-800 text-white px-4 py-2 focus:ring-2 focus:ring-primary"
          >
            <option v-for="n in 10" :key="n">{{ n }}</option>
          </select>
        </div>

        <!-- Submit -->
        <div class="md:col-span-2">
          <button 
            type="submit" 
            class="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
          >
            <i class="bx bx-plus-circle"></i>
            Book Now
          </button>
        </div>

        <!-- Success Message -->
        <div v-if="successMessage" class="md:col-span-2">
          <div class="text-center bg-green-600 text-white px-4 py-2 rounded-lg">
            {{ successMessage }}
          </div>
        </div>
      </form>
    </div>
    </template>

    <script setup>
import BreadCrumb from '@/components/commonTemps/BreadCrumb.vue';
import PageTitle from '@/components/commonTemps/PageTitle.vue';
import { computed, ref } from "vue";

const categories = ["Hotels", "Resorts", "Motels"];
const selectedCategory = ref("Hotels"); // default selected

const form = ref({
  name: "",
  address: "",
  email: "",
  phone: "",
  roomType: "",
  startDate: "",
  endDate: "",
  adult: 1,
  child: 0,
  rooms: 1,
  nights: 1
});

const successMessage = ref("");

const handleSubmit = () => {
  console.log("Booking Data:", { ...form.value, category: selectedCategory.value });
  successMessage.value = "Your booking was sent successfully.";
  setTimeout(() => (successMessage.value = ""), 4000);
};
// Dynamic heading text
const headingText = computed(() => {
  switch (selectedCategory.value) {
    case "Hotels":
      return "Book Hotel Rooms";
    case "Resorts":
      return "Book Perfect Resorts";
    case "Motels":
      return "Book Exclusive Motels";
    default:
      return "Book Any Accommodation";
  }
});

</script>
