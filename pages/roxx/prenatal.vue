<template>
  <section class="roxx prenatal">
    <el-row type="flex">
        <el-col class="left" :span="12">
          <b>ТУ 10.91.10-003-25608808-2019</b>
            <p>
              <b>Гарантируемые показатели в 1 кг продукта:</b> Кальций – 8,0%, Фосфор – 10,0%, Натрий – 1,5%, Магний – 6,0%, Витамин А – 120 000,0 М.Е., Витамин D3 – 12 000,0 М.Е., Витамин Е – 1 200,0 мг., Массовая доля влаги (макс.) – 14,0%.
              <b>Продукт содержит:</b> Монокальцийфосфат, патоку, витаминно-минеральный премикс, пшеничные отруби мелкоизмельченные, оксид магния.
              <b>Рекомендации по применению:</b> Для дополнительной подкормки сухостойных коров. Среднее потребление – 200-250 грамм на голову в сутки. Это кормовая смесь с большим содержанием витаминов А , D3 и микроэлементов, поэтому необходимо скармливать её не больше 2% от общего суточного рациона.
              <b>Изготовитель:</b> ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д. Васильчиково, д. 14. Телефон: 8-800-550-28-27, e-mail: sales@prokorm.com, http://prokorm.com
              <b>Срок хранения:</b> 6 месяцев со дня изготовления.
              <b>Условия хранения:</b> Хранить в сухом, прохладном и гигиенически чистом месте. Производитель не несёт ответственности в случае неправильного хранения.
              <b>Масса нетто:</b> 25 кг
            </p>
            <p>
              <b>Дата изготовления:</b>
            </p>
            <p>
              <b>Номер партии:</b>
            </p>
        </el-col>
        <el-col class="right" :span="12">
          <div class="prokorm">
            <h2><b>PRO</b>КОРМ</h2>
            <p>кормление животных</p>
          </div>
          <div class="main">
            <h2>ROXX</h2>
            <p>prenatal</p>
          </div>
        </el-col>
    </el-row>
  </section>
</template>

<style lang="scss">

  html, body {

  }
  @page {
    size: 301mm 54mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 301mm; // set appropriately
      height: 54mm; // set appropriately
      background: #f7dbb9;
    }
    /* ... the rest of the rules ... */
  }

  .w-50 {
    display: inline-block;
    width: 50%;
  }

  .roxx {
    font-family: 'Comfortaa', cursive;
    width: 301mm;
    height: 54mm;
    margin: 2mm;
    .prokorm {
      width: 50mm;
      height: 50mm;
      background: #034f82;
      color: #fff;
      float: left;

      h2 {
        font-size: 30px;
        font-weight: 100;
        text-align: center;
        padding-top: 70px;

        b {
          margin-right: 4px;
        }
      }

      p {
        font-size: 13.5px;
        text-align: center;
        letter-spacing: 0px;
      }
    }

    .main {
      height: 50mm;
      font-size: 7.0px;
      padding: 0 3mm 2mm 3mm;
      background: #b2cae2;
      color: #034f81;
      margin-left: 50mm;
      h2 {
        font-size: 120px;
        font-family: 'Baloo Bhaijaan', cursive;
        height: 120px;
        line-height: 140px;
        font-weight: 100;
        letter-spacing: 10px;
        text-align: center;
      };

      p {
        font-size: 52px;
        letter-spacing: 4px;
        text-align: center;


      }
      .padding {
        padding: 4px 0;
      }
    }

    .left {
      height: 50mm;
      overflow: hidden;
      padding: 4px 20px 4px 4px;
      font-size: 9px;
      background: #f7dbb9;
      line-height: 11px;
      color: #c76e00;
      text-align: justify;
      p {
        padding: 3px 0;
      }
    }
  }

  .back {
    font-family: 'Comfortaa', cursive;
    width: 210mm;
    .prokorm {
      width: 50mm;
    height: 50mm;
    background: #034f81;
    color: #fff;
    float: left;

      h2 {
        font-size: 30px;
        font-weight: 100;
        text-align: center;
        padding-top: 70px;

        b {
          margin-right: 4px;
        }
      }

      p {
        font-size: 13.5px;
        text-align: center;
        letter-spacing: 0px;
      }
    }

    .main {
      height: 50mm;
      font-size: 7.0px;
      margin-left: 100mm;
      padding: 3mm;
      background: #b2cae2;
      color: #034f81;
      b {
        text-transform: uppercase;
      }
      p {
        margin: 2px 0;
      }
      .padding {
        padding: 6px 0;
      }
    }
  }

  .prenatal {
    .white,
    .prokorm {
      background: #c76e00;
    }
    .main{
      color: #c76e00;
      background: #f7dbb9;
    }
  }

  .energy {
    .white,
    .prokorm {
      background: #a53232;
    }
    .main{
      color: #a53232;
      background: #efafaf;
    }
  }

  .mintoll {
    .white,
    .prokorm {
      background: #007d05;
    }
    .main{
      color: #007d05;
      background: #aedab0;
    }
  }

  .super {
    .white,
    .prokorm {
      background: #4d626f;
    }
    .main{
      color: #4d626f;
      background: #adbcc3;
    }
  }

  .alfa {
    .white,
    .prokorm {
      background: #425d3f;
    }
    .main{
      color: #425d3f;
      background: #bdc3ad;
    }
  }

</style>
