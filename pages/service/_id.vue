<template>
  <div class="service">
    <div class="container-fluid">
      <Navbar />

      <div class="row justify-content-center">
        <div class="col-6">
          <ChooseSpecialistForm
            v-model="chosenSpecialist"
            :specialists="specialists"
          />
          <PickDateForm v-model="date" />
          <PhoneForm v-model="phone" @submit="submit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import ChooseSpecialistForm from '../../components/forms/ChooseSpecialist'
import PickDateForm from '../../components/forms/PickDate'
import PhoneForm from '../../components/forms/Phone'
import ApiClient from '@/services/api.service'

export default {
  components: {
    Navbar,
    ChooseSpecialistForm,
    PickDateForm,
    PhoneForm
  },
  data: () => ({
    chosenSpecialist: null,
    phone: null,
    date: null
  }),
  computed: {
    serviceId() {
      return this.$route.params.id
    },
    specialists() {
      return this.$store.state.service.specialists || []
    }
  },
  watch: {
    chosenSpecialist(chosenSpecialist) {
      this.$store.commit('service/setChosenSpecialist', chosenSpecialist)
      console.log({ chosenSpecialist })
    },
    phone(val) {
      console.log(val)
    },

    date(val) {
      console.log(val)
    }
  },
  mounted() {
    this.$store.dispatch('service/loadSpecialistsByServiceId', this.serviceId)
  },
  methods: {
    submit() {
      if (!this.chosenSpecialist) {
        return
      }

      ApiClient.createAppointment({
        specialistId: this.chosenSpecialist.id,
        serviceId: this.serviceId,
        date: this.date,
        phone: this.phone
      }).then((appointment) => {
        this.$router.push(`/service/result?id=${appointment.id}`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  background-image: url('~assets/main-header-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
