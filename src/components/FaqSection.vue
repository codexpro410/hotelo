<template>
  <section class="py-16 bg-white dark:bg-[#191919]">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-[#191919] dark:text-white mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <p class="w-1/4 bg-primary h-1 text-center mx-auto mb-3"></p>


      <div class="max-w-5xl mx-auto text-left grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="(column, colIndex) in faqColumns" :key="colIndex">
          <div
            v-for="(faq, i) in column"
            :key="i"
            class="border-b border-gray-300 dark:border-gray-700"
          >
            <button
              @click="toggle(faq.id)"
              class="w-full flex justify-between items-center py-4 text-lg font-medium text-[#191919] dark:text-white focus:outline-none"
            >
              <span>{{ faq.question }}</span>
              <i
                :class="[
                  'fas transition-transform duration-300',
                  activeId === faq.id ? 'fa-chevron-up' : 'fa-chevron-down'
                ]"
              ></i>
            </button>
            <div v-show="activeId === faq.id" class="pb-4 text-gray-600 dark:text-gray-300">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqSection",
  data() {
    return {
      // ID of the currently active FAQ
      activeId: 1, // first question active by default
      // organize FAQs in two columns
      faqColumns: [
        [
          { id: 1, question: "What do we mean by business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam autem aperiam distinctio fugiat a repudiandae nihil quis nesciunt hic sit. Facere animi voluptate nobis ipsum dolor sit amet, consectetur adipisicing elit." },
          { id: 2, question: "What are the positive aspects of business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, beatae, similique vel officia laboriosam..." },
          { id: 3, question: "What are the negative aspects of business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
          { id: 4, question: "What is the way to grow a business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
        ],
        [
          { id: 5, question: "Where should my business be involved?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
          { id: 6, question: "How much money can be used to start a business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
          { id: 7, question: "What are the benefits to business customers?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
          { id: 8, question: "10 easy rules to expand your business.", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
          { id: 9, question: "How do I highlight in the name of the business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
          { id: 10, question: "How do I analyze the promotion of the business?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit..." },
        ]
      ],
    };
  },
  methods: {
    toggle(id) {
      this.activeId = this.activeId === id ? null : id;
    },
  },
};
</script>
