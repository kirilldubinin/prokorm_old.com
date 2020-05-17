<template>
  <section>
    <div class="list">
      <FeedingRed/>
    </div>
  </section>
</template>

<script>

import FeedingRed from '../../components/FeedingRed'
export default {
  components: {
    FeedingRed
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss">
  $red: rgb(241, 52, 52);
  $green: rgb(47, 103, 40);
  $start: rgb(47, 121, 210);
  $standard: rgb(68, 68, 68);

  @page {
    size: 297mm 210mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 297mm; // set appropriately
      height: 210mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .list {
    font-family: 'Comfortaa', cursive;
    width: 297mm;
    height: 210mm;
    margin: auto;
    background: #eaeaea;
    color: #4d626e;
  }

</style>
