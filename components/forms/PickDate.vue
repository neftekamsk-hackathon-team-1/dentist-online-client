<template>
  <FormLayout title="Лечение" desc="Дата и время" class="pick-date">
    <div class="container pick-date__body">
      <div class="row pick-date__body__input-row">
        <div class="col" style="text-align: center">
          <!-- <div class="pick-date__body__calendar"></div> -->
          <Datepicker
            :value="value"
            name="service_date"
            :language="ru"
            :bootstrap-styling="true"
            placeholder="Дата и время"
            @input="$emit('input', $event)"
          />
        </div>
      </div>
      <!-- <div class="row">
        <div class="col" style="text-align: center">
          <button class="btn btn-primary">
            Выбрать
          </button>
        </div>
      </div> -->
    </div>
  </FormLayout>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { ru } from 'vuejs-datepicker/dist/locale'
import FormLayout from './FormLayout'

export default {
  components: {
    Datepicker,
    FormLayout
  },
  props: {
    value: { type: Date, default: null }
  },
  data() {
    return {
      ru
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.pick-date {
  &__body {
    // background-color: #080d3d;
    border-radius: 30px;
    padding: 24px;

    &__input-row {
      margin-bottom: 24px;
    }

    &__calendar {
      background-image: url('~assets/calendar.svg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 400px;
    }
  }
}
</style>
