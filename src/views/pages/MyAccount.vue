<template>
  <section class="py-16 bg-black text-white">
      <BreadCrumb/>
    <div class="container mt-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Login -->
      <div class="bg-zinc-800 rounded-2xl p-6 shadow-lg">
        <h2 class="text-center text-2xl font-bold mb-2">Login Now</h2>
        <div class="h-0.5 bg-purple-500 w-32 mx-auto mb-6"></div>

        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <input 
              v-model="login.email" 
              type="email" 
              placeholder="Email" 
              required
              class="w-full bg-transparent border rounded px-3 py-2 text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div class="mb-4">
            <input 
              v-model="login.password" 
              type="password" 
              placeholder="Password" 
              required
              class="w-full bg-transparent border rounded px-3 py-2 text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div class="flex items-center mb-4">
            <input id="rememberLogin" type="checkbox" v-model="login.remember" class="mr-2" />
            <label for="rememberLogin" class="text-sm">Remember password</label>
          </div>
          <button type="submit" class="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white">
            Login
          </button>
        </form>
      </div>

      <!-- Register -->
      <div class="bg-[#222222] rounded-2xl p-6 shadow-lg">
        <h2 class="text-center text-2xl font-bold mb-2">Register Now</h2>
        <div class="h-0.5 bg-purple-500 w-32 mx-auto mb-6"></div>

        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <input 
              v-model="register.name" 
              type="text" 
              placeholder="Full Name" 
              required
              class="w-full bg-transparent border rounded px-3 py-2 text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div class="mb-4">
            <input 
              v-model="register.email" 
              type="email" 
              placeholder="Email" 
              required
              class="w-full bg-transparent border rounded px-3 py-2 text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div class="mb-4">
            <input 
              v-model="register.password" 
              type="password" 
              placeholder="Password" 
              required
              class="w-full bg-transparent border rounded px-3 py-2 text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div class="flex items-center mb-4">
            <input id="privacyCheck" type="checkbox" v-model="register.privacy" class="mr-2" />
            <label for="privacyCheck" class="text-sm">
              I will follow all of the 
              <a href="/privacy-policy" class="text-purple-400 hover:underline">privacy policy</a>.
            </label>
          </div>
          <button type="submit" class="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white">
            Register
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
import BreadCrumb from "@/components/commonTemps/BreadCrumb.vue";
import { reactive } from "vue";

const login = reactive({
  email: "",
  password: "",
  remember: false,
});

const register = reactive({
  name: "",
  email: "",
  password: "",
  privacy: false,
});

const handleLogin = () => {
  console.log("Login Data:", login);
  // هنا هتحط API Call للـ Login
};

const handleRegister = () => {
  console.log("Register Data:", register);
  // هنا هتحط API Call للـ Register
};
</script>
