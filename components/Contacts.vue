<template>
  <div class="container-fluid contacts">
    <div class="row">
      <div class="col">
        <h1 class="contacts__title">
          Контакты
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="contacts__info"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contacts {
  background-color: #e9e9e9;
  &__title {
    text-align: center;
    padding: 50px;
  }

  &__info {
    background-image: url('~assets/contacts.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;
    margin-bottom: 100px;
  }
}
</style>
