<template>
  <section>
    <div class="list">
      <!--div class="prokorm">
        <h2><b>PRO</b>КОРМ</h2>
        <p>кормление животных</p>
      </div-->
      <div class="voerman">
        voerman
        <p>изделия из высокопрочного пластика</p>
      </div>
      <el-row type="flex">
        <el-col :span="12">
          <div class="voerman-item item-1">
            <div class="voerman-item--img">
              <img src="../static/20l.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>ВЕДРО 20 литров</h2>
              высокопрочный полиэтилена<br/>
              металлическая ручка 7 мм<br/>
              <h2 class="voerman-item--price">600 руб.</h2>
            </div>
          </div>
          <div class="voerman-item item-2">
            <div class="voerman-item--img">
              <img src="../static/12l.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>ВЕДРО 12 литров</h2>
              высокопрочный полиэтилена<br/>
              металлическая ручка 5 мм<br/>
              <h2 class="voerman-item--price">400 руб.</h2>
            </div>
          </div>
          <div class="voerman-item item-3">
            <div class="voerman-item--img">
              <img src="../static/12l.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>ВЕДРО 7 литров</h2>
              высокопрочный полиэтилена<br/>
              металлическая ручка 4 мм<br/>
              <h2 class="voerman-item--price">300 руб.</h2>
            </div>
          </div>

          <div class="voerman-item item-4">
            <div class="voerman-item--img">
              <img src="../static/Gereedschapsbak_geel_450px.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>ЯЩИК ДЛЯ ИНСТРУМЕНТОВ</h2>
              полипропилен<br/>
              алюминевая ручка
              <h2 class="voerman-item--price">800 руб.</h2>
            </div>
          </div>
          <div class="voerman-item item-5">
            <div class="voerman-item--img">
              <img src="../static/Garde_groot01_450px.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>ВЕНЧИК</h2>
              нержавеющая сталь<br/>
              16 прутков 2.3 мм
              <h2 class="voerman-item--price">800 руб.</h2>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="voerman-item item-6">
            <div class="voerman-item--img">
              <img src="../static/Voerschep_laag_ligroen_1477.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>КОРМОВОЙ СОВОК 1.5 литра</h2>
              полипропилен<br/>
              <h2 class="voerman-item--price">190 руб.</h2>
            </div>
          </div>
          <div class="voerman-item item-7">
            <div class="voerman-item--img">
              <img src="../static/Voerschep_hoog_rood_1510.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>МЕРНЫЙ СОВОК 1.5 литра</h2>
              полипропилен<br/>
              <h2 class="voerman-item--price">240 руб.</h2>
            </div>
          </div>
          <div class="voerman-item item-8">
            <div class="voerman-item--img">
              <img src="../static/Maatbeker_1L_transp_1998.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>КУВШИН 1 литр</h2>
              полипропилен<br/>
              <h2 class="voerman-item--price">170 руб.</h2>
            </div>
          </div>
          <div class="voerman-item item-9">
            <div class="voerman-item--img">
              <img src="../static/Maatbeker_5L_transp_met_1938.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>КУВШИН МЕРНЫЙ 1 литр</h2>
              полипропилен<br/>
              <h2 class="voerman-item--price">200 руб.</h2>
            </div>
          </div>

          <div class="voerman-item item-10">
            <div class="voerman-item--img">
              <img src="../static/Beker_groot_transp_2018-300x300.jpg" />
            </div>
            <div class="voerman-item--description">
              <h2>ИЗМЕРИТЕЛЬНАЯ ЧАША 550 мл.</h2>
              полипропилен<br/>
              <h2 class="voerman-item--price">100 руб.</h2>
            </div>
          </div>

        </el-col>
      </el-row>
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

  .list {
    font-family: 'Comfortaa', cursive;
    width: 150mm;
    height: 210mm;
    border: 1px solid #306390;
    margin: auto;
    .prokorm {
      color: #fefefe;
      width: 30mm;
      height: 30mm;
      background: #306390;
      text-align: center;
      font-size: 13px;
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
       font-size: 9px;
      }
    }
    .voerman {
      font-size: 72px;
      height: 30mm;
      /* display: inline-block; */
      color: #fefefe;
      background: #306390;
      font-family: 'Baloo Bhaijaan', cursive;
      text-align: center;
      /* width: 150mm; */
      padding-top: 10px;
      line-height: 20mm;
      p {
        font-family: 'Comfortaa', cursive;
        font-size: 14px;
        margin-top: -35px;
      }
    }

    .voerman-item {
      height: 30mm;
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;

      &--img {
        img {
          width: 26mm;
          height: 26mm;
        }
        width: 26mm;
        position: absolute;
        z-index: -1;

      }

      &--name {
        font-size: 10mm;
        width: 40%;
      }

      &--price {
        font-size: 6mm !important;
        text-align: right;
        margin-top: 8mm;
      }

      &--title {
        margin-bottom: 2mm;
      }
      &--description {
        font-size: 10px;
        padding: 5mm 3mm;
        line-height: 14px;
        text-align: right;
        h2 {
          font-size: 14px;
          color: #306390;
          margin-bottom: 1mm;
        }
      }

      &.item-1 {
        .voerman-item--price {
          margin-top: 4mm;
        }
        img {
          margin-top: 3mm;
          margin-left: 1mm;
        }
      }
      &.item-2 {
        .voerman-item--price {
          margin-top: 4mm;
        }
        img {
          margin-top: 3mm;
          margin-left: 1mm;
        }
      }
      &.item-3 {
        .voerman-item--price {
          margin-top: 4mm;
        }
        img {
          margin-top: 3mm;
          margin-left: 1mm;
        }
      }
      &.item-4 {
        .voerman-item--price {
          margin-top: 4mm;
        }
        img {
         width: 30mm;
          height: 30mm;
          margin-top: 5mm;
          margin-left: 2mm;
        }
      }
      &.item-5 {
        .voerman-item--price {
          margin-top: 4mm;
        }
        img {
         width: 30mm;
          height: 30mm;
          margin-top: 2mm;
          margin-left: 2mm
        }
      }
      &.item-6 {
        img {
         width: 36mm;
          height: 36mm;
          margin-top: 0mm;
        }
      }
      &.item-7 {
        img {
         width: 26mm;
          height: 26mm;
          margin-top: 5mm;
          margin-left: 1mm;
        }
      }
      &.item-8 {
        .img {
          z-index: -2;
        }
        img {
          width: 30mm;
          height: 30mm;
          margin-top: 0mm;
          margin-left: 0mm;
        }
      }
      &.item-9 {
        .img {
          z-index: -2;
        }
        img {
          width: 26mm;
          height: 26mm;
          margin-top: 5mm;
          margin-left: 1mm;
        }
      }
      &.item-10 {
        .img {
          z-index: -2;
        }
        img {
          width: 26mm;
          height: 26mm;
          margin-top: 5mm;
          margin-left: 1mm;
        }
      }
    }

    .footer {
      height: 30mm;
      background: #306390;
      color: #fefefe;
      text-align: center;
      padding: 4mm 3mm;
      p {
        font-size: 14px;
        margin: 4px 0 0px 0;

      }
      h2 {
        padding-top: 20px;
        font-size: 16px;
        font-weight: 200;
      }
    }
  }

</style>
