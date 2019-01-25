<template>
  <section class="feeding" id="feeding">
    <h2 class="section-title">КОРМЛЕНИЕ</h2>
    <div class="content">
      <!-- Muesli -->
      <div class="feeding__schema">
        <h3>
          Схема интенсивного выращивания ремонтных телок до 6-месячного возраста на престартере Feedy <span class="muesli">Muesli</span>
          <p class="sub-title">
            Живая масса при первом осеменении в 13-14 месяцев 360-380 кг.
          </p>
          <p class="sub-title">
            Затраты на выращивание одной ремонтной телки за период (6 месяцев) составляют 20 000 рублей
          </p>
          <p class="sub-title">
            Среднесуточный привес за период выращивания 900-950 грамм
          </p>
        </h3>
        <!-- TOTAL -->
        <el-row :gutter="gutter" type="flex" class="total-row">
          <el-col :span="22">
          </el-col>
          <el-col :span="2">
            <div class="total">
              ИТОГО
            </div>
          </el-col>
        </el-row>

        <!-- LINES -->
        <el-row :gutter="gutter" type="flex" class="line-row">
          <el-col :span="4">
          </el-col>
          <el-col :key="index + '_' + mark.label" v-for="(mark, index) in feedyMuesli.days" :span="mark.long">
            <div class="line">
            </div>
          </el-col>
        </el-row>

        <!-- MILK -->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Молоко<span class="dimension">(литр/сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyMuesli.milk" :span="mark.long">
            <div :class="{'milk': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- WATER -->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Вода<span class="dimension">(литр/сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyMuesli.water" :span="mark.long">
            <div :class="{'water': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- FEEDY MUESLI-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Feedy Muesli<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyMuesli.muesli" :span="mark.long">
            <div :class="{'muesli': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- FEEDY START-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Feedy Start<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyMuesli.start" :span="mark.long">
            <div :class="{'start': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- HAY-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Сено<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyMuesli.hay" :span="mark.long">
            <div :class="{'hay': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- haylage-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Сенаж/Силос<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyMuesli.haylage" :span="mark.long">
            <div :class="{'haylage': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- DAYS -->
        <el-row :gutter="gutter" type="flex" class="day-row">
          <el-col :span="4">
            <div class="empty">День</div>
          </el-col>
          <el-col :key="index + '_' + mark.label" v-for="(mark, index) in feedyMuesli.days" :span="mark.long">
            <div class="day">
              <label>{{mark.label}}</label>
            </div>
          </el-col>
        </el-row>

      </div>

      <!-- RED -->
      <div class="feeding__schema">
        <h3>
          Схема интенсивного выращивания ремонтных телок до 6-месячного возраста на престартере Feedy <span class="red">Red</span>
          <p class="sub-title">
            Живая масса при первом осеменении в 13-14 месяцев 360-380 кг.
          </p>
          <p class="sub-title">
            Затраты на выращивание одной ремонтной телки за период (6 месяцев) составляют 20 000 рублей
          </p>
          <p class="sub-title">
            Среднесуточный привес за период выращивания 900-950 грамм
          </p>
        </h3>
        <!-- TOTAL -->
        <el-row :gutter="gutter" type="flex" class="total-row">
          <el-col :span="22">
          </el-col>
          <el-col :span="2">
            <div class="total">
              ИТОГО
            </div>
          </el-col>
        </el-row>

        <!-- LINES -->
        <el-row :gutter="gutter" type="flex" class="line-row">
          <el-col :span="4">
          </el-col>
          <el-col :key="index + '_' + mark.label" v-for="(mark, index) in feedyRed.days" :span="mark.long">
            <div class="line">
            </div>
          </el-col>
        </el-row>

        <!-- MILK -->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Молоко<span class="dimension">(литр/сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyRed.milk" :span="mark.long">
            <div :class="{'milk': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- WATER -->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Вода<span class="dimension">(литр/сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyRed.water" :span="mark.long">
            <div :class="{'water': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- FEEDY RED-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Feedy Red<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyRed.red" :span="mark.long">
            <div :class="{'red': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- FEEDY START-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Feedy Start<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyRed.start" :span="mark.long">
            <div :class="{'start': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- HAY-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Сено<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyRed.hay" :span="mark.long">
            <div :class="{'hay': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- haylage-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Сенаж/Силос<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyRed.haylage" :span="mark.long">
            <div :class="{'haylage': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- DAYS -->
        <el-row :gutter="gutter" type="flex" class="day-row">
          <el-col :span="4">
            <div class="empty">День</div>
          </el-col>
          <el-col :key="index + '_' + mark.label" v-for="(mark, index) in feedyRed.days" :span="mark.long">
            <div class="day">
              <label>{{mark.label}}</label>
            </div>
          </el-col>
        </el-row>

      </div>

      <!-- GREEN -->
      <div class="feeding__schema">
        <h3>
          Схема интенсивного выращивания ремонтных телок до 6-месячного возраста на престартере Feedy <span class="green">Green</span>
          <p class="sub-title">
            Живая масса при первом осеменении в 13-14 месяцев 360-380 кг.
          </p>
          <p class="sub-title">
            Затраты на выращивание одной ремонтной телки за период (6 месяцев) составляют 20 000 рублей
          </p>
          <p class="sub-title">
            Среднесуточный привес за период выращивания 900-950 грамм
          </p>
        </h3>
        <!-- TOTAL -->
        <el-row :gutter="gutter" type="flex" class="total-row">
          <el-col :span="22">
          </el-col>
          <el-col :span="2">
            <div class="total">
              ИТОГО
            </div>
          </el-col>
        </el-row>

        <!-- LINES -->
        <el-row :gutter="gutter" type="flex" class="line-row">
          <el-col :span="4">
          </el-col>
          <el-col :key="index + '_' + mark.label" v-for="(mark, index) in feedyGreen.days" :span="mark.long">
            <div class="line">
            </div>
          </el-col>
        </el-row>

        <!-- MILK -->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Молоко<span class="dimension">(литр/сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyGreen.milk" :span="mark.long">
            <div :class="{'milk': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- WATER -->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Вода<span class="dimension">(литр/сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyGreen.water" :span="mark.long">
            <div :class="{'water': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- FEEDY GREEN-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Feedy Green<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyGreen.green" :span="mark.long">
            <div :class="{'green': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- FEEDY START-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Feedy Start<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyGreen.start" :span="mark.long">
            <div :class="{'start': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- HAY-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Сено<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyGreen.hay" :span="mark.long">
            <div :class="{'hay': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- haylage-->
        <el-row :gutter="gutter" type="flex" class="feed-row">
          <el-col :span="4">
            <div class="empty no-mark">
              Сенаж/Силос<span class="dimension">(кг./сутки)</span>
            </div>
          </el-col>
          <el-col :key="index + mark.label" v-for="(mark, index) in feedyGreen.haylage" :span="mark.long">
            <div :class="{'haylage': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
          </el-col>
        </el-row>

        <!-- DAYS -->
        <el-row :gutter="gutter" type="flex" class="day-row">
          <el-col :span="4">
            <div class="empty">День</div>
          </el-col>
          <el-col :key="index + '_' + mark.label" v-for="(mark, index) in feedyGreen.days" :span="mark.long">
            <div class="day">
              <label>{{mark.label}}</label>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        gutter: 6,
        feedyGreen: {
          days: [
            {
              label: '1',
              long: 1
            },
            {
              label: '2',
              long: 1
            },
            {
              label: '4',
              long: 1
            },
            {
              label: '8',
              long: 1
            },
            {
              label: '15',
              long: 1
            },
            {
              label: '29',
              long: 1
            },
            {
              label: '36',
              long: 1
            },
            {
              label: '43',
              long: 1
            },
            {
              label: '50',
              long: 1
            },
            {
              label: '57',
              long: 1
            },
            {
              label: '59',
              long: 1
            },
            {
              label: '61',
              long: 1
            },
            {
              label: '64',
              long: 2
            },
            {
              label: '85',
              long: 2
            },
            {
              label: '113',
              long: 2
            },
            {
              label: '141',
              long: 2
            },
            {
              label: '180',
              long: 1
            }
          ],
          milk: [
            {
              label: '6.0',
              long: 3
            }, {
              label: '7.0',
              long: 2
            }, {
              label: '8.0',
              long: 4
            }, {
              label: '7.0',
              long: 1
            }, {
              label: '6.0',
              long: 1
            }, {
              label: '3.0',
              long: 1
            }, {
              label: '',
              long: 8
            }, {
              label: '450',
              long: 1
            }
          ],
          water: [
            {
              label: '',
              long: 2
            }, {
              label: '3.0',
              long: 10
            }, {
              label: 'вволю',
              long: 8
            }, {
              label: '',
              long: 1
            }
          ],
          hay: [
            {
              label: '',
              long: 9
            },
            {
              label: '0.1',
              long: 1
            },
            {
              label: '0.2',
              long: 2
            },
            {
              label: '0.3',
              long: 4
            }, {
              label: '0.5',
              long: 4
            }, {
              label: '45',
              long: 1
            }
          ],
          haylage: [
            {
              label: '',
              long: 12
            },
            {
              label: '0.5',
              long: 2
            },
            {
              label: '2.0 - 3.0',
              long: 2
            },
            {
              label: '4.0 - 5.0',
              long: 2
            }, {
              label: '6.0 - 8.0',
              long: 2
            }, {
              label: '400',
              long: 1
            }
          ],

          green: [{
            label: '',
            long: 2
          }, {
            label: '0.1',
            long: 1
          }, {
            label: '0.25',
            long: 1
          }, {
            label: '0.4',
            long: 1
          }, {
            label: '0.55',
            long: 1
          }, {
            label: '0.8',
            long: 1
          }, {
            label: '1.2',
            long: 1
          }, {
            label: '1.5',
            long: 1
          }, {
            label: '1.8',
            long: 2
          }, {
            label: '1.2',
            long: 1
          }, {
            label: '',
            long: 8
          }, {
            label: '47',
            long: 1
          }],
          start: [{
              label: '',
              long: 11
            }, {
              label: '0.8',
              long: 1
            }, {
              label: '2.2',
              long: 2
            }, {
              label: '2.6',
              long: 2
            }, {
              label: '2.9',
              long: 2
            }, {
              label: '3.2',
              long: 2
            }, {
              label: '290',
              long: 1
            }
          ]
        },
        feedyRed: {
          days: [
            {
              label: '1',
              long: 1
            },
            {
              label: '2',
              long: 1
            },
            {
              label: '4',
              long: 1
            },
            {
              label: '8',
              long: 1
            },
            {
              label: '15',
              long: 1
            },
            {
              label: '29',
              long: 1
            },
            {
              label: '36',
              long: 1
            },
            {
              label: '43',
              long: 1
            },
            {
              label: '50',
              long: 1
            },
            {
              label: '57',
              long: 1
            },
            {
              label: '61',
              long: 1
            },
            {
              label: '64',
              long: 2
            },
            {
              label: '85',
              long: 2
            },
            {
              label: '113',
              long: 2
            },
            {
              label: '141',
              long: 2
            },
            {
              label: '180',
              long: 1
            }
          ],
          milk: [
            {
              label: '6.0',
              long: 5
            }, {
              label: '7.0',
              long: 1
            }, {
              label: '6.0',
              long: 2
            }, {
              label: '5.0',
              long: 1
            }, {
              label: '3',
              long: 1
            }, {
              label: '',
              long: 9
            }, {
              label: '350',
              long: 1
            }
          ],
          water: [
            {
              label: '',
              long: 2
            }, {
              label: '3.0',
              long: 8
            }, {
              label: 'вволю',
              long: 9
            }
          ],
          hay: [
            {
              label: '',
              long: 9
            },
            {
              label: '0.1',
              long: 1
            },
            {
              label: '0.2',
              long: 1
            }, {
              label: '0.3',
              long: 4
            }, {
              label: '0.5',
              long: 4
            }, {
              label: '45',
              long: 1
            }
          ],
          haylage: [
            {
              label: '',
              long: 11
            },
            {
              label: '0.5',
              long: 2
            },
            {
              label: '2.0 - 3.0',
              long: 2
            }, {
              label: '4.0 - 5.0',
              long: 2
            }, {
              label: '6.0 - 8.0',
              long: 2
            }, {
              label: '400',
              long: 1
            }
          ],

          red: [{
            label: '',
            long: 2
          }, {
            label: '0.1',
            long: 1
          }, {
            label: '0.25',
            long: 1
          }, {
            label: '0.45',
            long: 1
          }, {
            label: '0.65',
            long: 1
          }, {
            label: '0.9',
            long: 1
          }, {
            label: '1.2',
            long: 1
          }, {
            label: '1.5',
            long: 1
          }, {
            label: '1.2',
            long: 1
          }, {
            label: '',
            long: 9
          }, {
            label: '43',
            long: 1
          }],
          start: [{
              label: '',
              long: 9
            }, {
              label: '0.8',
              long: 1
            }, {
              label: '2.0',
              long: 1
            }, {
              label: '2.2',
              long: 2
            }, {
              label: '2.5',
              long: 2
            }, {
              label: '2.8',
              long: 2
            }, {
              label: '3.2',
              long: 2
            },
            {
              label: '288',
              long: 1
            }
          ]
        },
        feedyMuesli: {
          days: [
            {
              label: '1',
              long: 1
            },
            {
              label: '2',
              long: 1
            },
            {
              label: '4',
              long: 1
            },
            {
              label: '8',
              long: 1
            },
            {
              label: '15',
              long: 1
            },
            {
              label: '29',
              long: 1
            },
            {
              label: '36',
              long: 1
            },
            {
              label: '43',
              long: 1
            },
            {
              label: '50',
              long: 1
            },
            {
              label: '57',
              long: 1
            },
            {
              label: '61',
              long: 1
            },
            {
              label: '64',
              long: 2
            },
            {
              label: '85',
              long: 2
            },
            {
              label: '113',
              long: 2
            },
            {
              label: '141',
              long: 2
            },
            {
              label: '180',
              long: 1
            }
          ],
          milk: [
            {
              label: '6.0',
              long: 2
            }, {
              label: '5.0',
              long: 1
            }, {
              label: '4.5',
              long: 2
            }, {
              label: '4.0',
              long: 4
            }, {
              label: '2',
              long: 1
            }, {
              label: '',
              long: 9
            }, {
              label: '250',
              long: 1
            }
          ],
          water: [
            {
              label: '',
              long: 2
            }, {
              label: '3.0',
              long: 8
            }, {
              label: 'вволю',
              long: 9
            }
          ],
          hay: [
            {
              label: '',
              long: 9
            },
            {
              label: '0.1',
              long: 1
            },
            {
              label: '0.2',
              long: 1
            }, {
              label: '0.3',
              long: 4
            }, {
              label: '0.5',
              long: 4
            }, {
              label: '45',
              long: 1
            }
          ],
          haylage: [
            {
              label: '',
              long: 11
            },
            {
              label: '0.5',
              long: 2
            },
            {
              label: '2.0 - 3.0',
              long: 2
            }, {
              label: '4.0 - 5.0',
              long: 2
            }, {
              label: '6.0 - 8.0',
              long: 2
            }, {
              label: '400',
              long: 1
            }
          ],

          muesli: [{
            label: '',
            long: 2
          }, {
            label: '0.1',
            long: 1
          }, {
            label: '0.30',
            long: 1
          }, {
            label: '0.50',
            long: 1
          }, {
            label: '0.70',
            long: 1
          }, {
            label: '1.0',
            long: 1
          }, {
            label: '1.3',
            long: 1
          }, {
            label: '1.6',
            long: 1
          }, {
            label: '1.2',
            long: 1
          }, {
            label: '',
            long: 9
          }, {
            label: '47',
            long: 1
          }],
          start: [{
              label: '',
              long: 9
            }, {
              label: '0.8',
              long: 1
            }, {
              label: '2.0',
              long: 1
            }, {
              label: '2.2',
              long: 2
            }, {
              label: '2.5',
              long: 2
            }, {
              label: '2.8',
              long: 2
            }, {
              label: '3.1',
              long: 2
            },
            {
              label: '288',
              long: 1
            }
          ]
        }
      }
    }
  }
