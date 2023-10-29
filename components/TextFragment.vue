<template lang="pug">
template(v-for="node in props.nodes")
  template {{ console.log(node) }}
  template(v-if="node.type === 'text'") {{ node.data }}
  h2(v-if="node.name === 'h2'" class="title-h2 text-fragment__title")
    TextFragment(:nodes="node.children")
  p(v-if="node.name === 'p'" class="text-fragment__paragraph text-fragment__paragraph_default")
    TextFragment(:nodes="node.children")
  blockquote(v-if="node.name === 'blockquote'" class="text-fragment__blockquote")
    TextFragment(:nodes="node.children")
  footer(v-if="node.name === 'footer'" class="text-fragment__footer text-fragment__footer_default")
    TextFragment(:nodes="node.children")
  ul(v-if="node.name === 'ul'" class="")
    TextFragment(:nodes="node.children")
  li(v-if="node.name === 'li'" class="")
    TextFragment(:nodes="node.children")
</template>
<script setup>
const props = defineProps({
  nodes: Array
})
</script>
<style scoped lang="scss">
.text-fragment__title {
  color: $color-primary;
}

.text-fragment__paragraph {
  font: $font-montserat-400-body-1;
  color: $color-primary;
}

.text-fragment__paragraph_default {
  margin-top: 1.25rem;
}

.text-fragment__blockquote .text-fragment__paragraph {
  font-style: italic;
  font-weight: 300;
}

.text-fragment__footer {
  font: $font-montserat-400-body-2;
  color: $color-gray;
}

.text-fragment__footer_default {
  margin-top: 1rem;
  width: min(16rem, 100%);
  word-break: break-word;
}
</style>