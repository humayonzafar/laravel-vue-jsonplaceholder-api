<template>
  <nav class="bg-white border-b border-gray-200 p-4 mb-4">
    <div class="container mx-auto flex justify-center md:justify-between">
      <router-link :to="{name: 'Home'}" class="hidden md:flex text-xl font-semibold place-items-center space-x-2">
        <span>Gallery App</span>
      </router-link>
      <ul class="list flex items-center text-gray-500 text-sm font-semibold">
        <li>
          <router-link :to="{name: 'Login'}" class="hover:text-gray-700 p-2 rounded flex items-center space-x-2">
            <span>Login</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Register'}" class="hover:text-gray-700 p-2 rounded flex items-center space-x-2">
            <span>Register</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "GuestHeader"
}
</script>
