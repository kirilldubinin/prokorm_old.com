<template>
  <section>
    <div class="list">
      <div class="header">
        <el-row type="flex">
          <el-col :span="16">
            <div class="prokorm">
              <h2><b>PRO</b>КОРМ</h2>
              <p>feeding animals</p>
            </div>
          </el-col>
          <el-col class="title">
            <p class="title__main">
              Commercial offer for <b>Feedy</b> Green
            </p>
            <p class="title__sub">
              Cattle prestarter from first day of life
            </p>
          </el-col>
        </el-row>

      </div>
      <div class="offer">
        <h2 class="offer__name"></h2>
        <div class="offer__content composition">
          <h4>COMPOSITION</h4>
          <p>Soybean meal, extruded corn, extruded peas, linseed cake, extruded wheat, extruded barley, premix, sunflower oil, probiotic, flavoring</p>
          <div class="composition__item corn">
            <label for="">extruded corn</label>
          </div>
          <div class="composition__item peas">
            <label for="">extruded peas</label>
          </div>
          <div class="composition__item lin">
            <label for="">linseed cake</label>
          </div>
          <div class="composition__item wheat">
            <label for="">extruded wheat</label>
          </div>
          <div class="composition__item barley">
            <label for="">extruded barley</label>
          </div>
          <!--div class="composition__item corn">
            <span>extruded corn</span>
          </div-->
          <h4>INDICATORS (1 kg)</h4>
          <p>Soybean meal, extruded corn, extruded peas, linseed cake, extruded wheat, extruded barley, premix, sunflower oil, probiotic, flavoring</p>

          <div class="indicator__item">

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  @page {
    size: 210mm 297mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 210mm; // set appropriately
      height: 297mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 210mm;
    height: 297mm;
    margin: auto;
    background: #eaeaea;
    .prokorm {
      margin: 10mm auto;
      font-family: 'Comfortaa', cursive;
      width: 50mm;
      height: 50mm;
      color: #fff;
      background: #4d626f;
      text-align: center;
      h2 {
        font-size: 30px;
        font-weight: 100;
        text-align: center;
        padding-top: 70px;
        font-weight: 100;
        letter-spacing: 1px;
        padding-left: 1px;

        b {
        margin-right: 2px;
        font-weight: 900;
        letter-spacing: 2px;
        }

      }
      p {
        font-size: 16px;
        letter-spacing: 2px;
        margin-top: 1px;
      }
    }
    .title {
      font-size: 22px;
      color: #4d626e;
      margin-top: 38px;
      &__main {
        font-size: 24px;
        padding-bottom: 0.4em;
      }
      &__sub {
        font-size: 18px;
      }
    }

    .header {
      margin-bottom: 2em;
    }

    .offer {
      h2 {
        font-size: 20px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
      }
      &__content {
        margin: 1em 2em;
        color: #4d626e;

        h4 {
          margin: 2em 0 0.5em 0;
        }
        p {
          font-size: 14px;
          line-height: 18px;
          padding-bottom: 14px;
        }

        .composition__item {
          width: 141px;
          height: 141px;
          background-size: cover;
          background-repeat: no-repeat;
          display: inline-block;
          position: relative;
          label {
            position: absolute;
            bottom: 0px;
            background: #4d626e;
            width: 140px;
            color: #eaeaea;
            text-align: center;
            font-size: 11px;
            padding: 2px 0;
          }
          &.corn {
            background-image: url(../../static/feedy/red/feedy-red-4-min.png);
            background-position: -80px -20px;
            background-size: 300px;
          }
          &.peas {
            background-image: url(../../static/feedy/red/feedy-red-5-min.jpg);
            background-position: -80px -10px;
            background-size: 300px;
          }

          &.lin {
            background-image: url(../../static/feedy/red/feedy-red-8-min.jpg);
            background-position: -100px -10px;
            background-size: 300px;
          }
          &.wheat {
            background-image: url(../../static/feedy/red/feedy-red-7-min.jpg);
            background-position: -100px -10px;
            background-size: 300px;
          }
          &.barley {
            background-image: url(../../static/feedy/red/feedy-red-6-min.jpg);
            background-position: -100px -10px;
            background-size: 300px;
          }
        }
      }
    }
  }

</style>
