<template lang="pug">
footer(class="footer")
  div(class="footer__upper")
    div
      div
        img(class="logo-main" src="/Logo.svg")
        div(class="footer__description") Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
    div(class="footer__contacts")
      label(class="footer__email-label") email
        div(class="footer__email") testblogsupport@gmail.com
      div(class="footer__icons")
        a(href="")
          img(class="footer__icon" src="/facebook.svg")
        a(href="")
          img(class="footer__icon" src="/vk.svg")
        a(href="")
          img(class="footer__icon" src="/instagram.svg")
        a(href="")
          img(class="footer__icon" src="/telegram.svg")
  SubscribeForm
</template>
<script>
import SubscribeForm from './SubscribeForm';
</script>
<style scoped lang="scss">
.footer {
  border-top: 1px solid $color-gray;
}

.footer__upper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3.125rem;
  padding-bottom: 4.375rem;

  @media (min-width: $small) {
    flex-direction: row;
  }
}

.footer__description {
  font: $font-montserat-400-body-2;
  color: $color-gray;
  width: min(26.6rem, 100%);
  margin-top: 1.25rem;
}

.footer__contacts {
  @media (min-width: $small) {
    margin-right: 4.875rem;
  }
}

.footer__email-label {
  font: $font-montserat-400-body-2;
  color: $color-gray;
}

.footer__icons {
  margin-top: 1.5rem;
}

.footer__icon {
  margin-right: 1.25rem;
}

.footer__email {
  font: $font-montserat-400-ubuntu;
  color: $color-primary;
}
</style>