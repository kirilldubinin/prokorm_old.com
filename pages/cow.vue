<template>
  <section class="index">
    <Header/>
    <Main/>
  </section>
</template>

<script>
import Header from '../components/Header'
import Main from '../components/Main'
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  body,
  html {
    background: #fefefe;
    font-family: 'Montserrat', cursive;
    max-width: 1000px;
    margin: auto;
  }

</style>
