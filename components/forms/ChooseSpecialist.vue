<template>
  <FormLayout
    title="Лечение"
    desc="Выбор специалиста"
    class="choose-specialist"
  >
    <div class="container">
      <div
        v-for="(specialist, i) in specialists"
        :key="i"
        :class="[
          'row',
          'choose-specialist__item',
          { chosen: value && value.id == specialist.id }
        ]"
      >
        <div class="col-auto">
          <div
            :style="{
              'background-image': `url('/specialists-photos/${specialist.id}.jpg')`
            }"
            class="choose-specialist__item__photo"
          ></div>
        </div>
        <div class="col choose-specialist__item__info">
          <div
            :class="[
              'choose-specialist__item__info__full-name',
              { chosen: value && value.id == specialist.id }
            ]"
          >
            {{ specialist.full_name }}
          </div>
          <div
            :class="[
              'choose-specialist__item__info__about',
              { chosen: value && value.id == specialist.id }
            ]"
          >
            {{ specialist.about }}
          </div>
          <div>
            <button class="button" @click="$emit('input', specialist)">
              Выбрать
            </button>
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
    value: { type: Object, default: null },
    specialists: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.choose-specialist {
  padding-bottom: 6px;

  &__item {
    margin: 24px 0;
    padding: 10px;
    border-radius: 30px;

    &.chosen {
      background-color: #c3c3c3;
    }

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
