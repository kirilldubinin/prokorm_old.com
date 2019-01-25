<template>
  <el-container>
    <el-header class="header">
      <Menu/>
    </el-header>
    <el-main class="main">

      <Feedy/>
      <Products/>
      <Composition/>
      <Feeding/>

    </el-main>
    <el-footer class="prokorm-footer">
      <a href="#">
        ООО "ПРОКОРМ"
      </a>
    </el-footer>
  </el-container>
</template>

<script>

import Feedy from '../components/Feedy'
import Menu from '../components/Menu'
import Products from '../components/Products'
import Composition from '../components/Composition'
import Feeding from '../components/Feeding'

export default {
  components: {
    Feedy,
    Menu,
    Products,
    Composition,
    Feeding
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  body,
  html {
    background: #f4f7f6;
    font-family: 'Comfortaa', cursive;
    color: #2f333e;
  }

  .main {
    overflow-x: hidden;
    padding: 0;
    margin: 6em auto;
  }

  .feedy {
    font-family: 'Baloo Bhaijaan', cursive;
    font-weight: normal;
  }

  .section-title {
    background: #fff;
    font-size: 2em;
    padding: 1em 0;
    color: #555;
    text-align: center;
    margin: 2em 0;
  }
  .section-content {
  }

  .header {
    width: 1000px;
    max-width: 1000px;
    margin: auto;
  }
  .muesli {
    background-color: #f98c06;
  }
  .red {
    background-color: #f13434;
  }
  .green {
    background-color: #2f6728;

  }
  .standard {
    background-color: #222;
    opacity: 0.7;
  }
  .start {
    background-color: #2f79d2;
  }
  .standart {
    background-color: #222;
  }

  .prokorm-footer {
    text-align: center;
    box-shadow: none;
    font-size: 11px;
    line-height: 5em;
  }

  .prokorm-footer a {
    color: #777;
    text-decoration: none;
  }

</style>
