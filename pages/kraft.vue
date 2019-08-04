<template>
  <el-row type="flex">
    <el-col>
      <section class="kraft main">
        <div class="logo-wrapper">
          <div class="prokorm">
            <h2><b>PRO</b>КОРМ</h2>
            <p>кормление животных</p>
          </div>
        </div>
        <img src="../static/cow_face_1.svg" class="animal-logo" />
        <div class="circle">
          <h1 class="feedy">Feedy</h1>
          <p>комбикорм для телят<br/> от 0 до 6 месяцев</p>
        </div>
        <div class="bottom">
          <el-row type="flex" class="kraft__center" style="padding-bottom: 10px;">
            <el-col :span="6" class="circle-sm left" style="padding-top: 17px;font-size: 6px;">c 4 дня<br />жизни</el-col>
            <el-col :span="6" class="circle-sm center" style="font-size: 5px;">экструди-рованные<br/>зерновые</el-col>
            <el-col :span="6" class="circle-sm right" style="padding-top: 14px;">витаминно-минеральный комплекс</el-col>
          </el-row>
          <el-row type="flex" class="kraft__center">
            <el-col :span="6" class="circle-sm left" style="padding-top: 14px; font-size: 6px;">полно-ценный состав</el-col>
            <el-col :span="6" class="circle-sm center" style="padding-top: 17px;font-size: 6px;">здоровый рубец</el-col>
            <el-col :span="6" class="circle-sm right" style="padding-top: 18px;font-size: 12px;">25 кг</el-col>
          </el-row>
          <p class="www">www.prokorm.com</p>
          <p class="address">ООО "ПРОКОРМ"
            601470 Владимирская обл. Гороховецкий р-н,
            МО Денисовское,
            д.Васильчиково,
            дом 14. </p>
          <el-row type="flex" class="line">
            <el-col class="prokorm-sm">
              <h2 style="font-weight: 100;"><b style="margin-right: 1px;">PRO</b>КОРМ</h2>
              <p>кормление животных</p>
            </el-col>
            <el-col class="feedy-sm"><img src="../static/cow_face_1.svg" />Feedy </el-col>
            <el-col class="made-in">
              <p>сделано в</p>
              <h2>РОССИИ</h2>
            </el-col>
          </el-row>
        </div>
      </section>
    </el-col>
    <el-col>
      <section>
        <div class="side">

        </div>
      </section>
    </el-col>
    <!--el-col>
      <section class="kraft main fish">
        <div class="prokorm">
          <h2><b>PRO</b>КОРМ</h2>
          <p>кормление животных</p>
        </div><img src="../static/tuna.svg" class="animal-logo" />
        <div class="circle">
          <h1 class="feedy">FISHKING</h1>
          <p>комбикорм <br/> рыбный</p>
        </div>
        <div class="bottom">
          <el-row type="flex" class="kraft__center" style="padding-bottom: 10px;">
            <el-col :span="6" class="circle-sm left" style="padding-top: 17px;font-size: 7px;">c 1 дня<br />жизни
            </el-col>
            <el-col :span="6" class="circle-sm center" style="font-size: 6px;">экструди-рованные зерновые </el-col>
            <el-col :span="6" class="circle-sm right" style="padding-top: 14px;">минерально-витаминный комплекс
            </el-col>
          </el-row>
          <el-row type="flex" class="kraft__center">
            <el-col :span="6" class="circle-sm left" style="padding-top: 14px; font-size: 7px;">21% <br />протеина
            </el-col>
            <el-col :span="6" class="circle-sm center" style="padding-top: 14px;font-size: 7px;">11.5 МДж энергии
            </el-col>
            <el-col :span="6" class="circle-sm right" style="padding-top: 18px;font-size: 12px;">25 кг </el-col>
          </el-row>
          <p class="www">www.prokorm.com</p>
          <p class="address">ООО "ПРОКОРМ"

            601470 Владимирская обл. Гороховецкий р-н,
            МО Денисовское,
            д.Васильчиково,
            дом 14. </p>
          <el-row type="flex" class="line">
            <el-col class="prokorm-sm">
              <h2><b>PRO</b>КОРМ</h2>
              <p>кормление животных</p>
            </el-col>
            <el-col class="feedy-sm"><img src="../static/tuna.svg" />Feedy </el-col>
            <el-col class="made-in">
              <p>сделано в</p>
              <h2>РОССИИ</h2>
            </el-col>
          </el-row>
        </div>
      </section>
    </el-col-->
  </el-row></template>
