<template>
  <nav class="bg-white border-b border-gray-200 p-4 mb-4">
    <div class="container mx-auto flex justify-center md:justify-between">
      <router-link :to="{name: 'Home'}" class="hidden md:flex text-xl font-semibold place-items-center space-x-2">
        <span>Gallery App</span>
      </router-link>
      <ul class="list flex items-center text-gray-500 text-sm font-semibold">
        <li>
          <p>{{ getUserProfile?.name }}</p>
        </li>
        <li class="ml-4">
          <p>{{ getUserProfile?.email }}</p>
        </li>
        <li class="ml-4">
          <button @click="logout" class="hover:text-gray-700 p-2 rounded flex items-center space-x-2">
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from '@/js/stores';
import {getUserProfile} from "~/composables/auth";
import router from "~/router";

export default {
  name: "AppAuthHeader",
  setup() {
    const logout = () => {
      store.dispatch('logout').then(_ => {
        router.push({path: '/', query: {}});
      });
    }

    return {logout, getUserProfile};
  }
}
</script>
