<template lang="pug">
div(class="slider-block")
  Carousel(@slide-start="onSlideStart")
    Slide(v-for="imgSrc, index in data" :key="imgSrc")
      img(:src="imgSrc" class="carousel__item")

    template(#addons)
      Navigation
  div(class="slider-block__slide-counter") {{ slideCount }}
</template>
<script setup>
import { ref, computed } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const currentSlide = ref(1);
const slideCount = computed(() => `${currentSlide.value} / ${props.data.length}`);

const onSlideStart = (eventData) => currentSlide.value = eventData.slidingToIndex + 1;

</script>
<style lang="scss">
.slider-block {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}

.carousel__item {
  max-height: 34.375rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: $color-primary;

  @media (min-width: $small) {
    width: 3.75rem;
    height: 3.75rem;
  }
}

.carousel__prev .carousel__icon,
.carousel__next .carousel__icon {
  color: $color-white-third;
}

.carousel__prev {
  margin-left: -25px;

  @media (min-width: $small) {
    margin-left: -75px;
  }
}

.carousel__next {
  margin-right: -25px;

  @media (min-width: $small) {
    margin-right: -75px;
  }
}

.slider-block__slide-counter {
  text-align: center;
  font: $font-montserat-400-body-1;
  color: $color-black;
}
</style>