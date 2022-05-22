<template>
  <app-auth-header v-if="isAuthenticated"/>
  <guest-header v-if="!isAuthenticated"/>
  <router-view :key="$route.path"/>
</template>

<script>
import store from '@/js/stores'
import AppAuthHeader from '~/components/ui/AppAuthHeader';
import GuestHeader from "~/components/ui/GuestHeader";
import {isAuthenticated} from "~/composables/auth";

export default {
  name: 'App',
  components:{AppAuthHeader, GuestHeader},
  setup(){
    if(isAuthenticated.value){
      /*verify if logged in user session is still valid*/
      store.dispatch("get_auth_user");
    }

    return {isAuthenticated};
  }
}
</script>
