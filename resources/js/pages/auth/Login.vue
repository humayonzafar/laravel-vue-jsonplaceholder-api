<template>
  <div class="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 p-4">
    <logo></logo>

    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
      <form @submit.prevent="login">
        <div>
          <label class="block font-medium text-sm" for="email">
            Email
          </label>
          <input v-model="formData.email"
                 @blur="v$.formData.email.$touch()"
                 class="p-2 rounded-md shadow-sm bg-white border border-gray-300 block mt-1 w-full"
                 :class="{ 'border-red-500': v$.formData.email.$error }"
                 autocomplete="on"
                 id="email" type="email" name="email" autofocus="autofocus">
          <div v-if="v$.formData.email.$error" class="text-red-500 font-semibold text-xs mt-2">
            <span>Email is invalid.</span>
          </div>
        </div>
        <div class="mt-4">
          <label class="block font-medium text-sm" for="password">
            Password
          </label>
          <input v-model="formData.password"
                 id="password" type="password" name="password" autocomplete="current-password"
                 class="p-2 rounded-md shadow-sm bg-white border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 block mt-1 w-full"
                 @blur="v$.formData.password.$touch()"
                 :class="{ 'border-red-500': v$.formData.password.$error }"
          >
        </div>
        <div v-if="v$.formData.password.$error" class="text-red-500 font-semibold text-xs mt-2">
          <span>Password is required.</span>
        </div>
        <div v-if="errors" class="text-red-500 py-2 font-semibold mt-2 text-xs">
          <span>{{ errors.message }}</span>
        </div>
        <div class="block mt-4">
          <label for="remember" class="inline-flex items-center">
            <input v-model="formData.remember" id="remember" type="checkbox"
                   class="rounded border border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                   name="remember">
            <span class="ml-2 text-sm text-gray-500">Remember me</span>
          </label>
        </div>
        <div class="flex items-center justify-end mt-4">
          <button type="submit"
                  class="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="disableSubmitButton"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
    <div class="text-center text-sm mt-4">
      Don't have an account yet?
      <router-link class="underline text-gray-500 hover:text-gray-200" :to="{name: 'Register'}">
        Sign up now
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo';
import {authLogin} from "~/composables/auth";

export default {
  name: "Login",
  components: {Logo},
  setup() {
    const {formData, v$, login, errors, disableSubmitButton} = authLogin();

    return {formData, v$, login, errors, disableSubmitButton};
  }
}
</script>
