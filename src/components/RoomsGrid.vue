<template>
  <section class="py-16 bg-white dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        Explore Our Rooms (Grid Style)
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <p class="w-1/4 bg-primary h-1 text-center mx-auto mb-3"></p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(room, index) in rooms"
          :key="index"
          class="bg-[#191919] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <!-- Image + price -->
          <div class="relative">
            <img :src="room.image" alt="room" class="w-full h-[300px] object-cover" />
            <span
              class="absolute left-4 bottom-0 translate-y-1/2 bg-primary text-white px-3 py-1 text-sm rounded shadow"
            >
              {{ room.price }}
            </span>
          </div>

          <!-- Room info -->
          <div class="p-6 text-left">
            <div class="flex justify-between items-center mt-3">
              <h3 class="w-full text-xl font-semibold text-white flex items-center justify-between gap-2">
                <span>{{ room.name }}</span>
                <span class="flex text-yellow-400 ">
                  <StarIcon v-for="star in room.stars" :key="star" class="w-4 h-4" />
                </span>
              </h3>
            </div>

            <!-- Features -->
            <div class="flex items-center text-gray-400 text-sm mt-2 space-x-4">
              <span class="flex items-center gap-1">
                <Bed class="w-4 h-4 text-[#ad58eb]" />{{ room.beds }} Bed
              </span>
              <span class="flex items-center gap-1">
                <Bath  class="text-[#ad58eb]" />{{ room.baths }} Bath
              </span>
              <span class="flex items-center gap-1">
                <Wifi  class="text-[#ad58eb]" />Wifi
              </span>
            </div>

            <!-- Description -->
            <p class="text-gray-300 text-sm mt-3">
              {{ room.description }}
            </p>

            <!-- Buttons -->
            <div class="flex justify-between mt-5">
              <button
                class="bg-[#ad58eb] text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                View Details
              </button>
              <button
                class="bg-white dark:bg-gray-900 text-[#191919] dark:text-white px-4 py-2 rounded hover:bg-primary dark:hover:bg-primary transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Bed, Bath, Wifi} from "lucide-vue-next";
import { StarIcon } from '@heroicons/vue/24/solid'
</script>
<script >

export default {
  name: "RoomsGrid",
  data() {
    return {
      rooms: [
  {
    name: "Single Room",
    price: "$100 / Night",
    beds: 1,
    baths: 1,
    stars: 5,
    description:
      "Cozy single room with a comfortable bed, private bathroom, and complimentary WiFi. Ideal for solo travelers.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-1.jpg",
  },
  {
    name: "Double Room",
    price: "$120 / Night",
    beds: 2,
    baths: 1,
    stars: 5,
    description:
      "Spacious double room with two beds, modern bathroom, and a work desk. Perfect for couples or friends.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-2.jpg",
  },
  {
    name: "Triple Room",
    price: "$140 / Night",
    beds: 3,
    baths: 1,
    stars: 5,
    description:
      "Comfortable triple room with three single beds, private bath, and ample space for a small group.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-3.jpg",
  },
  {
    name: "Quad Room",
    price: "$100 / Night",
    beds: 4,
    baths: 2,
    stars: 5,
    description:
      "Family-friendly quad room with four beds, two bathrooms, and plenty of space for children.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-4.jpg",
  },
  {
    name: "Queen Room",
    price: "$120 / Night",
    beds: 1,
    baths: 1,
    stars: 5,
    description:
      "Elegant queen room with a large queen-size bed, modern amenities, and beautiful city views.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-5.jpg",
  },
  {
    name: "King Room",
    price: "$140 / Night",
    beds: 1,
    baths: 1,
    stars: 5,
    description:
      "Luxurious king room with a king-size bed, en-suite bathroom, and premium furnishings.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-6.jpg",
  },
  {
    name: "Twin Room",
    price: "$100 / Night",
    beds: 2,
    baths: 1,
    stars: 5,
    description:
      "Twin room with two single beds, ideal for friends traveling together, with private bath and WiFi.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-7.jpg",
  },
  {
    name: "Studio Room",
    price: "$120 / Night",
    beds: 1,
    baths: 1,
    stars: 5,
    description:
      "Spacious studio with a single bed, kitchenette, and cozy seating area, perfect for a short stay.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-8.jpg",
  },
  {
    name: "Standard Room",
    price: "$140 / Night",
    beds: 2,
    baths: 1,
    stars: 5,
    description:
      "Standard room with modern furnishings, two beds, private bathroom, and complimentary amenities.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-9.jpg",
  },
  {
    name: "Deluxe Room",
    price: "$100 / Night",
    beds: 2,
    baths: 1,
    stars: 5,
    description:
      "Deluxe room featuring premium bedding, elegant décor, and a large work desk for business travelers.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-10.jpg",
  },
  {
    name: "Superior Suite",
    price: "$120 / Night",
    beds: 1,
    baths: 1,
    stars: 5,
    description:
      "Superior suite with king-size bed, living area, luxury bathroom, and exclusive amenities for comfort.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-11.jpg",
  },
  {
    name: "Presidential Suite",
    price: "$140 / Night",
    beds: 2,
    baths: 2,
    stars: 5,
    description:
      "Opulent presidential suite with two bedrooms, spacious living room, private terrace, and top-notch facilities.",
    image: "https://hotelo.mhrtheme.com/wp-content/plugins/vikbooking/site/resources/uploads/room-12.jpg",
  },
],
    };
  },
};
</script>
