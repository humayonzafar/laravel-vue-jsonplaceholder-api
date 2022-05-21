<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <logo></logo>
    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      <form @submit.prevent="register">
        <div>
          <label class="block font-medium text-sm text-gray-500" for="name">
            Name
          </label>
          <input v-model="formData.name"
                 @blur="v$.formData.name.$touch()"
                 class="p-2 rounded-md shadow-sm bg-white border border-gray-300 block mt-1 w-full"
                 id="name" type="text" name="name"
                 autofocus="autofocus"
                 :class="{ 'border-red-500': v$.formData.name.$error }">
          <div v-if="v$.formData.name.$error" class="text-red-500 font-semibold text-xs mt-2">
            <span>Name is required.</span>
          </div>
        </div>
        <div class="mt-4">
          <label class="block font-medium text-sm text-gray-500" for="email">
            Email
          </label>
          <input v-model="formData.email"
                 @blur="v$.formData.email.$touch()"
                 class="p-2 rounded-md shadow-sm bg-white border border-gray-300 block mt-1 w-full"
                 id="email" type="email" name="email" autofocus="autofocus"
                 :class="{ 'border-red-500': v$.formData.email.$error }">
          <div v-if="v$.formData.email.$error" class="text-red-500 font-semibold text-xs mt-2">
            <span>Email is invalid.</span>
          </div>
        </div>
        <div class="mt-4">
          <label class="block font-medium text-sm text-gray-500" for="password">
            Password
          </label>
          <input v-model="formData.password"
                 @blur="v$.formData.password.$touch()"
                 class="p-2 rounded-md shadow-sm bg-white border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 block mt-1 w-full"
                 id="password"
                 type="password"
                 name="password" autocomplete="current-password"
                 :class="{ 'border-red-500': v$.formData.password.$error }">
          <div v-if="v$.formData.password.$error" class="text-red-500 font-semibold text-xs mt-2">
            <span> Password is Required (at-least 8 characters long)</span>
          </div>
        </div>
        <div class="mt-4">
          <label class="block font-medium text-sm text-gray-500" for="password">
            Repeat Password
          </label>
          <input
            v-model="formData.password_confirmation"
            @blur="v$.formData.password_confirmation.$touch()"
            class="p-2 rounded-md shadow-sm bg-white border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 block mt-1 w-full"
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            autocomplete="current-password"
            :class="{ 'border-red-500': v$.formData.password_confirmation.$error }">
          <div v-if="v$.formData.password_confirmation.$error" class="text-red-500 font-semibold text-xs mt-2">
            <span>The passwords do not match!</span>
          </div>
        </div>
        <div v-if="errors">
          <p class="text-red-500 font-semibold text-xs mt-2">{{ errors.message }}</p>
        </div>
        <div class="flex items-center justify-end mt-4">
          <button type="submit"
                  class="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="disableSubmitButton">
            Register
          </button>
        </div>
      </form>
    </div>
    <div class="text-center text-sm mt-4">
      Already a member?
      <router-link class="underline text-gray-500 hover:text-gray-200" :to="{name: 'Login'}">
       Go to login
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/js/components/Logo'
import {registerUser} from "../../composables/auth";

export default {
  name: "Login",
  components: {Logo},
  setup() {
    const {formData, v$, register, errors, disableSubmitButton} = registerUser();

    return {formData, v$, register, errors, disableSubmitButton};
  },
}
</script>
