<template>
  <section>
    <div class="list">
      <div class="header">
        <el-row type="flex">
          <el-col :span="8">
            <div class="prokorm">
              <h2><b>PRO</b>КОРМ</h2>
              <p>кормление животных</p>
            </div>
          </el-col>
          <el-col class="address">
            <p>
              <b>ООО "ПРОКОРМ"</b><br/>
              Юридический адрес: 603123, г. Нижний Новгород, ул. Героя Шнитникова 4-3<br/>
              ИНН     5256122945<br/>
              КПП     525601001<br/>
              ОГРН    1135256005994<br/>
              БИК     042202847<br/>
              р/с     40702810323000478853<br/>
              к/с     30101810300000000847<br/>
              Поволжский филиал ЗАО «Райффайзенбанк» в г. Нижнем Новгороде.<br/>
              sales@prokorm.com <br/>
              8 800 550 28 27
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="offer">
        <h2 class="offer__name"> КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ НА ТАРИФЫ</h2>
        <div class="offer__content">
          <el-row type="flex">
            <el-col :span="8" class="plan">
              <h3>СТАРТОВЫЙ</h3>
              <ul>
                <li><label>расчет рационов:</label>до 50 в месяц</li>
                <li><label>программа AGRODESK:</label>без ограничений</li>
                <li><label>посещения предприятия:</label>2 в месяц</li>
                <li><label>консалтинг:</label>99 000 руб / месяц</li>
              </ul>
            </el-col>
            <el-col :span="8" class="plan">
              <h3>БАЗОВЫЙ</h3>
              <ul>
                <li><label>расчет рационов:</label>до 100 в месяц</li>
                <li><label>программа AGRODESK:</label>без ограничений</li>
                <li><label>посещения предприятия:</label>2 в месяц</li>
                <li><label>премикс дойный CAMISAN:</label>105 руб / кг</li>
                <li><label>премикс сухостой PRENACAM:</label>115 руб / кг</li>
                <li><label>пробиотик KRISTALL HEFE:</label>160 руб / кг</li>
                <li><label>выпойка после отела FITMIX:</label>290 руб / пакет</li>
                <li><label>консалтинг:</label>49 000 руб / месяц</li>
              </ul>
            </el-col>
            <el-col :span="8" class="plan">
              <h3>ВСЕ ВКЛЮЧЕНО</h3>
              <ul>
                <li><label>расчет рационов:</label>без ограничений</li>
                <li><label>программа AGRODESK:</label>без ограничений</li>
                <li><label>посещения предприятия:</label>3 в месяц</li>
                <li><label>премикс дойный CAMISAN:</label>100 руб / кг</li>
                <li><label>премикс сухостой PRENACAM:</label>110 руб / кг</li>
                <li><label>пробиотик KRISTALL HEFE:</label>152 руб / кг</li>
                <li><label>выпойка после отела FITMIX:</label>280 руб / пакет</li>
                <li><label>престартер GREEN:</label>39 руб / кг</li>
                <li><label>стартер START:</label>32 руб / кг</li>
                <li><label>консалтинг:</label>0 руб / месяц</li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  @page {
    size: 297mm 210mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 297mm; // set appropriately
      height: 210mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 297mm;
    height: 210mm;
    margin: auto;
    background: #eaeaea;
    .prokorm {
      margin: 10mm auto 0em auto;
      font-family: 'Comfortaa', cursive;
      width: 50mm;
      height: 50mm;
      color: #fff;
      background: #4d626f;
      text-align: center;
      h2 {
        font-size: 30px;
        font-weight: 100;
        text-align: center;
        padding-top: 70px;
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
        font-size: 14px;
        letter-spacing: 0.1px;
        margin-top: -2px;
      }
    }
    .address {
      font-size: 9px;
      line-height: 16px;
      padding-top: 46px;
      color: #4d626e;
    }

    .offer {
      h2 {
        font-size: 20px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
        margin: 130px 0 0em 0;
      }
      &__content {
        margin: 0 0.5em;

        .plan {
          border: 1px solid #4d626e;
          margin: 1em 0.5em;
          h3 {
            text-align: center;
            margin-bottom: 1em;
            background: #4d626e;
            padding: 1em 0;
            color: #eaeaea;
          }
          .price {
            background: transparent;
            color: #4d626e;
            padding: 0;
            margin-bottom: 0;
            padding-bottom: 0.5em;
            font-size: 16px;
            opacity: 0.8;
          }
          ul {
            height: 300px;
          }
          ul, li {
            padding: 0px;
            margin: 0px;
            list-style-type: none;
            font-size: 11px;
            li {
              padding: 8px 0;
              label {
                display: inline-block;
                width: 210px;
                text-align: right;
                padding-right: 1em;
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }

</style>
