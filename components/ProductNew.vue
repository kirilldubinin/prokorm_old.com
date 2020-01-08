<template>
  <section class="product" :id="id">
    <el-row type="flex" :gutter="0"  class="product__item">
      <el-col :span="16" class="product__item--content">
        <el-row type="flex">
          <el-col :span="10">
            <h3>
              <span class="product__item--type">{{type}}</span>
              <span class="product__item--name"
                :style="{backgroundColor: nameBackground}">
                {{name}}
              </span>
            </h3>
          </el-col>
        </el-row>
        <div class="product__item--description">
          <p class="product__item--short">
            {{short}}
          </p>
          <p class="product__item--full" v-html="full">
          </p>
          <p v-if="weight" class="product__item--weight">
            <b>Вес</b> {{weight}}
          </p>
          <p class="product__item--indicators">
            <b>Показатели в 1 кг: <br/></b>{{indicators}}
          </p>
          <p class="products__item--composition">
            <b>Состав: <br/></b>{{composition}}
          </p>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  props: [
    'id',
    'type',
    'name',
    'nameBackground',
    'weight',
    'short',
    'full',
    'composition',
    'indicators',
    'images',
    'imageHeight'
  ],
  data() {
    return {
      navItems: [
        {
          img: '_nuxt/static/cow_face_1.svg',
          title: 'коровы',
          code: 'cow'
        },
        {
          img: '_nuxt/static/tuna.svg',
          title: 'рыбы',
          code: 'fish'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .product {
    padding: 4em 0;
    &__item {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      &--content {
        padding: 0 2em;
      }

      &--type {
        font-size: 32px;
        line-height: 32px;
        vertical-align: middle;
        color: #555;
        font-family: 'Baloo Bhaijaan', cursive;
        font-weight: normal;
        margin-right: 0.4em;
      }

      &--name {
        background: #4d626f;
        color: #fff;
        border-radius: 3px;
        font-size: 16px;
        font-weight: normal;
        padding: 6px 18px;
        opacity: 0.8;
      }

      &--price {
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
        font-size: 12px;
        line-height: 20px;
      }

      &--short {
        font-size: 16px;
        padding: 1em 0 1em 0;
      }

      &--weight {
        font-size: 12px;
        padding-top: 1em;
      }

      &--indicators {
        font-size: 12px;
        padding: 2em 0;
      }

      &--composition {
        font-size: 12px;
        padding: 0.5em 0;
      }
    }
  }

</style>
