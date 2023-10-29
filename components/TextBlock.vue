<template lang="pug">
div(class="text-fragment")
  TextFragment(:nodes="nodes")
</template>
<script setup>
import { computed } from 'vue';
import TextFragment from './TextFragment.vue';
import parse from 'html-dom-parser';

const props = defineProps({
  data: String
})

const nodes = computed(() => parse(props.data));

</script>