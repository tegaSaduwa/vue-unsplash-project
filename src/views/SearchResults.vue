<template>
  <div>
    <Placeholder v-if="loading" v-bind:search=" this.$route.params.placeholder" />
    <div class="top-half" v-if="!loading">
      <div class="input-wrapper">
        <div class="input-icons">
          <i class="fa fa-search icon"></i>
          
          <h1 v-if="!loading">
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
            @click="
              modal1(photo.urls.regular, photo.user.name, photo.user.location)
            "
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
import Placeholder from "./Placeholder.vue";
export default {
 
  name: "SearchResults",
   components: { Placeholder },
  props: ["placeholder"],

  data() {
    return {
      photos: [],
      search: "",
      loading: true,
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
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    modal1(pic, name, location) {
      console.log(pic);
      this.$swal({
        title: name,
        text: location,
        imageUrl: pic,
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: "Custom image",
        cancelButtonColor: "#e8e8e8",
        confirmButtonText: "Close",
        // background:" rgba(0, 0, 0, 0.4)",
      });
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0 auto 0 -340px;
  display: flex;
  justify-content: center;
  color: rgb(40, 40, 121);
}
h1 span {
  opacity: 0.5;
  padding-left: 6px;
}
.icon {
  color: transparent;
}
@media screen and (max-width: 768px)  {
  h1 {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }}
</style>
