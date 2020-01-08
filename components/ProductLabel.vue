<template>
  <div class="product-label">
    <span class="product-label--name">
      {{name}}
    </span>
    <span class="product-label--type">
      {{type}}
    </span>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'name',
    'type',
    'nameBackground',
    'typeBackground'
  ],
}
</script>

<style lang="scss">
  @import "~/styles/variables.scss";
  .product-label {
    &--name {
      font-family: 'Baloo Bhaijaan', cursive;
      font-size: 32px;
      line-height: 32px;
      vertical-align: bottom;
      color: $main-color;
    }

    &--type {
      margin-left: 6px;
      background: red;
      text-align: center;
      border-radius: 4px;
      padding: 6px 4px;
      min-width: 60px;
      display: inline-block;
      color: #fff;
      opacity: 0.7;
    }
  }
</style>
