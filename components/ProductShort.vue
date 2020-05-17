<template>
  <section class="product-short">
    <div class="product__item">
      <el-row type="flex"  class="product__item--header">
        <el-col :span="16">
          <h3>
            <span class="product__item--name">{{name}}</span>
            <span v-bind:style="{background: backgroundColor}" class="product__item--type">{{type}}</span>
          </h3>
        </el-col>
        <el-col :span="8" class="product__item--price" v-html="price">
        </el-col>
      </el-row>
      <div class="product__item--content">
        <p class="product__item--full">{{full}}</p>
        <p class="product__item--act" v-if="act">
          <b>Действие:</b>
          {{act}}
        </p>
        <p class="product__item--indicators" v-if="indicatorsShort">
          <b>Показатели:</b>
          {{indicatorsShort}}
        </p>
        <p class="product__item--application" v-if="application">
          <b>Применение:</b>
          {{application}}
        </p>
        <p class="product__item--composition">
          <b>Состав:</b>
          {{composition}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'id',
    'backgroundColor',
    'name',
    'type',
    'price',
    'short',
    'full',
    'indicatorsShort',
    'indicators',
    'composition',
    'act',
    'application'
  ],
}
</script>

<style lang="scss">

  $red: rgb(241, 52, 52);
  $green: rgb(47, 103, 40);
  $start: rgb(47, 121, 210);
  $standard: rgb(68, 68, 68);

  .product {

    &__item {
      background: #fefefe;
      padding: 1em;
      margin: 1em 0;
      border-radius: 6px;
      font-size: 10px;
      color: #4d626e;
      &.empty {
        background: transparent;
      }

      &--header {
        margin-bottom: 1em;
      }

      &--content {
        p {
          text-align: justify;
          line-height: 16px;
        }
      }

      &--type {
        background: #4d626f;
        color: #fff;
        border-radius: 3px;
        font-size: 16px;
        font-weight: normal;
        padding: 6px 12px;
        opacity: 0.7;
        display: inline-block;
        min-width: 60px;
        text-align: center;
        min-width: 110px;
      }

      &--name {
        font-size: 26px;
        line-height: 16px;
        height: 16px;
        vertical-align: middle;
        color: #4d626e;
        font-family: 'Baloo Bhaijaan', cursive;
        font-weight: normal;
        margin-right: 0.4em;
      }

      &--price {
        text-align: right;
        vertical-align: middle;
        padding-top: 10px;
        font-size: 12px;
        .price-tag {
          position: absolute;
          right: -22px;
          a {
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
              content: "";
              position: absolute;
              top: 0;
              width: 0;
              height: 0;
              border-style: solid;
            }

            /* Fix the circle between anchor box and triangle left to it  */
            &:after {
              left: -2px;
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
        }
      }

      &--description {
      }

      &--short {
        font-size: 16px;
        line-height: 28px;
      }

      &--weight {
        font-size: 12px;
        padding-top: 1em;
      }

      &--indicators {
        font-size: 10px;
        line-height: 14px;
        margin: 2px 0px;
      }

      &--composition {
        font-size: 10px;
        line-height: 14px;
      }
    }
  }

</style>
