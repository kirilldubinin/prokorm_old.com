<template>
  <section class="card">
    <div class="prokorm">
      <h2><b>PRO</b>КОРМ</h2>
      <p>кормление животных</p>
    </div>
    <div class="content">
      <p class="main">Штоколов Илья Николаевич</p>
      <p>Директор по техничскому развитию</p>
      <p>8 800 550 28 27, ilya@prokorm.com</p>
    </div>
  </section>
</template>

<style lang="scss">

  @page {
    size: 90mm 50mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 90mm; // set appropriately
      height: 50mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .card {
    width: 90mm;
    height: 50mm;
    border: 1px solid #4d626f;
    margin: auto;
  }

  .prokorm2,
  .prokorm {
    margin: auto;
    font-family: 'Comfortaa', cursive;
    height: 25mm;
    color: #fff;
    background: #4d626f;
    text-align: center;
    padding: 8px 0 0 0;
    h2 {
      font-size: 50px;
      font-weight: 100;
      text-align: center;
      font-weight: 100;

      b {
        font-weight: 900;
      }
    }
    p {
      font-size: 22px;
      margin-top: -8px;
    }
  }

  .content {
    padding: 8px 0;
    text-align: center;
    font-size: 14px;
    color: #4d626f;
    p {
      padding: 2px 0;
    }
    .main {
      padding: 0;
      font-size: 24px;
    }
  }
</style>
