<template>
  <h1 class="w-full mt-2 text-2xl leading-7 text-gray-900 sm:text-3xl sm:truncate my-4 text-center">Users</h1>
  <p class="text-center my-2">Most liked images by user this week</p>
  <table-lite
    :is-loading="loading"
    :columns="columns"
    :rows="users"
    :total="metaData?.total"
    :sortable="true"
    @do-search="getUpdatedRecords"
  />
</template>

<script>
import {usersWithMostLikedImagesCurrentWeek} from "~/composables/user";
import TableLite from "vue3-table-lite";

export default {
  name: "ListUsers",
  components: {TableLite},
  setup() {
    const {metaData, users, loading, getUsersWithMostLikedImagesCurrentWeek} = usersWithMostLikedImagesCurrentWeek();
    const columns = [
      {
        label: "Name",
        field: "name",
        width: "30%",
        sortable: false
      },
      {
        label: "Email",
        field: "email",
        width: "80%",
        sortable: false
      },
      {
        label: "Likes",
        field: "likes",
        width: "20%",
        sortable: false
      },
    ];
    const getUpdatedRecords = (offset) => {
      getUsersWithMostLikedImagesCurrentWeek((offset + 10) / 10);
    }
    getUsersWithMostLikedImagesCurrentWeek();

    return {metaData, columns, users, loading, getUpdatedRecords};
  },
}
</script>

<style>
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}

.vtl-paging-count-label, .vtl-paging-count-dropdown {
  visibility: hidden !important;
}

</style>
