<template>
  <section class="py-16">
    <BreadCrumb/>
    <div class="container pt-5 mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

        <!-- Start Right sidebar-->
      <aside class="lg:col-span-4 order-2 lg:order-2 space-y-6">
        <div class="bg-[#151515] p-6 rounded-xl sticky top-8">
          <h3 class="text-2xl font-bold text-white">{{ room.name }}</h3>
          <p class="text-primary text-lg font-semibold mt-2">{{ room.price }}</p>
          <p class="text-gray-300 text-sm flex items-center mt-2">
            <MapPin /> {{ room.address }}
          </p>

          <!-- Meta actions -->
          <ul class="flex items-center space-x-4 mt-4 text-gray-400 border border-white w-fit px-2">
            <li><Star class="text-yellow-500"/> {{ room.stars }}/5</li>
            <Share class="hover:text-white cursor-pointer"/>
            <Heart class="hover:text-white cursor-pointer"/>
            <Share2 class="hover:text-white cursor-pointer"/>
            <Printer class="hover:text-white cursor-pointer"/>
          </ul>

          <!-- Contact agent -->
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-white mb-3">Contact With Agent</h4>
            <div class="flex items-center mb-4">
              <img src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/team-1.jpg"
                   class="w-12 h-12 rounded-full mr-3" />
              <div>
                <p class="text-white font-semibold">John Smith</p>
                <p class="text-gray-400 text-sm">Hotel Manager</p>
              </div>
            </div>
            <form class="space-y-3">
              <input type="email" placeholder="Your Email" class="w-full p-2 rounded bg-[#222]" required/>
              <input type="text" placeholder="Your Phone" class="w-full p-2 rounded bg-[#222]" required/>
              <textarea rows="3" placeholder="Write Message" class="w-full p-2 rounded bg-[#222]" required></textarea>
              <div class="flex items-start space-x-2">
                <input type="checkbox" />
                <label class="text-gray-400 text-sm">I agree to process my personal data.</label>
              </div>
              <button class="bg-primary text-white w-full py-2 rounded">Send Message</button>
            </form>
            <router-link to="/booking" class="btn mt-5 block text-center bg-secondary text-white py-2 rounded">
              Book Now
            </router-link>
          </div>
        </div>
      </aside>
      <!-- End Right -->
              <!-- Start Left -->

        <!-- End Left -->
        <main class="lg:col-span-8 order-1 lg:order-1 space-y-12">
          <!-- Slider / Map Tabs -->
          <div>
            <div class="flex space-x-4 mb-4">
              <button class="px-4 py-2 bg-primary text-white rounded">Photos</button>
              <button class="px-4 py-2 bg-gray-700 text-white rounded">Map</button>
            </div>
            <!-- هنا ممكن تركب swiper slider للصور -->
            <img :src="room.image" class="rounded-lg w-full object-cover" />
          </div>
  
          <!-- Room Info -->
          <section>
            <h4 class="text-xl font-semibold mb-2">Room Details</h4>
            <ul class="text-gray-300 grid grid-cols-2 gap-2 text-sm">
              <li><b>ID:</b> RV100</li>
              <li><b>Price:</b> {{ room.price }}</li>
              <li><b>Size:</b> 200 Sqft</li>
              <li><b>Bedrooms:</b> 3</li>
              <li><b>Bathrooms:</b> 2</li>
            </ul>
          </section>
  
          <!-- Description -->
          <section>
            <h4 class="text-xl font-semibold mb-2">Description</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ room.description }}
            </p>
          </section>
  
          <!-- Features -->
          <section>
            <h4 class="text-xl font-semibold mb-2">Features</h4>
            <div class="grid grid-cols-2 gap-2 text-gray-300 text-sm">
              <span>TV Cable</span>
              <span>Air Conditioning</span>
              <span>WiFi</span>
              <span>Swimming Pool</span>
            </div>
          </section>
  
          <!-- Address -->
          <section>
            <h4 class="text-xl font-semibold mb-2">Address</h4>
            <p class="text-gray-300 text-sm">{{ room.address }}</p>
          </section>
  
          <!-- Video -->
          <section>
            <h4 class="text-xl font-semibold mb-2">Room Video</h4>
            <iframe width="100%" height="315"
              src="https://www.youtube.com/embed/UJEUwEJ6gH4"
              frameborder="0" allowfullscreen></iframe>
          </section>
        </main>
        <!-- Left content -->
      
      
    </div>
  </section>
</template>

<script setup>
import BreadCrumb from '@/components/commonTemps/BreadCrumb.vue';
import PageTitle from '@/components/commonTemps/PageTitle.vue';
import { Heart, MapPin, Pointer, Printer, Share, Share2, Star } from 'lucide-vue-next';
import { useRoute } from 'vue-router'

// route param (مثلاً /rooms/details/:id)
const route = useRoute()

// مثال room data mock
const room = {
  name: 'Single Room',
  price: '$100.00',
  stars: 5,
  address: '123 Western Road, Melbourne, UK',
  description: 'Lorem ipsum dolor sit amet...',
  image: 'https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-1.jpg'
}
</script>
