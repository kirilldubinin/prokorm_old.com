<template>
  <section>
    <div class="kraft">
      <div class="main">
        <div class="prokorm">
          <h2><b>PRO</b>КОРМ</h2>
          <p>кормление животных</p>
        </div>

        <div class="circles">
          <div class="circle-line">
            <div class="sm-circle" style="padding-top: 12mm; font-size: 16mm;">с 4 <br/> дня</div>
            <div class="sm-circle" style="padding-top: 18mm; font-size: 9mm;">экструди-рованные<br/>зерновые</div>
            <div class="sm-circle" style="padding-top: 20mm; font-size: 8mm;">витаминно-минеральный комплекс</div>
          </div>
          <div class="clear"/>
          <div class="circle-line">
            <div class="sm-circle" style="padding-top: 12mm; font-size: 12mm;">полно-ценный состав</div>
            <div class="sm-circle" style="padding-top: 24mm; font-size: 10mm;">здоровый рубец</div>
            <div class="sm-circle" style="padding-top: 27mm; font-size: 16mm;">25 кг</div>
          </div>
        </div>

        <div class="address">
          <p class="p-1">
            www.prokorm.com
          </p>
          <p class="p-2">
            ООО "ПРОКОРМ"<br/>
            601470 Владимирская обл. Гороховецкий р-н,<br/> МО Денисовское, д.Васильчиково, дом 14.<br/>
            sales@prokorm.com
          </p>
        </div>
        <div class="bottom-line">
            <div class="sm-prokorm">
              <b>PRO</b>КОРМ
              <p>кормление животных</p>
            </div>
            <div class="sm-feedy">
              <img src="../static/cow_face_1.svg" />
              <span>Feedy</span>
            </div>
            <div class="sm-made">
              <p>сделано в</p>
              <b>РОССИИ</b>
            </div>
          </div>
      </div>
      <div class="circle">
        <img src="../static/cow_face_1.svg" />
        <h1 class="feedy">Feedy</h1>
        <p>комбикорм для телят<br/> от 0 до 6 месяцев</p>
      </div>
    </div>
    <div class="kraft-side">
      <div class="made">
        <p>сделано в</p>
        <h2>РОССИИ</h2>
      </div>
      <div class="prokorm">
        <h2><b>PRO</b>КОРМ</h2>
        <p>кормление животных</p>
      </div>
      <div class="sm-feedy">
        <img src="../static/cow_face_1.svg" />
        <span>Feedy</span>
        <img class="rst" src="../static/rst.png" />
        <img class="umbrella" src="../static/u-black.png" />
      </div>
    </div>

  </section>
