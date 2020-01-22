<template>
  <section id="#header" class="header" v-bind:class="{ 'minify': minify }">
    <el-row type="flex">
      <el-col :span="8" class="header__contact">
        <p>8 800 550 28 27</p>
        <p>sales@prokorm.com</p>
      </el-col>
      <el-col :span="8">
        <nuxt-link class="home-link" to="/">
          <div class="prokorm">
            <h2><b>PRO</b>КОРМ</h2>
            <p>кормление животных</p>
          </div>
        </nuxt-link>
      </el-col>
      <el-col class="header__menu" :span="8">
        <p>статьи</p>
        <p>документы</p>
        <p>галерея</p>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        minify: false
      }
    },
    methods: {
      handleScroll () {
        this.minify = window.scrollY > 0;
      }
    },
    created () {
      if (process.browser) {
          window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
        if (process.browser) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
  }
</script>

<style lang="scss">
  @import "~/styles/variables.scss";

  .header {
    transition: 0.2s;
    position: fixed;
    width: 1000px;
    top: 0;
    background: #fefefe;
    z-index: 1000;

    .home-link {
      text-decoration: none;
    }
    .prokorm {
      transition: 0.1s;
      margin: 6em auto 2em;
      font-family: 'Comfortaa', cursive;
      width: 300px;
      height: 300px;
      color: #fff;
      background: #4d626f;
      text-align: center;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }

      h2 {
        font-size: 52px;
        font-weight: 100;
        text-align: center;
        padding-top: 100px;
        font-weight: 100;
        b {
          margin-right: 6px;
          font-weight: 900;
        }

      }
      p {
        font-size: 23px;
        margin-top: -4px;
        letter-spacing: 0.2px;
      }
    }

    &__menu,
    &__contact {
      margin-top: 7em;
      font-size: 12px;
      p {
        padding: 4px 0;
      }
    }

    &__menu {
      text-align: right;
    }

    &.minify {
      .prokorm {
        width: 200px;
        height: 200px;
        margin-top: 2em;
        h2 {
          padding-top: 80px;
          font-size: 32px;
        }
        p {
          font-size: 14px;
        }
      }
      .header__menu,
      .header__contact {
        margin-top: 2em;
      }
    }
  }
</style>
