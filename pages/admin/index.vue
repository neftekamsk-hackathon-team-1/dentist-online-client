<template>
  <div class="service">
    <div class="container-fluid">
      <Navbar />

      <div class="row justify-content-center">
        <div class="col-6">
          <Appointment
            v-for="(appointment, i) in appointments"
            :key="i"
            :appointment="appointment"
            @edit="handleEdit($event, appointment)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Appointment from '@/components/Appointment'
import ApiClient from '@/services/api.service'

export default {
  components: {
    Navbar,
    Appointment
  },
  data: () => ({}),
  computed: {
    appointments() {
      return this.$store.state.admin.appointments || []
    }
  },
  watch: {},
  mounted() {
    this.$store.dispatch('admin/loadAllAppointments')
  },
  methods: {
    handleEdit(editData, appointment) {
      ApiClient.editAppointment(appointment.id, editData).then(() => {
        this.$store.dispatch('admin/loadAllAppointments')
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
