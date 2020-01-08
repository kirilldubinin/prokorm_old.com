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
          <h2 class="left">Раздой Комплекс</h2>
          <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <th>#</th>
              <th colspan="3" class="center">УТРО</th>
              <th colspan="3" class="center">ВЕЧЕР</th>
            </tr>
            <tr>
              <th>КОМПОНЕНТ</th>
              <th>ПЛАН (кг)</th>
              <th>ФАКТ (кг)</th>
              <th>ОТКЛОНЕНИЕ (%)</th>
              <th>ПЛАН (кг)</th>
              <th>ФАКТ (кг)</th>
              <th>ОТКЛОНЕНИЕ (%)</th>
            </tr>
            <tr>
              <td>З/помол</td>
              <td>638</td>
              <td>444</td>
              <td class="red">-30</td>

              <td>638</td>
              <td>748</td>
              <td class="red">17</td>
            </tr>
            <tr>
              <td>Кукуруза</td>
              <td>638</td>
              <td>600</td>
              <td>-6</td>

              <td>638</td>
              <td>740</td>
              <td class="red">-16</td>
            </tr>
            <tr>
              <td>Шр. Рапс</td>
              <td>336</td>
              <td>420</td>
              <td class="red">25</td>

              <td>336</td>
              <td>490</td>
              <td class="red">46</td>
            </tr>
            <tr>
              <td>Шр. Подсолн</td>
              <td>252</td>
              <td>380</td>
              <td class="red">51</td>

              <td>252</td>
              <td>360</td>
              <td class="red">43</td>
            </tr>
            <tr>
              <td>БК</td>
              <td>25</td>
              <td>25</td>
              <td>0</td>

              <td>50</td>
              <td>50</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Барда</td>
              <td>168</td>
              <td>250</td>
              <td class="red">49</td>

              <td>168</td>
              <td>218</td>
              <td class="red">30</td>
            </tr>
            <tr>
              <td>Сода</td>
              <td>34</td>
              <td>35</td>
              <td>3</td>

              <td>34</td>
              <td>37</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Соль</td>
              <td>25</td>
              <td>25</td>
              <td>0</td>

              <td>25</td>
              <td>25</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Мел</td>
              <td>43</td>
              <td>45</td>
              <td>5</td>

              <td>43</td>
              <td>45</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Премикс</td>
              <td>25</td>
              <td>25</td>
              <td>0</td>

              <td>25</td>
              <td>25</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Интокс</td>
              <td>8</td>
              <td>6</td>
              <td class="red">-25</td>

              <td>8</td>
              <td>10</td>
              <td class="red">25</td>
            </tr>
            <tr>
              <td>Дрожжи</td>
              <td>5</td>
              <td>5</td>
              <td>0</td>

              <td>5</td>
              <td>7</td>
              <td class="red">40</td>
            </tr>
            <tr>
              <td>Силос</td>
              <td>2600</td>
              <td>2870</td>
              <td class="red">10</td>

              <td>2500</td>
              <td>2340</td>
              <td>6</td>
            </tr>
            <tr>
              <td>З/сенаж</td>
              <td>1100</td>
              <td>1450</td>
              <td class="red">32</td>

              <td>1000</td>
              <td>1095</td>
              <td class="red">10</td>
            </tr>
            <tr>
              <td>Солома</td>
              <td>150</td>
              <td>150</td>
              <td>0</td>

              <td>150</td>
              <td>150</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Жом кукурузный</td>
              <td>600</td>
              <td>0</td>
              <td class="red">-100</td>

              <td>600</td>
              <td>630</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Патока</td>
              <td>120</td>
              <td>120</td>
              <td>0</td>

              <td>120</td>
              <td>120</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Морковь</td>
              <td>170</td>
              <td>150</td>
              <td class="red">-12</td>

              <td>170</td>
              <td>150</td>
              <td class="red">-12</td>
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

    .header {
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
