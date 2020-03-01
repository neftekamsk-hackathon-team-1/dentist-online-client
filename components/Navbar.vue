<template>
  <div class="row">
    <div class="col-2">
      <div class="navbar__logo"></div>
    </div>
    <div class="col navbar__links">
      <div
        v-for="(navLink, i) in navLinks"
        :key="i"
        class="navbar__links__item"
      >
        <a href="navLink.link">
          {{ navLink.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { label: 'Контакты', link: '#' },
        { label: 'Специалисты', link: '#' },
        { label: 'Услуги', link: '#' },
        { label: 'Главная', link: '#' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar__logo {
  height: 100px;
  margin-top: 16px;
  background-image: url('~assets/Logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.navbar__links {
  text-align: right;
  &__item {
    display: inline-block;
    padding: 16px 16px;

    a {
      color: white;
    }
  }
}
</style>
