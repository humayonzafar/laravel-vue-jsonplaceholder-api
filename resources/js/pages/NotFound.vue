<template>
  <div class="h-screen flex items-center justify-center flex-col">
    <div class="text-center my-8">
      <h1 class="my-6 text-black-600 text-8xl text-gray-900">404</h1>
      <p class="text-xl font-medium text-gray-700">Sorry, we can't find that page!</p>
    </div>
    <router-link class="underline text-gray-500 hover:text-gray-200 btn btn-primary" :to="{name: 'Home'}">
      Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
