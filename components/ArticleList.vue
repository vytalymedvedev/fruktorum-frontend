<template lang="pug">
div(class="article-list")
  h2(class="title-h2 article-list__title") {{ title }}
  div(class="article-list__items")
    div(v-for="item in props.articles" class="article-item")
      img(:src="item.image" class="article-item__image")
      h3(class="title-h3 article-item__title") {{ item.title }}
      button(class="button button_primary article-item__button") Читать
</template>
<script setup>
const props = defineProps({
  title: String,
  articles: Array
})
</script>
<style scoped lang="scss">
.article-list__title {
  color: $color-primary;
}

.article-list__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.875rem;
  margin-top: 3.125rem;
}

.article-item__title {
  margin-top: 1.25rem;
  color: $color-primary;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.article-item__button {
  margin-top: 1.875rem;
}

.article-item__image {
  width: min(26.6875rem, 100%);
}
</style>