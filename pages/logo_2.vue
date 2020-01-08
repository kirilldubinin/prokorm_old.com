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
    size: 200mm 200mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 200mm; // set appropriately
      height: 200mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .prokorm2,
  .prokorm {
    font-family: 'Comfortaa', cursive;
    width: 200mm;
    height: 200mm;
    color: #fefefe;
    background: transparent;
    text-align: center;
    border: 5px solid #fefefe;
    h2 {
      font-size: 130px;
    font-weight: 200;
    text-align: center;
    padding-top: 62mm;
    font-weight: 200;
    letter-spacing: 4px;
    padding-left: 2px;

      b {
       margin-right: 10px;
    font-weight: 900;
    letter-spacing: 2px;
      }

    }
    p {
          font-size: 60px;
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
