<template lang="pug">
div(class="image-block")
  img(class="image-block__image" :src="src")
  div(v-if="caption" class="image-block__caption") {{ caption  }}
</template>
<script setup>
const props = defineProps({
  src: String,
  caption: String
})
</script>
<style scoped lang="scss">
.image-block__image {
  width: 100%;
  border-top-right-radius: 28vmin;
}

.image-block__caption {
  text-align: end;
  font: $font-montserat-400-body-2;
  color: $color-gray;
}
</style>