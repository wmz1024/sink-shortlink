<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
    <h1>正在跳转至 Home.AwA.gs</h1>
  </div>
</template>

<script setup>
if (process.client) {
  window.location.href = 'https://home.awa.gs/?ref=awa'
}
</script>
