<template lang="pug">
div(class="cta-form")
  img(class="cta-form__image" src="/cta.svg")
  div
    h2(class="title-h2 cta-form__title") Стань участником проекта
    div(class="cta-form__contact-info")
      input(class="input-primary" placeholder="Имя")
      input(class="input-primary" placeholder="Телефон")
      input(class="input-primary" placeholder="Email")
    button(class="button button_secondary cta-form__button") Присоединиться
</template>
<style scoped lang="scss">
.cta-form {
  display: grid;

  padding: 3.75rem;
  background-color: $color-primary;

  @media (min-width: $small) {
    grid-template-columns: 1fr 1fr;
    gap: 3.75rem;
  }
}

.cta-form__image {
  width: min(37.187rem, 100%);
}

.cta-form__title {
  color: $color-white-secondary;
}

.cta-form__contact-info {
  margin-top: 3.125rem;
}

.cta-form__contact-info .input-primary:not(:first-child) {
  margin-top: 1.24rem;
}

.cta-form__button {
  margin-top: 3.75rem;
}
</style>