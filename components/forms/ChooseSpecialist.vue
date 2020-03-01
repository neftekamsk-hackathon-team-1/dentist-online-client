<template>
  <FormLayout
    title="Лечение"
    desc="Выбор специалиста"
    class="choose-specialist"
  >
    <div class="container">
      <div
        v-for="(specialist, i) in getSpecialists"
        :key="i"
        class="row choose-specialist__item"
      >
        <div class="col-auto">
          <div
            :style="{ 'background-image': `url('${specialist.avatar}')` }"
            class="choose-specialist__item__photo"
          ></div>
        </div>
        <div class="col choose-specialist__item__info">
          <div class="choose-specialist__item__info__full-name">
            {{ specialist.fullName }}
          </div>
          <div class="choose-specialist__item__info__about">
            {{ specialist.about }}
          </div>
          <div>
            <button class="btn btn-primary">Выбрать</button>
          </div>
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
    serviceId: { type: Number, required: true }
  },
  computed: {
    getSpecialists() {
      return [
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/1.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        },
        {
          fullName: 'Петрова Наталья Ивановна',
          about: 'Опыт: 10 лет',
          avatar: '/specialists-photos/2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.choose-specialist {
  padding-bottom: 6px;

  &__item {
    margin: 24px 0;

    &__photo {
      width: 106px;
      height: 106px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
    }

    &__info {
      padding-left: 20px;

      &__full-name {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        /* identical to box height */

        color: #080d3d;
      }

      &__about {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height */

        color: #080d3d;
      }
    }
  }
}
</style>
