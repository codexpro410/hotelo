import { createRouter, createWebHistory, RouterView } from 'vue-router'

const routes = [
  // 🏠 Home
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue'), meta: { title: 'Home - Hotel' } },
  { path: '/home-2', name: 'home2', component: () => import('@/views/Home2View.vue'), meta: { title: 'Home 2 - Hotel' } },

  // ℹ️ About
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue'), meta: { title: 'About Us - Hotel' } },

  // 🛏️ Our Rooms
  {
    path: '/rooms',
    name: 'rooms',
    component: RouterView,
    meta: { title: 'Our Rooms - Hotel' },
    children: [
      { path: 'grid', name: 'room-grid', component: () => import('@/views/rooms/RoomGrid.vue'), meta: { title: 'Room Style Grid - Hotel' } },
      { path: 'slider', name: 'room-slider', component: () => import('@/views/rooms/RoomSlider.vue'), meta: { title: 'Room Style Slider - Hotel' } },
      { path: 'list', name: 'room-list', component: () => import('@/views/rooms/RoomList.vue'), meta: { title: 'Room Style List - Hotel' } },
      { path: 'details/:id?', name: 'room-details', component: () => import('@/views/rooms/RoomDetails.vue'), meta: { title: 'Room Details - Hotel' } },
    ]
  },

  // 📖 Pages
  {
    path: '/pages',
    name: 'pages',
    component: RouterView,
    meta: { title: 'Pages - Hotel' },
    children: [
      // 👨‍👩‍👦 Team
      {
        path: 'team',
        name: 'team',
        component: RouterView,
        children: [
          { path: 'grid', name: 'team-grid', component: () => import('@/views/pages/team/TeamGrid.vue'), meta: { title: 'Team Grid - Hotel' } },
          { path: 'slider', name: 'team-slider', component: () => import('@/views/pages/team/TeamSlider.vue'), meta: { title: 'Team Slider - Hotel' } },
          { path: 'details/:id?', name: 'team-details', component: () => import('@/views/pages/team/TeamDetails.vue'), meta: { title: 'Team Details - Hotel' } },
        ]
      },

      // 💬 Testimonials
      {
        path: 'testimonials',
        name: 'testimonials',
        component: RouterView,
        children: [
          { path: 'grid', name: 'testimonials-grid', component: () => import('@/views/pages/testimonials/TestimonialsGrid.vue'), meta: { title: 'Testimonials Grid - Hotel' } },
          { path: 'slider', name: 'testimonials-slider', component: () => import('@/views/pages/testimonials/TestimonialsSlider.vue'), meta: { title: 'Testimonials Slider - Hotel' } },
        ]
      },

      // باقي الصفحات
      { path: 'booking', name: 'booking', component: () => import('@/views/pages/BookingForm.vue'), meta: { title: 'Booking Form - Hotel' } },
      { path: 'account', name: 'account', component: () => import('@/views/pages/MyAccount.vue'), meta: { title: 'My Account - Hotel' } },
      { path: 'faq', name: 'faq', component: () => import('@/views/pages/FAQ.vue'), meta: { title: 'FAQ - Hotel' } },
      { path: 'sample', name: 'sample', component: () => import('@/views/pages/Sample.vue'), meta: { title: 'Sample Page - Hotel' } },
      { path: 'privacy', name: 'privacy', component: () => import('@/views/pages/PrivacyPolicy.vue'), meta: { title: 'Privacy Policy - Hotel' } },
      { path: '404', name: '404', component: () => import('@/views/pages/NotFound.vue'), meta: { title: '404 - Error Page' } },
    ]
  },

  // 📰 Blog
  {
    path: '/blog',
    name: 'blog',
    component: RouterView,
    meta: { title: 'Blog - Hotel' },
    children: [
      // Layouts (مباشر)
      { path: 'grid', name: 'blog-grid', component: () => import('@/views/blog/BlogGrid.vue'), meta: { title: 'Blog Grid - Hotel' } },
      { path: 'slider', name: 'blog-slider', component: () => import('@/views/blog/BlogSlider.vue'), meta: { title: 'Blog Slider - Hotel' } },
      { path: 'left-sidebar', name: 'blog-left-sidebar', component: () => import('@/views/blog/BlogLeftSidebar.vue'), meta: { title: 'Blog Left Sidebar - Hotel' } },
      { path: 'right-sidebar', name: 'blog-right-sidebar', component: () => import('@/views/blog/BlogRightSidebar.vue'), meta: { title: 'Blog Right Sidebar - Hotel' } },

      // Single Blog
      { path: 'no-sidebar', name: 'blog-no-sidebar', component: () => import('@/views/blog/details/BlogNoSidebar.vue'), meta: { title: 'Blog Details - Hotel' } },
      { path: 'single-left', name: 'blog-details-left', component: () => import('@/views/blog/details/BlogLeftSidebar.vue'), meta: { title: 'Blog Details Left Sidebar - Hotel' } },
      { path: 'single-right', name: 'blog-details-right', component: () => import('@/views/blog/details/BlogRightSidebar.vue'), meta: { title: 'Blog Details Right Sidebar - Hotel' } },
    ]
  },

  // 📞 Contact
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue'), meta: { title: 'Contact - Hotel' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Hotel Website'
  next()
})

export default router;
