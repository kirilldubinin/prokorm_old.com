<template>
  <section class="conception">
    <h3>
      Программа выращивания телок на основе престартера Feedy Green
      <p class="sub-title">
        примерная стоимость года кормления 3400 рублей, средний привес 1000 грамм / день
      </p>
    </h3>
    <div class="content">
    <el-row :gutter="10" type="flex" class="feed-row">
      <el-col :span="1">
        <div class="empty no-mark">
        </div>
      </el-col>
      <el-col :span="5">
        <div class="milk">
          молоко цельное или зцм
        </div>
      </el-col>
      <el-col :span="4">
        <div class="empty">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="base">
          основные корма (сенаж или силос)
        </div>
      </el-col>
      <el-col :span="1">
        <div class="empty">
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" type="flex" class="feed-row">
      <el-col :span="1">
        <div class="empty no-mark">
        </div>
      </el-col>
      <el-col :span="1">
        <div class="empty">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="green">
          Feedy Green (100-120) грамм в день
        </div>
      </el-col>
      <el-col :span="4">
        <div class="start">
          Feedy Start (120-160) грамм в день
        </div>
      </el-col>
      <el-col :span="4">
        <div class="start">
          Feedy Start (160-200) грамм в день
        </div>
      </el-col>
      <el-col :span="4">
        <div class="standard">
          Feedy Standard от 200 грамм в день
        </div>
      </el-col>
      <el-col :span="1">
        <div class="empty">
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" type="flex" class="day-row">
      <el-col :span="1">
        <div class="day-mark no-mark">
          <label>День:</label>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="day-mark">
          <label>01</label>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="day-mark">
          <label>04</label>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="day-mark">
          <label>40</label>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="day-mark">
          <label>80</label>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="day-mark">
          <label>120</label>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="day-mark">
          <label>360</label>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" class="price-row">
      <el-col :span="1">
        <div class="price-mark no-mark">
          <label>Цены (руб.)</label>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="price-mark">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="price-mark">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="price-mark">
          <label>560</label>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="price-mark">
          <label>1860</label>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="price-mark">
          <label>2600</label>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="price-mark">
          <label>3400</label>
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
        days: 24,
        marks: [
          {
            name: 'Day 1',
            size: 4,
            feeds: []
          },
          {
            name: 'Day 4',
            size: 4,
            feeds: ['green']
          },
          {
            name: 'Day 40',
            size: 4,
            feeds: ['start']
          },
        ]
      }
    }
  }
</script>


<style>
  .conception {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin: 2em;
  }

  .conception h3 {
    padding: 1em 2em;
    font-size: 16px;
    font-family: 'Comfortaa', cursive;
    border-bottom: 1px solid #f0f0f0;
  }

  .conception h3 .sub-title {
    padding-top: .5em;
    font-size: 12px;
    font-weight: normal;
    color: #777;
  }

  .conception .content {
    padding: 2em 3em;
    font-size: 12px;
  }

  .feed-row {
    margin: 8px 0 8px 20px;
  }

  .price-row,
  .day-row {
    border-top: 1px solid #bbb;
  }

  .price-mark,
  .day-mark {
    font-size: 12px;

    position: relative;
    padding: 0.5em 0;
  }

  .price-mark.no-mark label {
    width: 100px;
    text-align: left;
  }
  .price-mark label {
    margin-left: -14px;
    width: 20px;
    text-align: center;
    display: inline-block;
  }

  .day-mark label {
    margin-left: -14px;
    width: 20px;
    text-align: center;
    display: inline-block;
  }

  .milk {
    color: #555;
    padding: 0.5em 0.5em;
    background-color: #e5e9f2;
    border-radius: 3px;
  }
  .green {
    color: #fff;
    padding: 0.5em 0.5em;
    background-color: #2A8C49;
    position: relative;
    border-radius: 3px;
    opacity: 0.8;
  }
  .green:before {
    content: '';
    display: block;
    height: 36px;
    border-left: 1px solid #bbb;
    position: absolute;
    left: -5px;
    top: 0px;
  }
  .start {
    color: #fff;
    padding: 0.5em 0.5em;
    background-color: #409EFF;
    border-radius: 3px;
    opacity: 0.8;
    position: relative;
  }
  .start:before {
    content: '';
    display: block;
    height: 36px;
    border-left: 1px solid #bbb;
    position: absolute;
    left: -5px;
    top: 0px;
  }
  .standard {
    color: #fff;
    padding: 0.5em 0.5em;
    background-color: #888;
    border-radius: 3px;
    opacity: 0.8;
    position: relative;
  }
  .standard:before {
    content: '';
    display: block;
    height: 36px;
    border-left: 1px solid #bbb;
    position: absolute;
    left: -5px;
    top: 0px;
  }
  .base {
    padding: 0.5em 0.5em;
    background-color: #e5e9f2;
    border-radius: 3px;
    opacity: 0.8;
    position: relative;
  }
  .base:before {
    content: '';
    display: block;
    height: 36px;
    border-left: 1px solid #bbb;
    position: absolute;
    left: -5px;
    top: 0px;
  }
  .empty {
    position: relative;
  }
  .empty.no-mark:before {
    border-left: none;

  }
  .empty:before {
    content: '';
    display: block;
    height: 36px;
    border-left: 1px solid #bbb;
    position: absolute;
    left: -5px;
    top: 0px;
  }
</style>
