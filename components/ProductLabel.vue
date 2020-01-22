<template>
  <div type="flex" class="product-label">
    <div class="product-label--name">
      {{name}}
    </div>
    <div class="product-label--type">
      {{type}}
    </div>
    <div class="product-label--description">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'name',
    'type',
    'nameBackground',
    'typeBackground',
    'description'
  ],
}
</script>

<style lang="scss">
  @import "~/styles/variables.scss";
  .product-label {
    &--name {
      font-family: 'Baloo Bhaijaan', cursive;
      font-size: 26px;
      line-height: 22px;
      vertical-align: bottom;
      color: #4d626f;
      float: left;
    }

    &--type {
      margin-left: 6px;
      background: red;
      text-align: center;
      border-radius: 3px;
      padding: 4px 4px;
      min-width: 60px;
      display: inline-block;
      color: #fff;
      opacity: 0.7;
      margin: 0 2em 0 0.5em;
      float: left;
    }
    &--description {
      line-height: 26px;
    }
  }
</style>
