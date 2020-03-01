<template>
  <div class="row specialist">
    <div class="col-auto">
      <div
        :style="{ 'background-image': `url('${avatar}')` }"
        class="specialist_photo"
      ></div>
    </div>
    <div class="col specialist_info">
      <div class="specialist_full-name">{{ fullName }}</div>
      <div class="specialist_about">{{ about }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    avatar: { type: String, default: '' },
    fullName: { type: String, default: 'не указано' },
    about: { type: String, default: '' }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.specialist {
  margin: 32px 0;
}

.specialist_photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

.specialist_info {
  padding-left: 20px;
}

.specialist_full-name {
  height: 62px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 62px;
}
</style>
