<template>
  <h1 class="w-full mt-2 text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate mb-8 text-center">
    Latest Liked Images Feed
  </h1>
  <div class="grid gap-8 justify-center boothcards-grid px-4 mx-auto pb-16">
    <template v-for="image in images" :key="images.id">
      <card :photo="image"/>
    </template>
  </div>
  <div class="flex items-center justify-center ">
    <button type="button"
            v-if="metaData && metaData.current_page < metaData.total_pages"
            @click="loadMoreFavoriteImages"
            :disabled="fetching"
            class="text-center  px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3 disabled:opacity-50 disabled:cursor-not-allowed">
      Load More
    </button>
  </div>
</template>

<script>
import {latestFavoriteImages} from "~/composables/user";
import Card from "~/components/ui/Card";

export default {
  name: "RegisteredUsersFavoriteImages",
  components: {Card},
  setup() {
    const {images, metaData, fetching, getLatestFavoriteImages} = latestFavoriteImages();
    getLatestFavoriteImages();
    const loadMoreFavoriteImages = () => {
      getLatestFavoriteImages(metaData.value.current_page + 1);
    }

    return {metaData, fetching, images, loadMoreFavoriteImages};
  },
}
</script>

<style scoped>
.boothcards-grid {
  grid-template-columns: repeat(auto-fit, 18rem);
}
</style>
