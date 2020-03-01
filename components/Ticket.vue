<template>
  <div class="ticket">
    <div class="ticket__number">ТАЛОН № {{ ticketNumber }}</div>
    <div class="ticket__hint"></div>
  </div>
</template>

<script>
export default {
  props: {
    ticketNumber: { type: Number, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

.ticket {
  &__number {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 63px;

    color: #080d3d;

    text-align: center;
  }

  &__hint {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    color: #080d3d;

    text-align: center;
  }
}
</style>
