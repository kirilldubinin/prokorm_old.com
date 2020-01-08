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
        <h2 class="offer__name">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ НА ПА ПРОГРАММУ <b>AGRODESK.NET</b></h2>
        <div class="offer__content">

          Компания ООО "ПРОКОРМ" может предложить ФГБУ ЦАС "Нижегородский" следующую  схему работы
          <br/>
          <br/>
          <ul>
            <li>- ФГБУ ЦАС "Нижегородский" будет зарегистрирован в качестве партнера в программе agrodesk.net</li>
            <li>- Каждый партнер имеет свой логин и пароль для защиты персональных данных</li>
            <li>- С помощью логина и пароля партнер может войти в программу agrodesk.net</li>
            <li>- После этого у партнера будет возможность ввести анализы корма для любого хозяйства которое зарегистрировано  как клиент в программе agrodesk.net</li>
            <li>- Партнер вводит БАЗОВЫЕ показатели анализа корма</li>
            <li>- Партнер сохраняет корм</li>
            <li>- Далее на серверах agrodesk.net происходят следующие этапы
              <ul>
                <li>- agrodesk.net рассчитывает ДОПОЛНИТЕЛЬНЫЙ список показателей
                  <ul>
                    <li>1. net energy of lactation (NEL)</li>
                    <li>2. used protein (nXP)</li>
                    <li>3. ruminale N-bilanz (RNB)</li>
                    <li>4. UDP</li>
                    <li>5. Переваримость органического вещества</li>
                    <li>6. NFC (не структурные углеводы)</li>
                    <li>7. Растворимость сырого протеина</li>
                    <li>8. DVE</li>
                    <li>9. OEB</li>
                    <li>10. FOS</li>
                  </ul>
                </li>
                <li>- дополнительные показатели сохраняются в анализе корме</li>
              </ul>
          </li>
          <li>- Клиент получает  уведомление по email/sms о получении нового анализа корма и ссылку на этот анализ</li>
          <li>- Клиент также имеет логини и пароль для входа в программу agrodesk.net</li>
          <li>- Клиент переходит по ссылке из email/sms и входит в программу agrodesk.net для просмотра анализа корма</li>
          <li>- Клиент может ввести дополнительные показатели из других лабораторий или такие свойства корма как номер укоса, консервант, расположение траншей  и многое другое</li>
          <li>- таким образом ВСЕ анализы кормов предприятия клиента хранятся в единой, защищённой  логином и паролем базе, что позволяет быстро найти любой анализ корма</li>
          <li>- Клиент имет БЕСПЛАТНЫЙ доступ к анализам своих кормов в программе agrodesk.net</li>
          <li>- Все анализы кормов хранятся БЕССРОЧНО в программе agrodesk.net</li>
          <li>- Партнер платит 100 рублей (с НДС) за ввод одного анализа корма и расчет дополнительных показателей</li>
          <li>- Оплата партнером осуществляется раз в месяц/квартал в зависимости от фактического  количества введённых  кормов</li>
          <li>- Партнер имеет доступ к просмотру  всех анализов введённым  им для клиента</li>
          </ul>
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
