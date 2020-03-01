<template>
  <div>
    <div class="main-header">
      <div class="container-fluid">
        <Navbar />
        <div class="main-header__services-hero">
          <div class="row justify-content-center">
            <div class="col-6 main-header__services-hero__frame">
              <div class="row justify-content-center">
                <div class="col-6 main-header__services-hero__item item-1">
                  <div>
                    <nuxt-link to="/service/1">Лечение</nuxt-link>
                  </div>
                </div>
                <div class="col-6 main-header__services-hero__item item-2">
                  <div>
                    <nuxt-link to="/service/2">Хирург</nuxt-link>
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="col-6 main-header__services-hero__item item-3">
                  <div>
                    <nuxt-link to="/service/3">Ортодонтия</nuxt-link>
                  </div>
                </div>
                <div class="col-6 main-header__services-hero__item item-4">
                  <div>
                    <nuxt-link to="/service/4">Плановый осмотр</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container specialists-hero">
      <div class="specialists-hero__title">
        <h1>Специалисты</h1>
      </div>
      <div>
        <Specialist
          v-for="(specialist, i) in allSpecialists"
          :key="i"
          :avatar="`/specialists-photos/${specialist.id}.jpg`"
          :full-name="specialist.full_name || ''"
          :about="specialist.about || ''"
        />
      </div>
    </div>

    <Contacts />
  </div>
</template>

<script>
// import Specialist from './../components/Specialist'
import Navbar from '../components/Navbar'
import Specialist from '../components/Specialist'
import Contacts from '../components/Contacts'

export default {
  components: {
    Navbar,
    Specialist,
    Contacts
  },

  computed: {
    allSpecialists({ store }) {
      return this.$store.state.home.allSpecialists
    }
  },

  mounted() {
    this.$store.dispatch('home/loadAllSpecialists')
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.main-header {
  background-image: url('~assets/main-header-bg.jpg');
  background-size: cover;
  background-position: center;
  padding-bottom: 36px;

  &__services-hero {
    &__item {
      height: 150px;
      background-position: center;
      background-size: cover;
      position: relative;

      div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        color: white;
        font-size: 35px;

        a {
          color: inherit;
        }
      }

      &.item-1 {
        background-image: url('~assets/services-hero-item-1.jpg');
      }

      &.item-2 {
        background-image: url('~assets/services-hero-item-2.jpg');
      }

      &.item-3 {
        background-image: url('~assets/services-hero-item-3.jpg');
      }

      &.item-4 {
        background-image: url('~assets/services-hero-item-4.jpg');
      }
    }

    &__frame {
      border-radius: 30px;
      overflow: hidden;
    }
  }
}

.specialists-hero {
  margin-top: 100px;

  &__title {
    text-align: center;
  }
}
</style>
