<template>
  <section class="products" id="products">
    <h2 class="section-title">ПРОДУКТЫ</h2>
    <div class="section-content">
      <el-row type="flex" class="" :gutter="0">
        <el-col :span="12" class="products__item">
          <el-row type="flex">
            <el-col :span="10">
              <h3><span class="feedy">Feedy</span> <span class="products__feedy--type muesli">Muesli</span></h3>
            </el-col>
            <el-col :span="14" class="products__price tags">
              <span class="price-tag"><a href="javascript:void()">59 руб/кг</a></span>
            </el-col>
          </el-row>
          <div class="products__content">
            <p class="products__content--day">
              престрартер с 1 дня жизни
            </p>
            <p class="products__content--composition">
              Гранулированный престартер из экструдированных зерновых с кукурузными и ячменными хлопьями на основе соевого шрота
            </p>
            <p class="products__content--composition">
              <b>Состав: <br/></b>Соевый шрот, горох экструдированный, кукурузные хлопья, ячменные хлопья, пшеница экструдированная, ячмень экструдированный, рапсовый шрот, премикс, масло подсолнечное, пробиотик, ароматизатор.
            </p>
          </div>
        </el-col>
        <el-col :span="12" class="products__item">
          <el-row type="flex">
            <el-col :span="10">
              <h3><span class="feedy">Feedy</span> <span class="products__feedy--type red">Red</span></h3>
            </el-col>
            <el-col :span="14" class="products__price tags">
              <span class="price-tag"><a href="javascript:void()">49 руб/кг</a></span>
            </el-col>
          </el-row>
          <div class="products__content">
            <p class="products__content--day">
              престрартер с 1 дня жизни
            </p>
            <p class="products__content--composition">
              Гранулированный престартер из экструдированных зерновых на основе соевого шрота
            </p>
            <p class="products__content--composition">
              <b>Состав: <br/></b>Соевый шрот, кукуруза экструдированная, горох экструдированный, рапсовый шрот, пшеница экструдированная, ячмень экструдированный, премикс, масло подсолнечное, пробиотик, ароматизатор.
            </p>
          </div>
        </el-col>

      </el-row>
      <el-row type="flex" class="" :gutter="0">
        <el-col :span="12" class="products__item">
          <el-row type="flex">
            <el-col :span="10">
              <h3><span class="feedy">Feedy</span> <span class="products__feedy--type green">Green</span></h3>
            </el-col>
            <el-col :span="14" class="products__price tags">
              <span class="price-tag"><a href="javascript:void()">39 руб/кг</a></span>
            </el-col>
          </el-row>
          <div class="products__content">
            <p class="products__content--day">
              престрартер с 1 дня жизни
            </p>
            <p class="products__content--composition">
              Гранулированный престартер на основе кукурузы и льняного шрота, включающий в себя экструдированный горох
            </p>
            <p class="products__content--composition">
              <b>Состав: <br/></b>Льняной шрот, кукуруза, соевый шрот, горох экструдированный, ячмень, пшеница, премикс, масло подсолнечное, ароматизатор.
            </p>
          </div>
        </el-col>
        <el-col :span="12" class="products__item">
          <el-row type="flex">
            <el-col :span="10">
              <h3><span class="feedy">Feedy</span> <span class="products__feedy--type start">Start</span></h3>
            </el-col>
            <el-col :span="14" class="products__price tags">
              <span class="price-tag"><a href="javascript:void()">32 руб/кг</a></span>
            </el-col>
          </el-row>
          <div class="products__content">
            <p class="products__content--day">
              стартер со 2 месяца
            </p>
            <p class="products__content--composition">
              Гранулированный стартер на основе ячменя и подсолнечного шрота, включающий в себя экструдированный горох
            </p>
            <p class="products__content--composition">
              <b>Состав: <br/></b>Подсолнечный шрот, ячмень, горох экструдированный, пшеница, премикс, масло подсолнечное, известняковая мука, ароматизатор.
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="" :gutter="0">
        <el-col :span="12" class="products__item">
          <el-row type="flex">
            <el-col :span="12">
              <h3><span class="feedy">Feedy</span> <span class="products__feedy--type standard">Standard</span></h3>
            </el-col>
            <el-col :span="12" class="products__price tags">
              <span class="price-tag"><a href="javascript:void()">28 руб/кг</a></span>
            </el-col>
          </el-row>
          <div class="products__content">
            <p class="products__content--day">
              стартер со 2 месяца
            </p>
            <p class="products__content--composition">
              Гранулированный стартер на основе ячменя и подсолнечного шрота, включающий в себя экструдированный горох
            </p>
            <p class="products__content--composition">
              <b>Состав: <br/></b>Ячмень, подсолнечный шрот, отруби пшеничные, горох экструдированный, дрожжи кормовые, премикс, известняковая мука, ароматизатор.
            </p>
          </div>
        </el-col>
        <el-col :span="12" class="products__item empty">
        </el-col>
      </el-row>
    </div>


    <!--el-row type="flex" class="section-content">
      <el-col :span="12" class="products__block">
        <h4 class="products__block--title">Feedy Green</h4>
        <div class="products__block--content">
          <el-row type="flex">
            <el-col :span="6" class="products__block--image">

            </el-col>
            <el-col :span="18" class="products__block--description">
              Соевый шрот, горох экструдированный, кукурузные хлопья, ячменные хлопья, пшеница экструдированная, ячмень экструдированный, рапсовый шрот, премикс, масло подсолнечное, пробиотик, ароматизатор.
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12" class="products__block">
      </el-col>
    </el-row-->
  </section>
