<template>
  <section>
    <div class="list">
      <div class="header">
        <div class="prokorm">
          <h2><b>PRO</b>КОРМ</h2>
          <p>кормление животных</p>
        </div>
        <div class="logo">

        </div>
      </div>
      <div class="offer">
        <h3 class="offer__product">ROXX</h3>
        <h2 class="offer__name">ЛИЗУНЕЦ ДЛЯ КОРОВ В ВЫСОКОПРОЧНОМ ВЕДРЕ</h2>
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
    size: 105mm 297mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 105mm; // set appropriately
      height: 297mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 105mm;
    height: 297mm;
    margin: auto;
    background: #eaeaea;
    padding: 2mm 4mm;
    .prokorm {
      margin: 0px auto;
      font-family: 'Comfortaa', cursive;
      width: 45mm;
      height: 45mm;
      color: #fff;
      background: #4d626f;
      text-align: center;
      h2 {
        font-size: 28px;
        font-weight: 100;
        text-align: center;
        padding-top: 60px;
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
        font-size: 13px;
        letter-spacing: 0.1px;
        margin-top: 0px;
      }
    }
    .address {
      font-size: 9px;
      line-height: 16px;
      padding-top: 46px;
      color: #4d626e;
    }

    .header {
    }

    .offer {
      margin: 1em 0;

      h2 {
        font-size: 12px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
        margin-bottom: 1em;
      }

      &__product {
        color: #4d626e;
        font-size: 42px !important;
        line-height: 40px;
        height: 40px;
        font-family: 'Baloo Bhaijaan', cursive;
        text-align: center;
        display: block;
        margin-bottom: 12px;
      }

      &__content {
        font-size: 12px;
        ul, li {
          list-style-type: none;


        }
        li {
          padding: 3px 0;
        };
      }
    }
  }

</style>
