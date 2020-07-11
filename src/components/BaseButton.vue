<template>
  <button :class="$style.button" v-on="$listeners">
    <slot />
  </button>
</template>

<style lang="scss" module>
.button {
  border: 1px solid black;
}
</style>
