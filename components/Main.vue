<template>
  <section class="main" v-bind:class="{ 'minify': minify }">
    <h2 class="main__section-name">
      ПРОДУКТЫ ДЛЯ КОРОВ
    </h2>
    <el-tabs>
      <el-tab-pane label="ТЕЛЯТА" name="first">
        <el-row type="flex" v-for="item in calf.feedy.items" :key="item.id">
          <el-col :span="24" class="product">
            <ProductLabel class="product__label" :name="item.name" :type="item.type" :description="item.short"/>
            <div class="product__full">
              <p>{{item.full}}</p>
            </div>
            <div class="product__indicators">
              <p><b>Показатели в 1 кг:</b></p>
              <p>{{item.indicators}}</p>
            </div>
            <div class="product__indicators">
              <p><b>Состав:</b></p>
              <p>{{item.composition}}</p>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="ДОЙНЫЕ" name="second">Config</el-tab-pane>
      <el-tab-pane label="ОТКОРМ" name="third">Role</el-tab-pane>
      <el-tab-pane label="СИЛОСОВАНИЕ" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import ProductLabel from '../components/ProductLabel'
export default {
  components: {
    ProductLabel
  },
  data() {
      return {
        minify: false,
        calf: {
          feedy: {
            items: [{
              id: 'red',
              images: [
                'feedy/red/feedy-red-1-min.png',
                'feedy/red/feedy-red-2-min.png',
                'feedy/red/feedy-red-3-min.png',
                'feedy/red/feedy-red-4-min.png',
                'feedy/red/feedy-red-5-min.jpg',
                'feedy/red/feedy-red-6-min.jpg',
                'feedy/red/feedy-red-7-min.jpg',
                'feedy/red/feedy-red-8-min.jpg'
              ],
              type: 'RED',
              name: 'Feedy',
              nameBackground: '#f13434',
              price: '49 руб/кг',
              short: 'престрартер с 1 дня жизни',
              full: 'Гранулированный престартер из экструдированных зерновых на основе соевого шрота',
              indicators: 'Сырой протеин 22%, Обменная энергия 11.5МДж, Витамин А 20 000.0 M.E. , Цинк 360.0 мг,  Витамин Е 160.0 мг, Марганец 200.0 мг',
              composition: 'Соевый шрот, кукуруза экструдированная, горох экструдированный, льняной жмых, пшеница экструдированная, ячмень экструдированный, премикс, масло подсолнечное, пробиотик, ароматизатор.'
            }, {
              id: 'green',
              images: [
                'feedy/green/feedy-green-1-min.png',
                'feedy/green/feedy-green-2-min.png',
                'feedy/green/feedy-green-3-min.png',
                'feedy/red/feedy-red-5-min.jpg',
              ],
              type: 'Green',
              name: 'Feedy',
              nameBackground: '#2f6728',
              price: '39 руб/кг',
              short: 'престрартер с 1 дня жизни',
              full: 'Гранулированный престартер на основе кукурузы и льняного шрота, включающий в себя экструдированный горох',
              indicators: 'Сырой протеин 21%, Обменная энергия 11.5МДж, Витамин А 20 000.0 M.E., Цинк 360.0 мг, Витамин Е 160.0 мг, Марганец 200.0 мг',
              composition: 'Льняной жмых, кукуруза, соевый шрот, горох экструдированный, ячмень, пшеница, премикс, масло подсолнечное, известняковая мука, ароматизатор.'
            }, {
              id: 'start',
              images: [
                'feedy/start/feedy-start-1-min.png',
                'feedy/start/feedy-start-2-min.png',
                'feedy/start/feedy-start-3-min.png'
              ],
              type: 'Start',
              name: 'Feedy',
              nameBackground: '#2f79d2',
              price: '32 руб/кг',
              short: 'престрартер с 1 дня жизни',
              full: 'Гранулированный стартер на основе ячменя и подсолнечного шрота, включающий в себя экструдированный горох',
              indicators: 'Сырой протеин 20%, Обменная энергия 11.0МДж, Витамин А 15 000.0 M.E., Цинк 270.0 мг, Витамин Е 120.0 мг, Марганец 150.0 мг',
              composition: 'Подсолнечный шрот, ячмень, горох экструдированный, пшеница, премикс, масло подсолнечное, известняковая мука, ароматизатор.'
            }, {
              id: 'standard',
              images: [
                'feedy/standard/feedy-standard-1-min.png',
                'feedy/standard/feedy-standard-2-min.png',
                'feedy/standard/feedy-standard-3-min.png'
              ],
              type: 'Standard',
              name: 'Feedy',
              nameBackground: '#444',
              price: '28 руб/кг',
              short: 'стартер со 2 месяца',
              full: 'Гранулированный стартер на основе ячменя и подсолнечного шрота, включающий в себя экструдированный горох',
              indicators: 'Сырой протеин 19%, Витамин А 10 000.0 M.E., Цинк 180.0 мг, Обменная энергия 10.5МДж, Витамин Е 80.0 мг, Марганец 100.0 мг',
              composition: 'Ячмень, подсолнечный шрот, отруби пшеничные, горох экструдированный, дрожжи кормовые, премикс, известняковая мука, ароматизатор.'
            }]
          }
        }
      }
    },
    methods: {
      handleScroll () {
        this.minify = window.scrollY > 0;
      }
    },
    created () {
      if (process.browser) {
          window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
        if (process.browser) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}
</script>

<style lang="scss">
  @import "~/styles/variables.scss";

  .toll {
    height: 1000px;;
  }

  .product {
    font-size: 11px;

    &__full {
      margin-top: 1em;
    }
    &__indicators {
      margin: 1em 0;
    }
  }

  .main {
    margin: 27em 0 0 0;
    color: #4d626e;
    &__section-name {
      background: #4d626e;
      padding: 1em 0;
      text-align: center;
      color: #fefefe;
      z-index: 1000;
      opacity: 0.9;
    }
    &.minify {
      margin: 24em 0 0 0;
      .main__section-name {
        position: fixed;
        width: 1000px;
        top: 11em;
      }

      .el-tabs__header {
        position: fixed;
        z-index: 1000;
        background: #fefefe;
        top: 21em;
        width: 1000px;
        padding-top: 1em;
      }
      .el-tabs__content {
        padding-top: 10em;
      }
    }
  }
</style>
