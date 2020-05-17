<template>
  <section>
    <div class="list">
      <el-row type="flex" class="header">
        <el-col :span="6">
          <div class="prokorm">
            <h2><b>PRO</b>КОРМ</h2>
            <p>кормление животных</p>
          </div>
        </el-col>
        <el-col class="header__title">
          <h3 class="header__product">ROXX</h3>
          <h2 class="header__name">ЛИЗУНЕЦ ДЛЯ КОРОВ В ВЫСОКОПРОЧНОМ ВЕДРЕ</h2>

          <p class="cmp">ООО "ПРОКОРМ"&nbsp;&nbsp;&nbsp;8 800 550 28 27</p>
          <p></p>
        </el-col>
      </el-row>
      <div class="offer">
        <div class="offer__content">
          <ProductShort v-bind="roxx.standard" />
          <ProductShort v-bind="roxx.prenatal" />
          <ProductShort v-bind="roxx.menthol" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import roxx from '../../data/roxx.json'
import ProductLabel from '../../components/ProductLabel'
import ProductShort from '../../components/ProductShort'
export default {
  components: {
    ProductLabel,
    ProductShort
  },
  data() {
    return {
      roxx: roxx
    }
  },
  methods: {}
}
</script>

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
    padding: 2mm 5mm;
    .prokorm {
      font-family: 'Comfortaa', cursive;
    width: 45mm;
    height: 45mm;
    color: #fff;
    background: #4d626f;
    text-align: center;
    margin-left: 22px;
      h2 {
        color: #fff !important;
    font-size: 29px !important;
    font-weight: 100;
    text-align: center;
    padding-top: 60px;
    font-weight: 100;
    letter-spacing: 0px;
    padding-left: 1px;

        b {
          margin-right: 2px;
          font-weight: 900;
          letter-spacing: 2px;
        }

      }
      p {
        color: #fff;
        font-size: 13px;
        letter-spacing: 0.1px;
        margin: 0 !important;
      }
    }
    .header {
      padding: 4mm 0;

      &__title {
        text-align: center;
      }

      .cmp {
        color: #4d626e;
        font-size: 12px;
        margin-top: 16px;
        opacity: 0.6;
      }

      &__product {
        font-family: 'Baloo Bhaijaan', cursive;
        color: #4d626e;
        font-size: 80px;
        line-height: 80px;
        height: 80px;
      }

      &__name {
        font-size: 18px;
        font-weight: 100;
        color: #4d626e;
        padding-top: 12px;
      }
    }
  }

</style>
