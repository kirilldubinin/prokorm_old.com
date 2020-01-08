<template>
  <section>
    <div class="list">
      <div class="header">
        <el-row type="flex">
          <el-col :span="16">
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
        <h2 class="offer__name">МОНИТОРИНГ КОРМЛЕНИЯ ИМ. ЛАКИНА</h2>
        <div class="offer__content">
          <h2 class="left">Транзит</h2>
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <th>КОМПОНЕНТ</th>
              <th>ПЛАН (кг)</th>
              <th>ФАКТ (кг)</th>
              <th>ОТКЛОНЕНИЕ (%)</th>
            </tr>
            <tr>
              <td>З/смесь</td>
              <td>75</td>
              <td>65</td>
              <td class="red">-13</td>
            </tr>
            <tr>
              <td>З/помол</td>
              <td>75</td>
              <td>65</td>
              <td class="red">-13</td>
            </tr>
            <tr>
              <td>Кукуруза</td>
              <td>120</td>
              <td>140</td>
              <td class="red">17</td>
            </tr>
            <tr>
              <td>Шр. рпас</td>
              <td>180</td>
              <td>130</td>
              <td class="red">-28</td>
            </tr>
            <tr>
              <td>Шр. подсолн</td>
              <td>120</td>
              <td>130</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Премикс</td>
              <td>22</td>
              <td>22</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Иннотокс</td>
              <td>4</td>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Дрожжи</td>
              <td>4</td>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Силос</td>
              <td>1500</td>
              <td>1375</td>
              <td>-8</td>
            </tr>
            <tr>
              <td>З/сенаж</td>
              <td>1100</td>
              <td>1330</td>
              <td class="red">21</td>
            </tr>
            <tr>
              <td>Сено</td>
              <td>200</td>
              <td>200</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  @page {
    size: 210mm 297mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 210mm; // set appropriately
      height: 297mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  svg {
    margin: 0 4em;
  }


  table {
    table-layout: auto;
    font-size: 11px;
    td, th {
      width: '20%';
      text-align: right;
      padding: 10px;
      border-bottom: 1px solid #4d626f;
      opacity: 0.8;
      span {
        font-weight: 900;
      }

      &.center {
        text-align: center;
      }

      &.red {
        color: crimson;
        font-weight: bold;
      }
    }
    tr {
      border-bottom: 1px solid #555;
    }
  }

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 210mm;
    height: 297mm;
    margin: auto;
    background: #fbfbfb;
    .prokorm {
      margin: 10mm auto;
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
    h2.left {
      text-align: left !important;
      font-weight: 900;
    }
    .address {
      font-size: 9px;
      line-height: 16px;
      padding-top: 46px;
      color: #4d626e;
    }

    .offer {
      margin: 1em 0;
      h2 {
        font-size: 16px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
        margin-bottom: 1em;
      }

      &__content {
        font-size: 12px;
        margin: 0 4em;
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
