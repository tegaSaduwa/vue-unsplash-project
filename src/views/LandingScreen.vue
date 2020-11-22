<template>
  <div>
    <div class="top-half" v-if="this.photos">
      <div class="input-wrapper">
        <div class="input-icons">
          <i class="fa fa-search icon"></i>
          <input
            v-if="this.searchAction === false"
            type="text"
            name="title"
            class="input-field"
            placeholder="Search for photo"
            v-model="search"
            @change="searchPic"
          />
        </div>
      </div>
     
      <div class="row">
        <div
        @click="redirect()"
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
  name: "LandingScreen",

  data() {
    return {
      photos: [],
      search: "",
      searchAction: false,
      loading: true,
    };
  },
  created() {
    this.getPhoto("Africans");
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

    searchPic() {
      console.log("hey");
      this.getPhoto(this.search);
      this.$router.push(`/search/${this.search}`);
    },
    redirect () {
        // this.$router.push(`/search/info/${id}`); 
        console.log("hello");
    }
  },
};
</script>

<style scoped>

</style>
