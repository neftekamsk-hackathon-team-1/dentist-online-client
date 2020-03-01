<template>
  <div class="service">
    <div class="container-fluid">
      <Navbar />

      <div class="row justify-content-center">
        <div class="col-6">
          <FormLayout title="Лечение" desc="Ваш талон">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <Ticket :ticket-number="111" />
                </div>
              </div>
              <div class="row">
                <div class="col service-result__actions">
                  <button
                    class="btn btn-primary service-result__actions__home-btn"
                  >
                    Главная
                  </button>
                </div>
              </div>
            </div>
          </FormLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import FormLayout from '../../components/forms/FormLayout'
import Ticket from '../../components/Ticket'

export default {
  components: {
    Navbar,
    FormLayout,
    Ticket
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

.service-result {
  &__actions {
    text-align: center;
    padding-bottom: 40px;
    &__home-btn {
      margin-top: 50px;
    }
  }
}
</style>
