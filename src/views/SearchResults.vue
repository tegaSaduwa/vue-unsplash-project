<template>
  <div>
    <div class="top-half">
      <div class="input-wrapper">
        <div class="input-icons">
          <i class="fa fa-search icon"></i>
          <h1>
            Search Results for
            <span> "{{ this.$route.params.placeholder }}"</span>
          </h1>
        </div>
      </div>
      <!-- end of first half -->
      <!-- beginning of second half -->
      <div class="row">
        <div
          v-bind:key="photo.id"
          v-for="(photo, index) in photos"
          class="column"
        >
          <div
            class="img"
            :class="[`index-${index}`]"
            v-bind:style="{
              backgroundImage: `url(${photo.urls.regular})`,
            }"
          >
            <div :class="[`placeholder-text${index}`]">
              <p>{{ photo.user.name }}</p>
              <small>{{ photo.user.location || "unspecified" }}</small>
            </div>
          </div>
        </div>
      </div>
      <!-- end of row -->

      <!--  -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchResults",
  props: ["placeholder"],

  data() {
    return {
      photos: [],
      search: "",
      searchAction: false,
    };
  },
  created() {
    this.getPhoto(this.$route.params.placeholder);
  },

  methods: {
    getPhoto(param) {
      const accessKey = "Lo1aGhb2yOMhmadG4A2re4bFIy89bMEWdXj_tWu-YUM";
      const apiEndpoint = "https://api.unsplash.com";
      const randomPhotoEndpoint = `${apiEndpoint}/search/photos?page=1&per_page=6&query=${param}`;
      axios
        .get(randomPhotoEndpoint, {
          params: {
            client_id: accessKey,
            count: 1,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          this.photos = response.data.results;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: rgb(40, 40, 121);
}
h1 span {
  opacity: 0.5;
  padding-left: 6px;
}
</style>
