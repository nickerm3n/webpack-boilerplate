// JS
import "./js/";

// SCSS
import "./assets/scss/main.scss";

// CSS(example);
import "./assets/css/main.css";

// Vue.js
import Vue from "vue";

// Vue components (for use in html)
// Vue.component("example-component", require("./components/Example.vue").default);
import Example from "./components/Example.vue";

// Vue init

// MediaQueries is plugin for using mediaMatch based queries.
import { MediaQueries } from "vue-media-queries";

// Globally register all `Base`-prefixed components
import "@components/_globals";

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);

const app = new Vue({
  el: "#app",
  mediaQueries: mediaQueries,
  components: {
    example: Example,
  },
});
