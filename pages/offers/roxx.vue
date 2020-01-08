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
        <h2 class="offer__name"> КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ НА ЛИЗУНЦЫ <b>ROXX</b></h2>
        <div class="offer__content">
          <el-row type="flex" class="offer__content--item">
            <el-col :span="4">
              <img src="../../static/roxx/standard/roxx-standard-1-min.png"/>
            </el-col>
            <el-col :span="20" class="offer__content--item--description">
              <b>ROXX standard</b>
              <p>лизунец в пластиковом ведре для дойных коров и бычков на откорме, 25 кг.</p>
              <p>Состав: Карбонат кальция, патока, хлорид натрия, витаминно-минеральный премикс, пшеничные отруби мелкоизмельченные, монокальцийфосфат, оксид магния.</p>
              <p><b>Цена: 1700 руб</b></p>
            </el-col>
          </el-row>
          <el-row type="flex" class="offer__content--item">
            <el-col :span="4">
              <img src="../../static/roxx/alfa/roxx-alfa-1-min.png"/>
            </el-col>
            <el-col :span="20" class="offer__content--item--description">
              <b>ROXX alfalfa</b>
              <p>лизунец в пластиковом ведре для дойных коров и бычков на откорме, 25 кг.</p>
              <p>Состав: Мелкоизмельченная люцерновая мука, патока, витаминно-минеральный премикс, оксид магния, хлорид натрия.</p>
              <p><b>Цена: 1700 руб</b></p>
            </el-col>
          </el-row>
          <el-row type="flex" class="offer__content--item">
            <el-col :span="4">
              <img src="../../static/roxx/super/roxx-super-1-min.png"/>
            </el-col>
            <el-col :span="20" class="offer__content--item--description">
              <b>ROXX supercow</b>
              <p>лизунец в пластиковом ведре для высокоудойных коров и ремонтных телок, 25 кг.</p>
              <p>Состав: Патока, витаминно-минеральный премикс, карбонат кальция, монокальцийфосфат, пшеничные отруби мелкоизмельченные, хлорид натрия, оксид магния.</p>
              <p><b>Цена: 1900 руб</b></p>
            </el-col>
          </el-row>
          <el-row type="flex" class="offer__content--item">
            <el-col :span="4">
              <img src="../../static/roxx/menthol/roxx-menthol-1-min.png"/>
            </el-col>
            <el-col :span="20" class="offer__content--item--description">
              <b>ROXX menthol</b>
              <p>лизунец в пластиковом ведре для телят от 0 до 6 месяцев, 25 кг.</p>
              <p>Состав: Карбонат кальция, патока, витаминно-минеральный премикс, монокальцийфосфат, пшеничные отруби мелкоизмельченные, оксид магния, хлорид натрия, натуральный ментол.</p>
              <p><b>Цена: 2000 руб</b></p>
            </el-col>
          </el-row>
          <el-row type="flex" class="offer__content--item">
            <el-col :span="4">
              <img src="../../static/roxx/prenatal/roxx-prenatal-1-min.png"/>
            </el-col>
            <el-col :span="20" class="offer__content--item--description">
              <b>ROXX prenatal</b>
              <p>лизунец в пластиковом ведре для сухостойных коров, 25 кг.</p>
              <p>Состав: Монокальцийфосфат, патока, витаминно-минеральный премикс, пшеничные отруби мелкоизмельченные, оксид магния.</p>
              <p><b>Цена: 2200 руб</b></p>
            </el-col>
          </el-row>
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
      h2 {
        font-size: 20px;
        font-weight: 100;
        color: #4d626e;
        text-align: center;
      }
      &__content {
        margin: 1em 5em;
        &--item {
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          &--description {
            b {
              font-size: 16px;
            }
            p {
              margin: 0.5em 0;
            }
            font-size: 12px;
            color: #4d626e;
            padding: 1em 0 1em 2em;
          }
        }
      }
    }
  }

</style>
