<template>
  <section>
    <div class="mktsight">
      <h1 class="header">
        <b>MARKET</b>SIGHT
      </h1>

      <div class="trial-plan-select">
        <h2>
          Choose your trial plan
        </h2>
        <el-row class="plans" type="flex" :gutter="20">
          <el-col :span="7" class="plan">
            <el-row>
              <el-col :span="12"><h3>Academic</h3></el-col>
              <el-col :span="12" class="price"><h3>€ 42,75</h3></el-col>
            </el-row>
            <p>per user per month <br/> billed annually or € 45,00 billed monthly</p>

            <div class="features">
              <h4>Features include</h4>
              <ul>
                <li>Advanced Analytics</li>
                <li>Crosstabs</li>
                <li>Charts</li>
                <li>Data Views</li>
                <li>Key Findings</li>
              </ul>
            </div>
            <el-button type="primary">TRY</el-button>
          </el-col>
          <el-col :span="7" class="plan select">
            <el-row>
              <el-col :span="12"><h3>Select</h3></el-col>
              <el-col :span="12" class="price"><h3>€ 1.425,00</h3></el-col>
            </el-row>
            <p>per user per month<br/> billed annually or € 125,00 billed monthly</p>

            <div class="features">
              <h4>Features include</h4>
              <ul>
                <li>Crosstabs</li>
                <li>Charts</li>
                <li>Dashboard Designer</li>
                <li>Data Views</li>
                <li>Key Findings</li>
                <li>Export to Excel</li>
                <li>Export to Powerpoint</li>
                <li>Multiple Users</li>
              </ul>
            </div>
            <el-button type="primary">TRY</el-button>
          </el-col>
          <el-col :span="7" class="plan">
            <el-row>
              <el-col :span="12"><h3>Premium</h3></el-col>
              <el-col :span="12" class="price"><h3>€ 1.927,00</h3></el-col>
            </el-row>
            <p>per user per month<br/> billed annually or € 169,00 billed monthly</p>

            <div class="features">
              <h4>Features include</h4>
              <ul>
                <li>Crosstabs</li>
                <li>Charts</li>
                <li>Dashboard Designer</li>
                <li>Data Views</li>
                <li>Key Findings</li>
                <li>Export to Excel</li>
                <li>Export to Powerpoint</li>
                <li>Multiple Users</li>
                <li>Custom UI Skin</li>
                <li>Powerpoint Sync</li>
                <li>Advanced Analytics</li>
              </ul>
            </div>
            <el-button type="primary">TRY</el-button>
          </el-col>
        </el-row>
      </div>

      <div class="footer">

      </div>
    </div>

  </section>
</template>

<style lang="scss">

  .mktsight {
    width: 900px;
    height: 600px;
    border: 1px solid #ddd;
    margin: 10em auto 0 auto;
    font-family:  'Montserrat', sans-serif;
    color: #555;

    .header {
      font-size: 26px;
      font-weight: 100;
      text-align: center;
      padding: 10px 0;
      color: #fefefe;
      background: #3172b8;
      b {
        padding-right: 4px;
      }
    }
    .trial-plan-select {
      h2 {
        padding: 20px 0 20px 0;
        text-align: center;
        font-weight: 100;
      }

      .plans {
        height: 460px;
    padding: 0 22px;
      }

      .plan {
        border: 1px solid #ddd;
        box-shadow: 0 0 10px #ddd;
        padding: 10px;
        border-radius: 5px;
        margin: 0 18px;
        position: relative;

        h3 {
          color: #3172b8;
          font-size: 24px;
        }
        .price {
          h3 {
            color: #666;
            text-align: right;
            font-size: 18px;
            line-height: 34px;
          }
        }
        p {
          font-size: 11px;
          color: #777;
        }

        .features {
          margin-top: 40px;
          h4 {
            margin-bottom: 6px;
          }
          ul, li {
            font-size: 12px;
            margin: 0;
            padding: 0;
            list-style-type: none;
            li {
              padding: 3px 0;
            }
          }
        }

        .el-button {
          position: absolute;
          width: 50%;
          bottom: 20px;
          left: 25%;
        }
      }
    }

  }
</style>
