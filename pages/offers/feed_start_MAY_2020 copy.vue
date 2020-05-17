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
          <el-col class="logo-wrapper">
            <h2>ООО "ПРОКОРМ"</h2>
            <h3>sales@prokorm.com <br/>
            8 800 550 28 27</h3>
            <p class="address">
              Юридический адрес: 603123, г. Нижний Новгород, ул. Героя Шнитникова 4-3
              ИНН: 5256122945;
              КПП: 525601001;
              ОГРН: 1135256005994;
              БИК: 042202824;
              р/с: 40702810629050003180;
              к/с: 30101810200000000824;
              ФИЛИАЛ "НИЖЕГОРОДСКИЙ" АО "АЛЬФА-БАНК"
            </p>
          </el-col>
        </el-row>
      </div>
      <div class="offer">
        <h2 class="offer__name"> КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ НА КОМБИКОРМ <br/> <b>FEEDY START</b></h2>
        <div class="offer__content">
          <p>
            ООО "ПРОКОРМ" предлагает стартерный комбикорм для телят до 4 месяцев. Белковая основа представлена в виде ПОДСОЛНЕЧНОГО ШРОТА, РАПСОВОГО ЖМЫХА И ЭКСТРУДИРОВАННОГО ГОРОХА,
            энергетическая состовляющая предствлена в виде КУКУРУЗЫ, ЯЧМЕНЯ, ПШЕНИЦЫ и НАТУРАЛЬНОГО ПОДСОЛНЕЧНОГО МАСЛА. Витаминно-минеральная часть базируется на премиксе для КРС <b>"Camisan"</b> (Германия).
            <br/>
            Натуральный и сбаланасированный состав обеспечивает 100% поедаемость.
            <br/>
            Цена комбикорма FEEDY START - 28,50 руб за кг. Упакован в крафт мешки по 25 кг.
            <br/><br/>
            <b class="note">Не содержит мочевины, отрубей, пивной дробины и других зерноотходов.</b>
          </p>
          <p>
            <b>Состав:</b> Подсолнечный шрот, ячмень, горох экструдированный, рапсовый жмых, кукуруза, пшеница, витаминно-минеральный премикс, масло растительное, известняковая мука, ароматизатор, подсластитель.
          </p>
          <p>
            <b>Показатели:</b>
            СП (мин.) – 20,0%, ОЭ – 10,8 МДж, Сырая клетчатка (макс.) – 7,0%, Сырая зола (макс.) – 8,0%, Сырой жир (мин.) – 3,5%,
            Кальций (мин.) – 1,2%, Фосфор (мин.) – 0,6%, Массовая доля влаги (макс.) – 14,0%. Витамин А – 15 000,0 М.Е., Витамин D3 – 1 500,0 М.Е.,
            Витамин Е – 120,0 мг.
          </p>

          <!--br/>Комбикорм FEED START не содержит в своем составе мочевины, отрубей, пивной дробины либо других зерноотходов что в итоге позволяет добиться 100% поедаемости комбикорма.-->

          <div class="offer__content--main-image">
            <el-row class="offer__content--circles" type="flex" justify="center">
              <el-col class="offer__content--circle" :span="6">
                БЕЛОК<br/><b>20%</b>
              </el-col>
              <el-col class="offer__content--circle" :span="12">
               ОБМЕННАЯ ЭНЕРГИЯ<br/><b>11.0 Мдж</b>
              </el-col>
              <el-col class="offer__content--circle" :span="6">
               ЦЕНА<br/><b>28.50 руб/кг</b>
              </el-col>
            </el-row>
          </div>
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
      padding-top: 6px;
      color: #4d626e;
      text-align: justify;
    }

    .logo-wrapper {
      padding: 10mm;
      text-align: center;
      color: #4d626f;
      h2 {
        font-size: 32px;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 20px;
        font-weight: 100;
        line-height: 30px;
      }
    }
    .logo {
      text-align: center;
      padding-top: 20px;
      h2 {
        font-size: 32px;
      }
    }

    .header {
    }

    .offer {
      h2 {
        font-size: 20px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
        line-height: 36px;
        b {
          font-size: 24px;
        }
      }
      &__content {
        margin: 1em 2em;
        p {
          text-align: justify;
          font-size: 14px;
          line-height: 22px;
          color: #4d626e;
          margin: 10px 0;
          background: #fff;
          border-radius: 6px;
          padding: 1em;
        }
        &--main-image {
          background-image: url('../../static/feedy/start/feedy-start-2-min.png');
          background-size: 800px;
          height: 280px;
          background-repeat: no-repeat;
          background-position: center center;
          border-radius: 6px;
          padding-top: 110px;

          h1 {
            text-align: center;
            color: #fff;
            font-size: 56px;
            font-family: 'Baloo Bhaijaan', cursive;
            letter-spacing: 6px;
            margin-bottom: 60px;
          }
        }
        &--circles {
          padding: 16px 0;
          background: #fefefe;
          opacity: 0.8;
          margin: 0 40px;
          color: #4d626e;
        }
        &--circle {
          text-align: center;
          font-size: 20px;
          line-height: 28px;
        }

        .note {
          text-align: center;
          display: block;
        }
      }
    }
  }

</style>
