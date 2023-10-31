<template lang="pug">
div(v-for="block in blocks" class="page-block")
  ArticleBlock(
    v-if="block.type === 'article_intro_block'"
    :title="block.data?.title"
    :image="block.data?.image"
    :reading_time="block.data?.reading_time"
    :views_count="block.data?.views_count"
    :short_description="block.data?.short_description"
  )

  TextBlock(
    v-else-if="block.type === 'text_block'"
    :data="block.data"
    class="text-block text-block_default"
  )

  ImageBlock(
    v-else-if="block.type === 'image_block'"
    :src="block.data?.src"
    :caption="block.data?.caption"
  )

  SliderBlock(
    v-else-if="block.type === 'slider_block'"
    :data="block.data"
  )

  SubscribeForm(v-else-if="block.type === 'subscribe_form_block'")

  CtaForm(v-else-if="block.type === 'cta_form_block'")

  ArticleList(
    v-else-if="block.type === 'article_list_block'"
    :articles="block.data?.articles"
    :title="block.data?.title"
  )
</template>
<script setup>
import { useGeneralStore } from '../stores/general';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useGeneralStore();
const { getData } = store;
const { blocks } = storeToRefs(store);
getData(route.path);

</script>
<style scoped lang="scss">
.page-block {
  margin-top: 6.25rem;
}

.text-block.text-block_default {
  width: min(55.25rem, 100%);
  margin-left: auto;
  margin-right: auto;
}
</style>