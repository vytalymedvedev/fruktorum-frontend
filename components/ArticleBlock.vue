<template lang="pug">
div(class="article-block")
  img(:src="props.image" class="article-block__image")
  div
    h1(class="article-block__title") {{ props.title }}
    div(class="article-details")
      img(src="/mdi_eye.svg")
      div(class="article-block__reading-time") {{ readingTime }}
      img(src="/icon-park-solid_time.svg")
      div(class="article-block__views-count") {{ viewsCount }}
    p(class="article-block__description") {{ props.short_description }}
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  image: String,
  reading_time: Number,
  views_count: Number,
  short_description: String,
})

const readingTime = computed(() => `${props.reading_time} мин время чтения`);
const viewsCount = computed(() => `${props.views_count} прочитали статью`);
</script>
<style scoped lang="scss">
.article-block {
  display: grid;

  @media (min-width: $small) {
    grid-template-columns: 25% 75%;
    gap: 2rem;
    align-items: center;
  }
}

.article-block__title {
  font: $font-montserat-800-h1;
  color: $color-primary;
}

.article-block__image {
  width: min(33.8125rem, 100%);
  border-top-right-radius: 18vmin;
}

.article-details {
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: 2% 98%;
  gap: 0.5rem;
  align-items: center;
  font: $font-montserat-400-body-2;
  color: $color-gray;
}

.article-block__description {
  margin-top: 3.125rem;
  font: $font-montserat-400-body-1;
  color: $color-primary;
}
</style>