<template>
  <div class="flex flex-col border items-start shadow-md group hover:shadow-xl p-4">
    <div class="ml-auto" v-if="isAuthenticated && favoriteImageIds && showLikeButton" :class="{'opacity-25 cursor-not-allowed': loading}">
      <i class="fas fa-heart cursor-pointer" v-if="favoriteImageIds[photo.id]" @click="toggleFavoriteImage(photo.id)"/>
      <i class="far fa-heart cursor-pointer" v-if="!favoriteImageIds[photo.id]" @click="toggleFavoriteImage(photo.id)"/>
    </div>
    <div class="flex-none w-full aspect-w-16 aspect-h-9 overflow-hidden card-height">
        <img :src="photo.thumbnailUrl" class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500 ease-in-out border-b border-gray-300" alt="'image'"/>
    </div>
    <div class="p-2 w-full">
     <p class="text-md text-gray-600 leading-4 text-center">{{photo.title ?? ''}}</p>
    </div>
  </div>
</template>

<script>
import {isAuthenticated} from "~/composables/auth";
import {favoriteImages} from "~/composables/favorite";

export default {
  name: "Card",
  props: {
    photo: {
      type: Object,
      required: true
    },
    showLikeButton: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  setup() {
    const {favoriteImageIds, loading, toggleFavoriteImage} = favoriteImages();

    return {isAuthenticated, loading, favoriteImageIds, toggleFavoriteImage}
  },
}
</script>

<style scoped>
.card-height{
  height: 200px;
  object-fit: cover;
}
.fa-heart{
  color: red;
}
</style>
