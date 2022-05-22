<template>
  <div class="bg-white lg:min-w-0 lg:flex-1">
    <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
      <!-- Start main area-->
      <div class="relative h-full home-container mx-auto">
        <json-place-holder-images
           v-if="isAuthenticated"
          :start="start"
          :search="search"
          :limit="limit"/>
        <list-users v-if="!isAuthenticated && !isTodayWeekend"/>
        <registered-users-favorite-images v-if="!isAuthenticated && isTodayWeekend"/>
      </div>
      <!-- End main area-->
    </div>
  </div>
</template>

<script>
import JsonPlaceHolderImages from "~/components/home/JsonPlaceHolderImages";
import {isAuthenticated} from "~/composables/auth";
import ListUsers from "~/components/home/ListUsers";
import RegisteredUsersFavoriteImages from "../components/home/RegisteredUsersFavoriteImages";
import {isDateWeekend} from "~/utils/commonMethods";

export default {
  name: "Home",
  props: {
    start: {
      type: Number
    },
    limit: {
      type: Number
    },
    search: {
      type: String
    },
  },
  components: {JsonPlaceHolderImages, ListUsers, RegisteredUsersFavoriteImages},
  setup() {
    const isTodayWeekend = isDateWeekend();

    return {isAuthenticated, isTodayWeekend};
  }
}
</script>

<style scoped>

.home-container {
  min-height: 36rem;
  max-width: 80%
}
</style>
