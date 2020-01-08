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
        <h2 class="offer__name">Генеральному директору Хмырову А.Л.</h2>
        <div class="offer__content">
          <p>
            Настоятельно требуем от Вас вернуть денежные средства в размере 9 471 рублей 00 копеек, оплаченных по счету
            № 6756 от 17.09.2019 года за металлопродукцию и уплотнитель, в связи с невозможностью отгрузки с вашей стороны.
            <br/>
            Платежное поручение № 572 от 18.09.2019 года
          </p>

          <p>
            Генеральный директор ООО "ПРОКОРМ"
          </p>
          <p>
            02.10.2019
          </p>

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

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 210mm;
    height: 297mm;
    margin: auto;
    background: #eaeaea;
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
    .address {
      font-size: 9px;
      line-height: 16px;
      padding-top: 46px;
      color: #4d626e;
    }

    .header {
      margin-bottom: 2em;
    }

    .offer {
      margin: 1em 0;
      h2 {
        font-size: 16px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
        margin-bottom: 2em;
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
