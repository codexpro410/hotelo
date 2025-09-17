#!/bin/bash

# تحرك لمجلد views
cd src/views || exit

# مجلدات رئيسية
mkdir -p rooms pages pages/team pages/testimonials blog blog/details

# Contact
echo "<template><div>Contact Page</div></template><script>export default { name: 'ContactView' }</script>" > ContactView.vue

# 🛏️ Rooms
echo "<template><div>Room Grid</div></template><script>export default { name: 'RoomGrid' }</script>" > rooms/RoomGrid.vue
echo "<template><div>Room Slider</div></template><script>export default { name: 'RoomSlider' }</script>" > rooms/RoomSlider.vue
echo "<template><div>Room List</div></template><script>export default { name: 'RoomList' }</script>" > rooms/RoomList.vue
echo "<template><div>Room Details</div></template><script>export default { name: 'RoomDetails' }</script>" > rooms/RoomDetails.vue

# 📖 Pages
echo "<template><div>Booking Form</div></template><script>export default { name: 'BookingForm' }</script>" > pages/BookingForm.vue
echo "<template><div>My Account</div></template><script>export default { name: 'MyAccount' }</script>" > pages/MyAccount.vue
echo "<template><div>FAQ Page</div></template><script>export default { name: 'FAQ' }</script>" > pages/FAQ.vue
echo "<template><div>Sample Page</div></template><script>export default { name: 'Sample' }</script>" > pages/Sample.vue
echo "<template><div>Privacy Policy</div></template><script>export default { name: 'PrivacyPolicy' }</script>" > pages/PrivacyPolicy.vue
echo "<template><div>404 Not Found</div></template><script>export default { name: 'NotFound' }</script>" > pages/NotFound.vue

# 👨‍👩‍👦 Team
echo "<template><div>Team Grid</div></template><script>export default { name: 'TeamGrid' }</script>" > pages/team/TeamGrid.vue
echo "<template><div>Team Slider</div></template><script>export default { name: 'TeamSlider' }</script>" > pages/team/TeamSlider.vue
echo "<template><div>Team Details</div></template><script>export default { name: 'TeamDetails' }</script>" > pages/team/TeamDetails.vue

# 💬 Testimonials
echo "<template><div>Testimonials Grid</div></template><script>export default { name: 'TestimonialsGrid' }</script>" > pages/testimonials/TestimonialsGrid.vue
echo "<template><div>Testimonials Slider</div></template><script>export default { name: 'TestimonialsSlider' }</script>" > pages/testimonials/TestimonialsSlider.vue

# 📰 Blog Layout
echo "<template><div>Blog Grid</div></template><script>export default { name: 'BlogGrid' }</script>" > blog/BlogGrid.vue
echo "<template><div>Blog Slider</div></template><script>export default { name: 'BlogSlider' }</script>" > blog/BlogSlider.vue
echo "<template><div>Blog Left Sidebar</div></template><script>export default { name: 'BlogLeftSidebar' }</script>" > blog/BlogLeftSidebar.vue
echo "<template><div>Blog Right Sidebar</div></template><script>export default { name: 'BlogRightSidebar' }</script>" > blog/BlogRightSidebar.vue

# 📰 Blog Details
echo "<template><div>Blog Details No Sidebar</div></template><script>export default { name: 'BlogNoSidebar' }</script>" > blog/details/BlogNoSidebar.vue
echo "<template><div>Blog Details Left Sidebar</div></template><script>export default { name: 'BlogLeftSidebar' }</script>" > blog/details/BlogLeftSidebar.vue
echo "<template><div>Blog Details Right Sidebar</div></template><script>export default { name: 'BlogRightSidebar' }</script>" > blog/details/BlogRightSidebar.vue

echo "✅ All 24 Vue files created successfully!"
