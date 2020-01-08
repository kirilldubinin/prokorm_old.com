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
        <h2 class="offer__name">ОПЫТ ИМ. ЛАКИНА</h2>
        <div class="offer__content">
          <h2 class="left">Суточный привес (кг/сутки)</h2>
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <th width="20%">#</th>
              <th width="20%">02 ОКТЯБРЯ</th>
              <th width="20%">25 ОКТЯБРЯ</th>
              <th width="20%">30 ОКТЯБРЯ</th>
              <th width="20%">ОБЩИЙ</th>
            </tr>
            <tr>
              <td><span class="green">Feedy Green</span></td>
              <td>578.79</td>
              <td>577.64</td>
              <td>830.36</td>
              <td>688.57</td>
            </tr>
            <tr>
              <td><span class="gold">Телячье Золото</span></td>
              <td>568.94</td>
              <td>935.41</td>
              <td>815.48</td>
              <td>668.35</td>
            </tr>
          </table>

          <br/><br/><br/><br/><br/>
          <h2 class="left">Вес при перевеске (кг)</h2>
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <th width="20%">#</th>
              <th width="20%">ПРИ РОЖДЕНИИ</th>
              <th width="20%">02 ОКТЯБРЯ</th>
              <th width="20%">25 ОКТЯБРЯ</th>
              <th width="20%">30 ОКТЯБРЯ</th>
            </tr>
            <tr>
              <td><span class="green">Feedy Green</span></td>
              <td>36.08</td>
              <td>57.50</td>
              <td>69.14</td>
              <td>80.75</td>
            </tr>
            <tr>
              <td><span class="gold">Телячье Золото</span></td>
              <td>38.75</td>
              <td>62.33</td>
              <td>83.92</td>
              <td>85.17</td>
            </tr>
          </table>

          <!--
          <br/><br/><br/>
          <h2 class="left">Поедаемость</h2>
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <th width="20%">#</th>
              <th width="20%">Роздано,гр</th>
              <th width="20%">Остаток</th>
              <th width="20%">Съедено, гр.</th>
              <th width="20%">Поедаемость,%</th>
            </tr>
            <tr>
              <td><span class="green">Feedy Green</span></td>
              <td>757.08</td>
              <td>430.41</td>
              <td>326.66</td>
              <td>45.24</td>
            </tr>
            <tr>
              <td><span class="gold">Телячье Золото</span></td>
              <td>855.00</td>
              <td>411.25</td>
              <td>443.75</td>
              <td>57.73</td>
            </tr>
          </table>
          -->
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

  svg {
    margin: 0 4em;
  }


  table {
    table-layout: auto;
    td, th {
      width: '20%';
      text-align: right;
      padding: 12px;
      border-bottom: 1px solid #4d626f;
      opacity: 0.8;
      span {
        font-weight: 900;
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
    width: 297mm;
    height: 210mm;
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