</template>

<style lang="scss">
  .products {
    width: 1000px;

    &__item {
      background: #fefefe;
      padding: 0.5em;
      padding: 1em;
      margin: 0.5em;
      border-radius: 6px;
      &.empty {
        background: transparent;
      }
    }

    .feedy {
      font-size: 32px;
      line-height: 32px;
      vertical-align: middle;
      color: #555;
    }

    &__feedy--type {
      color: #fff;
      padding: 4px 6px;
      border-radius: 3px;
      font-size: 16px;
      font-weight: normal;
      padding: 6px 18px;
      opacity: 0.8;

    }
    &__content {
      padding-top: 10px;
      font-size: 12px;
      &--composition {
        text-align: justify;
        line-height: 1.6em;
        font-size: 12px;
        min-height: 60px;
      }
      &--day {
       margin:0 0 1em 0;
       font-size: 16px;
      }
    }


    /* Add rounded corners to right end of the anchor tag */
    .price-tag a {
      -moz-border-radius-bottomright: 4px;
      -webkit-border-bottom-right-radius: 4px;
      border-bottom-right-radius: 4px;
      -moz-border-radius-topright: 4px;
      -webkit-border-top-right-radius: 4px;
      border-top-right-radius: 4px;

      /* Position left and show only right border of triangle  */
      &:before {
      left: -15px;
      border-color: transparent #1f8dd6 transparent transparent;
      border-width: 15px 15px 15px 0;
      }

      /* Fix the circle between anchor box and triangle left to it  */
      &:after {
        left: -2px;
      }
    }

    .price-tag {
      position: absolute;
      right: -22px;
    }

    .tags a {
      float: left;
      position: relative;
      width: auto;
      height: 30px;
      margin-left: 20px;
      padding: 0 12px;
      background: #1f8dd6;
      color: #fff;
      font-weight: 600;
      text-decoration: none;
      font-size: 12px;
      line-height: 32px;
      opacity: 0.8;
    }

  .tags a:before {
      content: "";
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
    }

    .tags a:after {
      content: "";
      position: absolute;
      top: 13px;
      width: 4px;
      height: 4px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      background: #fff;
      -moz-box-shadow: -1px -1px 2px #004977;
      -webkit-box-shadow: -1px -1px 2px #004977;
      box-shadow: -1px -1px 2px #004977;
    }
  }

</style>
