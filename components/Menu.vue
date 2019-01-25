<template>
  <section class="menu">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6" class="menu__prokorm">
        <a href="#composition"><b>PRO</b>КОРМ</a>
        <span>кормление животных</span>
      </el-col>
      <el-col :span="8" class="menu__contact">
        <span>8 800 550 28 27</span>
        <span>sales@prokorm.com</span>
      </el-col>
      <el-col :span="10">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="4" class="menu__item"><a href="#products">продукты</a></el-col>
          <el-col :span="4" class="menu__item"><a href="#composition">показатели</a></el-col>
          <el-col :span="4" class="menu__item"><a href="#feeding">кормление</a></el-col>
          <!--el-col :span="4" class="menu__item"><a href="#contact">контакты</a></el-col-->
        </el-row>
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss">
  .menu {
    margin-top: 2em;
    &__prokorm {
      font-size: 30px;
      a {
        text-decoration: none;
        color: #2f333e;
        display: block;
        b {
          margin-right: 4px;
        }
      }
      span {
        color: #888;
        display: block;
        margin-top: -2px;
        font-size: 11px;
        padding-left: 3px;
        letter-spacing: 1.4px
      }
    }
    &__contact {
      font-family: 'Baloo Bhaijaan', cursive;
      font-weight: normal;
      color: #555;
      padding-top: 2px;
      span {
        display: block;
        line-height: 18px;
      }
    }
    &__item {

      text-align: center;
      font-size: 14px;
      cursor: pointer;
      line-height: 2.5em;
      a {
        color: #777;
        text-decoration: none;
        &:hover {
          text-decoration: underline
        }
      }
    }
  }

</style>