</script>


<style lang="scss">
  .feeding {
    width: 1000px;
    h3 {
      font-size: 16px;
      .sub-title {
        padding-top: .5em;
        padding-left: 1em;
        font-size: 11px;
        font-weight: normal;
        color: #777;
      }
      .red,
      .muesli,
      .green {
        font-size: 14px;
        font-weight: normal;
        width: 60px;
        display: inline-block;
      }
    }

    &__schema {
      margin-bottom: 5em;
    }

    .content {
      font-size: 12px;
    }

    .dimension {
      margin-left: 6px;
      font-size: 10px;
      color: #666;
    }

    .total-row,
    .line-row,
    .day-row,
    .feed-row {
      margin: 8px 0 8px 20px;
      position: relative;
      font-size: 11px;
    }

    .day-row {
      margin-top: 20px !important;
    }

    .line {
      position: relative;
      &:before {
        content: '';
        display: block;
        height: 188px;
        border-left: 1px solid #ddd;
        left: -0.32em;
        top: 0px;
        position: absolute;
      }
    }

    .day {
      color: #555;
      font-size: 10px;
      position: relative;
      label {
        margin-left: -19px;
        display: block;
        width: 30px;
        text-align: center;
      }
    }

    .milk {
      color: #555;
      padding: 0.5em 0.5em;
      background-color: #e5e9f2;
      border-radius: 3px;
      font-size: 10px;
      text-align: center;
      z-index: 2;
    }
    .water {
      color: #555;
      padding: 0.5em 0.5em;
      background-color: #cdecf5;
      border-radius: 3px;
      font-size: 10px;
      text-align: center;
      z-index: 2;
    }
    .hay {
      color: #555;
      padding: 0.5em 0.5em;
      background-color: #f7e467;
      border-radius: 3px;
      font-size: 10px;
      text-align: center;
    }

    .haylage  {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #a98070;
      border-radius: 3px;
      font-size: 10px;
      text-align: center;
    }

    .green {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #2A8C49;
      position: relative;
      border-radius: 3px;
      opacity: 0.8;
      font-size: 10px;
      text-align: center;
    }

    .red {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #f13434;
      position: relative;
      border-radius: 3px;
      opacity: 0.8;
      font-size: 10px;
      text-align: center;
    }

    .muesli {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #f98c06;
      position: relative;
      border-radius: 3px;
      opacity: 0.8;
      font-size: 10px;
      text-align: center;
    }

    .total {
      text-align: right;
      font-weight: bold;
    }

    /*.green:before {
      content: '';
      display: block;
      height: 36px;
      border-left: 1px solid #ddd;
      position: absolute;
      left: -5px;
      top: 0px;
    }*/
    .start {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #409EFF;
      border-radius: 3px;
      opacity: 0.8;
      position: relative;
      font-size: 10px;
      text-align: center;
    }

    /*
    .start:before {
      content: '';
      display: block;
      height: 36px;
      border-left: 1px solid #ddd;
      position: absolute;
      left: -5px;
      top: 0px;
    }*/
    .standard {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #888;
      border-radius: 3px;
      opacity: 0.8;
      position: relative;
    }
    /*
    .standard:before {
      content: '';
      display: block;
      height: 36px;
      border-left: 1px solid #bbb;
      position: absolute;
      left: -5px;
      top: 0px;
    }*/
    .empty {
      position: relative;
    }
    .empty.no-mark:before {
      border-left: none;

    }
  }
</style>
