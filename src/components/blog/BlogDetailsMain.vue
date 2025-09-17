<template>
      <section class="container mx-auto px-4 py-10 max-w-4xl">
    <!-- صورة المقال -->
    <div class="mb-6">
      <img
        src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/blog-4.jpg"
        alt="Blog"
        class="w-full rounded-2xl shadow"
      />
    </div>

    <!-- عنوان المقال -->
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
      How H10 Hotels grew their marketing database by capturing first-party data?
    </h1>

    <!-- المحتوى -->
    <article class="prose prose-gray dark:prose-invert max-w-none mb-12">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut enim sagittis,
        lacinia elit non, fermentum mauris...
      </p>
      <p>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...
      </p>
      <p>
        Aliquam erat volutpat. Nam elit elit, condimentum sed sem sit amet...
      </p>
      <p>
        Suspendisse auctor leo id tempus ultricies. Proin sit amet quam vel ligula lobortis ultrices...
      </p>
      <p>
        Fusce vitae turpis suscipit, pharetra elit quis, mattis nibh...
      </p>
    </article>

    <!-- التعليقات -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">2 Comments</h2>
      <ul class="space-y-8">
        <!-- تعليق رئيسي -->
        <li class="flex gap-4">
          <img
            src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-1.png"
            class="w-12 h-12 rounded-full"
          />
          <div>
            <h6 class="font-medium">Andrew Smith</h6>
            <span class="text-sm text-gray-500">Jan 10, 2024 at 10:09 pm</span>
            <p class="mt-2 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut enim sagittis...
            </p>
            <button class="text-primary text-sm mt-2">Reply</button>

            <!-- رد داخلي -->
            <div class="mt-6 pl-6 border-l border-gray-200 dark:border-gray-700">
              <div class="flex gap-4">
                <img
                  src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-2.png"
                  class="w-12 h-12 rounded-full"
                />
                <div>
                  <h6 class="font-medium">Jane Ronan</h6>
                  <span class="text-sm text-gray-500">Jan 13, 2025 at 10:59 pm</span>
                  <p class="mt-2 text-gray-700 dark:text-gray-300">
                    Aliquam nunc nisi, ultrices et rhoncus vitae, mattis nec ex...
                  </p>
                  <button class="text-primary text-sm mt-2">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- تعليق تاني -->
        <li class="flex gap-4">
          <img
            src="https://hotelo.mhrtheme.com/wp-content/uploads/2024/09/testimonial-3.png"
            class="w-12 h-12 rounded-full"
          />
          <div>
            <h6 class="font-medium">Jenin Pamela</h6>
            <span class="text-sm text-gray-500">Feb 20, 2025 at 11:16 pm</span>
            <p class="mt-2 text-gray-700 dark:text-gray-300">
              In tempus gravida libero sed pharetra. Proin fringilla posuere elit...
            </p>
            <button class="text-primary text-sm mt-2">Reply</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- فورم التعليق -->
    <div>
      <h2 class="text-2xl font-semibold mb-6">Leave a Reply</h2>
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows="4"
            required
            placeholder="Your Comment"
            class="w-full pl-2 pt-2 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-primary focus:border-primary"
          ></textarea>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium mb-2">Name <span class="text-red-500">*</span></label>
            <input 
                required
              type="text"
              class="w-full px-6 py-3 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email <span class="text-red-500">*</span></label>
            <input
              required
              type="email"
              class="w-full px-6 py-3 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <button
          type="submit"
          class="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow hover:bg-primary/90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>