</template>
<style lang="scss">
  $main-color: #de6e18;
  $black: #333;
  $white: #fff;

  .clear {
    clear: both;
    height: 10mm;
  }

  .kraft {
    font-family: 'Comfortaa', cursive;
    width: 500mm;
    height: 800mm;
    border: 1px solid #eee;
    float: left;
    position: relative;

    .main {
      width: 260mm;
      height: 100%;
      margin: auto;
      background: $main-color;
      padding-top: 40mm;
      color: $white;
      .prokorm {
        width: 80mm;
        height: 80mm;
        margin: 0 auto;
        background-color: #de6e18;
        color: #fff;
        border: 2mm solid #fff;

        h2 {
          margin-top: 26mm;
          text-align: center;
          font-weight: 100;
          font-size: 13.4mm;
        }
        p {
          text-align: center;
          font-size: 6.0mm;
        }
      }

      .circles {
        color: #fff;
        padding-top: 410mm;

        .circle-line {
          margin-bottom: 10mm;
          clear: both;
        }
        .sm-circle {
          width: 70mm;
          height: 70mm;
          border: 1.5mm solid #fff;
          border-radius: 50%;
          float: left;
          margin-left: 11.5mm;
          font-size: 8mm;
          text-align: center;
        }
      }
      .bottom-line {
        height: 50mm;
        background: #f5c41c;
        position: absolute;
        bottom: 0;
        .sm-prokorm {
          padding-top: 17mm;
          text-align: center;
          font-size: 8.2mm;
          height: 50mm;
          width: 50mm;
          background: $black;
          background-color: $black;
          color: $white;
          font-weight: 100;
          b {
            margin-right: 1.5mm;
          }
          p {
            font-size: 3.7mm;
          }
          float: left;
        }
        .sm-feedy {
          width: 160mm;
          float: left;
          color: $black;
          font-family: 'Baloo Bhaijaan', cursive;
          position: relative;
          img {
            margin-left: 7mm;
            margin-top: 6mm;
            width: 38mm;
            height: 38mm;
          }
          span {
            position: absolute;
            font-size: 36mm;
            line-height: 20mm;
            top: 16mm;
            right: 10mm;
            opacity: 0.9;
          }
        }
        .sm-made {
          padding-top: 17mm;
          text-align: center;
          font-size: 8.2mm;
          height: 50mm;
          width: 50mm;
          background: $black;
          background-color: $black;
          color: $white;
          margin-left: 210mm;
          p {

            font-size: 5mm;
            margin-bottom: 1mm;
          }
        }
      }

      p.www {
        text-align: center;
        font-size: 10mm;
        font-weight: bold;
        margin-bottom: 10mm;
      }
      .address {
        margin: 80mm 10mm 20mm 10mm;
        font-size: 4mm;
        line-height: 6mm;

        .p-1 {
          font-weight: 700;
          text-align: center;
          font-size: 12mm;
        }
        .p-2 {
         padding: 10mm 20mm 0 20mm;
        font-size: 6mm;
        text-align: center;
        line-height: 10mm;
        }
        .p-3 {
          width: 66mm;
          text-align: right;
          color: $white;
          img.rst {
            width: 20mm;
            margin-right: 4mm;
          }
          img.umbrella {
            width: 16mm;
          }
        }
      }
    }

    .circle {
      top: 160mm;
      left: 70mm;
      position: absolute;
      text-align: center;
      width: 360mm;
      height: 360mm;
      background-color: #f5c41c;
      border-radius: 50%;
      padding-top: 71px;
      border: 8mm solid #fff;
      color: $black;

      p {
        color: #333;
        font-size: 14px;
        margin-top: 20px;
        font-weight: 700;
        line-height: 20px;
        opacity: 0.9;
      }

      img {
        width: 100mm;
        height: 100mm;
      }
      h1 {
        font-family: 'Baloo Bhaijaan', cursive;
        font-size: 86mm;
        letter-spacing: 4mm;
      }
      p {
        font-size: 20mm;
        line-height: 28mm;
        margin-top: -4mm;
      }
    }
  }
  .kraft-side {
    font-family: 'Comfortaa', cursive;
    height: 800mm;
    width: 130mm;
    border: 1px solid #eee;
    border-left: none;
    margin-left: 499mm;
    position: relative;
    padding: 0 15mm;

    .made,
    .prokorm {
      color: #fff;
      background: #333;
      height: 100mm;
      width: 100mm;
      position: absolute;
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
      position: absolute;
      bottom: 100mm;

      h2 {
        margin-top: 36mm;
        text-align: center;
        font-weight: 100;
        font-size: 16mm;
        b {
          margin-right: 2mm;
        }
      }
      p {
        text-align: center;
        font-size: 7.4mm;
      }
    }

    .made {
      position: absolute;
      bottom: 600mm;
      left: 15mm;
      h2 {
        margin: 0;
      }
      p{
        font-size: 10mm;
        margin-top: 34mm;
      }
    }

    .sm-feedy {
      background: #f5c41c;
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
      width: 800mm;
      height: 100mm;
      position: absolute;
      top: 350mm;
      left: -335mm;
      z-index: -1;
      padding-left: 210mm;
      font-size: 52mm;
      color: #333;
      font-family: 'Baloo Bhaijaan', cursive;
      img {
        width: 50mm;
        height: 50mm;
        margin: 24mm 10mm;
      }
      span {
        height: 40mm;
        line-height: 40mm;
        position: absolute;
        top: 30mm;
      }
      .rst {
        position: absolute;
        opacity: 0.8;
        left: 490mm;
        width: 30mm;
        height: 30mm;
        top: 11mm;
      }
      .umbrella {
        left: 534mm;
        width: 30mm;
        height: 30mm;
        top: 10mm;
        opacity: 0.8;
        position: absolute;
      }
    }
  }
</style>
