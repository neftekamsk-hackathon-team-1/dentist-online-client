<template>
  <div class="form-layout">
    <div>
      <div class="form-layout__title">{{ title }}</div>
      <div class="form-layout__desc">{{ desc }}</div>
    </div>
    <div class="form-layout__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true }
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

.form-layout {
  background-color: white;
  border-radius: 30px;
  padding-top: 18px;
  margin: 24px 0;

  &__title {
    text-align: center;
    font-size: 30px;
    color: #080d3d;
  }

  &__desc {
    text-align: center;
    font-size: 12px;
    color: #080d3d;
  }

  &__content {
    margin-top: 37px;
    margin-bottom: 37px;
  }
}
</style>
