<template>
  <section class="label">
    <div class="prokorm">
      <h2><b>PRO</b>КОРМ</h2>
      <p>кормление животных</p>
    </div>

    <div class="title">
      <h2>Havrony</h2>
      <p>престартер для поросят</p>
    </div>

     <div class="main">
      <b>ТУ 10.91.10-001-25608808-2018</b>
      <p>
        <b>Гарантируемые показатели в 1 кг продукта:</b> Обменная энергия (мин.) – 11,5 МДж, Сырой протеин (мин.) – 21,0%,  Сырая клетчатка (макс.) – 7,0%, Сырая зола (макс.) – 4,0%, Сырой жир (мин.) – 4,5%, Кальций (мин.) – 0,9%, Фосфор (мин.) – 0,5%, Массовая доля влаги (макс.) – 14,0%.
      </p>
      <p>
        <b>Дополнительные показатели в 1 кг продукта:</b> Витамин А – 20 000,0 М.Е., Витамин D3 – 2 000,0 М.Е., Витамин Е – 160,0 мг.
      </p>
      <p>
        <b>Продукт содержит:</b> Соевый шрот, кукурузу экструдированную, горох экструдированный, подсолнечный шрот, пшеницу экструдированную, ячмень экструдированный, премикс, масло растительное, дрожжи, ароматизатор.
      </p>
      <p>
        <b>Рекомендации по применению:</b> Комбикорм Feedy Red можно скармливать телятам уже с 4 дня жизни. Необходимо в течение дня многократно подкладывать небольшое количество продукта, каждый раз увеличивая дозу. Использование данного продукта необходимо прекратить, если животное съедает ежедневно комбикорма больше, чем 1,5 кг. Обеспечить телятам доступ к чистой питьевой воде.
      </p>
      <p>
        <b>Изготовитель:</b> ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д. Васильчиково, д. 14. Телефон: 8-800-550-28-27,
      </p>
      <p>
        <b>e-mail:</b> sales@prokorm.com, сайт: http://prokorm.com.
      </p>
      <p>
        <b>Дата изготовления:</b>
      </p>
      <p>
        <b>Номер партии:</b>
      </p>
      <p>
        <b>Срок хранения:</b> 6 месяцев со дня изготовления.
      </p>
      <p>
        <b>Условия хранения:</b> Не хранить мешки в помещениях для животных. Открытый мешок после использования снова плотно закрыть. Хранить в сухом, прохладном месте, защищенном от прямых солнечных лучей. Производитель не несёт ответственности в случае неправильного хранения.
      </p>
      <p>
        <b>Масса нетто:</b> 25 кг
      </p>
    </div>

  </section>
</template>

<style lang="scss">

  $main-color: #4d626f;
  @page {
    size: 150mm 210mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 150mm; // set appropriately
      height: 210mm; // set appropriately
    }
  }

  .label {
    width: 150mm;
    height: 210mm;
    border: 1px solid #999;
    margin: 4em auto;
    .title {
      margin: 8mm 0 0 0;
      background-color: $main-color;
      h2 {
        font-size: 112px;
        line-height: 110px;
        vertical-align: middle;
        color: #fff;
        font-family: 'Baloo Bhaijaan', cursive;
        font-weight: normal;
        text-align: center;
      }
      p {
        text-align: center;
        font-family: 'Comfortaa', cursive;
        color: #fff;
        font-size: 26px;
        padding-bottom: 2mm;
      }
    }

    .main {
      padding: 0 4mm;
      text-align: justify;
      font-family: 'Comfortaa', cursive;
      color: #4d626f;
      font-size: 8px;
      line-height: 16px;
      margin-top: 20mm;
    }
  }

  .prokorm {
    font-family: 'Comfortaa', cursive;
    width: 40mm;
    height: 40mm;
    color: #fff;
    background: #4d626f;
    text-align: center;
    margin: 6mm auto 0 auto;
    padding-top: 15mm;
    h2 {
      font-family: 'Comfortaa', cursive;
      font-size: 25px;
      font-weight: 100;
      text-align: center;
      padding-top: 0mm;
      font-weight: 100;
      letter-spacing: 0px;
      padding-left: 2px;
      color: #fff;

      b {
        margin-right: 2px;
        font-weight: 900;
        letter-spacing: 2px;
      }

    }
    p {
      font-size: 11.5px;
      letter-spacing: 0px;
      /* margin-left: 0px; */
      /* margin-top: -6px; */
      text-align: center;
    }
  }
</style>
