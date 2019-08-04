<template>
  <section>
    <div class="demo" v-bind:style="{ width: width + 'px', height: height + 'px'}">

      <div class="page logo" v-if="page === 0">
        <div class="prokorm">
          <h2><b>PRO</b>КОРМ</h2>
          <p>кормление животных</p>
        </div>
        <div class="addr">8 800 550 28 27</div>
      </div>

      <div class="page select" v-if="page === 1">
        <el-row>
          <el-button type="info" plain>выпойка</el-button>
          <el-button type="info" plain>лизунцы</el-button>
          <el-button type="info" plain>Info</el-button>
        </el-row>
      </div>

      <div class="page select" v-if="page === 2">
        <el-row class="breadcrumbs">
          <span> <b>PRO</b>КОРМ</span>
        </el-row>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data: {
    width: 0,
    height: 0,
    page: 0
  },
  created() {
    this.page = 2;
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth > 1024 ? 1024 : window.innerWidth;
      this.height = window.innerHeight > 768 ? 768 : window.innerHeight;
    }
  }
}
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
  }
  .demo {
    max-width: 1024px;
    max-height: 768px;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 1px solid #eee;

    .page {
      height: 100%;
      background: #fefefe;

      .breadcrumbs {
        background: #4d626f;
        height: 60px;
        font-family: 'Comfortaa', cursive;
        color: #fefefe;
        font-size: 32px;
        padding: 14px 0 12px 12px;
        b {
          padding-right: 5px;
        }
      }

      &.logo {
        padding-top: 9em;

        .prokorm {
          margin: 0 auto;
          font-family: 'Comfortaa', cursive;
          width: 400px;
          height: 400px;
          color: #fefefe;
          background: #4d626f;
          text-align: center;
          box-shadow: 0 0 8px #4d626f;
          h2 {
            font-size: 66px;
            font-weight: 100;
            text-align: center;
            padding-top: 150px;
            font-weight: 100;
            letter-spacing: 4px;
            padding-left: 2px;

          b {
            margin-right: 10px;
            font-weight: 900;
            letter-spacing: 2px;
          }

          }
          p {
            font-size: 31px;
            letter-spacing: 0px;
            margin-left: -5px;
            margin-top: -6px;
          }
        }

        .addr {
          color: #4d626f;
          text-align: center;
          font-size: 30px;
          padding: 160px 0 0 0;
        }
      }
    }
  }
</style>
