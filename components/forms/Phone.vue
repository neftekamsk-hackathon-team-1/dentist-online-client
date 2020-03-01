<template>
  <FormLayout title="Лечение" desc="Номер телефона" class="phone">
    <div class="container phone__body">
      <div class="row phone__input-row">
        <div class="col" style="text-align: center">
          <input
            v-mask="'+7 (###) ### ## ##'"
            :value="value"
            type="text"
            placeholder="+7 (###) ### ## ##"
            class="phone__input"
            @input="$emit('input', $event.target.value)"
          />
        </div>
      </div>
      <div class="row">
        <div class="col" style="text-align: center">
          <button class="btn btn-primary" @click="$emit('submit')">
            Отправить
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
  props: {
    value: { type: String, default: null }
  },
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

.phone {
  &__body {
    padding: 24px;
  }
  &__input-row {
    margin-bottom: 24px;
  }
  &__input {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    width: 430px;
    border: none;
    color: #080d3d;
    outline: none;
  }
}
</style>