<style lang="scss">

  @page {
    size: 100mm 160mm;
    margin: 0;
  }
  @media print {
    html, body {
      width: 100mm;
      height: 160mm;
    }
  }

  .side {
    height: 160mm;
    width: 25mm;
    border: 1px solid #eee;
  }

  .line {
    font-family: 'Comfortaa', cursive;
    background-color: #f5c41c;
    height: 30px;
    margin-top: 10px;


    .made-in,
    .prokorm-sm {
      width: 30px;
      font-size: 3.4px;
      background-color: #313131;
      color: #fefefe;
      text-align: center;
      padding-top: 11px;
      min-width: 30px;
      display: block;

      p {
        font-size: 2.2px;
      }
    }

    .made-in {
      padding-top: 11px;

      p {
        font-size: 3px;
        padding-bottom: 0.6px;
      }
    }

    .feedy-sm {
      font-size: 20px;
      font-family: 'Baloo Bhaijaan', cursive;
      font-weight: normal;
      padding: 0 10px 0 30px;
      opacity: 0.9;

      img {
        height: 20px;
        margin: 5px 6px 0 0px;
        float: left;

      }
    }
  }

  .kraft {
    font-family: 'Comfortaa', cursive;
    color: #2f333e;
    width: 100mm;
    height: 160mm;
    border: 1px solid #eee;
    margin: auto;

    &__center {
      width: 100%;
      padding: 0px 10px 0 10px;
    }



    .prokorm {
      margin-top: 20px;
    height: 20mm;
    width: 20mm;
    padding-top: 0em;
    background-color: #de6e18;
    color: #fff;
    border: 2px solid #fff;
    margin: 0 auto;

      h2 {
        font-size: 12px;
    font-weight: 100;
    text-align: center;
    padding-top: 30px;

        b {
          margin-right: 2px;
        }
      }

      p {
        font-size: 5px;
    text-align: center;
      }
    }

    .feedy {
      height: 76px;
      font-size: 56px;
      color: #616161;
      font-family: 'Baloo Bhaijaan', cursive;
      font-weight: normal;
      text-align: center;
      opacity: 0.9;
    }

    .green {
      width: 148px;
      font-size: 24px;
      text-align: center;
      padding: 6px 0;
      border-radius: 4px;
      color: #fff;
      margin: 0 auto;
      background-color: #2f6728;
    }

  }

  .kraft.main {
    position: relative;

    .logo-wrapper {
       background-color: #de6e18;
    width: 200px;
    margin: 0 auto;
    height: 200px;
    position: absolute;
    left: 88px;
    z-index: -1;
    }
    .prokorm {
      margin-top: 20px;
    height: 20mm;
    padding-top: 0em;
    background-color: #de6e18;
    color: #fff;
    border: 2px solid #fff;
    }

    .feedy {
      color: #333;
      font-size: 72px;
    }

    .animal-logo {
      position: absolute;
      width: 80px;
      height: 80px;
      left: 150px;
      top: 130px;
    }

    .circle {
      text-align: center;
      margin: 110px auto 0 auto;
      width: 260px;
      height: 260px;
      background-color: #f5c41c;
      border-radius: 50%;
      padding-top: 71px;
      border: 5px solid #fff;
      z-index: 100000;



      p {
        color: #333;
    font-size: 14px;
    margin-top: 20px;
    font-weight: 700;
    line-height: 20px;
    opacity: 0.9;

      }
    }

    .bottom {
      background-color: #de6e18;
      width: 200px;
      margin: 0 auto;
      position: absolute;
      left: 88px;
      top: 277px;
      z-index: -1;
      padding-top: 100px;
      height: 326px;

      .circle-sm {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        font-size: 5px;
        color: #fff;
        border: 1px solid #fff;
        vertical-align: middle;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.6em;

        &.left {
          padding-top: 22px;
        }

        &.center {
          margin: 0 10px;
          padding-top: 14px;
        }

        &.right {
          padding-top: 14px;
        }

      }


      .www {
        color: #fff;
        text-align: center;
        font-size: 10px;
        font-weight: 700;
        margin: 20px 0 5px 0;
      }

      .address {
        font-size: 4px;
        padding: 0 46px;
        line-height: 6px;
        margin: 0;
        color: #fff;
        text-align: center;
      }
    }

    &.fish {
      .prokorm {
        background: #8b2417;
      }
      .circle {
        background: #d98b43;
      }
      .bottom {
        background: #8b2417;

        .line {
          background: #d98b43;
        }
      }
      .feedy {
        padding-top: 18px;
        font-size: 52px;
      }

    }
  }

</style>
