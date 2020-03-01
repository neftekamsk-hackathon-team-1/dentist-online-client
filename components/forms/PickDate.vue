<template>
  <FormLayout title="Лечение" desc="Дата и время" class="pick-date">
    <div class="container pick-date__body">
      <div class="row">
        <div class="col" style="text-align: center">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col" style="text-align: center">
          <button class="btn btn-primary">
            Выбрать
          </button>
        </div>
      </div>
    </div>
  </FormLayout>
</template>

<script>
import FormLayout from './FormLayout'

export default {
  components: {
    FormLayout
  },
  props: {},
  computed: {}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.pick-date {
  &__body {
    background-color: #080d3d;
    border-radius: 30px;
    padding: 24px;
  }
}
</style>
