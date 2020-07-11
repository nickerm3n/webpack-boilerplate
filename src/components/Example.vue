<template lang="pug">
.container
  .row
    .col-sm-3
      .wrapper(v-if="visible")
        #vue-example
          img(:src="image")
          p Vue Component
          div(v-if="$resize && $mq.above(992)") Desktop
          div(v-else) Mobile or Tablet
      BaseButton(@click="toogle") {{visible ? "Show" : "Hide"}}
</template>

<script>
import image from "../assets/img/logo.png";

export default {
  data() {
    return {
      visible: true,
      image,
    };
  },
  methods: {
    toogle() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
#vue-example {
  border: 1px solid black;
}
</style>
