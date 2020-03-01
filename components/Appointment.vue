<template>
  <FormLayout :title="`Заявка №${appointment.id}`" desc="" class="appointment">
    <div class="container appointment__body">
      <div class="row">
        <div class="col" style="text-align: center">
          <div v-if="!editMode">
            <div>
              Дата подачи заявки:
              {{ new Date(appointment.created_at).toLocaleDateString() }}
            </div>
            <div>Номер телефона: {{ appointment.phone || 'не указан' }}</div>
            <div>
              Назначенная дата:
              {{
                appointment.date
                  ? new Date(appointment.date).toLocaleDateString()
                  : 'не указана'
              }}
            </div>
            <div>
              Специалист:
              {{
                appointment.specialist
                  ? `(${appointment.specialist.id}) ${appointment.specialist.full_name}`
                  : 'не указан'
              }}
            </div>
            <div>
              Услуга:
              {{
                appointment.service
                  ? `(${appointment.service.id}) ${appointment.service.title}`
                  : 'не указана'
              }}
            </div>
            <div
              class="appointment__body__edit-btn"
              @click="editMode = true"
            ></div>
          </div>
          <div v-if="editMode">
            <div>
              Назначенная дата:
              <Datepicker
                v-model="appointmentDate"
                name="appointment_date"
                :language="ru"
                :bootstrap-styling="true"
                placeholder="Дата и время"
              />
            </div>
            <div class="appointment__body__save-edit">
              <button class="button" @click="emitEdit">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col" style="text-align: center"></div>
      </div>
    </div>
  </FormLayout>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { ru } from 'vuejs-datepicker/dist/locale'
import FormLayout from './forms/FormLayout'

export default {
  components: {
    FormLayout,
    Datepicker
  },
  props: {
    appointment: { type: Object, default: null }
  },
  data() {
    return { appointmentDate: this.appointment.date, editMode: false, ru }
  },
  computed: {},
  methods: {
    emitEdit() {
      this.$emit('edit', { date: this.appointmentDate })
      this.editMode = false
    }
  }
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

.appointment {
  &__body {
    padding: 24px;

    &__save-edit {
      padding-top: 24px;
    }

    &__edit-btn {
      width: 35px;
      height: 35px;
      background-image: url('~assets/edit.svg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
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
