<template>
  <section class="feeding" id="feeding">
    <h3>
      Схема интенсивного выращивания ремонтных телок до 6-месячного возраста
      <p class="sub-title">
        Цель: живая масса при первом осеменении в 13-14 месяцев 360-380 кг.
      </p>
      <p class="sub-title">
        Затраты на выращивание одной ремонтной телки за период (6 месяцев) составляют 20 000 рублей
      </p>
      <p class="sub-title">
        Среднесуточный привес за период выращивания 900-950 грамм
      </p>
    </h3>
    <div class="content">

    <!-- TOTAL -->
    <el-row :gutter="gutter" type="flex" class="total-row">
      <el-col :span="23">
      </el-col>
      <el-col :span="1">
        <div class="total">
          ИТОГО
        </div>
      </el-col>
    </el-row>

    <!-- LINES -->
    <el-row :gutter="gutter" type="flex" class="line-row">
      <el-col :span="3">
      </el-col>
      <el-col :key="index + '_' + mark.label" v-for="(mark, index) in days" :span="mark.long">
        <div class="line">
        </div>
      </el-col>
    </el-row>

    <!-- MILK -->
    <el-row :gutter="gutter" type="flex" class="feed-row">
      <el-col :span="3">
        <div class="empty no-mark">
          Молоко<span class="dimension">(литр/сутки)</span>
        </div>
      </el-col>
      <el-col :key="index + mark.label" v-for="(mark, index) in milk" :span="mark.long">
        <div :class="{'milk': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
      </el-col>
    </el-row>

    <!-- WATER -->
    <el-row :gutter="gutter" type="flex" class="feed-row">
      <el-col :span="3">
        <div class="empty no-mark">
          Вода<span class="dimension">(литр/сутки)</span>
        </div>
      </el-col>
      <el-col :key="index + mark.label" v-for="(mark, index) in water" :span="mark.long">
        <div :class="{'water': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
      </el-col>
    </el-row>

    <!-- FEEDY GREEN-->
    <el-row :gutter="gutter" type="flex" class="feed-row">
      <el-col :span="3">
        <div class="empty no-mark">
          Feedy Green<span class="dimension">(кг./сутки)</span>
        </div>
      </el-col>
      <el-col :key="index + mark.label" v-for="(mark, index) in green" :span="mark.long">
        <div :class="{'green': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
      </el-col>
    </el-row>

    <!-- FEEDY START-->
    <el-row :gutter="gutter" type="flex" class="feed-row">
      <el-col :span="3">
        <div class="empty no-mark">
          Feedy Start<span class="dimension">(кг./сутки)</span>
        </div>
      </el-col>
      <el-col :key="index + mark.label" v-for="(mark, index) in start" :span="mark.long">
        <div :class="{'start': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
      </el-col>
    </el-row>

    <!-- HAY-->
    <el-row :gutter="gutter" type="flex" class="feed-row">
      <el-col :span="3">
        <div class="empty no-mark">
          Сено<span class="dimension">(кг./сутки)</span>
        </div>
      </el-col>
      <el-col :key="index + mark.label" v-for="(mark, index) in hay" :span="mark.long">
        <div :class="{'hay': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
      </el-col>
    </el-row>

    <!-- haylage-->
    <el-row :gutter="gutter" type="flex" class="feed-row">
      <el-col :span="3">
        <div class="empty no-mark">
          Сенаж/Силос<span class="dimension">(кг./сутки)</span>
        </div>
      </el-col>
      <el-col :key="index + mark.label" v-for="(mark, index) in haylage" :span="mark.long">
        <div :class="{'haylage': mark.label, 'empty': !mark.label}">{{mark.label}}</div>
      </el-col>
    </el-row>

    <!-- DAYS -->
    <el-row :gutter="gutter" type="flex" class="day-row">
      <el-col :span="3">
        <div class="empty">День</div>
      </el-col>
      <el-col :key="index + '_' + mark.label" v-for="(mark, index) in days" :span="mark.long">
        <div class="day">
          <label>{{mark.label}}</label>
        </div>
      </el-col>
    </el-row>

    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        gutter: 6,
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
            label: '448.0',
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
            label: '43.3',
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
            label: '402.0',
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
          label: '46.9',
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
            label: '292.2',
            long: 1
          }
        ]
      }
    }
  }
</script>


<style lang="scss">
  .feeding {
    h3 {
      padding: 1em 2em;
      font-size: 16px;
      font-family: 'Comfortaa', cursive;
      border-bottom: 1px solid #f0f0f0;
      .sub-title {
        padding-top: .5em;
        font-size: 12px;
        font-weight: normal;
        color: #777;
      }
    }
    .content {
      padding: 2em 2em;
      font-size: 12px;
    }

    .dimension {
      margin-left: 6px;
      font-size: 11px;
      color: #666;
    }

    .total-row,
    .line-row,
    .day-row,
    .feed-row {
      margin: 8px 0 8px 20px;
      position: relative;
      font-size: 14px;
    }

    .day-row {
      margin-top: 20px !important;
    }

    .line {
      position: relative;
      &:before {
        content: '';
        display: block;
        height: 234px;
        border-left: 1px solid #ddd;
        left: -0.32em;
        top: 0px;
        position: absolute;
      }
    }

    .day {
      color: #555;
      font-size: 12px;
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
      font-size: 12px;
      text-align: center;
      z-index: 2;
    }
    .water {
      color: #555;
      padding: 0.5em 0.5em;
      background-color: #cdecf5;
      border-radius: 3px;
      font-size: 12px;
      text-align: center;
      z-index: 2;
    }
    .hay {
      color: #555;
      padding: 0.5em 0.5em;
      background-color: #f7e467;
      border-radius: 3px;
      font-size: 12px;
      text-align: center;
    }

    .haylage  {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #f5a658;
      border-radius: 3px;
      font-size: 12px;
      text-align: center;
    }
    .green {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #2A8C49;
      position: relative;
      border-radius: 3px;
      opacity: 0.8;
      font-size: 12px;
      text-align: center;
    }
    .start {
      color: #fff;
      padding: 0.5em 0.5em;
      background-color: #409EFF;
      border-radius: 3px;
      opacity: 0.8;
      position: relative;
      font-size: 12px;
      text-align: center;
    }
    .empty {
      position: relative;
    }
    .empty.no-mark:before {
      border-left: none;

    }
  }
</style>
