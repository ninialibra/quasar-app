<template>
  <div class="row q-mb-md">
    <div class="col bg-primary">1</div>
    <div class="col bg-secondary">2</div>
    <div class="col bg-accent">3</div>
  </div>

  <div class="row q-mb-md">
    <div class="col bg-primary">1</div>
    <div class="col bg-secondary">2</div>
    <div class="col bg-accent">3</div>
  </div>

  <div class="row q-mb-md">
    <div class="col-12 col-md-6 bg-primary">1</div>
    <div class="col-12 col-md-6 bg-secondary">2</div>
  </div>

  <q-separator spaced />

  <div class="row q-mb-md">
    <div class="square-box q-mx-md bg-primary">1</div>
    <div class="square-box q-mx-md bg-secondary">2</div>
    <div class="square-box q-mx-md bg-accent">3</div>
  </div>

  <div class="column q-mb-md items-center bg-dark">
    <div class="square-box q-mx-md bg-primary">1</div>
    <div class="square-box q-mx-md bg-secondary">2</div>
    <div class="square-box q-mx-md bg-accent">3</div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 50px;
}

.square-box {
  width: 50px;
  height: 50px;
}
</style>
