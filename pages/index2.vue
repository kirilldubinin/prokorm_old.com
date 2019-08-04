<template>
  <section class="index">
    <el-row class="index__header">
      <el-col :span="8">
        8 800 550 28 27
      </el-col>
      <el-col :span="8">
        <div class="prokorm">
          <h2><b>PRO</b>КОРМ</h2>
          <p>кормление животных</p>
        </div>
      </el-col>
      <el-col :span="8" class="index__navigator">
        <el-row justify="space-between">
          <el-col v-for="item in navItems" :key="item.code" class="index__navigator--item">
            <img :src="item.img" />
            {{item.title}}
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <section class="index__main">
      <h2 class="index__main--header cow">
        ПРОДУКТЫ ДЛЯ КОРОВ
      </h2>
      <h3>
        ПРЕСТАРТЕРЫ
      </h3>
      <Product v-for="item in feedy.items" :key="item.code" v-bind="item" />

      <h3>
        ЛИЗУНЦЫ
      </h3>
      <Product v-for="item in roxx.items" :key="item.code" v-bind="item" />

    </section>
  </section>
</template>

<script>
import Product from '../components/Product'
export default {
  components: {
    Product
  },
  data() {
    return {
      navItems: [
        {
          img: 'cow_face_1.svg',
          title: 'коровы',
          code: 'cow'
        },
        {
          img: 'tuna.svg',
          title: 'рыбы',
          code: 'fish'
        }
      ],
      feedy: {
        items: [{
          id: 'muesli',
          img: 'feedy.jpg',
          type: 'Feedy',
          name: 'Muesli',
          price: '59 руб/кг',
          short: 'престрартер с 1 дня жизни',
          full: 'Гранулированный престартер из экструдированных зерновых с кукурузными и ячменными хлопьями на основе соевого шрота',
          indicators: 'Сырой протеин - 22%, Обменная энергия 11.5МДж',
          composition: 'Соевый шрот, горох экструдированный, кукурузные хлопья, ячменные хлопья, пшеница экструдированная, ячмень экструдированный, рапсовый шрот, премикс, масло подсолнечное, пробиотик, ароматизатор.'
        }, {
          id: 'red',
          img: 'feedy.jpg',
          type: 'Feedy',
          name: 'Red',
          price: '49 руб/кг',
          short: 'престрартер с 1 дня жизни',
          full: 'Гранулированный престартер из экструдированных зерновых на основе соевого шрота',
          composition: 'Соевый шрот, кукуруза экструдированная, горох экструдированный, рапсовый шрот, пшеница экструдированная, ячмень экструдированный, премикс, масло подсолнечное, пробиотик, ароматизатор.'
        }]
      },
      roxx: {
        items: [{
          id: 'standard',
          img: 'feedy.jpg',
          type: 'ROXX',
          name: 'standard',
          price: '1700 руб',
          short: 'для дойных коров и бычков на откорме',
          full: 'Лизунец на основе патоки и витаминно-минерального комплекса в высокопрочном ведре, масса 25 кг',
          indicators: 'Кальций – 12,0%, Фосфор – 4,0%, Натрий – 6,0%, Магний – 6,0%, Массовая доля влаги (макс.) – 14,0%, Витамин А – 100 000,0 М.Е., Витамин D3 – 10 000,0 М.Е., Витамин Е – 800,0 мг.',
          composition: 'Патока, витаминно-минеральный премикс, карбонат кальция, монокальцийфосфат, пшеничные отруби мелкоизмельченные, хлорид натрия, оксид магния.'
        }]
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  body,
  html {
    background: #fefefe;
    font-family: 'Montserrat', cursive;
    color: #2f333e;
    max-width: 1000px;
    margin: auto;
  }

  .prokorm {
    margin: auto;
    font-family: 'Comfortaa', cursive;
    width: 200px;
    height: 200px;
    color: #fff;
    background: #4d626f;
    text-align: center;
    h2 {
      font-size: 34px;
      font-weight: 100;
      text-align: center;
      padding-top: 74px;
      font-weight: 100;

      b {
        margin-right: 6px;
        font-weight: 900;
      }

    }
    p {
      font-size: 15px;
    margin-top: -4px;
    letter-spacing: 0.2px;
    }
  }

  .index {
    padding-top: 2em;
    &__header {
      ul, li {
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        li {
          line-height: 40px;
          img {
            width: 40px;
          }
        }
      }
    }
    &__navigator {
      &--item {
        text-align: center;
        cursor: pointer;
        width: 100px;
        padding: 12px 20px;
        border: 1px solid #4d626e;
        margin: 0 10px;
        border-radius: 3px;
        font-size: 12px;
        img {
          display: block;
          width: 100%;
          margin-bottom: 10px;
          height: 40px;
        }
      }
    }

    &__main {
      margin: 4em 0;
      color: #4d626e;
      &--header {
        background: #4d626e;
        padding: 1em 0;
        text-align: center;
        color: #fefefe;
        margin: 0 0 2em;
        img {
          width: 60px;
        }
      }
    }
  }

</style>
