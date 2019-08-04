<template>
  <section>
    <div class="prokorm">
      <h2><b>PRO</b>КОРМ</h2>
      <p>кормление животных</p>
    </div>
    <!--div class="prokorm2">
      <h2><b>PRO</b>КОРМ</h2>
      <p>кормление животных</p>
    </div-->
  </section>
</template>

<style lang="scss">

  @page {
    size: 100mm 100mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 100mm; // set appropriately
      height: 100mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .prokorm2,
  .prokorm {
    font-family: 'Comfortaa', cursive;
    width: 100mm;
    height: 100mm;
    color: #fff;
    background: #4d626f;
    text-align: center;
    h2 {
      font-size: 60px;
    font-weight: 100;
    text-align: center;
    padding-top: 36mm;
    font-weight: 100;
    letter-spacing: 4px;
    padding-left: 2px;

      b {
       margin-right: 10px;
    font-weight: 900;
    letter-spacing: 2px;
      }

    }
    p {
          font-size: 28px;
    letter-spacing: 0px;
    margin-left: -7px;
    margin-top: -6px;
    }
  }

  .prokorm2 {
    width: 100mm;
    height: 26mm;
    background: none;
    color: #333;

    h2 {
      padding-top: 0;
    }
  }
</style>
