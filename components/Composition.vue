<template>
  <section class="composition" id="composition">
    <h2 class="section-title">ПРОДУКТЫ</h2>
    <div class="section-content">
      <el-row  type="flex" class="title-row">
        <el-col :span="4">
        </el-col>
        <el-col :key="feed.name" v-for="feed in feeds" :span="5">
          <span class="feedy-type" :class="feed.name.toLowerCase()">
            {{feed.name}}
          </span>
        </el-col>
      </el-row>
      <el-row type="flex">
        <!-- PROPERTY -->
        <el-col :span="4">
          <h4>Тип</h4>
          <h4 class="composition">Состав</h4>
          <h4>Показатели</h4>
          <el-row :key="indicator" v-for="indicator in indicators" type="flex" class="composition-row">
            <el-col :span="24">
              {{indicator}}
            </el-col>
          </el-row>
          <h4>Макроэлементы</h4>
          <el-row :key="macronutrient" v-for="macronutrient in macronutrients" type="flex" class="composition-row">
            <el-col :span="24">
              {{macronutrient}}
            </el-col>
          </el-row>
          <h4>Микроэлементы</h4>
          <el-row :key="micronutrient" v-for="micronutrient in micronutrients" type="flex" class="composition-row">
            <el-col :span="24">
              {{micronutrient}}
            </el-col>
          </el-row>

          <h4>Витамины</h4>
          <el-row :key="vitamin" v-for="vitamin in vitamins" type="flex" class="composition-row">
            <el-col :span="24">
              {{vitamin}}
            </el-col>
          </el-row>
        </el-col>

        <el-col :key="feed.name" v-for="feed in feeds" :span="5">
          <h4 class="weight-normal">{{feed.type}}</h4>
          <h4 class="composition weight-normal">{{feed.composition}}</h4>
          <h4>&nbsp;</h4>
          <el-row :key="index + indicator" v-for="(indicator, index) in feed.indicators" type="flex" class="composition-row">
            <el-col :span="24">
              {{indicator}}
            </el-col>
          </el-row>
          <h4>&nbsp;</h4>
          <el-row :key="index + macronutrient" v-for="(macronutrient, index) in feed.macronutrients" type="flex" class="composition-row">
            <el-col :span="24">
              {{macronutrient}}
            </el-col>
          </el-row>
          <h4>&nbsp;</h4>
          <el-row :key="index + micronutrient" v-for="(micronutrient, index) in feed.micronutrients" type="flex" class="composition-row">
            <el-col :span="24">
              {{micronutrient}}
            </el-col>
          </el-row>
          <h4>&nbsp;</h4>
          <el-row :key="index + vitamin" v-for="(vitamin, index) in feed.vitamins" type="flex" class="composition-row">
            <el-col :span="24">
              {{vitamin}}
            </el-col>
          </el-row>
        </el-col>

      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      indicators:[
        'Сырой протеин',
        'Сырая клетчатка',
        'Сырой жир',
        'Сырая зола',
        'Обменная энергия'
      ],
      macronutrients: [
        'Кальций',
        'Фосфор',
        'Натрий',
        'Магний',
        'Сера'
      ],
      micronutrients: [
        'Цинк',
        'Марганец',
        'Железо',
        'Медь',
        'Йод',
        'Кобальт',
        'Селен'
      ],
      vitamins: [
        'Витамин А',
        'Витамин D3',
        'Витамин Е',
        'Витамин В1',
        'Витамин В2',
        'Никотиновая кислота',
        'Пантотеновая кислота',
        'Витамин В6',
        'Биотин',
        'Витамин В12'
      ],
      feeds: [
        {
          name: 'Muesli',
          type: 'престрартер, с 1 дня',
          composition:
            `Соевый шрот, горох экструдированный, кукурузные хлопья, ячменные хлопья, пшеница экструдированная,
            ячмень экструдированный, рапсовый шрот, премикс,
            масло подсолнечное, пробиотик, ароматизатор.`,
          indicators:[
            '22%',
            '7.0%',
            '4.5%',
            '4.0%',
            '11.5МДж'
          ],
          macronutrients: [
            '1.0%',
            '0.5%',
            '0.5%',
            '0.4%',
            '0.2%'
          ],
          micronutrients: [
            '360.0мг',
            '200.0мг',
            '180.0мг',
            '60.0мг',
            '6.0мг',
            '40.0мг',
            '1.2мг'
          ],
          vitamins: [
            '20 000.0ME',
            '2 000.0ME',
            '160.0мг',
            '3.2мг',
            '1.6мг',
            '48.0мг',
            '3.2мг',
            '0.8мг',
            '2 000мкг',
            '12мкг'
          ]
        },
        {
          name: 'Red',
          type: 'престрартер, с 1 дня',
          composition:
            `Соевый шрот, кукуруза экструдированная, горох
            экструдированный, рапсовый шрот, пшеница
            экструдированная, ячмень экструдированный, премикс,
            масло подсолнечное, пробиотик, ароматизатор.`,
          indicators:[
            '22%',
            '7.0%',
            '4.5%',
            '4.0%',
            '11.5МДж'
          ],
          macronutrients: [
            '1.2%',
            '0.6%',
            '0.5%',
            '0.4%',
            '0.2%'
          ],
          micronutrients: [
            '360.0мг',
            '200.0мг',
            '180.0мг',
            '60.0мг',
            '6.0мг',
            '4.0мг',
            '1.2мг'
          ],
          vitamins: [
            '20 000.0ME',
            '2 000.0ME',
            '160.0мг',
            '3.2мг',
            '1.6мг',
            '48.0мг',
            '3.2мг',
            '0.8мг',
            '2 000мкг',
            '12мкг'
          ]
        },
        {
          name: 'Green',
          type: 'престрартер, с 1 дня',
          composition:
            `Подсолнечный шрот, кукуруза, соевый шрот, горох
            экструдированный, ячмень, пшеница, премикс, масло
            подсолнечное, ароматизатор.`,
          indicators:[
            '21%',
            '8.0%',
            '4.5%',
            '5.0%',
            '11.5МДж'
          ],
          macronutrients: [
            '0.9%',
            '0.5%',
            '0.4%',
            '0.4%',
            '0.2%'
          ],
          micronutrients: [
            '270.0мг',
            '150.0мг',
            '135.0мг',
            '45.0мг',
            '4.5мг',
            '3.0мг',
            '0.9мг'
          ],
          vitamins: [
            '15 000.0ME',
            '1 500.0ME',
            '120.0мг',
            '2.4мг',
            '1.2мг',
            '36.0мг',
            '2.4мг',
            '0.6мг',
            '1 500мкг',
            '9.0мкг'
          ]
        },
        {
          name: 'Start',
          type: 'страртер, со 2 месяца',
          composition:
            `Подсолнечный шрот, ячмень, горох экструдированный,
            пшеница, премикс, масло подсолнечное, известняковая
            мука, ароматизатор.`,
          indicators:[
            '20.0%',
            '8.0%',
            '4.5%',
            '6.0%',
            '11.0МДж'
          ],
          macronutrients: [
            '1.2%',
            '0.6%',
            '0.3%',
            '0.4%',
            '0.2%'
          ],
          micronutrients: [
            '270.0мг',
            '150.0мг',
            '135.0мг',
            '45.0мг',
            '4.5мг',
            '3.0мг',
            '0.9мг'
          ],
          vitamins: [
            '15 000.0ME',
            '1 500.0ME',
            '120.0мг',
            '2.4мг',
            '1.2мг',
            '36.0мг',
            '1.6мг',
            '0.6мг',
            '1 500мкг',
            '9.0мкг'
          ]
        },
        {
          name: 'Standard',
          type: 'страртер, со 2 месяца',
          composition:
            `Ячмень, подсолнечный шрот, отруби пшеничные, горох
            экструдированный, дрожжи кормовые, премикс,
            известняковая мука, ароматизатор.`,
          indicators:[
            '19.0%',
            '10.0%',
            '4.5%',
            '6.0%',
            '10.5МДж'
          ],
          macronutrients: [
            '1.3%',
            '0.7%',
            '0.2%',
            '0.4%',
            '0.2%'
          ],
          micronutrients: [
            '180.0мг',
            '100.0мг',
            '90.0мг',
            '30.0мг',
            '3.0мг',
            '2.0мг',
            '0.6мг'
          ],
          vitamins: [
            '10 000.0ME',
            '1 000.0ME',
            '80.0мг',
            '1.6мг',
            '0.8мг',
            '24.0мг',
            '1.6мг',
            '0.4мг',
            '1 000мкг',
            '6.0мкг'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">

  .composition {
    font-size: 11px;
    color: #333;
    font-family: 'Comfortaa', cursive;
    margin-top: 2em;

    h4 {
      padding: 1em 0;
    }

    .feedy-type {
      border-radius: 4px;
      color: #fff;
      text-align: center;
      font-size: 24px;
      display: inline-block;
      width: 140px;
      padding: 8px 8px;
      margin-bottom: 1em;
    }

    h4.weight-normal {
      font-weight: normal;
    }
    h4.composition {
      height: 120px;
      text-align: justify;
      padding-right: 20px;
    }

    .composition-row {
      padding: 4px 0;
    }
  }
</style>
