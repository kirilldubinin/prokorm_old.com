<template>
  <section class="index">
    <Header/>
    <MainNavigator/>
    <section class="index__footer">
      <p>ООО "ПРОКОРМ" 2013-2020</p>
      <p></p>
    </section>
  </section>
</template>

<script>
import Header from '../components/Header'
import MainNavigator from '../components/MainNavigator'
export default {
  components: {
    Header,
    MainNavigator
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
  @import "~/styles/variables.scss";
  body,
  html {
    background: #fefefe;
    font-family: 'Montserrat', cursive;
    color: #4d626f;
    max-width: 1000px;
    height: 100%;
    padding: 0;
    margin: 0;
    margin: auto;
  }
  .index {
    &__footer {
      font-size: 11px;
      text-align: center;
      position: absolute;
      bottom: 1em;
      width: 1000px;
    }
  }

</style>
