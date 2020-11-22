<template>
  <div>
    <div class="top-half">
      <h1 v-if="search">
        Searched Results <span>Loading...</span>
      </h1>
      <div class="input-wrapper" v-if="!search">
        <div class="input-icons">
          <i class="fa fa-search icon"></i>

          <input
            type="text"
            name="title"
            class="input-field"
            placeholder="Search for photo"
          />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="img index-0">
            <div class="placeholder-text0">
              <p class="p1"></p>
              <br />
              <p class="p2"></p>
            </div>
          </div>
          <br />
          <div class="img index-3">
            <div class="placeholder-text3">
              <p class="p1"></p>
              <br />
              <p class="p2"></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="img index-1">
            <div class="placeholder-text1">
              <p class="p1"></p>
              <br />
              <p class="p2"></p>
            </div>
          </div>

          <div class="img index-4">
            <div class="placeholder-text4">
              <p class="p1"></p>
              <br />
              <p class="p2"></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="img index-2">
            <div class="placeholder-text2">
              <p class="p1"></p>
              <br />
              <p class="p2"></p>
            </div>
          </div>
          <div class="img index-5">
            <div class="placeholder-text5">
              <p class="p1"></p>
              <br />
              <p class="p2"></p>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- end of row -->

      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Placeholder",
  props: ["search"],
};
</script>

<style scoped>
h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding-top: 80px;
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
.img {
  background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
  animation: loading 2s ease-in-out infinite;
  box-shadow: none;
}
.img .index-5 {
  margin-top: 7rem;
}
.img .index-4 {
  margin-top: 0;
}
@keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.p1 {
  background: linear-gradient(100deg, #a59f9f 30%, #eceff1 50%, #a59f9f 70%);
  animation: loading 1s ease-in-out infinite;

  border-radius: 5px;
  height: 5px;
  width: 70px;
}
.p2 {
  background: linear-gradient(100deg, #a59f9f 30%, #eceff1 50%, #a59f9f 70%);
  animation: loading 2s ease-in-out infinite;

  border-radius: 3px;
  height: 5px;
  width: 50px;
}

.placeholder-text4 {
  opacity: 0;
}
</style>
