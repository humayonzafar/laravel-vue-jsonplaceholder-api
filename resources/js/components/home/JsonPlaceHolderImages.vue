<template>
  <h1 class="w-full mt-2 text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate mb-8 text-center">Photos</h1>
  <div class="flex justify-between mb-2 flex-wrap gap-1">
    <div class="justify-center items-center flex gap-1">
      <button type="button"
              @click="resetFilters"
              class="text-center  px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3 disabled:opacity-50 disabled:cursor-not-allowed">
        Reset Filters
      </button>
    </div>
    <div class="flex justify-end mb-2 flex-wrap gap-1">
      <label for="search">
        <input v-model.trim="search"
               type="search"
               id="search"
               placeholder="Search..."
               autocomplete="off"
               class="py-2 text-sm border border-gray-900 rounded-md px-4 focus:outline-none focus:bg-white focus:text-gray-700"/>
      </label>
      <label for="limit">
        <select
          class="text-sm font-medium text-gray-900 rounded-md bg-gray py-2 px-2 bg-white border border-gray-700 mx-4"
          v-model="limit"
          id="limit"
          :class="{'opacity-25 cursor-not-allowed': showOnlyFavoriteImages}"
        >
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
        </select>
      </label>
      <label for="favorite" class="justify-center items-center flex gap-1 text-md text-gray-600 leading-4 text-center">
        <input type="checkbox" id="favorite" v-model="showOnlyFavoriteImages" class="focus:ring-boothy-dark-blue-300 h-4 w-4 text-boothy-dark-blue-300 border-gray-300 rounded">
        List all favorite images
      </label>
    </div>
  </div>
  <template v-if="!isFetchingPhotos && photos.length>0">
    <div class="grid gap-8 justify-center boothcards-grid px-4 mx-auto pb-16 mt-4">
      <template v-for="photo in photos" :key="photo.id">
        <card :photo="photo" :showLikeButton="!showOnlyFavoriteImages"/>
      </template>
    </div>
    <div class="flex w-full pb-5 justify-center mt-auto" v-if="!showOnlyFavoriteImages">
      <v-pagination
        v-model="start"
        :total-items="totalPhotosCount"
        :pages="pages"
        :range-size="1"
      />
    </div>
  </template>
  <div v-if="!isFetchingPhotos && photos.length===0">
    <p class="text-center font-bold mt-4">No records found...!</p>
  </div>
  <div v-if="isFetchingPhotos"
       class="absolute inset-0 flex justify-center items-center max-w-md mx-auto">
    <loading class="w-10 h-10"/>
  </div>
</template>

<script>
import {ref, watch, computed} from "vue";
import {getPhotos} from "~/composables/jsonplaceholder";
import router from "~/router";
import Card from "~/components/ui/Card";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import {debounce} from "vue-debounce";
import Loading from "~/components/utilities/Loading";
import {fetchUserFavoriteImages} from "~/composables/favorite";
import {JsonPlaceHolderApiDefaultValues} from "~/constants";

export default {
  name: "JsonPlaceHolderImages",
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
  components: {VPagination, Loading, Card},
  setup(props) {
    const start = ref(parseInt(props.start));
    const limit = ref(parseInt(props.limit));
    const search = ref(props.search ?? '');
    const {photos, totalPhotosCount, isFetchingPhotos, fetchPhotos, showOnlyFavoriteImages} = getPhotos();
    const pages = computed(() => Math.ceil(totalPhotosCount.value / limit.value));
    const fetchFilteredRecords = debounce(_ => {
      /*wait 600ms without change before hitting an api end point*/
      router.push({path: '/', query: {start: start.value, limit: limit.value, search: search.value}});
      fetchPhotos(start.value, limit.value, search.value);
    }, '800ms');
    watch(() => [limit.value, search.value, showOnlyFavoriteImages.value], () => {
      start.value = 1;
      fetchFilteredRecords();
    });
    watch(() => [start.value], () => {
      fetchFilteredRecords();
    });
    const resetFilters = ()=>{
      start.value = JsonPlaceHolderApiDefaultValues.START;
      limit.value = JsonPlaceHolderApiDefaultValues.LIMIT;
      search.value = JsonPlaceHolderApiDefaultValues.SEARCH;
      router.push({path: '/', query: {}});
      showOnlyFavoriteImages.value = false;
    }
    fetchPhotos(start.value, limit.value, search.value);
    fetchUserFavoriteImages();

    return {photos, start, limit, totalPhotosCount, pages, search, isFetchingPhotos, showOnlyFavoriteImages, resetFilters};
  },
}
</script>

<style scoped>
.boothcards-grid {
  grid-template-columns: repeat(auto-fit, 18rem);
}
</style>
