<template>
  <section>
    <div class="list">
      <!--div class="prokorm">
        <h2><b>PRO</b>КОРМ</h2>
        <p>кормление животных</p>
      </div-->
      <div class="roxx">
        <h2>Feedy</h2>
        <p>гранулированный комбикорм для телят</p>
      </div>
      <div class="roxx-item">
        <div>
          <h2 class="w-50 roxx-item--name">muesli</h2>
          <h2 class="w-50 roxx-item--price">59 руб/кг</h2>
        </div>
        <p class="roxx-item--description">
          Соевый шрот, горох экструдированный, кукурузные
          хлопья, ячменные хлопья, пшеница экструдированная,
          ячмень экструдированный, рапсовый шрот, премикс,
          масло подсолнечное, пробиотик, ароматизатор.
        </p>
        <p class="roxx-item--description">
          <el-row type="flex">
            <el-col :span="10"><b>Сырой протеин 22%</b></el-col>
            <el-col :span="10"><b>Витамин А 20 000.0 M.E.</b></el-col>
            <el-col :span="10"><b>Цинк 360.0 мг</b></el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="10"><b>Обменная энергия 11.5МДж</b></el-col>
            <el-col :span="10"><b>Витамин Е 160.0 мг</b></el-col>
            <el-col :span="10"><b>Марганец 200.0 мг</b></el-col>
          </el-row>
        </p>
      </div>

      <div class="roxx-item red">
        <div>
          <h2 class="w-50 roxx-item--name">red</h2>
          <h2 class="w-50 roxx-item--price">49 руб/кг</h2>
        </div>
        <p class="roxx-item--description">
          Соевый шрот, кукуруза экструдированная, горох
          экструдированный, рапсовый шрот, пшеница
          экструдированная, ячмень экструдированный, премикс,
          масло подсолнечное, пробиотик, ароматизатор.
        </p>
        <p class="roxx-item--description">
          <el-row type="flex">
            <el-col :span="10"><b>Сырой протеин 22%</b></el-col>
            <el-col :span="10"><b>Витамин А 20 000.0 M.E.</b></el-col>
            <el-col :span="10"><b>Цинк 360.0 мг</b></el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="10"><b>Обменная энергия 11.5МДж</b></el-col>
            <el-col :span="10"><b>Витамин Е 160.0 мг</b></el-col>
            <el-col :span="10"><b>Марганец 200.0 мг</b></el-col>
          </el-row>
        </p>
      </div>

      <div class="roxx-item green">
        <div>
          <h2 class="w-50 roxx-item--name">green</h2>
          <h2 class="w-50 roxx-item--price">39 руб/кг</h2>
        </div>
        <p class="roxx-item--description">
          Льняной жмых, кукуруза, соевый шрот, горох
          экструдированный, ячмень, пшеница, премикс, масло
          подсолнечное, известняковая мука, ароматизатор.
        </p>
        <p class="roxx-item--description">
          <el-row type="flex">
            <el-col :span="10"><b>Сырой протеин 21%</b></el-col>
            <el-col :span="10"><b>Витамин А 20 000.0 M.E.</b></el-col>
            <el-col :span="10"><b>Цинк 360.0 мг</b></el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="10"><b>Обменная энергия 11.5МДж</b></el-col>
            <el-col :span="10"><b>Витамин Е 160.0 мг</b></el-col>
            <el-col :span="10"><b>Марганец 200.0 мг</b></el-col>
          </el-row>
        </p>
      </div>

      <div class="roxx-item start">
        <div>
          <h2 class="w-50 roxx-item--name">start</h2>
          <h2 class="w-50 roxx-item--price">32 руб/кг</h2>
        </div>
        <p class="roxx-item--description">
          Подсолнечный шрот, ячмень, горох экструдированный,
          пшеница, премикс, масло подсолнечное, известняковая
          мука, ароматизатор.
        </p>
        <p class="roxx-item--description">
          <el-row type="flex">
            <el-col :span="10"><b>Сырой протеин 20%</b></el-col>
            <el-col :span="10"><b>Витамин А 15 000.0 M.E.</b></el-col>
            <el-col :span="10"><b>Цинк 270.0 мг</b></el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="10"><b>Обменная энергия 11.0МДж</b></el-col>
            <el-col :span="10"><b>Витамин Е 120.0 мг</b></el-col>
            <el-col :span="10"><b>Марганец 150.0 мг</b></el-col>
          </el-row>
        </p>
      </div>

      <div class="roxx-item standard">
        <div>
          <h2 class="w-50 roxx-item--name">standard</h2>
          <h2 class="w-50 roxx-item--price">28 руб/кг</h2>
        </div>
        <p class="roxx-item--description">
          Ячмень, подсолнечный шрот, отруби пшеничные, горох
          экструдированный, дрожжи кормовые, премикс,
          известняковая мука, ароматизатор.
        </p>
        <p class="roxx-item--description">
          <el-row type="flex">
            <el-col :span="10"><b>Сырой протеин 19%</b></el-col>
            <el-col :span="10"><b>Витамин А 10 000.0 M.E.</b></el-col>
            <el-col :span="10"><b>Цинк 180.0 мг</b></el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="10"><b>Обменная энергия 10.5МДж</b></el-col>
            <el-col :span="10"><b>Витамин Е 80.0 мг</b></el-col>
            <el-col :span="10"><b>Марганец 100.0 мг</b></el-col>
          </el-row>
        </p>
      </div>

      <div class="footer">
        <h1>ООО "ПРОКОРМ"</h1>
        <p>кормление животных</p>
        <h2>8 800 550 28 27, sales@prokorm.com</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  @page {
    size: 150mm 210mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 150mm; // set appropriately
      height: 210mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 150mm;
    height: 210mm;
    border: 1px solid #fefefe;
    background: #306390;
    .prokorm {
      color: #fefefe;
      width: 30mm;
      height: 30mm;
      background: #306390;
      text-align: center;
      font-size: 3.4mm;
      /* display: inline-block; */
      border-right: 1px solid #fefefe;
      float: left;
      h2 {
        padding-top: 10mm;
        font-weight: 100;
        b {
          margin-right: 0.8mm;
        }
      }
      p {
        font-size: 2.3mm;
      }
    }
    .roxx {

      height: 30mm;
      /* display: inline-block; */
      color: #fefefe;
      background: #306390;
      font-family: 'Baloo Bhaijaan', cursive;
      text-align: center;
      h2 {
        font-size: 80px;
    line-height: 80px;
    letter-spacing: 3px;
    font-weight: 200;
      }
      p {
        font-family: 'Comfortaa', cursive;
    font-size: 20px;
      }
    }

    .roxx-item {
          padding: 8px 12px;
    height: 113px;
    background: #f98c06;
    color: #ffffff;
    z-index: -1;
    opacity: 0.9;

      &--name {
        font-size: 24px;
        width: 60mm;
      }
      &--title {
        margin: 0 0 3px 0px;
        font-size: 16px;
      }
      &--price {
        font-size: 6mm;
        text-align: right;
        width: 80mm;
      }


      &--description {
        font-size: 9px;
        padding: 6px 0 4px 0;
        line-height: 14px;
      }
    }

    .footer {
      background: #306390;
      color: #fefefe;
      text-align: center;
      padding: 4mm 0 2mm 0;
      p {
        font-size: 18px;
        margin: 6px 0 16px 0;
        line-height: 1;
      }
      h2 {
        font-size: 16px;
        font-weight: 200;
      }
    }

    .red {
      background: #f13434;
    }
    .green {
      background: #2f6728;
    }

    .start {
      background: #2f79d2;
    }

     .standard {
      background: #545454;
    }
  }

</style>
