import Vue from "vue";
import VueRouter from "vue-router";
import LandingScreen from "../views/LandingScreen.vue";
import SearchResults from "../views/SearchResults.vue";
// import Placeholder from "../views/Placeholder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingScreen",
    component: LandingScreen,
  },
  {
    path: "/search/:placeholder",
    name: "SearchResults",
    component: SearchResults,
    props: true,
  },
  // {
  //   path: "/placeh",
  //   name: "Placeholder",
  //   component: Placeholder,
  //   props: true,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
