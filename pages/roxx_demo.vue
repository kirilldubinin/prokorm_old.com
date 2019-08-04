<template>
  <section>
    <div class="list">
      <!--div class="prokorm">
        <h2><b>PRO</b>КОРМ</h2>
        <p>кормление животных</p>
      </div-->
      <div class="roxx">
        <h2>ROXX</h2>
        <p>лизунец в пластиковом ведре 25 кг.</p>
      </div>
      <div class="roxx-item">
        <div>
          <h2 class="w-50 roxx-item--name">standard</h2>
          <h2 class="w-50 roxx-item--price">1700 руб.</h2>
          <p class="roxx-item--title">для дойных коров и бычков на откорме</p>
        </div>
        <p class="roxx-item--description">
          <b>Состав:</b> Патока, витаминно-минеральный премикс, карбонат кальция, монокальцийфосфат, пшеничные отруби мелкоизмельченные, хлорид натрия, оксид магния.
        </p>
        <p class="roxx-item--description">
          <b>В 1 кг продукта:</b> Кальций – 12,0%, Фосфор – 4,0%, Натрий – 6,0%, Магний – 6,0%, Массовая доля влаги (макс.) – 14,0%, Витамин А – 100 000,0 М.Е., Витамин D3 – 10 000,0 М.Е., Витамин Е – 800,0 мг.
        </p>
      </div>

      <div class="roxx-item super">
        <h2 class="w-50 roxx-item--name">super cow</h2>
        <h2 class="w-50 roxx-item--price">1900 руб.</h2>
        <p class="roxx-item--title">для высокоудойных коров и ремонтных телок</p>
        <p class="roxx-item--description">
          <b>Состав:</b> Карбонат кальция, патоку, витаминно-минеральный премикс, монокальцийфосфат, пшеничные отруби мелкоизмельченные, оксид магния, хлорид натрия, натуральный ментол.а
        </p>
        <p class="roxx-item--description">
          <b>В 1 кг продукта:</b> Кальций – 14,0%, Фосфор – 4,0%, Натрий – 3,5%, Магний – 5,5%, Массовая доля влаги (макс.) – 14,0%, Витамин А – 75 000,0 М.Е., Витамин D3 – 7 500,0 М.Е., Витамин Е – 600,0 мг.
        </p>
      </div>

      <div class="roxx-item mintoll">
        <h2 class="w-50 roxx-item--name">menthol</h2>
        <h2 class="w-50 roxx-item--price">2000 руб.</h2>
        <p class="roxx-item--title">для телят от 0 до 6 месяцев</p>
        <p class="roxx-item--description">
          <b>Состав:</b> Карбонат кальция, патоку, витаминно-минеральный премикс, монокальцийфосфат, пшеничные отруби мелкоизмельченные, оксид магния, хлорид натрия, натуральный ментол.а
        </p>
        <p class="roxx-item--description">
          <b>В 1 кг продукта:</b> Кальций – 14,0%, Фосфор – 4,0%, Натрий – 3,5%, Магний – 5,5%, Массовая доля влаги (макс.) – 14,0%, Витамин А – 75 000,0 М.Е., Витамин D3 – 7 500,0 М.Е., Витамин Е – 600,0 мг.
        </p>
      </div>

      <div class="roxx-item prenatal">
        <h2 class="w-50 roxx-item--name">prenatal</h2>
        <h2 class="w-50 roxx-item--price">2200 руб.</h2>
        <p class="roxx-item--title">для сухостойных коров</p>
        <p class="roxx-item--description">
          <b>Состав:</b> Монокальцийфосфат, патока, витаминно-минеральный премикс, пшеничные отруби мелкоизмельченные, оксид магния.
        </p>
        <p class="roxx-item--description">
          <b>В 1 кг продукта:</b> Кальций – 8,0%, Фосфор – 10,0%, Натрий – 1,5%, Магний – 6,0%, Массовая доля влаги (макс.) – 14,0%, Витамин А – 120 000,0 М.Е., Витамин D3 – 12 000,0 М.Е., Витамин Е – 1 200,0 мг.
        </p>
      </div>

      <div class="roxx-item energy">
        <h2 class="w-50  roxx-item--name">energy</h2>
        <h2 class="w-50 roxx-item--price">2500 руб.</h2>
        <p class="roxx-item--title">лизунец для новотельных коров</p>
        <p class="roxx-item--description">
          <b>Состав:</b> Патока, витаминно-минеральный премикс, карбонат кальция, монокальцийфосфат, пшеничные отруби мелкоизмельченные, хлорид натрия, оксид магния.
        </p>
        <p class="roxx-item--description">
          <b>В 1 кг продукта:</b> Кальций – 12,0%, Фосфор – 4,0%, Натрий – 6,0%, Магний – 6,0%, Массовая доля влаги (макс.) – 14,0%, Витамин А – 100 000,0 М.Е., Витамин D3 – 10 000,0 М.Е., Витамин Е – 800,0 мг.
        </p>
      </div>

      <div class="footer">
        <h1>ООО "ПРОКОРМ"</h1>
        <p>кормление животных</p>
        <h2>8 800 550 28 27, sales@prokorm.com</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

  @page {
    size: 150mm 210mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 150mm; // set appropriately
      height: 210mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .w-50 {
    display: inline-block;
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 150mm;
    height: 210mm;
    border: 1px solid #fefefe;
    background: #306390;
    margin: auto;
    .prokorm {
      color: #fefefe;
      width: 30mm;
      height: 30mm;
      background: #306390;
      text-align: center;
      font-size: 3.4mm;
      /* display: inline-block; */
      border-right: 1px solid #fefefe;
      float: left;
      h2 {
        padding-top: 10mm;
        font-weight: 100;
        b {
          margin-right: 0.8mm;
        }
      }
      p {
        font-size: 2.3mm;
      }
    }
    .roxx {

      height: 30mm;
      /* display: inline-block; */
      color: #fefefe;
      background: #306390;
      font-family: 'Baloo Bhaijaan', cursive;
      text-align: center;
      h2 {
        font-size: 80px;
        line-height: 70px;
        letter-spacing: 10px;
        padding-top: 10px;
      }
      p {
        font-family: 'Comfortaa', cursive;
        font-size: 16px;
      }
    }

    .roxx-item {
      padding: 4px 12px;
      height: 30mm;
      background: #b2cae2;
      color: #034f81;
      z-index: -1;

      &--name {
        font-size: 30px;
        width: 60mm;
      }
      &--title {
        margin: 0 0 3px 0px;
        font-size: 16px;
      }
      &--price {
        font-size: 6mm;
        text-align: right;
        width: 80mm;
      }


      &--description {
        font-size: 9px;
        padding: 0 0 2px 0;
        line-height: 13px;
      }
    }

    .footer {
      height: 30mm;
      background: #306390;
      color: #fefefe;
      text-align: center;
      padding: 4mm 3mm;
      p {
        font-size: 14px;
        margin: 4px 0 0px 0;

      }
      h2 {
        padding-top: 20px;
        font-size: 16px;
        font-weight: 200;
      }
    }

    .prenatal {
      color: #ca7000;
      background: #f7dbb9;
    }
    .energy {
      color: #a53232;
      background: #efafaf;
    }

    .mintoll {
      color: #007d05;
      background: #aedab0;
    }

     .super {
      color: #4d626f;
      background: #adbcc3;
    }
  }

</style>
