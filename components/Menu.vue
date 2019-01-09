<template>
  <section class="menu">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4" class="menu__item"><a href="#composition">продукты</a></el-col>
      <el-col :span="4" class="menu__item"><a href="#feeding">кормление</a></el-col>
      <el-col :span="4" class="menu__item">производство</el-col>
      <el-col :span="4" class="menu__item">сертификаты</el-col>
    </el-row>
  </section>
</template>

<style lang="scss">
  .menu {
    margin-top: 1em;
    &__item {

      text-align: center;
      font-size: 14px;
      cursor: pointer;

      margin-bottom: 1em;
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
