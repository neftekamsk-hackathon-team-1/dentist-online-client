<template>
  <div class="service">
    <div class="container-fluid">
      <Navbar />

      <div class="row justify-content-center">
        <div class="col-6">
          <ChooseSpecialistForm />
          <PickDateForm />
          <PhoneForm />
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

export default {
  components: {
    Navbar,
    ChooseSpecialistForm,
    PickDateForm,
    PhoneForm
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
