<template>
  <section class="container">
    <div class="title">
        <b>PRO</b> КОРМ
      </div>
      <div class="grey">
        <div class="super-title">
          Feedy
        </div>
        <div class="sub-title">
          мюсли, престартеры и стартеры для телят
        </div>
      </div>
      <div class="content">
        <div @click="select('muesli')" class="muesli">Muesli</div>
        <div @click="select('red')" class="red">Red</div>
        <div @click="select('green')" class="green">Green</div>
        <div @click="select('start')" class="start">Start</div>
        <div @click="select('standard')" class="standart">Standard</div>
      </div>
  </section>
</template>

<style lang="scss">

  .container {
    background-image: url('../static/cow.jpg');
    height: 740px;
    width: 360px;
    background-repeat: no-repeat;
    background-size: 758px;
    background-position: -354px -42px;
    margin: 1em auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    padding: 1px 0;


    .title {
      text-align: center;
      font-size: 22px;
      margin: 26px 0 0 0;
      color: #444;
      b {
        margin-right: -6px;
      }
      div {
        font-family: 'Baloo Bhaijaan', cursive;
        line-height: 10px;
        font-size: 17px;
        margin-bottom: 10px;
      }
    }

    .super-title {
      font-size: 110px;
      text-align: center;
      color: #444;
      font-family: 'Baloo Bhaijaan', cursive;
      top: 28px;
      left: 34px;
      line-height: 0.9em;
      margin-bottom: 14px;
    }

    .sub-title {
      font-size: 18px;
      text-align: center;
      top: 190px;
      color: #000;
      background-color: #f0f0f0;
      border-radius: 2px;
      left: 0px;
      line-height: 1.4em;
    }

    .grey {
      background-color: #f0f0f0;
      padding: 10px 10px;
      opacity: 0.9;
      border-radius: 5px;
      margin: 20px 16px 0 16px;
    }

    .content {
      &>div {
        width: 180px;
        font-size: 32px;
        text-align: center;
        padding: 10px 0;
        border-radius: 4px;
        opacity: 0.5;
        color: #fff;
        margin-top: 40px;
        margin: 30px auto;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
      }
    }

  }
</style>
