<template>
  <footer class="bg-[#191919] text-white pt-16 pb-8">
    <div class="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
      <!-- Logo + About + Newsletter -->
      <div>
        <img
          src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/logo-dark.png"
          alt="Hotelo"
          class="mb-4 w-32"
        />
        <p class="text-gray-400 mb-6">
          Imagine a place where you can be yourself. Relax and enjoy our premium rooms and services
          tailored just for you.
        </p>
        <form class="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Email Address"
            class="w-full p-2 rounded-md text-black"
          />
          <button
            type="submit"
            class="bg-[#ad58eb] px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Our Services</h3>
        <ul class="space-y-2 text-gray-400">
          <li>Rooms & Apartments</li>
          <li>Food & Restaurant</li>
          <li>Spa & Fitness</li>
          <li>Sports & Gaming</li>
          <li>Event & Party</li>
          <li>Gym & Yoga</li>
        </ul>
      </div>

      <!-- Our Team -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Our Team</h3>
        <ul class="space-y-2 text-gray-400">
          <li>John Smith</li>
          <li>Amily Mark</li>
          <li>Lucy Eva</li>
          <li>Alister Cock</li>
          <li>Jammy Haris</li>
          <li>Taylor Sopia</li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
        <ul class="space-y-4 text-gray-400">
          <li>
            <h6 class="font-semibold flex items-center gap-2">
              <MapPin class="w-4 h-4 text-primary" /> Location
            </h6>
            <p>123 Western Road, Melbourne, United Kingdom</p>
          </li>
          <li>
            <h6 class="font-semibold flex items-center gap-2">
              <Mail class="w-4 h-4 text-primary" /> Email
            </h6>
            <a href="mailto:hello@example.com" class="hover:text-[#ad58eb]">hello@example.com</a>
          </li>
          <li>
            <h6 class="font-semibold flex items-center gap-2">
              <Phone class="w-4 h-4 text-primary" />Phone
            </h6>
            <a href="tel:+12345678999" class="hover:text-[#ad58eb]">+12 345 678 999</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div
      class="container mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center"
    >
      <p class="text-gray-500 text-sm text-center sm:text-left">
        © 2025 Hotelo. All Rights Reserved, Designed By Islam Abozeed.
      </p>
      <div class="flex gap-4 mt-4 sm:mt-0">
        <a
          href="#"
          class="text-black bg-primary hover:bg-primary/50 hover:text-white w-8 h-8 flex text-center items-center rounded-full transition mx-auto"
        ><Facebook class="mx-auto"
        /></a>
        <a
          href="#"
          class="text-black bg-primary hover:bg-primary/50 hover:text-white w-8 h-8 flex text-center items-center rounded-full transition mx-auto"
        ><Twitter class="mx-auto"
        /></a>
        <a
          href="#"
          class="text-black bg-primary hover:bg-primary/50 hover:text-white w-8 h-8 flex text-center items-center rounded-full transition mx-auto"
        ><Instagram class="mx-auto"
        /></a>
        <a
          href="#"
          class="text-black bg-primary hover:bg-primary/50 hover:text-white w-8 h-8 flex text-center items-center rounded-full transition mx-auto"
        ><Linkedin class="mx-auto"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="js">
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Twitter } from 'lucide-vue-next'
</script>
