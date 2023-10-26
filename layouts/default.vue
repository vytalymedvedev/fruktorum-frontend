<template lang="pug">
AppHeader
div(class="main-content")
  slot
div(class="line")
AppFooter(class="app-footer")
</template>
<script setup>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
</script>
<style coped lang="scss">
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
  font-weight: normal;
}

.main-content {
  margin: 0 auto;
  max-width: $conten-max-width;
}

.line {
  width: 100%;
  margin-top: 12.5rem;
  border-top: 1px solid $color-gray;
}

.app-footer {
  margin: 0 auto;
  max-width: $conten-max-width;
}
</style>
