<template lang="pug">
div(class="subcribe-form")
  h3(class="title-h3 subcribe-form__title-h3") Подпишись на рассылку
  input(class="input-primary subcribe-form__input-primary" placeholder="Email")
  button(class="button button_secondary") Подписаться
</template>
<style lang="scss">
.subcribe-form {
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: $color-primary;
  align-items: center;

  @media (min-width: $small) {
    flex-direction: row;
  }
}

.subcribe-form__title-h3 {
  color: $color-white-secondary;

  @media (min-width: $small) {
    margin-right: auto;
  }
}

.subcribe-form__input-primary {
  @media (min-width: $small) {
    margin-right: 2.31rem;
  }
}
</style>