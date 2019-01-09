<template>
  <el-container>
    <el-header class="header">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="header__phone">8 800 550 28 27</div>
        </el-col>
        <el-col :span="12">
          <div class="header__prokorm"><b>PRO</b>КОРМ</div>
        </el-col>
        <el-col :span="6">
          <div class="header__email">sales@prokorm.com</div>

        </el-col>
      </el-row>

    </el-header>
    <el-main class="main">
      <Menu/>
      <Feedy/>
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
import Composition from '../components/Composition'
import Feeding from '../components/Feeding'

export default {
  components: {
    Feedy,
    Menu,
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
    background: #fbfbfb;
    font-family: 'Comfortaa', cursive;
  }

  .section-title {
    background: #fff;
    font-size: 2em;
    padding: 1em 0;
    color: #555;
    text-align: center;
  }
  .section-content {
    padding: 0 2em;
  }

  .header {
    background: #555;
    color: #fefefe;
    line-height: 4em;
    &__prokorm {
      font-size: 40px;
      text-align: center;
    }
    &__email {
      text-align: right;
    }
  }

  .main {
    padding: 0;
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
