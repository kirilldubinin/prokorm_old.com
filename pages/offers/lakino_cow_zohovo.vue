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
          <h2 class="left">Раздой Жохово</h2>
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
              <td>855</td>
              <td>910</td>
              <td>6</td>

              <td>855</td>
              <td>900</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Кукуруза</td>
              <td>855</td>
              <td>910</td>
              <td>6</td>

              <td>855</td>
              <td>600</td>
              <td class="red">-30</td>
            </tr>
            <tr>
              <td>Шр. Рапс</td>
              <td>450</td>
              <td>480</td>
              <td>7</td>

              <td>450</td>
              <td>500</td>
              <td class="red">11</td>
            </tr>
            <tr>
              <td>Барда</td>
              <td>225</td>
              <td>250</td>
              <td class="red">11</td>

              <td>225</td>
              <td>175</td>
              <td class="red">-22</td>
            </tr>
            <tr>
              <td>Шр. подсолн</td>
              <td>338</td>
              <td>240</td>
              <td class="red">-29</td>

              <td>50</td>
              <td>50</td>
              <td>0</td>
            </tr>
            <tr>
              <td>БК</td>
              <td>50</td>
              <td>50</td>
              <td>0</td>

              <td>50</td>
              <td>50</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Жир</td>
              <td>50</td>
              <td>50</td>
              <td>0</td>

              <td>50</td>
              <td>50</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Сода</td>
              <td>26</td>
              <td>26</td>
              <td>0</td>

              <td>26</td>
              <td>26</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Соль</td>
              <td>26</td>
              <td>24</td>
              <td>-8</td>

              <td>26</td>
              <td>26</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Мел</td>
              <td>43</td>
              <td>45</td>
              <td>5</td>

              <td>43</td>
              <td>43</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Премикс</td>
              <td>33</td>
              <td>30</td>
              <td>-9</td>

              <td>33</td>
              <td>33</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Иннтокс</td>
              <td>11</td>
              <td>11</td>
              <td>0</td>

              <td>6</td>
              <td>6</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Дрожжи</td>
              <td>6</td>
              <td>6</td>
              <td>0</td>

              <td>11</td>
              <td>11</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Силос</td>
              <td>3500</td>
              <td>3270</td>
              <td>-7</td>

              <td>3900</td>
              <td>2460</td>
              <td class="red">-37</td>
            </tr>
            <tr>
              <td>З/сенаж</td>
              <td>1500</td>
              <td>2020</td>
              <td class="red">35</td>

              <td>2100</td>
              <td>2230</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Солома</td>
              <td>150</td>
              <td>100</td>
              <td class="red">-33</td>

              <td>150</td>
              <td>150</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Жом кукурузный</td>
              <td>900</td>
              <td>300</td>
              <td class="red">-67</td>

              <td>900</td>
              <td>600</td>
              <td class="red">-33</td>
            </tr>
            <tr>
              <td>Патока</td>
              <td>160</td>
              <td>60</td>
              <td>-63</td>

              <td>160</td>
              <td>160</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Вода</td>
              <td>200</td>
              <td>0</td>
              <td class="red">-100</td>

              <td>200</td>
              <td>0</td>
              <td class="red">-100</td>
            </tr>
            <tr>
              <td>Морковь</td>
              <td>400</td>
              <td>300</td>
              <td class="red">-25</td>

              <td>400</td>
              <td>340</td>
              <td class="red">-15</td>
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
